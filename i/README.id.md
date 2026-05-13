# AI Page Publisher

> Terbitkan halaman React buatan AI ke web hanya dengan satu push.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Buat halaman dengan Claude, ChatGPT, atau AI mana pun. Tempel ke `src/App.jsx`. Push. Selesai.

## Mulai Cepat

1. **Minta JSX dari AI** — minta Claude, ChatGPT, atau AI mana pun untuk membuat halamanmu sebagai komponen React dalam **format JSX**

   <details>
   <summary>Prompt Awal (klik untuk membuka, lalu salin)</summary>

   ```
   Buatkan halaman React dalam format JSX yang bisa saya gunakan sebagai src/App.jsx.

   Topik: [topik website kamu — mis: kedai kopi, portofolio, produk SaaS]
   Gaya: [gaya desain — mis: minimalis, modern, warna-warni, korporat]
   Detail: [bagian yang diinginkan — mis: hero, fitur, testimoni, harga, kontak]

   Persyaratan teknis:
   - Gunakan Tailwind CSS untuk semua styling
   - Gunakan komponen shadcn/ui (import dari @/components/ui/) jika sesuai
   - Gunakan lucide-react untuk ikon
   - Buat halaman responsif untuk mobile dan desktop
   - Ekspor sebagai: export default function App()
   - Satu file saja, tanpa file CSS tambahan atau skrip CDN
   ```

   </details>

2. **Gunakan template ini** — di halaman GitHub, klik **"Use this template"** → **"Create a new repository"** untuk membuat repo sendiri. Username GitHub dan nama repo akan menentukan URL situs kamu (`https://<username>.github.io/<repo-name>/`)
3. **Aktifkan GitHub Pages** — buka **Settings → Pages** dan atur Source ke **GitHub Actions**
4. **Ganti** [`src/App.jsx`](../src/App.jsx) — tempel JSX yang dibuat AI ke file ini, **hapus dan ganti semua konten yang ada**, lalu simpan

## Kustomisasi (Opsional)

| Apa | Cara |
| :-- | :-- |
| Judul, deskripsi, dan Google Analytics | Edit `<title>`, `<meta name="description">`, dan Google Analytics di [`index.html`](../index.html) |
| Domain kustom | Ganti placeholder di [`public/CNAME`](../public/CNAME) dengan domainmu (mis. `situsaku.com`), konfigurasikan DNS ke GitHub Pages, lalu masukkan domain yang sama di **Settings → Pages → Custom domain**. Atau buat variabel repositori bernama `CUSTOM_DOMAIN` di **Settings → Secrets and variables → Actions → Variables** |

## Yang Sudah Disertakan

Template ini sudah dikonfigurasi dengan semua yang biasa digunakan oleh halaman buatan AI:

- **React 18 + Vite + Tailwind CSS 3** — build modern, cepat, tanpa konfigurasi
- **Lebih dari 40 komponen shadcn/ui** yang sudah terpasang di `src/components/ui/`
- **Semua Radix UI primitives** untuk interaksi yang aksesibel
- **Ikon** — `lucide-react`, `react-icons`, `@heroicons/react`
- **Grafik & visualisasi data** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **Peta** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **Video & audio** — `react-player`, `howler`
- **Animasi** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **Rich text** — `@tiptap/react` + starter-kit + 12 ekstensi (link, gambar, tabel, warna, highlight…)
- **Formulir** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **Diagram alur** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **Gambar** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **Kalender** — `react-big-calendar`, `react-day-picker`
- **Pembayaran** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **Email** — `@emailjs/browser`
- **Penanganan file** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **Pencarian** — `fuse.js`
- **Efek UI** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **Drag & drop** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **Carousel** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **Utilitas** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker`, dan banyak lagi

> Tree-shaking memastikan hanya paket yang benar-benar kamu gunakan yang masuk ke dalam bundle akhir.

## Periksa Import yang Hilang

Jika kode buatan AI menggunakan paket yang belum terpasang, jalankan:

```bash
npm run check
```

Ini akan memindai file sumbermu dan melaporkan dependensi yang hilang, beserta perintah `npm install` yang tepat untuk memperbaikinya.

## Cara Kerja Base Path

Build secara otomatis mendeteksi base path yang tepat:

| Skenario | Base Path |
| :-- | :-- |
| Domain kustom (CNAME berisi domain) | `/` |
| GitHub Pages (tanpa domain kustom) | `/<repo-name>/` |
| Pengembangan lokal | `/` |

Tidak perlu konfigurasi manual.

## Struktur File

```
├── src/
│   ├── App.jsx              ← GANTI FILE INI
│   ├── main.jsx             ← Titik masuk (jangan diubah)
│   ├── index.css            ← Tailwind + tema shadcn
│   ├── lib/utils.js         ← Utilitas cn()
│   ├── hooks/use-toast.js   ← Hook toast
│   └── components/ui/       ← Komponen shadcn/ui
├── public/
│   ├── CNAME                ← Domain kustom (opsional)
│   └── favicon.svg          ← Ikon situs
├── scripts/
│   └── check-imports.js     ← Deteksi dependensi yang hilang
├── .github/workflows/
│   └── deploy.yml           ← Deployment GitHub Actions
├── index.html               ← Judul halaman dan meta tag
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Menambahkan Komponen shadcn/ui

Template sudah mencakup lebih dari 40 komponen shadcn. Jika butuh lebih:

```bash
npx shadcn@latest add <nama-komponen>
```

`components.json` sudah dikonfigurasi.

## Pengembangan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Pemecahan Masalah

**Build gagal karena error import.**
Jalankan `npm run check` untuk melihat paket yang hilang, lalu pasang.

**Halaman kosong setelah deploy.**
Pastikan source GitHub Pages diatur ke **GitHub Actions**, bukan "Deploy from a branch".

**Domain kustom tidak berfungsi.**
Verifikasi bahwa `public/CNAME` hanya berisi domainmu. Periksa catatan DNS-mu.
