<div dir="rtl">

# AI Page Publisher

> انشر صفحات React المولّدة بالذكاء الاصطناعي على الويب بضغطة واحدة.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

أنشئ صفحة باستخدام Claude أو ChatGPT أو أي ذكاء اصطناعي. الصقها في `src/App.jsx`. ادفعها. انتهى الأمر.

## البداية السريعة

1. **اطلب JSX من الذكاء الاصطناعي** — اطلب من Claude أو ChatGPT أو أي ذكاء اصطناعي أن يولّد صفحتك كمكوّن React بـ**تنسيق JSX**

   <details>
   <summary>قالب البرومبت (انقر للتوسيع ثم انسخ)</summary>

   ```
   أنشئ صفحة React بتنسيق JSX يمكنني استخدامها كملف src/App.jsx.

   الموضوع: [موضوع موقعك — مثلاً: مقهى، معرض أعمال، منتج SaaS]
   الأسلوب: [أسلوب التصميم — مثلاً: بسيط، عصري، ملوّن، مؤسسي]
   التفاصيل: [الأقسام المطلوبة — مثلاً: بطل الصفحة، الميزات، آراء العملاء، الأسعار، نموذج التواصل]

   المتطلبات التقنية:
   - استخدم Tailwind CSS لجميع الأنماط
   - استخدم مكوّنات shadcn/ui (استيراد من @/components/ui/) عند الحاجة
   - استخدم lucide-react للأيقونات
   - اجعل الصفحة متجاوبة مع الهاتف وسطح المكتب
   - صدّرها كـ: export default function App()
   - ملف واحد فقط، بدون ملفات CSS إضافية أو سكربتات CDN
   ```

   </details>

2. **استخدم هذا القالب** — في صفحة GitHub، اضغط على **"Use this template"** ثم **"Create a new repository"** لإنشاء مستودعك الخاص. اسم مستخدمك في GitHub واسم مستودعك سيحددان رابط موقعك (`https://<اسم-المستخدم>.github.io/<اسم-المستودع>/`)
3. **فعّل GitHub Pages** — اذهب إلى **Settings → Pages** واضبط Source على **GitHub Actions**
4. **استبدل** [`src/App.jsx`](../src/App.jsx) — الصق كود JSX الذي أنشأه الذكاء الاصطناعي في هذا الملف، **احذف كل المحتوى الموجود واستبدله**، ثم احفظ

## تخصيص (اختياري)

| الإعداد | الطريقة |
| :-- | :-- |
| عنوان الصفحة والوصف وGoogle Analytics | عدّل `<title>` و`<meta name="description">` وGoogle Analytics في [`index.html`](../index.html) |
| نطاق مخصص | استبدل النص في [`public/CNAME`](../public/CNAME) بنطاقك (مثلاً `mysite.com`)، واضبط DNS ليشير إلى GitHub Pages، ثم أدخل النطاق نفسه في **Settings → Pages → Custom domain**. أو أنشئ متغيّر مستودع باسم `CUSTOM_DOMAIN` في **Settings → Secrets and variables → Actions → Variables** |

## ما يتضمّنه القالب

هذا القالب مجهّز مسبقاً بكل ما تحتاجه الصفحات المولّدة بالذكاء الاصطناعي:

