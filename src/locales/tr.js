const tr = {
  badge: "AI Page Publisher",
  heroTitle: ["AI sayfalarını yayınlayın,", "tek bir push ile."],
  heroSubtitle:
    "Yapay zeka tarafından oluşturulan her React bileşenini canlı bir web sitesine dönüştürmek için sade bir şablon. Bir dosyayı değiştirin. GitHub'a push edin. Bitti.",
  ctaPrimary: "Bu şablonu kullanın",
  ctaSecondary: "README'yi okuyun",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.tr.md",
  includedLabel: "Dahil",
  includedTitle: "Neler geliyor",
  includes: [
    "40'tan fazla shadcn/ui bileşeni",
    "160'dan fazla önceden kurulu paket",
    "Tailwind CSS, kullanıma hazır",
    "GitHub Actions ile dağıtım",
    "Özel alan adı desteği",
    "Otomatik base path algılama",
  ],
  howItWorksLabel: "Nasıl çalışır",
  howItWorksTitle: "Üç adımda yayına girin",
  howItWorksSubtitle:
    "Programlama deneyimine gerek yok. Yapay zekadan JSX isteyin, yapıştırın, push edin, bitti.",
  steps: [
    {
      number: "01",
      title: "Yapay zekadan JSX isteyin",
      body: "Claude, ChatGPT veya herhangi bir yapay zekadan sayfanızı JSX formatında React bileşeni olarak oluşturmasını isteyin.",
    },
    {
      number: "02",
      title: "Deponuzu kurun",
      body: "GitHub sayfasında “Use this template” → “Create a new repository” tıklayarak kendi reponuzu oluşturun. GitHub kullanıcı adınız ve repo adınız sitenizin URL'sini belirleyecektir. Sonra Settings → Pages'e gidin ve Source'u GitHub Actions olarak ayarlayın.",
    },
    {
      number: "03",
      title: "Yapıştırın ve kaydedin",
      body: "Yapay zekanın oluşturduğu JSX'i src/App.jsx dosyasına yapıştırın — mevcut tüm içeriği silip değiştirin — ardından dosyayı kaydedin. GitHub Actions sitenizi otomatik olarak derleyip yayınlar.",
    },
  ],
  filesLabel: "Dosyalarınız",
  filesTitle: "Neyi değiştireceksiniz",
  filesSubtitle:
    "Çoğu zaman yalnızca bir dosyaya dokunursunuz. Diğer ikisi isteğe bağlıdır.",
  files: [
    { name: "src/App.jsx", tag: "Zorunlu", desc: "Yapay zekanın oluşturduğu JSX'i buraya yapıştırın. Değiştirmeniz gereken tek dosya budur.", required: true },
    { name: "index.html", tag: "İsteğe bağlı", desc: "Sayfa başlığını, açıklamasını ve Google Analytics'i sitenize uygun şekilde güncelleyin.", required: false },
    { name: "public/CNAME", tag: "İsteğe bağlı", desc: "Özel alan adınızı ayarlayın. Gerekmiyorsa olduğu gibi bırakın.", required: false },
  ],
  tipLabel: "İpucu",
  tipText: "Yapay zekanın kodu şablonda bulunmayan bir paket kullanıyorsa,",
  tipCommand: "npm run check",
  tipAfter: "komutunu çalıştırarak eksik bağımlılıkları bulup düzeltebilirsiniz.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "Tüm hakları saklıdır.",
  langLabel: "Dil",
  themeLight: "Açık tema",
  themeDark: "Koyu tema",
  promptLabel: "Başlangıç Promptu",
  promptHint: "Bu promptu kopyalayıp AI aracınıza yapıştırın. Boşlukları doldurun.",
  promptVariants: [
    { label: "Landing Page", template: `Bir ürün veya hizmet tanıtmak için JSX formatında bir landing page oluşturun.
Konu:
Stil:
Detaylar:
Ekteki dosyaları referans olarak kullanın, varsa.
İndirilebilir dosya olarak sunun veya Canvas'ta görüntüleyin.` },
    { label: "Portföy", template: `JSX formatında kişisel bir portföy sayfası oluşturun.
Konu:
Stil:
Detaylar:
Ekteki dosyaları referans olarak kullanın, varsa.
İndirilebilir dosya olarak sunun veya Canvas'ta görüntüleyin.` },
    { label: "Panel", template: `JSX formatında bir yönetici paneli oluşturun.
Konu:
Stil:
Detaylar:
Ekteki dosyaları referans olarak kullanın, varsa.
İndirilebilir dosya olarak sunun veya Canvas'ta görüntüleyin.` },
    { label: "Blog", template: `JSX formatında bir blog ana sayfası oluşturun.
Konu:
Stil:
Detaylar:
Ekteki dosyaları referans olarak kullanın, varsa.
İndirilebilir dosya olarak sunun veya Canvas'ta görüntüleyin.` },
    { label: "SaaS", template: `JSX formatında bir SaaS ürün sayfası oluşturun.
Konu:
Stil:
Detaylar:
Ekteki dosyaları referans olarak kullanın, varsa.
İndirilebilir dosya olarak sunun veya Canvas'ta görüntüleyin.` },
  ],
  promptCopy: "Kopyala",
  promptCopied: "Kopyalandı!",
};

export default tr;
