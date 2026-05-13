# AI Page Publisher

> Publica páginas de React hechas con IA en la web, con un solo push.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Genera una página con Claude, ChatGPT o la IA que prefieras. Pégala en `src/App.jsx`. Haz push. Listo.

## Inicio rápido

1. **Pide JSX a tu IA** — dile a Claude, ChatGPT o cualquier IA que te genere tu página como un componente React en **formato JSX**

   <details>
   <summary>Prompt inicial (clic para expandir y copiar)</summary>

   ```
   Crea una página React en formato JSX que pueda usar como src/App.jsx.

   Tema: [el tema de tu sitio — ej. cafetería, portafolio, producto SaaS]
   Estilo: [estilo de diseño — ej. minimalista, moderno, colorido, corporativo]
   Detalles: [secciones que deseas — ej. hero, características, testimonios, precios, contacto]

   Requisitos:
   - Usa Tailwind CSS para todos los estilos
   - Usa componentes de shadcn/ui (importar desde @/components/ui/) cuando sea adecuado
   - Usa lucide-react para los iconos
   - Hazlo responsivo para móvil y escritorio
   - Exportar como: export default function App()
   - Un solo archivo, sin archivos CSS adicionales ni scripts de CDN
   ```

   </details>

2. **Usa esta plantilla** — en la página de GitHub, haz clic en **"Use this template"** → **"Create a new repository"** para crear tu propio repo. Tu nombre de usuario de GitHub y el nombre del repo determinarán la URL de tu sitio (`https://<usuario>.github.io/<nombre-del-repo>/`)
3. **Activa GitHub Pages** — ve a **Settings → Pages** y pon Source en **GitHub Actions**
4. **Reemplaza** [`src/App.jsx`](../src/App.jsx) — pega el JSX generado por la IA en este archivo, **borra y reemplaza todo el contenido existente**, y guarda

## Personalizar (Opcional)

| Qué | Cómo |
| :-- | :-- |
| Título, descripción y Google Analytics | Edita `<title>`, `<meta name="description">` y Google Analytics en [`index.html`](../index.html) |
| Dominio personalizado | Reemplaza el placeholder en [`public/CNAME`](../public/CNAME) con tu dominio (ej. `misitio.com`), configura tu DNS para GitHub Pages y pon el mismo dominio en **Settings → Pages → Custom domain**. También puedes crear una variable de repositorio llamada `CUSTOM_DOMAIN` en **Settings → Secrets and variables → Actions → Variables** |

## Qué incluye

La plantilla ya viene con todo lo que las páginas hechas con IA suelen usar:

- **React 18 + Vite + Tailwind CSS 3** — build moderno, rápido y sin configurar nada
- **Más de 40 componentes de shadcn/ui** preinstalados en `src/components/ui/`
- **Todas las primitivas de Radix UI** para interacciones accesibles
- **Iconos** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Gráficos y visualización** — `recharts`, `chart.js` con `react-chartjs-2`, `d3`, `apexcharts`
- **Mapas** — `leaflet` con `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Video y audio** — `react-player`, `howler`
- **Animación** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Texto enriquecido** — `@tiptap/react` + starter-kit + 12 extensiones (link, image, table, color, highlight…)
- **Formularios** — `react-hook-form` con `@hookform/resolvers` y `zod`, `react-number-format`
- **Diagramas de flujo** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Imágenes** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Calendario** — `react-big-calendar`, `react-day-picker`
- **Pagos** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **Manejo de archivos** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Búsqueda** — `fuse.js`
- **Efectos de UI** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Drag & drop** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Carrusel** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Utilidades** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` y muchas más

> Con tree-shaking, al bundle final solo llegan los paquetes que de verdad usas.

## Revisar imports que falten

Si el código que te generó la IA usa algún paquete que no viene preinstalado, ejecuta:

```bash
npm run check
```

Esto escanea tus archivos y te dice qué dependencias faltan, con el comando exacto de `npm install` para instalarlas.

## Cómo funciona el base path

El build detecta automáticamente el base path correcto:

| Escenario | Base path |
| :-- | :-- |
| Dominio personalizado (CNAME con dominio) | `/` |
| GitHub Pages (sin dominio personalizado) | `/<nombre-del-repo>/` |
| Desarrollo local | `/` |

No hay que configurar nada a mano.

## Estructura de archivos

```
├── src/
│   ├── App.jsx              ← REEMPLAZA ESTE ARCHIVO
│   ├── main.jsx             ← Punto de entrada (no tocar)
│   ├── index.css            ← Tailwind y tema de shadcn
│   ├── lib/utils.js         ← Utilidad cn()
│   ├── hooks/use-toast.js   ← Hook de toast
│   └── components/ui/       ← Componentes de shadcn/ui
├── public/
│   ├── CNAME                ← Dominio personalizado (opcional)
│   └── favicon.svg          ← Icono del sitio
├── scripts/
│   └── check-imports.js     ← Detecta dependencias faltantes
├── .github/workflows/
│   └── deploy.yml           ← Deploy con GitHub Actions
├── index.html               ← Título de la página y meta tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Agregar más componentes de shadcn/ui

La plantilla ya trae más de 40 componentes de shadcn. Si necesitas más, ejecuta:

```bash
npx shadcn@latest add <nombre-del-componente>
```

`components.json` ya viene configurado.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## Solución de problemas

**El build falla por errores de import.**
Ejecuta `npm run check` para ver qué paquetes faltan e instálalos.

**La página sale en blanco después del deploy.**
Revisa que la Source de GitHub Pages esté en **GitHub Actions**, no en "Deploy from a branch".

**El dominio personalizado no funciona.**
Verifica que `public/CNAME` tenga solo tu dominio, y revisa tus registros DNS.
