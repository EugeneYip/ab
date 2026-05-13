#!/usr/bin/env node

/**
 * check-imports.js
 * Scans all source files for external package imports and reports any
 * that are not listed in package.json dependencies.
 *
 * Usage:  npm run check
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Read package.json
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf-8"));
const declared = new Set([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
]);

// Collect all source files
function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      files.push(...walk(full));
    } else if (/\.(jsx?|tsx?|mjs)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

// Extract package names from import/require statements
function extractImports(code) {
  const packages = new Set();
  // Static imports:  import ... from 'pkg'  or  import 'pkg'
  const staticRe = /(?:import\s+[\s\S]*?from\s+|import\s+)['"]([^'"./][^'"]*)['"]/g;
  // Dynamic imports:  import('pkg')
  const dynamicRe = /import\(\s*['"]([^'"./][^'"]*)['"]\s*\)/g;
  // Require:  require('pkg')
  const requireRe = /require\(\s*['"]([^'"./][^'"]*)['"]\s*\)/g;

  for (const re of [staticRe, dynamicRe, requireRe]) {
    let m;
    while ((m = re.exec(code)) !== null) {
      const specifier = m[1];
      // Skip path aliases (e.g. @/ mapped to src/ in vite.config)
      if (specifier.startsWith("@/")) continue;
      // Resolve to package name (handle scoped and deep imports)
      const parts = specifier.split("/");
      const pkgName = parts[0].startsWith("@") ? `${parts[0]}/${parts[1]}` : parts[0];
      packages.add(pkgName);
    }
  }
  return packages;
}

// Built-in Node modules to ignore
const builtins = new Set([
  "fs", "path", "os", "url", "util", "http", "https", "stream",
  "crypto", "events", "child_process", "assert", "buffer", "net",
  "tls", "zlib", "querystring", "readline", "worker_threads",
  "node:fs", "node:path", "node:os", "node:url", "node:util",
]);

// Run
const srcDir = path.join(root, "src");
if (!fs.existsSync(srcDir)) {
  console.log("No src/ directory found.");
  process.exit(0);
}

const files = walk(srcDir);
const allImports = new Map(); // package -> Set<file>

for (const file of files) {
  const code = fs.readFileSync(file, "utf-8");
  const imports = extractImports(code);
  for (const pkg of imports) {
    if (builtins.has(pkg)) continue;
    if (!allImports.has(pkg)) allImports.set(pkg, new Set());
    allImports.get(pkg).add(path.relative(root, file));
  }
}

// Find missing
const missing = [];
for (const [pkg, files] of allImports) {
  if (!declared.has(pkg)) {
    missing.push({ pkg, files: [...files] });
  }
}

if (missing.length === 0) {
  console.log("\n  All imports are satisfied. No missing packages.\n");
  process.exit(0);
}

console.log(`\n  Found ${missing.length} missing package(s):\n`);

for (const { pkg, files } of missing.sort((a, b) => a.pkg.localeCompare(b.pkg))) {
  console.log(`  ${pkg}`);
  for (const f of files) {
    console.log(`    └─ ${f}`);
  }
}

const names = missing.map((m) => m.pkg).join(" ");
console.log(`\n  To install all missing packages:\n`);
console.log(`    npm install ${names}\n`);

process.exit(1);
