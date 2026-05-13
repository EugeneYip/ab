# AI Page Publisher

> Publique páginas React geradas por IA na web com um único push.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Gere uma página com o Claude, ChatGPT ou qualquer IA. Cole em `src/App.jsx`. Faça push. Pronto.

## Início rápido

1. **Peça JSX à sua IA** — diga ao Claude, ChatGPT ou qualquer IA para gerar sua página como componente React em **formato JSX**

   <details>
   <summary>Prompt inicial (clique para expandir e copiar)</summary>

   ```
   Crie uma página React em formato JSX que eu possa usar como src/App.jsx.

   Tema: [o tema do seu site — ex: cafeteria, portfólio, produto SaaS]
   Estilo: [estilo de design — ex: minimalista, moderno, colorido, corporativo]
   Detalhes: [seções desejadas — ex: hero, funcionalidades, depoimentos, preços, contato]

   Requisitos:
   - Use Tailwind CSS para toda a estilização
   - Use componentes shadcn/ui (importar de @/components/ui/) quando adequado
   - Use lucide-react para ícones
   - Torne-a responsiva para mobile e desktop
   - Exportar como: export default function App()
   - Arquivo único, sem arquivos CSS adicionais ou scripts de CDN
   ```

   </details>

2. **Use este template** — na página do GitHub, clique em **"Use this template"** → **"Create a new repository"** para criar seu repositório. Seu nome de usuário do GitHub e o nome do repo determinarão a URL do seu site (`https://<usuario>.github.io/<nome-do-repo>/`)
3. **Ative o GitHub Pages** — vá em **Settings → Pages** e defina Source como **GitHub Actions**
4. **Substitua** [`src/App.jsx`](../src/App.jsx) — cole o JSX gerado pela IA neste arquivo, **apague e substitua todo o conteúdo existente**, e salve

## Personalizar (Opcional)

| O quê | Como |
| :-- | :-- |
| Título, descrição e Google Analytics | Edite `<title>`, `<meta name="description">` e Google Analytics em [`index.html`](../index.html) |
| Domínio personalizado | Substitua o placeholder em [`public/CNAME`](../public/CNAME) pelo seu domínio (ex: `meusite.com`), configure o DNS para o GitHub Pages e coloque o mesmo domínio em **Settings → Pages → Custom domain**. Ou crie uma variável de repositório chamada `CUSTOM_DOMAIN` em **Settings → Secrets and variables → Actions → Variables** |

## O que está incluído

Este template já vem com tudo que páginas geradas por IA costumam usar:

- **React 18 + Vite + Tailwind CSS 3** — build moderno, rápido e sem configuração
- **40+ componentes shadcn/ui** pré-instalados em `src/components/ui/`
- **Todas as primitivas Radix UI** para interações acessíveis
- **Ícones** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Gráficos e visualização** — `recharts`, `chart.js` com `react-chartjs-2`, `d3`, `apexcharts`
- **Mapas** — `leaflet` com `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Vídeo e áudio** — `react-player`, `howler`
- **Animação** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Texto rico** — `@tiptap/react` + starter-kit + 12 extensões (link, image, table, color, highlight…)
- **Formulários** — `react-hook-form` com `@hookform/resolvers` e `zod`, `react-number-format`
- **Diagramas de fluxo** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Imagens** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Calendário** — `react-big-calendar`, `react-day-picker`
- **Pagamentos** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **Manipulação de arquivos** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Busca** — `fuse.js`
- **Efeitos de UI** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Drag & drop** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Carrossel** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Utilitários** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` e muitos mais

> O tree-shaking garante que só os pacotes que você realmente usa vão para o bundle final.

## Verificar imports faltantes

Se o código gerado pela IA usa um pacote que não veio pré-instalado, execute:

```bash
npm run check
```

Isso escaneia seus arquivos e lista as dependências que estão faltando, com o comando exato de `npm install` para corrigir.

## Como o base path funciona

O build detecta automaticamente o base path correto:

| Cenário | Base path |
| :-- | :-- |
| Domínio personalizado (CNAME com domínio) | `/` |
| GitHub Pages (sem domínio personalizado) | `/<nome-do-repo>/` |
| Desenvolvimento local | `/` |

Nenhuma configuração manual é necessária.

## Estrutura de arquivos

```
├── src/
│   ├── App.jsx              ← SUBSTITUA ESTE ARQUIVO
│   ├── main.jsx             ← Ponto de entrada (não altere)
│   ├── index.css            ← Tailwind + tema shadcn
│   ├── lib/utils.js         ← Utilitário cn()
│   ├── hooks/use-toast.js   ← Hook de toast
│   └── components/ui/       ← Componentes shadcn/ui
├── public/
│   ├── CNAME                ← Domínio personalizado (opcional)
│   └── favicon.svg          ← Ícone do site
├── scripts/
│   └── check-imports.js     ← Detecta dependências faltantes
├── .github/workflows/
│   └── deploy.yml           ← Deploy com GitHub Actions
├── index.html               ← Título da página e meta tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Adicionar mais componentes shadcn/ui

O template já inclui 40+ componentes shadcn. Se precisar de mais:

```bash
npx shadcn@latest add <nome-do-componente>
```

O `components.json` já está configurado.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:5173` no navegador.

## Solução de problemas

**Build falha com erros de import.**
Execute `npm run check` para ver quais pacotes estão faltando e instale-os.

**Página em branco após o deploy.**
Verifique se o Source do GitHub Pages está em **GitHub Actions**, não em "Deploy from a branch".

**Domínio personalizado não funciona.**
Confirme que `public/CNAME` contém apenas o seu domínio. Verifique seus registros DNS.
