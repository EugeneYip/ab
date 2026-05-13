<div dir="rtl">

# AI Page Publisher

> AI سے بنائے گئے React صفحات کو ایک push میں ویب پر شائع کریں۔

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Claude، ChatGPT یا کسی بھی AI سے صفحہ بنوائیں۔ `src/App.jsx` میں چسپاں کریں۔ Push کریں۔ ہو گیا۔

## فوری آغاز

1. **AI سے JSX مانگیں** — Claude، ChatGPT یا کسی بھی AI سے اپنا صفحہ **JSX فارمیٹ** میں React کمپوننٹ کے طور پر بنوائیں

   <details>
   <summary>شروعاتی پرامپٹ (پھیلانے کے لیے کلک کریں، پھر کاپی کریں)</summary>

   ```
   src/App.jsx کے طور پر استعمال کے لیے JSX فارمیٹ میں ایک React صفحہ بنائیں۔

   موضوع: [آپ کی ویب سائٹ کا موضوع — مثلاً: کافی شاپ، پورٹ فولیو، SaaS پروڈکٹ]
   انداز: [ڈیزائن اسٹائل — مثلاً: سادہ، جدید، رنگین، کارپوریٹ]
   تفصیلات: [مطلوبہ سیکشنز — مثلاً: ہیرو، خصوصیات، تعریفیں، قیمتیں، رابطہ]

   تکنیکی تقاضے:
   - تمام اسٹائلنگ کے لیے Tailwind CSS استعمال کریں
   - ضرورت پڑنے پر shadcn/ui کمپوننٹس استعمال کریں (@/components/ui/ سے درآمد)
   - آئیکنز کے لیے lucide-react استعمال کریں
   - موبائل اور ڈیسک ٹاپ دونوں کے لیے اسے ریسپانسیو بنائیں
   - ایکسپورٹ: export default function App()
   - ایک فائل، کوئی اضافی CSS فائل یا CDN اسکرپٹ نہیں
   ```

   </details>

2. **یہ ٹیمپلیٹ استعمال کریں** — GitHub صفحے پر **"Use this template"** پھر **"Create a new repository"** پر کلک کر کے اپنا repo بنائیں۔ آپ کا GitHub صارف نام اور repo کا نام آپ کی سائٹ کا URL طے کریں گے (`https://<صارف-نام>.github.io/<ذخیرہ-نام>/`)
3. **GitHub Pages فعال کریں** — **Settings → Pages** میں جائیں اور Source کو **GitHub Actions** پر سیٹ کریں
4. [`src/App.jsx`](../src/App.jsx) کو **بدلیں** — AI سے بنایا گیا JSX اس فائل میں چسپاں کریں، **پہلے سے موجود تمام مواد حذف کر کے بدل دیں**، پھر محفوظ کریں

## حسب ضرورت تبدیلی (اختیاری)

| کیا | کیسے |
| :-- | :-- |
| صفحے کا عنوان، تفصیل اور Google Analytics | [`index.html`](../index.html) میں `<title>`، `<meta name="description">` اور Google Analytics میں ترمیم کریں |
| حسب ضرورت ڈومین | [`public/CNAME`](../public/CNAME) میں placeholder کو اپنے ڈومین سے بدلیں (مثلاً `mysite.com`)، DNS کو GitHub Pages کی طرف پوائنٹ کریں، اور وہی ڈومین **Settings → Pages → Custom domain** میں درج کریں۔ یا **Settings → Secrets and variables → Actions → Variables** میں `CUSTOM_DOMAIN` نام کا repository variable بنائیں |

## کیا شامل ہے

یہ ٹیمپلیٹ AI سے بنے صفحات میں عام طور پر استعمال ہونے والی ہر چیز کے ساتھ پہلے سے تیار ہے:

