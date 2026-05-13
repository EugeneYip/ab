# AI Page Publisher

> เผยแพร่หน้า React ที่สร้างด้วย AI ขึ้นเว็บได้ในการ push ครั้งเดียว

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

สร้างหน้าเว็บด้วย Claude, ChatGPT หรือ AI ตัวไหนก็ได้ วางลงใน `src/App.jsx` แล้ว push เท่านั้นเอง

## เริ่มต้นอย่างรวดเร็ว

1. **ขอ JSX จาก AI** — บอก Claude, ChatGPT หรือ AI ตัวไหนก็ได้ให้สร้างหน้าเว็บของคุณเป็น React component ใน**รูปแบบ JSX**

   <details>
   <summary>เทมเพลตพรอมต์ (คลิกเพื่อดู แล้วคัดลอก)</summary>

   ```
   สร้างหน้า React ในรูปแบบ JSX ที่ฉันสามารถใช้แทนไฟล์ src/App.jsx ได้เลย

   หัวข้อ: [หัวข้อเว็บไซต์ของคุณ — เช่น ร้านกาแฟ, พอร์ตโฟลิโอ, สินค้า SaaS]
   สไตล์: [สไตล์การออกแบบ — เช่น มินิมอล, โมเดิร์น, สีสัน, องค์กร]
   รายละเอียด: [ส่วนที่ต้องการ — เช่น ฮีโร่, ฟีเจอร์, รีวิว, ราคา, ติดต่อ]

   ข้อกำหนดทางเทคนิค:
   - ใช้ Tailwind CSS สำหรับสไตล์ทั้งหมด
   - ใช้คอมโพเนนต์ shadcn/ui (import จาก @/components/ui/) ตามความเหมาะสม
   - ใช้ lucide-react สำหรับไอคอน
   - ทำให้รองรับทั้งมือถือและเดสก์ท็อป (responsive)
   - Export เป็น: export default function App()
   - ไฟล์เดียว ไม่ต้องมีไฟล์ CSS เพิ่มเติมหรือสคริปต์ CDN
   ```

   </details>

2. **ใช้เทมเพลตนี้** — ที่หน้า GitHub คลิก **"Use this template"** → **"Create a new repository"** เพื่อสร้าง repo ของตัวเอง ชื่อผู้ใช้ GitHub และชื่อ repo จะกำหนด URL เว็บไซต์ของคุณ (`https://<ชื่อผู้ใช้>.github.io/<ชื่อ-repo>/`)
3. **เปิดใช้งาน GitHub Pages** — ไปที่ **Settings → Pages** แล้วตั้ง Source เป็น **GitHub Actions**
4. **แทนที่** [`src/App.jsx`](../src/App.jsx) — วาง JSX ที่ AI สร้างขึ้นลงในไฟล์นี้ **ลบเนื้อหาเดิมทั้งหมดแล้วแทนที่** จากนั้นบันทึก

## ปรับแต่ง (ไม่บังคับ)

| อะไร | ทำอย่างไร |
| :-- | :-- |
| ชื่อหน้า คำอธิบาย และ Google Analytics | แก้ไข `<title>`, `<meta name="description">` และ Google Analytics ใน [`index.html`](../index.html) |
| โดเมนที่กำหนดเอง | แทนที่ placeholder ใน [`public/CNAME`](../public/CNAME) ด้วยโดเมนของคุณ (เช่น `mysite.com`) ตั้งค่า DNS ให้ชี้ไปที่ GitHub Pages แล้วใส่โดเมนเดียวกันใน **Settings → Pages → Custom domain** หรือสร้าง repository variable ชื่อ `CUSTOM_DOMAIN` ใน **Settings → Secrets and variables → Actions → Variables** |

## มีอะไรบ้าง

เทมเพลตนี้ติดตั้งทุกอย่างที่หน้าเว็บจาก AI มักใช้มาให้พร้อมแล้ว:

