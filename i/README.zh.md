# AI Page Publisher

> Push 一次，把 AI 生成的 React 頁面直接發佈上線。

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

用 Claude、ChatGPT 或任何 AI 生成你要的頁面，貼進 `src/App.jsx`，push 上去就完成了。

## 快速開始

1. **請 AI 生成 JSX** — 告訴 Claude、ChatGPT 或任何 AI，請它用 **JSX 格式**幫你生成 React 頁面

   <details>
   <summary>Prompt 範本（點擊展開後複製）</summary>

   ```
   請用 JSX 格式製作一個 React 頁面，可以直接替換 src/App.jsx。

   主題：[你的網站主題——例如：咖啡店、個人作品集、SaaS 產品介紹]
   風格：[設計風格——例如：簡約、現代、繽紛、企業專業]
   詳細內容：[想要的區塊——例如：主視覺、產品特色、客戶評價、定價、聯絡表單]

   技術要求：
   - 使用 Tailwind CSS 處理所有樣式
   - 適當使用 shadcn/ui 元件（從 @/components/ui/ 匯入）
   - 使用 lucide-react 圖示
   - 必須支援手機與桌面響應式
   - 匯出方式：export default function App()
   - 單一檔案，不要額外的 CSS 檔或 CDN 腳本
   ```

   </details>

2. **使用這個範本** — 在 GitHub 頁面點選 **「Use this template」** → **「Create a new repository」** 建立自己的 repo。你的 GitHub 使用者名稱與 repo 名稱會決定網站網址（`https://<使用者名稱>.github.io/<repo 名稱>/`）
3. **啟用 GitHub Pages** — 到 **Settings → Pages**，把 Source 設成 **GitHub Actions**
4. **替換** [`src/App.jsx`](../src/App.jsx) — 將 AI 生成的 JSX 貼進這個檔案，**刪除並取代原本的所有內容**，然後儲存

## 自訂設定（選用）

| 項目 | 做法 |
| :-- | :-- |
| 頁面標題、描述和 Google Analytics | 編輯 [`index.html`](../index.html) 裡的 `<title>`、`<meta name="description">` 和 Google Analytics |
| 自訂網域 | 把 [`public/CNAME`](../public/CNAME) 裡的內容換成你的網域（例如 `mysite.com`），設定 DNS 指向 GitHub Pages，再到 **Settings → Pages → Custom domain** 填上同一個網域。或者到 **Settings → Secrets and variables → Actions → Variables** 新增名為 `CUSTOM_DOMAIN` 的 repository variable |

## 內建項目

這個範本已經預先裝好了 AI 生成頁面常用的所有套件：

- **React 18 + Vite + Tailwind CSS 3** — 現代、快速、零設定的 build 流程
- **40+ 個 shadcn/ui 元件** 已預裝在 `src/components/ui/`
- **所有 Radix UI 底層元件**，提供無障礙互動
- **圖示** — `lucide-react`、`react-icons`、`@heroicons/react`
- **圖表與資料視覺化** — `recharts`、`chart.js` 搭配 `react-chartjs-2`、`d3`、`apexcharts`
- **地圖** — `leaflet` 搭配 `react-leaflet`、`@react-google-maps/api`、`react-simple-maps`
- **影片與音訊** — `react-player`、`howler`
- **動畫** — `framer-motion`、`react-spring`、`lottie-react`、`react-confetti`、`aos`、`tailwindcss-animate`
- **富文字編輯** — `@tiptap/react` 搭配 starter-kit 與 12 個擴充套件（link、image、table、color、highlight…）
- **表單** — `react-hook-form` 搭配 `@hookform/resolvers` 與 `zod`、`react-number-format`
- **流程圖** — `@xyflow/react`
- **3D** — `three`、`@react-three/fiber`、`@react-three/drei`
- **圖片** — `react-easy-crop`、`react-image-gallery`、`yet-another-react-lightbox`、`react-lazy-load-image-component`
- **PDF** — `jspdf`、`@react-pdf/renderer`、`react-pdf`、`pdf-lib`
- **行事曆** — `react-big-calendar`、`react-day-picker`
- **付款** — `@stripe/stripe-js` 搭配 `@stripe/react-stripe-js`
- **國際化（i18n）** — `i18next` 搭配 `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **檔案處理** — `file-saver`、`jszip`、`papaparse`、`xlsx`
- **搜尋** — `fuse.js`
- **UI 特效** — `react-type-animation`、`@tsparticles/react`、`react-parallax-tilt`
- **拖放** — `@dnd-kit/core` 搭配 sortable、`react-beautiful-dnd`
- **輪播** — `embla-carousel-react`、`swiper`、`react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`、`@emotion/react`
- **工具庫** — `date-fns`、`dayjs`、`lodash`、`axios`、`zustand`、`react-router-dom`、`nanoid`、`crypto-js`、`@faker-js/faker` 等等

> Tree-shaking 會自動把你沒用到的套件從最終的 bundle 裡拿掉。

## 檢查缺少的套件

如果 AI 生成的程式碼用到了沒預裝的套件，執行：

```bash
npm run check
```

這會掃描原始檔，把缺少的套件列出來，同時附上完整的 `npm install` 指令方便你直接安裝。

## Base path 是怎麼決定的

Build 的時候會自動偵測正確的 base path：

| 情境 | Base Path |
| :-- | :-- |
| 自訂網域（CNAME 有填網域） | `/` |
| GitHub Pages（沒有自訂網域） | `/<repo 名稱>/` |
| 本機開發 | `/` |

無需手動設定。

## 檔案結構

```
├── src/
│   ├── App.jsx              ← 替換此檔案
│   ├── main.jsx             ← 進入點（請勿修改）
│   ├── index.css            ← Tailwind 與 shadcn 主題
│   ├── lib/utils.js         ← cn() 工具函式
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui 元件
├── public/
│   ├── CNAME                ← 自訂網域（選用）
│   └── favicon.svg          ← 網站圖示
├── scripts/
│   └── check-imports.js     ← 偵測缺少的套件
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions 部署
├── index.html               ← 頁面標題與 meta 標籤
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 新增更多 shadcn/ui 元件

範本已經包含 40+ 個 shadcn 元件。需要更多的話，執行：

```bash
npx shadcn@latest add <元件名稱>
```

`components.json` 已經配好了。

## 本機開發

```bash
npm install
npm run dev
```

在瀏覽器打開 `http://localhost:5173`。

## 疑難排解

**Build 因為 import 錯誤失敗。**
執行 `npm run check` 確認缺少哪些套件，再依照提示安裝即可。

**部署完頁面一片空白。**
確認 GitHub Pages 的 Source 是設在 **GitHub Actions**，不是「Deploy from a branch」。

**自訂網域無法運作。**
確認 `public/CNAME` 中僅包含你的網域，並檢查 DNS 記錄。
