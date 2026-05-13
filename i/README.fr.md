# AI Page Publisher

> Publiez des pages React générées par IA sur le web en un seul push.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Générez une page avec Claude, ChatGPT ou n'importe quelle IA. Collez-la dans `src/App.jsx`. Pushez. C'est fait.

## Démarrage rapide

1. **Demandez du JSX à votre IA** — dites à Claude, ChatGPT ou n'importe quelle IA de générer votre page sous forme de composant React au **format JSX**

   <details>
   <summary>Prompt de départ (cliquez pour développer, puis copiez)</summary>

   ```
   Créez une page React au format JSX que je puisse utiliser comme src/App.jsx.

   Thème : [le thème de votre site — ex : café, portfolio, produit SaaS]
   Style : [style de design — ex : minimaliste, moderne, coloré, corporate]
   Détails : [sections souhaitées — ex : hero, fonctionnalités, témoignages, tarifs, contact]

   Exigences :
   - Utilisez Tailwind CSS pour tout le style
   - Utilisez les composants shadcn/ui (import depuis @/components/ui/) si approprié
   - Utilisez lucide-react pour les icônes
   - Rendez la page responsive pour mobile et desktop
   - Exportez comme : export default function App()
   - Fichier unique, pas de fichiers CSS supplémentaires ni de scripts CDN
   ```

   </details>

2. **Utilisez ce template** — sur la page GitHub, cliquez sur **« Use this template »** → **« Create a new repository »** pour créer votre dépôt. Votre nom d'utilisateur GitHub et le nom du repo détermineront l'URL de votre site (`https://<utilisateur>.github.io/<nom-du-dépôt>/`)
3. **Activez GitHub Pages** — allez dans **Settings → Pages** et définissez Source sur **GitHub Actions**
4. **Remplacez** [`src/App.jsx`](../src/App.jsx) — collez le JSX généré par l'IA dans ce fichier, **supprimez et remplacez tout le contenu existant**, puis enregistrez

## Personnaliser (Optionnel)

| Quoi | Comment |
| :-- | :-- |
| Titre, description et Google Analytics | Modifiez `<title>`, `<meta name="description">` et Google Analytics dans [`index.html`](../index.html) |
| Domaine personnalisé | Remplacez le placeholder dans [`public/CNAME`](../public/CNAME) par votre domaine (ex : `monsite.com`), configurez le DNS pour GitHub Pages, et entrez le même domaine dans **Settings → Pages → Custom domain**. Vous pouvez aussi créer une variable de dépôt `CUSTOM_DOMAIN` dans **Settings → Secrets and variables → Actions → Variables** |

## Ce qui est inclus

Ce template est préconfiguré avec tout ce que les pages générées par IA utilisent couramment :

- **React 18 + Vite + Tailwind CSS 3** — build moderne, rapide, sans configuration
- **Plus de 40 composants shadcn/ui** préinstallés dans `src/components/ui/`
- **Toutes les primitives Radix UI** pour des interactions accessibles
- **Icônes** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Graphiques et visualisation** — `recharts`, `chart.js` avec `react-chartjs-2`, `d3`, `apexcharts`
- **Cartes** — `leaflet` avec `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Vidéo et audio** — `react-player`, `howler`
- **Animation** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Texte riche** — `@tiptap/react` + starter-kit + 12 extensions (link, image, table, color, highlight…)
- **Formulaires** — `react-hook-form` avec `@hookform/resolvers` et `zod`, `react-number-format`
- **Diagrammes de flux** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Images** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Calendrier** — `react-big-calendar`, `react-day-picker`
- **Paiements** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **Gestion de fichiers** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Recherche** — `fuse.js`
- **Effets UI** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Drag & drop** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Carrousel** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Utilitaires** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` et bien d'autres

> Le tree-shaking garantit que seuls les paquets réellement utilisés se retrouvent dans le bundle final.

## Vérifier les imports manquants

Si le code généré par l'IA utilise un paquet non préinstallé, exécutez :

```bash
npm run check
```

Cela analyse vos fichiers et signale les dépendances manquantes, avec la commande `npm install` exacte pour les corriger.

## Comment fonctionne le base path

Le build détecte automatiquement le bon base path :

| Scénario | Base path |
| :-- | :-- |
| Domaine personnalisé (CNAME avec un domaine) | `/` |
| GitHub Pages (sans domaine personnalisé) | `/<nom-du-dépôt>/` |
| Développement local | `/` |

Aucune configuration manuelle n'est nécessaire.

## Structure des fichiers

```
├── src/
│   ├── App.jsx              ← REMPLACEZ CE FICHIER
│   ├── main.jsx             ← Point d'entrée (ne pas toucher)
│   ├── index.css            ← Tailwind + thème shadcn
│   ├── lib/utils.js         ← Utilitaire cn()
│   ├── hooks/use-toast.js   ← Hook toast
│   └── components/ui/       ← Composants shadcn/ui
├── public/
│   ├── CNAME                ← Domaine personnalisé (optionnel)
│   └── favicon.svg          ← Icône du site
├── scripts/
│   └── check-imports.js     ← Détecte les dépendances manquantes
├── .github/workflows/
│   └── deploy.yml           ← Déploiement via GitHub Actions
├── index.html               ← Titre de la page et balises meta
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Ajouter plus de composants shadcn/ui

Le template inclut plus de 40 composants shadcn. Si vous en avez besoin de plus :

```bash
npx shadcn@latest add <nom-du-composant>
```

Le fichier `components.json` est préconfiguré.

## Développement local

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:5173` dans votre navigateur.

## Dépannage

**Le build échoue avec des erreurs d'import.**
Exécutez `npm run check` pour voir quels paquets manquent, puis installez-les.

**La page est blanche après le déploiement.**
Vérifiez que la source de GitHub Pages est définie sur **GitHub Actions**, pas sur « Deploy from a branch ».

**Le domaine personnalisé ne fonctionne pas.**
Vérifiez que `public/CNAME` contient uniquement votre domaine. Vérifiez vos enregistrements DNS.
