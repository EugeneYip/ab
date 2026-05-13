# AI Page Publisher

> Push 一次，把 AI 生成的 React 页面直接发布上线。

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

用 Claude、ChatGPT 或任何 AI 生成你要的页面，粘贴到 `src/App.jsx`，push 上去就完成了。

## 快速开始

1. **让 AI 生成 JSX** — 告诉 Claude、ChatGPT 或任何 AI，让它用 **JSX 格式**帮你生成 React 页面

   <details>
   <summary>Prompt 模板（点击展开后复制）</summary>

   ```
   请用 JSX 格式制作一个 React 页面，可以直接替换 src/App.jsx。

   主题：[你的网站主题——例如：咖啡店、个人作品集、SaaS 产品介绍]
   风格：[设计风格——例如：简约、现代、缤纷、企业专业]
   详细内容：[想要的区块——例如：主视觉、产品特色、客户评价、定价、联系表单]

   技术要求：
   - 使用 Tailwind CSS 处理所有样式
   - 适当使用 shadcn/ui 组件（从 @/components/ui/ 导入）
   - 使用 lucide-react 图标
   - 必须支持手机与桌面响应式
   - 导出方式：export default function App()
   - 单一文件，不要额外的 CSS 文件或 CDN 脚本
   ```

   </details>

2. **使用这个模板** — 在 GitHub 页面点击 **「Use this template」** → **「Create a new repository」** 创建自己的 repo。你的 GitHub 用户名和 repo 名称会决定网站网址（`https://<用户名>.github.io/<repo 名称>/`）
3. **启用 GitHub Pages** — 到 **Settings → Pages**，把 Source 设成 **GitHub Actions**
4. **替换** [`src/App.jsx`](../src/App.jsx) — 将 AI 生成的 JSX 粘贴到这个文件，**删除并替换原来的所有内容**，然后保存

## 自定义设置（选用）

| 项目 | 做法 |
| :-- | :-- |
| 页面标题、描述和 Google Analytics | 编辑 [`index.html`](../index.html) 里的 `<title>`、`<meta name="description">` 和 Google Analytics |
| 自定义域名 | 把 [`public/CNAME`](../public/CNAME) 里的内容换成你的域名（例如 `mysite.com`），设置 DNS 指向 GitHub Pages，再到 **Settings → Pages → Custom domain** 填上同一个域名。或者到 **Settings → Secrets and variables → Actions → Variables** 新增名为 `CUSTOM_DOMAIN` 的 repository variable |

## 内置项目

这个模板已经预先装好了 AI 生成页面常用的所有包：

- **React 18 + Vite + Tailwind CSS 3** — 现代、快速、零配置的 build 流程
- **40+ 个 shadcn/ui 组件** 已预装在 `src/components/ui/`
- **所有 Radix UI 底层组件**，提供无障碍交互
- **图标** — `lucide-react`、`react-icons`、`@heroicons/react`
- **图表与数据可视化** — `recharts`、`chart.js` 搭配 `react-chartjs-2`、`d3`、`apexcharts`
- **地图** — `leaflet` 搭配 `react-leaflet`、`@react-google-maps/api`、`react-simple-maps`
- **视频与音频** — `react-player`、`howler`
- **动画** — `framer-motion`、`react-spring`、`lottie-react`、`react-confetti`、`aos`、`tailwindcss-animate`
- **富文本编辑** — `@tiptap/react` 搭配 starter-kit 与 12 个扩展（link、image、table、color、highlight…）
- **表单** — `react-hook-form` 搭配 `@hookform/resolvers` 与 `zod`、`react-number-format`
- **流程图** — `@xyflow/react`
- **3D** — `three`、`@react-three/fiber`、`@react-three/drei`
- **图片** — `react-easy-crop`、`react-image-gallery`、`yet-another-react-lightbox`、`react-lazy-load-image-component`
- **PDF** — `jspdf`、`@react-pdf/renderer`、`react-pdf`、`pdf-lib`
- **日历** — `react-big-calendar`、`react-day-picker`
- **付款** — `@stripe/stripe-js` 搭配 `@stripe/react-stripe-js`
- **国际化（i18n）** — `i18next` 搭配 `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **文件处理** — `file-saver`、`jszip`、`papaparse`、`xlsx`
- **搜索** — `fuse.js`
- **UI 特效** — `react-type-animation`、`@tsparticles/react`、`react-parallax-tilt`
- **拖放** — `@dnd-kit/core` 搭配 sortable、`react-beautiful-dnd`
- **轮播** — `embla-carousel-react`、`swiper`、`react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`、`@emotion/react`
- **工具库** — `date-fns`、`dayjs`、`lodash`、`axios`、`zustand`、`react-router-dom`、`nanoid`、`crypto-js`、`@faker-js/faker` 等等

> Tree-shaking 会自动把你没用到的包从最终的 bundle 里去掉。

## 检查缺少的包

如果 AI 生成的代码用到了没预装的包，执行：

```bash
npm run check
```

这会扫描源文件，把缺少的包列出来，同时附上完整的 `npm install` 命令方便你直接安装。

## Base path 是怎么决定的

Build 的时候会自动检测正确的 base path：

| 场景 | Base Path |
| :-- | :-- |
| 自定义域名（CNAME 有填域名） | `/` |
| GitHub Pages（没有自定义域名） | `/<repo 名称>/` |
| 本地开发 | `/` |

无需手动配置。

## 文件结构

```
├── src/
│   ├── App.jsx              ← 替换此文件
│   ├── main.jsx             ← 入口点（请勿修改）
│   ├── index.css            ← Tailwind 与 shadcn 主题
│   ├── lib/utils.js         ← cn() 工具函数
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui 组件
├── public/
│   ├── CNAME                ← 自定义域名（选用）
│   └── favicon.svg          ← 网站图标
├── scripts/
│   └── check-imports.js     ← 检测缺少的包
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions 部署
├── index.html               ← 页面标题与 meta 标签
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 添加更多 shadcn/ui 组件

模板已经包含 40+ 个 shadcn 组件。需要更多的话，执行：

```bash
npx shadcn@latest add <组件名称>
```

`components.json` 已经配好了。

## 本地开发

```bash
npm install
npm run dev
```

在浏览器打开 `http://localhost:5173`。

## 疑难排解

**Build 因为 import 错误失败。**
执行 `npm run check` 确认缺少哪些包，再按照提示安装即可。

**部署完页面一片空白。**
确认 GitHub Pages 的 Source 是设在 **GitHub Actions**，不是「Deploy from a branch」。

**自定义域名无法运作。**
确认 `public/CNAME` 中仅包含你的域名，并检查 DNS 记录。
