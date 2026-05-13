# AI Page Publisher

> Publish AI-generated React pages to the web in one push.

| [English](README.md) · [中文](i/README.zh.md) · [简体](i/README.zh-CN.md) · [Español](i/README.es.md) · [日本語](i/README.ja.md) · [Deutsch](i/README.de.md) · [Français](i/README.fr.md) · [العربية](i/README.ar.md) · [Português](i/README.pt.md) · [हिन्दी](i/README.hi.md) · [Tiếng Việt](i/README.vi.md) · [Bahasa Indonesia](i/README.id.md) · [한국어](i/README.ko.md) · [Русский](i/README.ru.md) · [Italiano](i/README.it.md) · [Türkçe](i/README.tr.md) · [اردو](i/README.ur.md) · [ไทย](i/README.th.md) · [עברית](i/README.he.md) |
| :-- |

Generate a page with Claude, ChatGPT, or any LLM. Paste it into `src/App.jsx`. Push. Done.

## Quick Start

1. **Ask your AI for JSX** — tell Claude, ChatGPT, or any LLM to generate your page as a React component in **JSX format**

   <details>
   <summary>Starter prompt (click to expand, then copy)</summary>

   ```
   Create a React page in JSX format that I can use as src/App.jsx.

   Topic: [your website topic — e.g. coffee shop, portfolio, SaaS product]
   Style: [design style — e.g. minimal, modern, colorful, corporate]
   Details: [sections you want — e.g. hero, features, testimonials, pricing, contact]

   Requirements:
   - Use Tailwind CSS for all styling
   - Use shadcn/ui components (import from @/components/ui/) when suitable
   - Use lucide-react for icons
   - Make it responsive for both mobile and desktop
   - Export as: export default function App()
   - Single file, no additional CSS files or CDN scripts
   ```

   </details>

2. **Use this template** — on the GitHub page, click **"Use this template"** → **"Create a new repository"** to create your own repo. Your GitHub username and repo name will determine your site URL (`https://<username>.github.io/<repo-name>/`)
3. **Enable GitHub Pages** — go to **Settings → Pages** and set Source to **GitHub Actions**
4. **Replace** [`src/App.jsx`](src/App.jsx) — paste the AI-generated JSX into this file, **delete and replace all existing content**, then save

## Customize (Optional)

| What | How |
| :-- | :-- |
| Page title, description & Google Analytics | Edit `<title>`, `<meta name="description">`, and Google Analytics in [`index.html`](index.html) |
| Custom domain | Replace the placeholder in [`public/CNAME`](public/CNAME) with your domain (e.g. `mysite.com`), configure DNS for GitHub Pages, and set the same domain in **Settings → Pages → Custom domain**. Alternatively, set a repository variable named `CUSTOM_DOMAIN` in **Settings → Secrets and variables → Actions → Variables** |

## What's Included

This template comes pre-configured with everything AI-generated pages commonly use:

- **React 18 + Vite + Tailwind CSS 3** — modern, fast, zero-config build
- **40+ shadcn/ui components** pre-installed in `src/components/ui/`
- **All Radix UI primitives** for accessible interactions
- **Icons** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Charts & data viz** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **Maps** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Video & audio** — `react-player`, `howler`
- **Animation** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Rich text** — `@tiptap/react` + starter-kit + 12 extensions (link, image, table, color, highlight…)
- **Forms** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **Flow diagrams** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Images** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Calendar** — `react-big-calendar`, `react-day-picker`
- **Payments** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **File handling** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Search** — `fuse.js`
- **UI effects** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Drag & drop** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Carousel** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Utilities** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker`, and many more

> Tree-shaking ensures only the packages your page actually uses end up in the final bundle.

## Check for Missing Imports

If your AI-generated code uses a package that is not pre-installed, run:

```bash
npm run check
```

This scans your source files and reports any missing dependencies, with the exact `npm install` command to fix them.

## How the Base Path Works

The build automatically detects the correct base path:

| Scenario | Base Path |
| :-- | :-- |
| Custom domain (CNAME has a domain) | `/` |
| GitHub Pages (no custom domain) | `/<repo-name>/` |
| Local development | `/` |

No manual configuration is needed.

## File Structure

```
├── src/
│   ├── App.jsx              ← REPLACE THIS FILE
│   ├── main.jsx             ← Entry point (do not touch)
│   ├── index.css            ← Tailwind + shadcn theme
│   ├── lib/utils.js         ← cn() utility
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui components
├── public/
│   ├── CNAME                ← Custom domain (optional)
│   └── favicon.svg          ← Site icon
├── scripts/
│   └── check-imports.js     ← Detect missing dependencies
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions deployment
├── index.html               ← Page title and meta tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Adding More shadcn/ui Components

The template includes 40+ shadcn components. If you need more:

```bash
npx shadcn@latest add <component-name>
```

The `components.json` is pre-configured.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Troubleshooting

**Build fails with import errors.**
Run `npm run check` to see which packages are missing, then install them.

**Page is blank after deploy.**
Make sure GitHub Pages source is set to **GitHub Actions**, not "Deploy from a branch".

**Custom domain not working.**
Verify `public/CNAME` contains only your domain. Check your DNS records.
