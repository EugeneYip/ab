# AI Page Publisher

> Veröffentliche KI-generierte React-Seiten mit einem einzigen Push im Web.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Generiere eine Seite mit Claude, ChatGPT oder einer beliebigen KI. Füge sie in `src/App.jsx` ein. Push. Fertig.

## Schnellstart

1. **Frag deine KI nach JSX** — bitte Claude, ChatGPT oder eine beliebige KI, deine Seite als React-Komponente im **JSX-Format** zu generieren

   <details>
   <summary>Starter-Prompt (zum Aufklappen klicken, dann kopieren)</summary>

   ```
   Erstelle eine React-Seite im JSX-Format, die ich als src/App.jsx verwenden kann.

   Thema: [Thema deiner Website — z.B. Café, Portfolio, SaaS-Produkt]
   Stil: [Designstil — z.B. minimalistisch, modern, farbenfroh, geschäftlich]
   Details: [gewünschte Abschnitte — z.B. Hero, Features, Testimonials, Preise, Kontakt]

   Technische Anforderungen:
   - Verwende Tailwind CSS für alle Styles
   - Verwende shadcn/ui-Komponenten (Import von @/components/ui/), wo passend
   - Verwende lucide-react für Icons
   - Mache die Seite responsiv für Mobilgeräte und Desktop
   - Export als: export default function App()
   - Einzelne Datei, keine zusätzlichen CSS-Dateien oder CDN-Skripte
   ```

   </details>

2. **Verwende dieses Template** — klicke auf der GitHub-Seite auf **„Use this template"** → **„Create a new repository"**, um dein eigenes Repo zu erstellen. Dein GitHub-Benutzername und der Repo-Name bestimmen die URL deiner Seite (`https://<benutzername>.github.io/<repo-name>/`)
3. **Aktiviere GitHub Pages** — gehe zu **Settings → Pages** und setze Source auf **GitHub Actions**
4. **Ersetze** [`src/App.jsx`](../src/App.jsx) — füge das von der KI generierte JSX in diese Datei ein, **lösche den gesamten vorhandenen Inhalt und ersetze ihn**, dann speichere

## Anpassen (Optional)

| Was | Wie |
| :-- | :-- |
| Seitentitel, Beschreibung und Google Analytics | Bearbeite `<title>`, `<meta name="description">` und Google Analytics in [`index.html`](../index.html) |
| Eigene Domain | Ersetze den Platzhalter in [`public/CNAME`](../public/CNAME) durch deine Domain (z. B. `meineseite.com`), konfiguriere DNS für GitHub Pages und trage dieselbe Domain unter **Settings → Pages → Custom domain** ein. Alternativ kannst du eine Repository-Variable namens `CUSTOM_DOMAIN` unter **Settings → Secrets and variables → Actions → Variables** erstellen |

## Was enthalten ist

Dieses Template ist mit allem vorkonfiguriert, was KI-generierte Seiten typischerweise verwenden:

- **React 18 + Vite + Tailwind CSS 3** — moderner, schneller Build ohne Konfiguration
- **Über 40 shadcn/ui-Komponenten** vorinstalliert in `src/components/ui/`
- **Alle Radix UI Primitives** für barrierefreie Interaktionen
- **Icons** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Diagramme & Datenvisualisierung** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **Karten** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Video & Audio** — `react-player`, `howler`
- **Animation** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Rich Text** — `@tiptap/react` + Starter-Kit + 12 Erweiterungen (Link, Bild, Tabelle, Farbe, Hervorhebung …)
- **Formulare** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **Flussdiagramme** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Bilder** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Kalender** — `react-big-calendar`, `react-day-picker`
- **Zahlungen** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **E-Mail** — `@emailjs/browser`
- **Dateiverarbeitung** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Suche** — `fuse.js`
- **UI-Effekte** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Drag & Drop** — `@dnd-kit/core` + Sortable, `react-beautiful-dnd`
- **Karussell** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Hilfsbibliotheken** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` und viele mehr

> Tree-Shaking stellt sicher, dass nur die Pakete, die du tatsächlich verwendest, im finalen Bundle landen.

## Fehlende Imports prüfen

Falls dein KI-generierter Code ein Paket verwendet, das nicht vorinstalliert ist, führe aus:

```bash
npm run check
```

Dies scannt deine Quelldateien und meldet fehlende Abhängigkeiten, mit dem passenden `npm install`-Befehl zur Behebung.

## Wie der Base Path funktioniert

Der Build erkennt automatisch den richtigen Base Path:

| Szenario | Base Path |
| :-- | :-- |
| Eigene Domain (CNAME enthält eine Domain) | `/` |
| GitHub Pages (keine eigene Domain) | `/<repo-name>/` |
| Lokale Entwicklung | `/` |

Keine manuelle Konfiguration erforderlich.

## Dateistruktur

```
├── src/
│   ├── App.jsx              ← DIESE DATEI ERSETZEN
│   ├── main.jsx             ← Einstiegspunkt (nicht ändern)
│   ├── index.css            ← Tailwind + shadcn-Theme
│   ├── lib/utils.js         ← cn()-Hilfsfunktion
│   ├── hooks/use-toast.js   ← Toast-Hook
│   └── components/ui/       ← shadcn/ui-Komponenten
├── public/
│   ├── CNAME                ← Eigene Domain (optional)
│   └── favicon.svg          ← Website-Icon
├── scripts/
│   └── check-imports.js     ← Fehlende Abhängigkeiten erkennen
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions Deployment
├── index.html               ← Seitentitel und Meta-Tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Weitere shadcn/ui-Komponenten hinzufügen

Das Template enthält über 40 shadcn-Komponenten. Falls du mehr brauchst:

```bash
npx shadcn@latest add <komponentenname>
```

Die `components.json` ist bereits vorkonfiguriert.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne `http://localhost:5173` im Browser.

## Fehlerbehebung

**Build schlägt mit Import-Fehlern fehl.**
Führe `npm run check` aus, um fehlende Pakete zu finden, und installiere sie.

**Seite ist nach dem Deploy leer.**
Stelle sicher, dass die GitHub Pages-Quelle auf **GitHub Actions** gesetzt ist, nicht auf „Deploy from a branch".

**Eigene Domain funktioniert nicht.**
Überprüfe, ob `public/CNAME` nur deine Domain enthält. Prüfe deine DNS-Einträge.
