const id = {
  badge: "AI Page Publisher",
  heroTitle: ["Terbitkan halaman AI", "hanya dengan satu push."],
  heroSubtitle:
    "Template sederhana untuk mengubah komponen React buatan AI menjadi website langsung. Ganti satu file. Push ke GitHub. Selesai.",
  ctaPrimary: "Gunakan template ini",
  ctaSecondary: "Baca README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.id.md",
  includedLabel: "Sudah Disertakan",
  includedTitle: "Yang kamu dapatkan",
  includes: [
    "Lebih dari 40 komponen shadcn/ui",
    "Lebih dari 160 paket yang sudah terpasang",
    "Tailwind CSS, siap digunakan",
    "Deployment dengan GitHub Actions",
    "Dukungan domain kustom",
    "Deteksi base path otomatis",
  ],
  howItWorksLabel: "Cara kerjanya",
  howItWorksTitle: "Tiga langkah untuk online",
  howItWorksSubtitle:
    "Tidak perlu pengalaman coding. Minta JSX dari AI, tempel, push, selesai.",
  steps: [
    {
      number: "01",
      title: "Minta JSX dari AI",
      body: "Minta Claude, ChatGPT, atau AI mana pun untuk membuat halamanmu sebagai komponen React dalam format JSX.",
    },
    {
      number: "02",
      title: "Siapkan repo-mu",
      body: "Di halaman GitHub, klik “Use this template” → “Create a new repository” untuk membuat repo sendiri. Username GitHub dan nama repo akan menentukan URL situsmu. Lalu buka Settings → Pages dan atur Source ke GitHub Actions.",
    },
    {
      number: "03",
      title: "Tempel dan simpan",
      body: "Tempel JSX yang dibuat AI ke src/App.jsx — hapus dan ganti semua konten yang ada — lalu simpan file. GitHub Actions akan mem-build dan menerbitkan situsmu secara otomatis.",
    },
  ],
  filesLabel: "File-mu",
  filesTitle: "Yang akan kamu ubah",
  filesSubtitle:
    "Biasanya kamu hanya mengubah satu file. Dua file lainnya bersifat opsional.",
  files: [
    { name: "src/App.jsx", tag: "Wajib", desc: "Tempel JSX buatan AI di sini. Ini satu-satunya file yang perlu kamu ubah.", required: true },
    { name: "index.html", tag: "Opsional", desc: "Perbarui judul, deskripsi halaman, dan Google Analytics agar sesuai dengan situsmu.", required: false },
    { name: "public/CNAME", tag: "Opsional", desc: "Atur domain kustom-mu. Biarkan apa adanya jika tidak membutuhkannya.", required: false },
  ],
  tipLabel: "Tips",
  tipText: "Jika kode AI menggunakan paket yang tidak ada di template, jalankan",
  tipCommand: "npm run check",
  tipAfter: "untuk menemukan dan memperbaiki dependensi yang hilang.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "Semua hak dilindungi.",
  langLabel: "Bahasa",
  themeLight: "Mode terang",
  themeDark: "Mode gelap",
  promptLabel: "Prompt Awal",
  promptHint: "Salin prompt ini dan tempelkan ke alat AI kamu. Isi bagian yang kosong.",
  promptVariants: [
    { label: "Landing Page", template: `Buatkan landing page dalam format JSX untuk mempromosikan produk atau layanan.
Topik:
Gaya:
Detail:
Gunakan file terlampir sebagai referensi, jika ada.
Berikan sebagai file unduhan atau tampilkan di Canvas.` },
    { label: "Portofolio", template: `Buatkan halaman portofolio pribadi dalam format JSX.
Topik:
Gaya:
Detail:
Gunakan file terlampir sebagai referensi, jika ada.
Berikan sebagai file unduhan atau tampilkan di Canvas.` },
    { label: "Dashboard", template: `Buatkan halaman dashboard admin dalam format JSX.
Topik:
Gaya:
Detail:
Gunakan file terlampir sebagai referensi, jika ada.
Berikan sebagai file unduhan atau tampilkan di Canvas.` },
    { label: "Blog", template: `Buatkan halaman utama blog dalam format JSX.
Topik:
Gaya:
Detail:
Gunakan file terlampir sebagai referensi, jika ada.
Berikan sebagai file unduhan atau tampilkan di Canvas.` },
    { label: "SaaS", template: `Buatkan halaman produk SaaS dalam format JSX.
Topik:
Gaya:
Detail:
Gunakan file terlampir sebagai referensi, jika ada.
Berikan sebagai file unduhan atau tampilkan di Canvas.` },
  ],
  promptCopy: "Salin",
  promptCopied: "Tersalin!",
};

export default id;