- **React 18 + Vite + Tailwind CSS 3** — جدید، تیز، بغیر سیٹ اپ کے بلڈ
- **40+ shadcn/ui کمپوننٹ** `src/components/ui/` میں پہلے سے نصب
- **تمام Radix UI پرائمیٹوز** قابل رسائی تعاملات کے لیے
- **آئیکنز** — `lucide-react`، `react-icons`، `@heroicons/react`
- **چارٹس اور ڈیٹا ویژولائزیشن** — `recharts`، `chart.js` + `react-chartjs-2`، `d3`، `apexcharts`
- **نقشے** — `leaflet` + `react-leaflet`، `@react-google-maps/api`، `react-simple-maps`
- **ویڈیو اور آڈیو** — `react-player`، `howler`
- **اینیمیشن** — `framer-motion`، `react-spring`، `lottie-react`، `react-confetti`، `aos`، `tailwindcss-animate`
- **رچ ٹیکسٹ** — `@tiptap/react` + starter-kit + 12 ایکسٹینشنز (link، image، table، color، highlight…)
- **فارمز** — `react-hook-form` + `@hookform/resolvers` + `zod`، `react-number-format`
- **فلو ڈائگرام** — `@xyflow/react`
- **3D** — `three`، `@react-three/fiber`، `@react-three/drei`
- **تصاویر** — `react-easy-crop`، `react-image-gallery`، `yet-another-react-lightbox`، `react-lazy-load-image-component`
- **PDF** — `jspdf`، `@react-pdf/renderer`، `react-pdf`، `pdf-lib`
- **کیلنڈر** — `react-big-calendar`، `react-day-picker`
- **ادائیگیاں** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **ای میل** — `@emailjs/browser`
- **فائل ہینڈلنگ** — `file-saver`، `jszip`، `papaparse`، `xlsx`
- **تلاش** — `fuse.js`
- **UI ایفیکٹس** — `react-type-animation`، `@tsparticles/react`، `react-parallax-tilt`
- **ڈریگ اینڈ ڈراپ** — `@dnd-kit/core` + sortable، `react-beautiful-dnd`
- **کیروسل** — `embla-carousel-react`، `swiper`، `react-slick`
- **کینوس** — `fabric`
- **CSS-in-JS** — `styled-components`، `@emotion/react`
- **یوٹیلٹیز** — `date-fns`، `dayjs`، `lodash`، `axios`، `zustand`، `react-router-dom`، `nanoid`، `crypto-js`، `@faker-js/faker` اور بہت کچھ

> Tree-shaking یقینی بناتا ہے کہ صرف وہی پیکجز فائنل بنڈل میں شامل ہوں جو آپ واقعی استعمال کرتے ہیں۔

## گمشدہ امپورٹس کی جانچ

اگر AI کا کوڈ ایسا پیکج استعمال کرتا ہے جو پہلے سے نصب نہیں ہے تو چلائیں:

```bash
npm run check
```

یہ آپ کی سورس فائلوں کو اسکین کرتا ہے اور گمشدہ ڈیپنڈنسیز بتاتا ہے، ساتھ میں `npm install` کا صحیح کمانڈ بھی دیتا ہے۔

## Base path کیسے کام کرتا ہے

بلڈ خود بخود صحیح base path پہچانتا ہے:

| صورتحال | Base path |
| :-- | :-- |
| حسب ضرورت ڈومین (CNAME میں ڈومین ہے) | `/` |
| GitHub Pages (حسب ضرورت ڈومین نہیں) | `/<ذخیرہ-نام>/` |
| مقامی ترقی | `/` |

کسی دستی سیٹنگ کی ضرورت نہیں۔

## فائل کا ڈھانچہ

```
├── src/
│   ├── App.jsx              ← یہ فائل بدلیں
│   ├── main.jsx             ← انٹری پوائنٹ (تبدیل نہ کریں)
│   ├── index.css            ← Tailwind + shadcn تھیم
│   ├── lib/utils.js         ← cn() یوٹیلیٹی
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui کمپوننٹس
├── public/
│   ├── CNAME                ← حسب ضرورت ڈومین (اختیاری)
│   └── favicon.svg          ← سائٹ آئیکن
├── scripts/
│   └── check-imports.js     ← گمشدہ ڈیپنڈنسیز کا پتہ لگائیں
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions ڈیپلائمنٹ
├── index.html               ← صفحے کا عنوان اور meta ٹیگز
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## مزید shadcn/ui کمپوننٹس شامل کریں

ٹیمپلیٹ میں 40+ shadcn کمپوننٹس شامل ہیں۔ مزید درکار ہوں تو:

```bash
npx shadcn@latest add <کمپوننٹ-نام>
```

`components.json` پہلے سے ترتیب دیا گیا ہے۔

## مقامی ترقی

```bash
npm install
npm run dev
```

براؤزر میں `http://localhost:5173` کھولیں۔

## مسائل کا حل

**امپورٹ غلطیوں سے بلڈ ناکام۔**
`npm run check` چلائیں، دیکھیں کون سے پیکجز غائب ہیں، پھر انسٹال کریں۔

**ڈیپلائے کے بعد صفحہ خالی۔**
یقینی بنائیں کہ GitHub Pages کا Source **GitHub Actions** پر سیٹ ہے، "Deploy from a branch" پر نہیں۔

**حسب ضرورت ڈومین کام نہیں کر رہا۔**
جانچیں کہ `public/CNAME` میں صرف آپ کا ڈومین ہے۔ DNS ریکارڈز بھی چیک کریں۔

</div>
