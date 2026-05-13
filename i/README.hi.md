# AI Page Publisher

> AI से बनाए गए React पेज को एक ही push में वेब पर पब्लिश करें।

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Claude, ChatGPT या किसी भी AI से पेज बनवाएँ। `src/App.jsx` में पेस्ट करें। Push करें। बस हो गया।

## शुरू करें

1. **AI से JSX माँगें** — Claude, ChatGPT या किसी भी AI से अपना पेज **JSX फ़ॉर्मेट** में React कंपोनेंट के रूप में बनवाएँ

   <details>
   <summary>शुरुआती प्रॉम्प्ट (विस्तार करने के लिए क्लिक करें, फिर कॉपी करें)</summary>

   ```
   src/App.jsx के रूप में उपयोग करने के लिए JSX फॉर्मेट में एक React पेज बनाएँ।

   विषय: [आपकी वेबसाइट का विषय — उदा: कॉफी शॉप, पोर्टफोलियो, SaaS प्रोडक्ट]
   शैली: [डिज़ाइन शैली — उदा: न्यूनतम, आधुनिक, रंगीन, कॉर्पोरेट]
   विवरण: [मनचाहे सेक्शन — उदा: हीरो, फ़ीचर्स, प्रशंसापत्र, मूल्य निर्धारण, संपर्क]

   तकनीकी आवश्यकताएं:
   - सभी स्टाइलिंग के लिए Tailwind CSS का उपयोग करें
   - उपयुक्त होने पर shadcn/ui कंपोनेंट्स का उपयोग करें (@/components/ui/ से इम्पोर्ट)
   - आइकन के लिए lucide-react का उपयोग करें
   - इसे मोबाइल और डेस्कटॉप दोनों के लिए रिस्पॉन्सिव बनाएँ
   - एक्सपोर्ट: export default function App()
   - एकल फ़ाइल, कोई अतिरिक्त CSS फ़ाइल या CDN स्क्रिप्ट नहीं
   ```

   </details>

2. **इस टेम्पलेट का उपयोग करें** — GitHub पेज पर **"Use this template"** → **"Create a new repository"** पर क्लिक करके अपना repo बनाएँ। आपका GitHub यूज़रनेम और repo का नाम आपकी साइट का URL तय करेंगे (`https://<username>.github.io/<repo-name>/`)
3. **GitHub Pages चालू करें** — **Settings → Pages** में जाएँ और Source को **GitHub Actions** पर सेट करें
4. [`src/App.jsx`](../src/App.jsx) को **बदलें** — AI द्वारा जनरेट किया गया JSX इस फ़ाइल में पेस्ट करें, **पहले से मौजूद सभी कंटेंट को डिलीट करके रिप्लेस करें**, फिर सेव करें

## कस्टमाइज़ करें (वैकल्पिक)

| क्या | कैसे |
| :-- | :-- |
| पेज का टाइटल, विवरण और Google Analytics | [`index.html`](../index.html) में `<title>`, `<meta name="description">` और Google Analytics एडिट करें |
| कस्टम डोमेन | [`public/CNAME`](../public/CNAME) में placeholder को अपने डोमेन से बदलें (जैसे `mysite.com`), DNS को GitHub Pages पर पॉइंट करें, और वही डोमेन **Settings → Pages → Custom domain** में डालें। या **Settings → Secrets and variables → Actions → Variables** में `CUSTOM_DOMAIN` नाम का repository variable बनाएँ |

## इसमें क्या शामिल है

यह टेम्पलेट AI से बने पेज में आमतौर पर इस्तेमाल होने वाली हर चीज़ के साथ पहले से तैयार है:

