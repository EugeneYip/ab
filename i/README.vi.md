# AI Page Publisher

> Đưa trang React do AI sinh ra lên web chỉ với một lần push.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Nhờ Claude, ChatGPT hay AI nào cũng được sinh cho bạn một trang, dán vào `src/App.jsx`, push lên là xong.

## Bắt đầu nhanh

1. **Nhờ AI sinh JSX** — nhờ Claude, ChatGPT hay AI nào đó sinh trang của bạn dưới dạng component React **định dạng JSX**

   <details>
   <summary>Prompt mẫu (nhấn để mở rộng, rồi sao chép)</summary>

   ```
   Tạo một trang React dạng JSX mà tôi có thể dùng làm src/App.jsx.

   Chủ đề: [chủ đề website của bạn — VD: quán cà phê, portfolio, sản phẩm SaaS]
   Phong cách: [phong cách thiết kế — VD: tối giản, hiện đại, nhiều màu sắc, doanh nghiệp]
   Chi tiết: [các phần mong muốn — VD: hero, tính năng, đánh giá, bảng giá, liên hệ]

   Yêu cầu kỹ thuật:
   - Sử dụng Tailwind CSS cho toàn bộ styling
   - Sử dụng component shadcn/ui (import từ @/components/ui/) khi phù hợp
   - Sử dụng lucide-react cho icon
   - Làm responsive cho cả mobile và desktop
   - Export dạng: export default function App()
   - Một file duy nhất, không thêm file CSS hay script CDN
   ```

   </details>

2. **Dùng template này** — trên trang GitHub, nhấn **"Use this template"** → **"Create a new repository"** để tạo repo riêng. Tên người dùng GitHub và tên repo sẽ quyết định URL trang web của bạn (`https://<tên-user>.github.io/<tên-repo>/`)
3. **Bật GitHub Pages** — vào **Settings → Pages**, đặt Source là **GitHub Actions**
4. **Thay** [`src/App.jsx`](../src/App.jsx) — dán JSX do AI tạo vào file này, **xóa và thay thế toàn bộ nội dung hiện có**, rồi lưu

## Tuỳ chỉnh (Không bắt buộc)

| Mục | Cách làm |
| :-- | :-- |
| Tiêu đề, mô tả và Google Analytics | Sửa `<title>`, `<meta name="description">` và Google Analytics trong [`index.html`](../index.html) |
| Custom domain | Thay placeholder trong [`public/CNAME`](../public/CNAME) bằng domain của bạn (ví dụ `mysite.com`), trỏ DNS về GitHub Pages, rồi điền domain đó vào **Settings → Pages → Custom domain**. Hoặc tạo repository variable tên `CUSTOM_DOMAIN` trong **Settings → Secrets and variables → Actions → Variables** |

## Có những gì

Template đã setup sẵn mọi thứ mà trang AI thường dùng:

- **React 18 + Vite + Tailwind CSS 3** — build hiện đại, nhanh, không cần config
- **Hơn 40 component shadcn/ui** đã cài sẵn trong `src/components/ui/`
- **Toàn bộ Radix UI primitives** cho tương tác accessible
- **Icons** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Biểu đồ & trực quan dữ liệu** — `recharts`, `chart.js` với `react-chartjs-2`, `d3`, `apexcharts`
- **Bản đồ** — `leaflet` với `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Video & audio** — `react-player`, `howler`
- **Hiệu ứng động** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Rich text** — `@tiptap/react` + starter-kit + 12 extension (link, image, table, color, highlight…)
- **Biểu mẫu** — `react-hook-form` với `@hookform/resolvers` và `zod`, `react-number-format`
- **Sơ đồ luồng** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Hình ảnh** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Lịch** — `react-big-calendar`, `react-day-picker`
- **Thanh toán** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **Xử lý file** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Tìm kiếm** — `fuse.js`
- **Hiệu ứng UI** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Kéo & thả** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Carousel** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Tiện ích** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` và nhiều nữa

> Tree-shaking đảm bảo chỉ những package bạn thực sự dùng mới có mặt trong bundle cuối.

## Kiểm tra import còn thiếu

Nếu code AI sinh ra dùng một package chưa được cài sẵn, chạy:

```bash
npm run check
```

Lệnh này sẽ quét file source và liệt kê các dependency còn thiếu, kèm câu lệnh `npm install` chính xác để bạn cài ngay.

## Base path hoạt động thế nào

Build sẽ tự detect đúng base path:

| Trường hợp | Base path |
| :-- | :-- |
| Custom domain (CNAME có domain) | `/` |
| GitHub Pages (không có custom domain) | `/<tên-repo>/` |
| Chạy local | `/` |

Không cần config thủ công.

## Cấu trúc file

```
├── src/
│   ├── App.jsx              ← THAY FILE NÀY
│   ├── main.jsx             ← Entry point (không chỉnh sửa)
│   ├── index.css            ← Tailwind + shadcn theme
│   ├── lib/utils.js         ← Utility cn()
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← Component shadcn/ui
├── public/
│   ├── CNAME                ← Custom domain (tùy chọn)
│   └── favicon.svg          ← Site icon
├── scripts/
│   └── check-imports.js     ← Phát hiện dependency còn thiếu
├── .github/workflows/
│   └── deploy.yml           ← Deploy bằng GitHub Actions
├── index.html               ← Tiêu đề trang và meta tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Thêm component shadcn/ui

Template đã gồm hơn 40 component shadcn. Nếu cần thêm:

```bash
npx shadcn@latest add <tên-component>
```

`components.json` đã được config sẵn.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở `http://localhost:5173` trên trình duyệt.

## Khi gặp sự cố

**Build fail vì lỗi import.**
Chạy `npm run check` để xem thiếu package nào rồi cài chúng.

**Trang trắng trơn sau khi deploy.**
Kiểm tra xem Source của GitHub Pages đã chọn **GitHub Actions** chưa, đừng để ở "Deploy from a branch".

**Custom domain không chạy.**
Xem lại `public/CNAME` có đúng chỉ chứa domain của bạn không, rồi kiểm tra DNS records.
