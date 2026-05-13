const ur = {
  badge: "AI Page Publisher",
  heroTitle: ["AI صفحات شائع کریں", "ایک push میں۔"],
  heroSubtitle:
    "AI سے بنے کسی بھی React کمپوننٹ کو لائیو ویب سائٹ میں بدلنے کا آسان ٹیمپلیٹ۔ ایک فائل بدلیں۔ GitHub پر push کریں۔ ہو گیا۔",
  ctaPrimary: "یہ ٹیمپلیٹ استعمال کریں",
  ctaSecondary: "README پڑھیں",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ur.md",
  includedLabel: "شامل ہے",
  includedTitle: "آپ کو کیا ملتا ہے",
  includes: [
    "40+ shadcn/ui کمپوننٹس",
    "160+ پہلے سے نصب پیکجز",
    "Tailwind CSS، فوری استعمال کے لیے تیار",
    "GitHub Actions سے ڈیپلائمنٹ",
    "حسب ضرورت ڈومین سپورٹ",
    "خودکار base path کی شناخت",
  ],
  howItWorksLabel: "کیسے کام کرتا ہے",
  howItWorksTitle: "تین قدم میں لائیو",
  howItWorksSubtitle:
    "کوڈنگ کا تجربہ ضروری نہیں۔ AI سے JSX مانگیں، چسپاں کریں، push کریں، بس۔",
  steps: [
    {
      number: "01",
      title: "AI سے JSX مانگیں",
      body: "Claude، ChatGPT یا کسی بھی AI سے اپنا صفحہ JSX فارمیٹ میں React کمپوننٹ کے طور پر بنوائیں۔",
    },
    {
      number: "02",
      title: "اپنا repo تیار کریں",
      body: "GitHub صفحے پر “Use this template” پھر “Create a new repository” پر کلک کر کے اپنا repo بنائیں۔ آپ کا GitHub صارف نام اور repo کا نام آپ کی سائٹ کا URL طے کریں گے۔ پھر Settings → Pages میں جا کر Source کو GitHub Actions پر سیٹ کریں۔",
    },
    {
      number: "03",
      title: "چسپاں کریں اور محفوظ کریں",
      body: "AI سے بنایا گیا JSX src/App.jsx میں چسپاں کریں — پہلے سے موجود تمام مواد حذف کر کے بدل دیں — پھر فائل محفوظ کریں۔ GitHub Actions خود بخود بلڈ اور شائع کر دے گا۔",
    },
  ],
  filesLabel: "آپ کی فائلز",
  filesTitle: "کیا بدلنا ہے",
  filesSubtitle:
    "اکثر صرف ایک فائل بدلنی ہوتی ہے۔ باقی دو اختیاری ہیں۔",
  files: [
    { name: "src/App.jsx", tag: "ضروری", desc: "AI کا بنایا ہوا JSX یہاں چسپاں کریں۔ صرف یہی ایک فائل بدلنی ہے۔", required: true },
    { name: "index.html", tag: "اختیاری", desc: "صفحے کا عنوان، تفصیل اور Google Analytics اپنی سائٹ کے مطابق بدلیں۔", required: false },
    { name: "public/CNAME", tag: "اختیاری", desc: "اپنا حسب ضرورت ڈومین سیٹ کریں۔ ضرورت نہ ہو تو ایسے ہی چھوڑ دیں۔", required: false },
  ],
  tipLabel: "مشورہ",
  tipText: "اگر AI کا کوڈ ایسا پیکج استعمال کرتا ہے جو ٹیمپلیٹ میں نہیں ہے، تو",
  tipCommand: "npm run check",
  tipAfter: "چلائیں تاکہ گمشدہ ڈیپنڈنسیز تلاش اور ٹھیک ہو سکیں۔",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "جملہ حقوق محفوظ ہیں۔",
  langLabel: "زبان",
  themeLight: "ہلکا موڈ",
  themeDark: "تاریک موڈ",
  promptLabel: "شروعاتی پرامپٹ",
  promptHint: "اس پرامپٹ کو کاپی کر کے اپنے AI ٹول میں چسپاں کریں۔ خالی جگہیں پُر کریں۔",
  promptVariants: [
    { label: "لینڈنگ پیج", template: `JSX فارمیٹ میں کسی پروڈکٹ یا سروس کی تشہیر کے لیے لینڈنگ پیج بنائیں۔
موضوع:
انداز:
تفصیلات:
منسلک فائلز کو بطور حوالہ دیکھیں، اگر کوئی ہوں۔
ڈاؤن لوڈ فائل دیں یا Canvas پر دکھائیں۔` },
    { label: "پورٹ فولیو", template: `JSX فارمیٹ میں ایک ذاتی پورٹ فولیو ویب صفحہ بنائیں۔
موضوع:
انداز:
تفصیلات:
منسلک فائلز کو بطور حوالہ دیکھیں، اگر کوئی ہوں۔
ڈاؤن لوڈ فائل دیں یا Canvas پر دکھائیں۔` },
    { label: "ڈیش بورڈ", template: `JSX فارمیٹ میں ایک ایڈمن ڈیش بورڈ بنائیں۔
موضوع:
انداز:
تفصیلات:
منسلک فائلز کو بطور حوالہ دیکھیں، اگر کوئی ہوں۔
ڈاؤن لوڈ فائل دیں یا Canvas پر دکھائیں۔` },
    { label: "بلاگ", template: `JSX فارمیٹ میں ایک بلاگ ہوم پیج بنائیں۔
موضوع:
انداز:
تفصیلات:
منسلک فائلز کو بطور حوالہ دیکھیں، اگر کوئی ہوں۔
ڈاؤن لوڈ فائل دیں یا Canvas پر دکھائیں۔` },
    { label: "SaaS", template: `JSX فارمیٹ میں ایک SaaS پروڈکٹ پیج بنائیں۔
موضوع:
انداز:
تفصیلات:
منسلک فائلز کو بطور حوالہ دیکھیں، اگر کوئی ہوں۔
ڈاؤن لوڈ فائل دیں یا Canvas پر دکھائیں۔` },
  ],
  promptCopy: "کاپی",
  promptCopied: "کاپی ہو گیا!",
};

export default ur;
