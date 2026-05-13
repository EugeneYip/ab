const ar = {
  badge: "AI Page Publisher",
  heroTitle: ["انشر صفحات الذكاء الاصطناعي", "بضغطة واحدة."],
  heroSubtitle:
    "قالب بسيط لتحويل أي مكوّن React مولّد بالذكاء الاصطناعي إلى موقع ويب. استبدل ملفاً واحداً. ادفع إلى GitHub. انتهى.",
  ctaPrimary: "استخدم هذا القالب",
  ctaSecondary: "اقرأ الـ README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ar.md",
  includedLabel: "مُتضمَّن",
  includedTitle: "ما الذي تحصل عليه",
  includes: [
    "أكثر من 40 مكوّن shadcn/ui",
    "أكثر من 160 حزمة مثبّتة مسبقاً",
    "Tailwind CSS جاهز للاستخدام",
    "نشر تلقائي عبر GitHub Actions",
    "دعم النطاق المخصص",
    "اكتشاف تلقائي لمسار القاعدة",
  ],
  howItWorksLabel: "كيف يعمل",
  howItWorksTitle: "ثلاث خطوات للنشر",
  howItWorksSubtitle:
    "لا تحتاج خبرة في البرمجة. اطلب JSX من الذكاء الاصطناعي، الصقه، ادفعه، انتهى.",
  steps: [
    {
      number: "01",
      title: "اطلب JSX من الذكاء الاصطناعي",
      body: "اطلب من Claude أو ChatGPT أو أي ذكاء اصطناعي أن يولّد صفحتك كمكوّن React بتنسيق JSX.",
    },
    {
      number: "02",
      title: "أعدّ مستودعك",
      body: "في صفحة GitHub، اضغط على “Use this template” ثم “Create a new repository” لإنشاء مستودعك الخاص. اسم مستخدمك في GitHub واسم مستودعك سيحددان رابط موقعك. ثم اذهب إلى Settings → Pages واضبط Source على GitHub Actions.",
    },
    {
      number: "03",
      title: "الصق واحفظ",
      body: "الصق كود JSX الذي أنشأه الذكاء الاصطناعي في src/App.jsx — احذف كل المحتوى الموجود واستبدله — ثم احفظ الملف. سيقوم GitHub Actions بالبناء والنشر تلقائياً.",
    },
  ],
  filesLabel: "ملفاتك",
  filesTitle: "ما الذي ستغيّره",
  filesSubtitle:
    "في أغلب الأحيان ستعدّل ملفاً واحداً فقط. الملفان الآخران اختياريان.",
  files: [
    { name: "src/App.jsx", tag: "مطلوب", desc: "الصق كود JSX المولّد بالذكاء الاصطناعي هنا. هذا هو الملف الوحيد الذي تحتاج تغييره.", required: true },
    { name: "index.html", tag: "اختياري", desc: "حدّث عنوان الصفحة والوصف وGoogle Analytics لتتوافق مع موقعك.", required: false },
    { name: "public/CNAME", tag: "اختياري", desc: "اضبط نطاقك المخصص. اتركه كما هو إن لم تحتج واحداً.", required: false },
  ],
  tipLabel: "نصيحة",
  tipText: "إذا استخدم كود الذكاء الاصطناعي حزمة غير موجودة في القالب، نفّذ",
  tipCommand: "npm run check",
  tipAfter: "لاكتشاف وإصلاح التبعيات المفقودة.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "جميع الحقوق محفوظة.",
  langLabel: "اللغة",
  themeLight: "الوضع الفاتح",
  themeDark: "الوضع الداكن",
  promptLabel: "قالب البرومبت",
  promptHint: "انسخ هذا البرومبت والصقه في أداة الذكاء الاصطناعي، ثم املأ الفراغات.",
  promptVariants: [
    { label: "صفحة هبوط", template: `أنشئ صفحة هبوط بصيغة JSX للترويج لمنتج أو خدمة.
الموضوع:
النمط:
التفاصيل:
راجع الملفات المرفقة للمرجعية، إن وُجدت.
قدّم كملف للتنزيل أو اعرض في Canvas.` },
    { label: "معرض أعمال", template: `أنشئ صفحة معرض أعمال شخصية بصيغة JSX.
الموضوع:
النمط:
التفاصيل:
راجع الملفات المرفقة للمرجعية، إن وُجدت.
قدّم كملف للتنزيل أو اعرض في Canvas.` },
    { label: "لوحة تحكم", template: `أنشئ لوحة تحكم إدارية بصيغة JSX.
الموضوع:
النمط:
التفاصيل:
راجع الملفات المرفقة للمرجعية، إن وُجدت.
قدّم كملف للتنزيل أو اعرض في Canvas.` },
    { label: "مدوّنة", template: `أنشئ صفحة رئيسية لمدونة بصيغة JSX.
الموضوع:
النمط:
التفاصيل:
راجع الملفات المرفقة للمرجعية، إن وُجدت.
قدّم كملف للتنزيل أو اعرض في Canvas.` },
    { label: "SaaS", template: `أنشئ صفحة منتج SaaS بصيغة JSX.
الموضوع:
النمط:
التفاصيل:
راجع الملفات المرفقة للمرجعية، إن وُجدت.
قدّم كملف للتنزيل أو اعرض في Canvas.` },
  ],
  promptCopy: "نسخ",
  promptCopied: "تم النسخ!",
};

export default ar;
