const hi = {
  badge: "AI Page Publisher",
  heroTitle: ["AI पेज पब्लिश करें", "एक ही push में।"],
  heroSubtitle:
    "AI से बना कोई भी React कंपोनेंट सीधे लाइव वेबसाइट में बदलने का आसान टेम्पलेट। एक फ़ाइल बदलें। GitHub पर push करें। बस।",
  ctaPrimary: "यह टेम्पलेट इस्तेमाल करें",
  ctaSecondary: "README पढ़ें",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.hi.md",
  includedLabel: "शामिल है",
  includedTitle: "आपको क्या मिलता है",
  includes: [
    "40+ shadcn/ui कंपोनेंट",
    "160+ पैकेज पहले से इंस्टॉल",
    "Tailwind CSS, तुरंत इस्तेमाल के लिए तैयार",
    "GitHub Actions से डिप्लॉयमेंट",
    "कस्टम डोमेन सपोर्ट",
    "ऑटो base path डिटेक्शन",
  ],
  howItWorksLabel: "कैसे काम करता है",
  howItWorksTitle: "तीन स्टेप में लाइव",
  howItWorksSubtitle:
    "कोडिंग का अनुभव ज़रूरी नहीं। AI से JSX माँगें, पेस्ट करें, push करें, बस।",
  steps: [
    {
      number: "01",
      title: "AI से JSX माँगें",
      body: "Claude, ChatGPT या किसी भी AI से अपना पेज JSX फ़ॉर्मेट में React कंपोनेंट के रूप में बनवाएँ।",
    },
    {
      number: "02",
      title: "अपना repo सेट करें",
      body: "GitHub पेज पर “Use this template” → “Create a new repository” पर क्लिक करके अपना repo बनाएँ। आपका GitHub यूज़रनेम और repo का नाम आपकी साइट का URL तय करेंगे। फिर Settings → Pages में जाकर Source को GitHub Actions पर सेट करें।",
    },
    {
      number: "03",
      title: "पेस्ट करें और सेव करें",
      body: "AI द्वारा जनरेट किया गया JSX src/App.jsx में पेस्ट करें — पहले से मौजूद सभी कंटेंट को डिलीट करके रिप्लेस करें — फिर फ़ाइल सेव करें। GitHub Actions ऑटोमैटिक बिल्ड और पब्लिश कर देगा।",
    },
  ],
  filesLabel: "आपकी फ़ाइलें",
  filesTitle: "क्या बदलना है",
  filesSubtitle:
    "ज़्यादातर सिर्फ़ एक फ़ाइल बदलनी होती है। बाकी दो वैकल्पिक हैं।",
  files: [
    { name: "src/App.jsx", tag: "ज़रूरी", desc: "AI द्वारा बनाया गया JSX यहाँ पेस्ट करें। बस यही एक फ़ाइल बदलनी है।", required: true },
    { name: "index.html", tag: "वैकल्पिक", desc: "पेज का टाइटल, विवरण और Google Analytics अपनी साइट के अनुसार अपडेट करें।", required: false },
    { name: "public/CNAME", tag: "वैकल्पिक", desc: "अपना कस्टम डोमेन सेट करें। ज़रूरत न हो तो ऐसे ही छोड़ दें।", required: false },
  ],
  tipLabel: "सुझाव",
  tipText: "अगर AI का कोड ऐसा पैकेज इस्तेमाल करता है जो टेम्पलेट में नहीं है, तो चलाएँ",
  tipCommand: "npm run check",
  tipAfter: "गायब डिपेंडेंसी खोजने और ठीक करने के लिए।",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "सर्वाधिकार सुरक्षित।",
  langLabel: "भाषा",
  themeLight: "लाइट मोड",
  themeDark: "डार्क मोड",
  promptLabel: "शुरुआती प्रॉम्प्ट",
  promptHint: "इस प्रॉम्प्ट को कॉपी करके अपने AI टूल में पेस्ट करें। खाली जगहें भरें।",
  promptVariants: [
    { label: "लैंडिंग पेज", template: `JSX फॉर्मेट में किसी उत्पाद या सेवा को प्रमोट करने वाला लैंडिंग पेज बनाएँ।
विषय:
शैली:
विवरण:
संदर्भ के लिए अटैच की गई फ़ाइलें देखें, यदि कोई हो।
डाउनलोड फ़ाइल के रूप में दें या Canvas में दिखाएँ।` },
    { label: "पोर्टफोलियो", template: `JSX फॉर्मेट में एक व्यक्तिगत पोर्टफोलियो वेब पेज बनाएँ।
विषय:
शैली:
विवरण:
संदर्भ के लिए अटैच की गई फ़ाइलें देखें, यदि कोई हो।
डाउनलोड फ़ाइल के रूप में दें या Canvas में दिखाएँ।` },
    { label: "डैशबोर्ड", template: `JSX फॉर्मेट में एक एडमिन डैशबोर्ड बनाएँ।
विषय:
शैली:
विवरण:
संदर्भ के लिए अटैच की गई फ़ाइलें देखें, यदि कोई हो।
डाउनलोड फ़ाइल के रूप में दें या Canvas में दिखाएँ।` },
    { label: "ब्लॉग", template: `JSX फॉर्मेट में एक ब्लॉग होमपेज बनाएँ।
विषय:
शैली:
विवरण:
संदर्भ के लिए अटैच की गई फ़ाइलें देखें, यदि कोई हो।
डाउनलोड फ़ाइल के रूप में दें या Canvas में दिखाएँ।` },
    { label: "SaaS", template: `JSX फॉर्मेट में एक SaaS प्रोडक्ट पेज बनाएँ।
विषय:
शैली:
विवरण:
संदर्भ के लिए अटैच की गई फ़ाइलें देखें, यदि कोई हो।
डाउनलोड फ़ाइल के रूप में दें या Canvas में दिखाएँ।` },
  ],
  promptCopy: "कॉपी करें",
  promptCopied: "कॉपी हो गया!",
};

export default hi;
