# AI Page Publisher

> Pubblica pagine React generate dall'AI sul web con un solo push.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Genera una pagina con Claude, ChatGPT o qualsiasi AI. Incollala in `src/App.jsx`. Fai push. Fatto.

## Avvio rapido

1. **Chiedi il JSX alla tua AI** — di' a Claude, ChatGPT o qualsiasi AI di generare la tua pagina come componente React in **formato JSX**

   <details>
   <summary>Prompt iniziale (clicca per espandere, poi copia)</summary>

   ```
   Crea una pagina React in formato JSX che io possa usare come src/App.jsx.

   Tema: [il tema del tuo sito — es: caffetteria, portfolio, prodotto SaaS]
   Stile: [stile di design — es: minimalista, moderno, colorato, aziendale]
   Dettagli: [sezioni desiderate — es: hero, funzionalità, testimonianze, prezzi, contatti]

   Requisiti tecnici:
   - Usa Tailwind CSS per tutti gli stili
   - Usa i componenti shadcn/ui (importare da @/components/ui/) quando opportuno
   - Usa lucide-react per le icone
   - Rendila responsive per mobile e desktop
   - Esportare come: export default function App()
   - File singolo, nessun file CSS aggiuntivo o script CDN
   ```

   </details>

2. **Usa questo template** — nella pagina GitHub, clicca su **"Use this template"** → **"Create a new repository"** per creare il tuo repo. Il tuo nome utente GitHub e il nome del repo determineranno l'URL del tuo sito (`https://<username>.github.io/<repo-name>/`)
3. **Abilita GitHub Pages** — vai su **Settings → Pages** e imposta Source su **GitHub Actions**
4. **Sostituisci** [`src/App.jsx`](../src/App.jsx) — incolla il JSX generato dall'AI in questo file, **cancella e sostituisci tutto il contenuto esistente**, poi salva

## Personalizzazione (Opzionale)

| Cosa | Come |
| :-- | :-- |
| Titolo, descrizione e Google Analytics | Modifica `<title>`, `<meta name="description">` e Google Analytics in [`index.html`](../index.html) |
| Dominio personalizzato | Sostituisci il placeholder in [`public/CNAME`](../public/CNAME) con il tuo dominio (es. `miosito.com`), configura il DNS per GitHub Pages e inserisci lo stesso dominio in **Settings → Pages → Custom domain**. In alternativa, crea una variabile di repository chiamata `CUSTOM_DOMAIN` in **Settings → Secrets and variables → Actions → Variables** |

## Cosa è incluso

Questo template è preconfigurato con tutto ciò che le pagine generate dall'AI usano comunemente:

- **React 18 + Vite + Tailwind CSS 3** — build moderno, veloce, zero configurazione
- **Oltre 40 componenti shadcn/ui** preinstallati in `src/components/ui/`
- **Tutti i primitivi Radix UI** per interazioni accessibili
- **Icone** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Grafici e visualizzazione** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **Mappe** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Video e audio** — `react-player`, `howler`
- **Animazione** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Testo ricco** — `@tiptap/react` + starter-kit + 12 estensioni (link, image, table, color, highlight…)
- **Moduli** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **Diagrammi di flusso** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Immagini** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Calendario** — `react-big-calendar`, `react-day-picker`
- **Pagamenti** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **Gestione file** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Ricerca** — `fuse.js`
- **Effetti UI** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Drag & drop** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Carosello** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Utilità** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` e molti altri

> Il tree-shaking garantisce che solo i pacchetti effettivamente utilizzati finiscano nel bundle finale.

## Verifica gli import mancanti

Se il codice generato dall'AI usa un pacchetto non preinstallato, esegui:

```bash
npm run check
```

Questo analizza i file sorgente e segnala le dipendenze mancanti, con il comando `npm install` esatto per correggerle.

## Come funziona il base path

Il build rileva automaticamente il base path corretto:

| Scenario | Base Path |
| :-- | :-- |
| Dominio personalizzato (CNAME con un dominio) | `/` |
| GitHub Pages (senza dominio personalizzato) | `/<repo-name>/` |
| Sviluppo locale | `/` |

Nessuna configurazione manuale necessaria.

## Struttura dei file

```
├── src/
│   ├── App.jsx              ← SOSTITUISCI QUESTO FILE
│   ├── main.jsx             ← Punto di ingresso (non toccare)
│   ├── index.css            ← Tailwind + tema shadcn
│   ├── lib/utils.js         ← Utilità cn()
│   ├── hooks/use-toast.js   ← Hook toast
│   └── components/ui/       ← Componenti shadcn/ui
├── public/
│   ├── CNAME                ← Dominio personalizzato (opzionale)
│   └── favicon.svg          ← Icona del sito
├── scripts/
│   └── check-imports.js     ← Rileva dipendenze mancanti
├── .github/workflows/
│   └── deploy.yml           ← Deployment con GitHub Actions
├── index.html               ← Titolo della pagina e meta tag
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Aggiungere altri componenti shadcn/ui

Il template include oltre 40 componenti shadcn. Se ne hai bisogno di altri:

```bash
npx shadcn@latest add <nome-componente>
```

Il file `components.json` è già preconfigurato.

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri `http://localhost:5173` nel browser.

## Risoluzione dei problemi

**Il build fallisce con errori di import.**
Esegui `npm run check` per vedere quali pacchetti mancano, poi installali.

**La pagina è vuota dopo il deploy.**
Assicurati che la sorgente di GitHub Pages sia impostata su **GitHub Actions**, non su "Deploy from a branch".

**Il dominio personalizzato non funziona.**
Verifica che `public/CNAME` contenga solo il tuo dominio. Controlla anche i record DNS.