- **React 18 + Vite + Tailwind CSS 3** — بناء حديث وسريع بدون إعدادات
- **أكثر من 40 مكوّن shadcn/ui** مثبّتة مسبقاً في `src/components/ui/`
- **جميع عناصر Radix UI** لتفاعلات يسهل الوصول إليها
- **أيقونات** — `lucide-react`، `react-icons`، `@heroicons/react`
- **الرسوم البيانية والتصور** — `recharts`، `chart.js` مع `react-chartjs-2`، `d3`، `apexcharts`
- **خرائط** — `leaflet` مع `react-leaflet`، `@react-google-maps/api`، `react-simple-maps`
- **فيديو وصوت** — `react-player`، `howler`
- **رسوم متحركة** — `framer-motion`، `react-spring`، `lottie-react`، `react-confetti`، `aos`، `tailwindcss-animate`
- **نص منسّق** — `@tiptap/react` مع starter-kit و12 إضافة (رابط، صورة، جدول، لون، تمييز…)
- **نماذج** — `react-hook-form` مع `@hookform/resolvers` و `zod`، `react-number-format`
- **مخططات التدفق** — `@xyflow/react`
- **ثلاثي الأبعاد** — `three`، `@react-three/fiber`، `@react-three/drei`
- **صور** — `react-easy-crop`، `react-image-gallery`، `yet-another-react-lightbox`، `react-lazy-load-image-component`
- **PDF** — `jspdf`، `@react-pdf/renderer`، `react-pdf`، `pdf-lib`
- **تقويم** — `react-big-calendar`، `react-day-picker`
- **مدفوعات** — `@stripe/stripe-js` مع `@stripe/react-stripe-js`
- **تعدد اللغات** — `i18next` مع `react-i18next`
- **تحسين محركات البحث** — `react-helmet-async`
- **بريد إلكتروني** — `@emailjs/browser`
- **معالجة الملفات** — `file-saver`، `jszip`، `papaparse`، `xlsx`
- **بحث** — `fuse.js`
- **تأثيرات واجهة المستخدم** — `react-type-animation`، `@tsparticles/react`، `react-parallax-tilt`
- **سحب وإفلات** — `@dnd-kit/core` مع sortable، `react-beautiful-dnd`
- **عرض دوّار** — `embla-carousel-react`، `swiper`، `react-slick`
- **رسم على القماش** — `fabric`
- **CSS-in-JS** — `styled-components`، `@emotion/react`
- **أدوات مساعدة** — `date-fns`، `dayjs`، `lodash`، `axios`، `zustand`، `react-router-dom`، `nanoid`، `crypto-js`، `@faker-js/faker` والمزيد

> يضمن tree-shaking أن الحزم التي تستخدمها فعلاً هي فقط التي تُضمّن في الملف النهائي.

## فحص الاستيرادات المفقودة

إذا استخدم كود الذكاء الاصطناعي حزمة غير مثبّتة مسبقاً، نفّذ:

```bash
npm run check
```

سيفحص ملفاتك ويُبلغك عن أي تبعيات مفقودة، مع أمر `npm install` الدقيق لإصلاحها.

## كيف يعمل مسار القاعدة

البناء يكتشف مسار القاعدة الصحيح تلقائياً:

| السيناريو | مسار القاعدة |
| :-- | :-- |
| نطاق مخصص (CNAME يحتوي نطاقاً) | `/` |
| GitHub Pages (بدون نطاق مخصص) | `/<اسم-المستودع>/` |
| التطوير المحلي | `/` |

لا حاجة لأي إعداد يدوي.

## هيكل الملفات

```
├── src/
│   ├── App.jsx              ← استبدل هذا الملف
│   ├── main.jsx             ← نقطة الدخول (لا تعدّله)
│   ├── index.css            ← Tailwind + سمة shadcn
│   ├── lib/utils.js         ← أداة cn()
│   ├── hooks/use-toast.js   ← خطّاف Toast
│   └── components/ui/       ← مكوّنات shadcn/ui
├── public/
│   ├── CNAME                ← نطاق مخصص (اختياري)
│   └── favicon.svg          ← أيقونة الموقع
├── scripts/
│   └── check-imports.js     ← اكتشاف التبعيات المفقودة
├── .github/workflows/
│   └── deploy.yml           ← نشر بواسطة GitHub Actions
├── index.html               ← عنوان الصفحة ووسوم meta
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## إضافة مكوّنات shadcn/ui أخرى

القالب يتضمّن أكثر من 40 مكوّن shadcn. إذا احتجت المزيد:

```bash
npx shadcn@latest add <اسم-المكوّن>
```

ملف `components.json` مُعدّ مسبقاً.

## التطوير المحلي

```bash
npm install
npm run dev
```

افتح `http://localhost:5173` في المتصفح.

## استكشاف الأخطاء

**فشل البناء بسبب أخطاء استيراد.**
نفّذ `npm run check` لمعرفة الحزم المفقودة ثم ثبّتها.

**الصفحة فارغة بعد النشر.**
تأكد أن مصدر GitHub Pages مضبوط على **GitHub Actions** وليس على "Deploy from a branch".

**النطاق المخصص لا يعمل.**
تحقق أن `public/CNAME` يحتوي نطاقك فقط. راجع سجلات DNS.

</div>
