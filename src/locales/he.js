const he = {
  badge: "AI Page Publisher",
  heroTitle: ["פרסם דפי AI", "בדחיפה אחת."],
  heroSubtitle:
    "תבנית פשוטה להפיכת כל רכיב React שנוצר על ידי בינה מלאכותית לאתר חי. החלף קובץ אחד. דחוף ל-GitHub. וזהו.",
  ctaPrimary: "השתמש בתבנית זו",
  ctaSecondary: "קרא את ה-README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.he.md",
  includedLabel: "כלול",
  includedTitle: "מה אתה מקבל",
  includes: [
    "מעל 40 רכיבי shadcn/ui",
    "מעל 160 חבילות מותקנות מראש",
    "Tailwind CSS, מוכן לשימוש",
    "פריסה עם GitHub Actions",
    "תמיכה בדומיין מותאם אישית",
    "זיהוי אוטומטי של נתיב בסיס",
  ],
  howItWorksLabel: "כיצד זה עובד",
  howItWorksTitle: "שלושה שלבים לעלייה לאוויר",
  howItWorksSubtitle:
    "אין צורך בניסיון בתכנות. בקש JSX מהבינה המלאכותית, הדבק, דחוף, וזהו.",
  steps: [
    {
      number: "01",
      title: "בקש JSX מהבינה המלאכותית",
      body: "אמור ל-Claude, ל-ChatGPT או לכל בינה מלאכותית ליצור את הדף שלך כרכיב React בפורמט JSX.",
    },
    {
      number: "02",
      title: "הגדר את ה-repo שלך",
      body: "בדף GitHub לחץ על “Use this template” → “Create a new repository” כדי ליצור מאגר משלך. שם המשתמש ושם המאגר ב-GitHub יקבעו את כתובת האתר שלך. לאחר מכן עבור אל Settings → Pages והגדר את Source ל-GitHub Actions.",
    },
    {
      number: "03",
      title: "הדבק ושמור",
      body: "הדבק את ה-JSX שה-AI יצר ב-src/App.jsx — מחק והחלף את כל התוכן הקיים — ואז שמור את הקובץ. GitHub Actions יבנה וייפרס את האתר שלך אוטומטית.",
    },
  ],
  filesLabel: "הקבצים שלך",
  filesTitle: "מה תשנה",
  filesSubtitle:
    "ברוב המקרים אתה נוגע בקובץ אחד בלבד. שני הקבצים האחרים הם אופציונליים.",
  files: [
    { name: "src/App.jsx", tag: "נדרש", desc: "הדבק כאן את ה-JSX שנוצר על ידי בינה מלאכותית. זהו הקובץ היחיד שעליך לשנות.", required: true },
    { name: "index.html", tag: "אופציונלי", desc: "עדכן את כותרת הדף, התיאור ו-Google Analytics כך שיתאימו לאתר שלך.", required: false },
    { name: "public/CNAME", tag: "אופציונלי", desc: "הגדר את הדומיין המותאם אישית שלך. השאר כפי שהוא אם אינך זקוק לכך.", required: false },
  ],
  tipLabel: "טיפ",
  tipText: "אם קוד הבינה המלאכותית משתמש בחבילה שאינה כלולה בתבנית, הפעל",
  tipCommand: "npm run check",
  tipAfter: "כדי למצוא ולתקן תלויות חסרות.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "כל הזכויות שמורות.",
  langLabel: "שפה",
  themeLight: "מצב בהיר",
  themeDark: "מצב כהה",
  promptLabel: "תבנית פרומפט",
  promptHint: "העתק את הפרומפט הזה והדבק אותו בכלי ה-AI שלך. מלא את השדות הריקים.",
  promptVariants: [
    { label: "דף נחיתה", template: `צור דף נחיתה בפורמט JSX לקידום מוצר או שירות.
נושא:
סגנון:
פרטים:
עיין בקבצים המצורפים כעזר, אם יש.
ספק כקובץ להורדה או הצג ב-Canvas.` },
    { label: "תיק עבודות", template: `צור דף תיק עבודות אישי בפורמט JSX.
נושא:
סגנון:
פרטים:
עיין בקבצים המצורפים כעזר, אם יש.
ספק כקובץ להורדה או הצג ב-Canvas.` },
    { label: "דשבורד", template: `צור דשבורד ניהולי בפורמט JSX.
נושא:
סגנון:
פרטים:
עיין בקבצים המצורפים כעזר, אם יש.
ספק כקובץ להורדה או הצג ב-Canvas.` },
    { label: "בלוג", template: `צור דף בית לבלוג בפורמט JSX.
נושא:
סגנון:
פרטים:
עיין בקבצים המצורפים כעזר, אם יש.
ספק כקובץ להורדה או הצג ב-Canvas.` },
    { label: "SaaS", template: `צור דף מוצר SaaS בפורמט JSX.
נושא:
סגנון:
פרטים:
עיין בקבצים המצורפים כעזר, אם יש.
ספק כקובץ להורדה או הצג ב-Canvas.` },
  ],
  promptCopy: "העתק",
  promptCopied: "הועתק!",
};

export default he;