- **React 18 + Vite + Tailwind CSS 3** — आधुनिक, तेज़, बिना सेटअप वाला बिल्ड
- **40+ shadcn/ui कंपोनेंट** `src/components/ui/` में पहले से इंस्टॉल
- **सभी Radix UI प्रिमिटिव** एक्सेसिबल इंटरैक्शन के लिए
- **आइकन** — `lucide-react`, `react-icons`, `@heroicons/react`
- **चार्ट और डेटा विज़** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **मानचित्र** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **वीडियो और ऑडियो** — `react-player`, `howler`
- **एनीमेशन** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **रिच टेक्स्ट** — `@tiptap/react` + starter-kit + 12 एक्सटेंशन (link, image, table, color, highlight…)
- **फ़ॉर्म** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **फ़्लो डायग्राम** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **इमेज** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **कैलेंडर** — `react-big-calendar`, `react-day-picker`
- **पेमेंट** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **ईमेल** — `@emailjs/browser`
- **फ़ाइल हैंडलिंग** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **सर्च** — `fuse.js`
- **UI इफ़ेक्ट्स** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **ड्रैग और ड्रॉप** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **कैरोसेल** — `embla-carousel-react`, `swiper`, `react-slick`
- **कैनवस** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **यूटिलिटीज़** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` और बहुत कुछ

> Tree-shaking सुनिश्चित करता है कि फ़ाइनल बंडल में सिर्फ़ वही पैकेज जाएँ जो आप वाकई इस्तेमाल करते हैं।

## गायब इम्पोर्ट की जाँच

अगर AI का कोड ऐसा पैकेज इस्तेमाल करता है जो पहले से इंस्टॉल नहीं है, तो चलाएँ:

```bash
npm run check
```

यह आपकी सोर्स फ़ाइलों को स्कैन करता है और गायब डिपेंडेंसी बताता है, साथ में सही `npm install` कमांड भी देता है।

## Base path कैसे काम करता है

बिल्ड ऑटोमैटिक सही base path पहचानता है:

| स्थिति | Base path |
| :-- | :-- |
| कस्टम डोमेन (CNAME में डोमेन है) | `/` |
| GitHub Pages (कस्टम डोमेन नहीं) | `/<repo-name>/` |
| लोकल डेवलपमेंट | `/` |

कोई मैनुअल सेटिंग ज़रूरी नहीं।

## फ़ाइल स्ट्रक्चर

```
├── src/
│   ├── App.jsx              ← यह फ़ाइल बदलें
│   ├── main.jsx             ← एंट्री पॉइंट (न छुएँ)
│   ├── index.css            ← Tailwind + shadcn थीम
│   ├── lib/utils.js         ← cn() यूटिलिटी
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui कंपोनेंट
├── public/
│   ├── CNAME                ← कस्टम डोमेन (वैकल्पिक)
│   └── favicon.svg          ← साइट आइकन
├── scripts/
│   └── check-imports.js     ← गायब डिपेंडेंसी पहचानें
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions डिप्लॉयमेंट
├── index.html               ← पेज टाइटल और meta टैग
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## और shadcn/ui कंपोनेंट जोड़ें

टेम्पलेट में 40+ shadcn कंपोनेंट शामिल हैं। और चाहिए तो:

```bash
npx shadcn@latest add <component-name>
```

`components.json` पहले से कॉन्फ़िगर है।

## लोकल डेवलपमेंट

```bash
npm install
npm run dev
```

ब्राउज़र में `http://localhost:5173` खोलें।

## समस्या निवारण

**इम्पोर्ट एरर से बिल्ड फ़ेल हो रहा है।**
`npm run check` चलाएँ, देखें कौन से पैकेज गायब हैं, फिर इंस्टॉल करें।

**डिप्लॉय के बाद पेज खाली दिख रहा है।**
सुनिश्चित करें कि GitHub Pages का Source **GitHub Actions** पर सेट है, "Deploy from a branch" पर नहीं।

**कस्टम डोमेन काम नहीं कर रहा।**
जाँचें कि `public/CNAME` में सिर्फ़ आपका डोमेन है। DNS रिकॉर्ड भी चेक करें।
