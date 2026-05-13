# AI Page Publisher

> AI tarafından oluşturulan React sayfalarını tek bir push ile web'de yayınlayın.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Claude, ChatGPT veya herhangi bir yapay zeka ile sayfa oluşturun. `src/App.jsx` dosyasına yapıştırın. Push edin. Bitti.

## Hızlı Başlangıç

1. **Yapay zekadan JSX isteyin** — Claude, ChatGPT veya herhangi bir yapay zekadan sayfanızı **JSX formatında** React bileşeni olarak oluşturmasını isteyin

   <details>
   <summary>Başlangıç Promptu (genişletmek için tıklayın, ardından kopyalayın)</summary>

   ```
   src/App.jsx olarak kullanabileceğim JSX formatında bir React sayfası oluştur.

   Konu: [web sitenizin konusu — örn: kafe, portföy, SaaS ürünü]
   Stil: [tasarım stili — örn: minimalist, modern, renkli, kurumsal]
   Detaylar: [istediğiniz bölümler — örn: hero, özellikler, referanslar, fiyatlandırma, iletişim]

   Teknik gereksinimler:
   - Tüm stillendirme için Tailwind CSS kullan
   - Uygun olduğunda shadcn/ui bileşenlerini kullan (@/components/ui/ üzerinden import)
   - İkonlar için lucide-react kullan
   - Mobil ve masaüstü için responsive yap
   - Dışa aktarım: export default function App()
   - Tek dosya, ek CSS dosyası veya CDN script'i yok
   ```

   </details>

2. **Bu şablonu kullanın** — GitHub sayfasında **"Use this template"** → **"Create a new repository"** tıklayarak kendi reponuzu oluşturun. GitHub kullanıcı adınız ve repo adınız sitenizin URL'sini belirleyecektir (`https://<kullanıcı-adı>.github.io/<repo-adı>/`)
3. **GitHub Pages'i etkinleştirin** — **Settings → Pages** sayfasına gidin ve Source'u **GitHub Actions** olarak ayarlayın
4. [`src/App.jsx`](../src/App.jsx) dosyasını **değiştirin** — yapay zekanın oluşturduğu JSX'i bu dosyaya yapıştırın, **mevcut tüm içeriği silip değiştirin**, ardından kaydedin

## Özelleştirme (İsteğe Bağlı)

| Ne | Nasıl |
| :-- | :-- |
| Sayfa başlığı, açıklaması ve Google Analytics | [`index.html`](../index.html) dosyasındaki `<title>`, `<meta name="description">` ve Google Analytics'i düzenleyin |
| Özel alan adı | [`public/CNAME`](../public/CNAME) dosyasındaki yer tutucuyu alan adınızla değiştirin (ör. `sitenim.com`), DNS'i GitHub Pages'e yönlendirin ve aynı alan adını **Settings → Pages → Custom domain** bölümüne girin. Alternatif olarak **Settings → Secrets and variables → Actions → Variables** bölümünde `CUSTOM_DOMAIN` adında bir depo değişkeni oluşturun |

## Neler Dahil

Bu şablon, yapay zeka tarafından oluşturulan sayfalarda yaygın olarak kullanılan her şeyle önceden yapılandırılmış olarak gelir:

- **React 18 + Vite + Tailwind CSS 3** — modern, hızlı, sıfır yapılandırmalı derleme
- **40'tan fazla shadcn/ui bileşeni** `src/components/ui/` dizininde önceden kurulu
- **Tüm Radix UI primitifleri** erişilebilir etkileşimler için
- **İkonlar** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Grafikler ve veri görselleştirme** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **Haritalar** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Video ve ses** — `react-player`, `howler`
- **Animasyon** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Zengin metin** — `@tiptap/react` + starter-kit + 12 eklenti (link, görsel, tablo, renk, vurgulama…)
- **Formlar** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **Akış diyagramları** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Görseller** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Takvim** — `react-big-calendar`, `react-day-picker`
- **Ödeme** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **E-posta** — `@emailjs/browser`
- **Dosya işleme** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Arama** — `fuse.js`
- **UI efektleri** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Sürükle ve bırak** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Carousel** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Yardımcı araçlar** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` ve daha fazlası

> Tree-shaking, yalnızca gerçekten kullandığınız paketlerin son pakete dahil edilmesini sağlar.

## Eksik Import'ları Kontrol Etme

Yapay zekanın oluşturduğu kod önceden kurulu olmayan bir paket kullanıyorsa şunu çalıştırın:

```bash
npm run check
```

Bu komut kaynak dosyalarınızı tarar ve eksik bağımlılıkları, bunları düzeltmek için gereken `npm install` komutuyla birlikte raporlar.

## Base Path Nasıl Çalışır

Derleme, doğru base path'i otomatik olarak algılar:

| Senaryo | Base Path |
| :-- | :-- |
| Özel alan adı (CNAME'de alan adı var) | `/` |
| GitHub Pages (özel alan adı yok) | `/<repo-adı>/` |
| Yerel geliştirme | `/` |

Manuel yapılandırma gerekmez.

## Dosya Yapısı

```
├── src/
│   ├── App.jsx              ← BU DOSYAYI DEĞİŞTİRİN
│   ├── main.jsx             ← Giriş noktası (dokunmayın)
│   ├── index.css            ← Tailwind + shadcn teması
│   ├── lib/utils.js         ← cn() yardımcı fonksiyonu
│   ├── hooks/use-toast.js   ← Toast hook'u
│   └── components/ui/       ← shadcn/ui bileşenleri
├── public/
│   ├── CNAME                ← Özel alan adı (isteğe bağlı)
│   └── favicon.svg          ← Site ikonu
├── scripts/
│   └── check-imports.js     ← Eksik bağımlılıkları tespit et
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions ile dağıtım
├── index.html               ← Sayfa başlığı ve meta etiketleri
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Daha Fazla shadcn/ui Bileşeni Ekleme

Şablon 40'tan fazla shadcn bileşeni içerir. Daha fazlasına ihtiyaç duyarsanız:

```bash
npx shadcn@latest add <bileşen-adı>
```

`components.json` dosyası önceden yapılandırılmıştır.

## Yerel Geliştirme

```bash
npm install
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

## Sorun Giderme

**Derleme import hataları nedeniyle başarısız oluyor.**
Hangi paketlerin eksik olduğunu görmek için `npm run check` komutunu çalıştırın, ardından bunları yükleyin.

**Deploy sonrası sayfa boş görünüyor.**
GitHub Pages kaynağının "Deploy from a branch" değil **GitHub Actions** olarak ayarlandığından emin olun.

**Özel alan adı çalışmıyor.**
`public/CNAME` dosyasının yalnızca alan adınızı içerdiğini doğrulayın. DNS kayıtlarınızı kontrol edin.