- **React 18 + Vite + Tailwind CSS 3** — บิลด์ทันสมัย เร็ว ไม่ต้องตั้งค่า
- **คอมโพเนนต์ shadcn/ui กว่า 40 ตัว** ติดตั้งไว้แล้วใน `src/components/ui/`
- **Radix UI primitives ครบทุกตัว** สำหรับการโต้ตอบที่เข้าถึงได้
- **ไอคอน** — `lucide-react`, `react-icons`, `@heroicons/react`
- **แผนภูมิและการแสดงผลข้อมูล** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **แผนที่** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **วิดีโอและเสียง** — `react-player`, `howler`
- **แอนิเมชัน** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Rich text** — `@tiptap/react` + starter-kit + 12 ส่วนขยาย (link, image, table, color, highlight...)
- **ฟอร์ม** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **ไดอะแกรมโฟลว์** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **รูปภาพ** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **ปฏิทิน** — `react-big-calendar`, `react-day-picker`
- **การชำระเงิน** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **อีเมล** — `@emailjs/browser`
- **จัดการไฟล์** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **ค้นหา** — `fuse.js`
- **เอฟเฟกต์ UI** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **ลากและวาง** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **แคโรเซล** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **ยูทิลิตี้** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` และอีกมากมาย

> Tree-shaking รับประกันว่ามีเฉพาะแพ็กเกจที่ใช้จริงเท่านั้นในไฟล์สุดท้าย

## ตรวจสอบ import ที่ขาดหาย

หากโค้ดจาก AI ใช้แพ็กเกจที่ยังไม่ได้ติดตั้ง ให้รัน:

```bash
npm run check
```

คำสั่งนี้จะสแกนไฟล์ซอร์สและแจ้ง dependency ที่ขาดหาย พร้อมคำสั่ง `npm install` ที่ถูกต้องให้เลย

## Base path ทำงานอย่างไร

ระบบบิลด์จะตรวจจับ base path ที่ถูกต้องโดยอัตโนมัติ:

| สถานการณ์ | Base path |
| :-- | :-- |
| โดเมนที่กำหนดเอง (CNAME มีโดเมน) | `/` |
| GitHub Pages (ไม่มีโดเมนที่กำหนดเอง) | `/<ชื่อ-repo>/` |
| พัฒนาบนเครื่อง | `/` |

ไม่ต้องตั้งค่าอะไรเอง

## โครงสร้างไฟล์

```
├── src/
│   ├── App.jsx              ← แทนที่ไฟล์นี้
│   ├── main.jsx             ← จุดเริ่มต้น (อย่าแตะ)
│   ├── index.css            ← Tailwind + ธีม shadcn
│   ├── lib/utils.js         ← ยูทิลิตี้ cn()
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← คอมโพเนนต์ shadcn/ui
├── public/
│   ├── CNAME                ← โดเมนที่กำหนดเอง (ไม่บังคับ)
│   └── favicon.svg          ← ไอคอนเว็บไซต์
├── scripts/
│   └── check-imports.js     ← ตรวจจับ dependency ที่ขาด
├── .github/workflows/
│   └── deploy.yml           ← ดีพลอยด้วย GitHub Actions
├── index.html               ← ชื่อหน้าและ meta tags
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## เพิ่มคอมโพเนนต์ shadcn/ui

เทมเพลตมีคอมโพเนนต์ shadcn กว่า 40 ตัว ถ้าต้องการเพิ่ม:

```bash
npx shadcn@latest add <ชื่อคอมโพเนนต์>
```

`components.json` ตั้งค่าไว้แล้ว

## พัฒนาบนเครื่อง

```bash
npm install
npm run dev
```

เปิด `http://localhost:5173` ในเบราว์เซอร์

## แก้ไขปัญหา

**บิลด์ล้มเหลวเพราะ import error**
รัน `npm run check` เพื่อดูว่าขาดแพ็กเกจอะไร แล้วติดตั้ง

**หน้าว่างเปล่าหลังดีพลอย**
ตรวจสอบว่า Source ของ GitHub Pages ตั้งเป็น **GitHub Actions** ไม่ใช่ "Deploy from a branch"

**โดเมนที่กำหนดเองไม่ทำงาน**
ตรวจสอบว่า `public/CNAME` มีเฉพาะโดเมนของคุณ ตรวจสอบ DNS records ด้วย
