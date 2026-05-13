import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

function getBase() {
  // 1. Check CUSTOM_DOMAIN env var (set via GitHub repo variable)
  const customDomain = process.env.CUSTOM_DOMAIN;
  if (customDomain && customDomain.trim() && !customDomain.trim().startsWith("#")) {
    return "/";
  }
  // 2. Check public/CNAME file for a real domain (skip comment lines)
  const cnamePath = path.resolve(__dirname, "public/CNAME");
  if (fs.existsSync(cnamePath)) {
    const lines = fs.readFileSync(cnamePath, "utf-8").split("\n");
    const domain = lines.find((l) => l.trim() && !l.trim().startsWith("#"));
    if (domain) {
      return "/";
    }
  }
  // 3. In GitHub Actions, derive base path from repo name
  const repo = process.env.GITHUB_REPOSITORY;
  if (repo) {
    const repoName = repo.split("/")[1];
    if (repoName) return `/${repoName}/`;
  }
  // 4. Local dev
  return "/";
}

export default defineConfig({
  plugins: [react()],
  base: getBase(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
