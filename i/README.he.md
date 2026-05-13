<div dir="rtl">

# AI Page Publisher

> פרסם דפי React שנוצרו על ידי בינה מלאכותית לאינטרנט בדחיפה אחת.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

צור דף עם Claude, ChatGPT או כל בינה מלאכותית. הדבק אותו ב-`src/App.jsx`. דחוף. סיום.

## התחלה מהירה

1. **בקש JSX מהבינה המלאכותית** — אמור ל-Claude, ל-ChatGPT או לכל בינה מלאכותית ליצור את הדף שלך כרכיב React ב**פורמט JSX**

   <details>
   <summary>תבנית פרומפט (לחץ להרחבה, ואז העתק)</summary>

   ```
   צור עמוד React בפורמט JSX שאוכל להשתמש בו כ-src/App.jsx.

   נושא: [נושא האתר שלך — למשל: בית קפה, תיק עבודות, מוצר SaaS]
   סגנון: [סגנון עיצוב — למשל: מינימליסטי, מודרני, צבעוני, עסקי]
   פרטים: [הסקשנים שתרצה — למשל: hero, תכונות, המלצות, מחירים, צור קשר]

   דרישות טכניות:
   - השתמש ב-Tailwind CSS לכל העיצוב
   - השתמש ברכיבי shadcn/ui (ייבוא מ-@/components/ui/) לפי הצורך
   - השתמש ב-lucide-react לאייקונים
   - הפוך את העמוד לרספונסיבי למובייל ולדסקטופ
   - ייצוא כ: export default function App()
   - קובץ יחיד, ללא קובצי CSS נוספים או סקריפטים מ-CDN
   ```

   </details>

2. **השתמש בתבנית זו** — בדף GitHub לחץ על **"Use this template"** → **"Create a new repository"** כדי ליצור מאגר משלך. שם המשתמש ושם המאגר ב-GitHub יקבעו את כתובת האתר שלך (`https://<שם-משתמש>.github.io/<שם-repo>/`)
3. **הפעל GitHub Pages** — עבור אל **Settings → Pages** והגדר את Source ל-**GitHub Actions**
4. **החלף** את [`src/App.jsx`](../src/App.jsx) — הדבק את ה-JSX שה-AI יצר בקובץ זה, **מחק והחלף את כל התוכן הקיים**, ואז שמור

## התאמה אישית (אופציונלי)

| מה | כיצד |
| :-- | :-- |
| כותרת הדף, תיאורו ו-Google Analytics | ערוך את `<title>`, `<meta name="description">` ו-Google Analytics ב-[`index.html`](../index.html) |
| דומיין מותאם אישית | החלף את ה-placeholder ב-[`public/CNAME`](../public/CNAME) בדומיין שלך (למשל `mysite.com`), הגדר DNS ל-GitHub Pages, והכנס את אותו הדומיין ב-**Settings → Pages → Custom domain**. לחלופין, צור משתנה מאגר בשם `CUSTOM_DOMAIN` ב-**Settings → Secrets and variables → Actions → Variables** |

## מה כלול

תבנית זו מוגדרת מראש עם כל מה שדפים שנוצרו על ידי בינה מלאכותית משתמשים בו בדרך כלל:

- **React 18 + Vite + Tailwind CSS 3** — בנייה מודרנית, מהירה, ללא הגדרה
- **מעל 40 רכיבי shadcn/ui** מותקנים מראש ב-`src/components/ui/`
- **כל ה-Radix UI primitives** לאינטראקציות נגישות
- **אייקונים** — `lucide-react`, `react-icons`, `@heroicons/react`
- **גרפים ותצוגת נתונים** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **מפות** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **וידאו ואודיו** — `react-player`, `howler`
- **אנימציה** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **עריכת טקסט עשיר** — `@tiptap/react` + starter-kit + 12 הרחבות (link, image, table, color, highlight…)
- **טפסים** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **תרשימי זרימה** — `@xyflow/react`
- **תלת-ממד** — `three`, `@react-three/fiber`, `@react-three/drei`
- **תמונות** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **לוח שנה** — `react-big-calendar`, `react-day-picker`
- **תשלומים** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **בינלאומיות** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **אימייל** — `@emailjs/browser`
- **טיפול בקבצים** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **חיפוש** — `fuse.js`
- **אפקטי ממשק** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **גרור ושחרר** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **קרוסלה** — `embla-carousel-react`, `swiper`, `react-slick`
- **קנבס** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **כלי עזר** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker`, ועוד רבים

> Tree-shaking מבטיח שרק החבילות שבהן הדף שלך משתמש בפועל ייכנסו לחבילה הסופית.

## בדיקת ייבואים חסרים

אם הקוד שנוצר על ידי הבינה המלאכותית משתמש בחבילה שאינה מותקנת מראש, הפעל:

```bash
npm run check
```

פעולה זו סורקת את קבצי המקור שלך ומדווחת על תלויות חסרות, עם פקודת `npm install` המדויקת לתיקונן.

## כיצד עובד נתיב הבסיס

הבנייה מזהה אוטומטית את נתיב הבסיס הנכון:

| תרחיש | נתיב הבסיס |
| :-- | :-- |
| דומיין מותאם אישית (ב-CNAME יש דומיין) | `/` |
| GitHub Pages (ללא דומיין מותאם אישית) | `/<שם-repo>/` |
| פיתוח מקומי | `/` |

אין צורך בהגדרה ידנית.

## מבנה הקבצים

```
├── src/
│   ├── App.jsx              ← החלף קובץ זה
│   ├── main.jsx             ← נקודת כניסה (אל תיגע)
│   ├── index.css            ← Tailwind + ערכת נושא shadcn
│   ├── lib/utils.js         ← כלי עזר cn()
│   ├── hooks/use-toast.js   ← Hook לטוסט
│   └── components/ui/       ← רכיבי shadcn/ui
├── public/
│   ├── CNAME                ← דומיין מותאם אישית (אופציונלי)
│   └── favicon.svg          ← אייקון האתר
├── scripts/
│   └── check-imports.js     ← זיהוי תלויות חסרות
├── .github/workflows/
│   └── deploy.yml           ← פריסה עם GitHub Actions
├── index.html               ← כותרת הדף ותגי meta
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## הוספת רכיבי shadcn/ui נוספים

התבנית כוללת מעל 40 רכיבי shadcn. אם אתה זקוק לעוד:

```bash
npx shadcn@latest add <שם-רכיב>
```

קובץ `components.json` כבר מוגדר מראש.

## פיתוח מקומי

```bash
npm install
npm run dev
```

פתח את `http://localhost:5173` בדפדפן.

## פתרון בעיות

**הבנייה נכשלת עם שגיאות ייבוא.**
הפעל את `npm run check` כדי לראות אילו חבילות חסרות, ולאחר מכן התקן אותן.

**הדף ריק לאחר הפריסה.**
ודא שמקור GitHub Pages מוגדר ל-**GitHub Actions**, ולא ל-"Deploy from a branch".

**הדומיין המותאם אישית אינו פועל.**
ודא ש-`public/CNAME` מכיל רק את הדומיין שלך. בדוק את רשומות ה-DNS שלך.

</div>
