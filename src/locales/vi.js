const vi = {
  badge: "AI Page Publisher",
  heroTitle: ["Một lần push,", "trang AI đã lên web."],
  heroSubtitle:
    "Một template gọn gàng để biến code React do AI sinh ra thành website đang chạy. Thay đúng một file, push lên GitHub, xong.",
  ctaPrimary: "Dùng template này",
  ctaSecondary: "Đọc README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.vi.md",
  includedLabel: "Có sẵn",
  includedTitle: "Trong template có gì",
  includes: [
    "40+ component shadcn/ui",
    "160+ package cài sẵn",
    "Tailwind CSS, dùng được ngay",
    "Deploy bằng GitHub Actions",
    "Hỗ trợ custom domain",
    "Tự nhận diện base path",
  ],
  howItWorksLabel: "Cách hoạt động",
  howItWorksTitle: "Ba bước là lên web",
  howItWorksSubtitle:
    "Không cần biết lập trình. Nhờ AI sinh JSX, dán vào, push, xong.",
  steps: [
    {
      number: "01",
      title: "Nhờ AI sinh JSX",
      body: "Nhờ Claude, ChatGPT hay AI nào đó sinh trang của bạn dưới dạng component React định dạng JSX.",
    },
    {
      number: "02",
      title: "Tạo repo của bạn",
      body: "Trên trang GitHub, nhấn “Use this template” → “Create a new repository” để tạo repo riêng. Tên người dùng GitHub và tên repo sẽ quyết định URL trang web của bạn. Sau đó vào Settings → Pages đặt Source là GitHub Actions.",
    },
    {
      number: "03",
      title: "Dán vào, lưu lại",
      body: "Dán JSX do AI tạo vào src/App.jsx — xóa và thay thế toàn bộ nội dung hiện có — rồi lưu file. GitHub Actions sẽ tự build và publish site cho bạn.",
    },
  ],
  filesLabel: "File của bạn",
  filesTitle: "Cần thay đổi gì",
  filesSubtitle:
    "Hầu hết bạn chỉ cần đổi một file. Hai file còn lại là tuỳ chọn.",
  files: [
    { name: "src/App.jsx", tag: "Bắt buộc", desc: "Dán JSX do AI sinh ra vào đây. Đây là file duy nhất bạn cần thay.", required: true },
    { name: "index.html", tag: "Tuỳ chọn", desc: "Đổi tiêu đề, mô tả trang và Google Analytics cho phù hợp với site của bạn.", required: false },
    { name: "public/CNAME", tag: "Tuỳ chọn", desc: "Cài custom domain. Không cần thì để nguyên.", required: false },
  ],
  tipLabel: "Mẹo",
  tipText: "Nếu code AI dùng package chưa có sẵn trong template, chạy",
  tipCommand: "npm run check",
  tipAfter: "để tìm và sửa các dependency còn thiếu.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "Bảo lưu mọi quyền.",
  langLabel: "Ngôn ngữ",
  themeLight: "Chế độ sáng",
  themeDark: "Chế độ tối",
  promptLabel: "Prompt mẫu",
  promptHint: "Sao chép prompt này và dán vào công cụ AI của bạn. Điền vào chỗ trống.",
  promptVariants: [
    { label: "Landing Page", template: `Tạo một landing page dạng JSX để quảng bá sản phẩm hoặc dịch vụ.
Chủ đề:
Phong cách:
Chi tiết:
Tham khảo các file đính kèm, nếu có.
Cung cấp dưới dạng file tải về hoặc hiển thị trên Canvas.` },
    { label: "Portfolio", template: `Tạo một trang portfolio cá nhân dạng JSX.
Chủ đề:
Phong cách:
Chi tiết:
Tham khảo các file đính kèm, nếu có.
Cung cấp dưới dạng file tải về hoặc hiển thị trên Canvas.` },
    { label: "Dashboard", template: `Tạo một trang dashboard quản trị dạng JSX.
Chủ đề:
Phong cách:
Chi tiết:
Tham khảo các file đính kèm, nếu có.
Cung cấp dưới dạng file tải về hoặc hiển thị trên Canvas.` },
    { label: "Blog", template: `Tạo một trang chủ blog dạng JSX.
Chủ đề:
Phong cách:
Chi tiết:
Tham khảo các file đính kèm, nếu có.
Cung cấp dưới dạng file tải về hoặc hiển thị trên Canvas.` },
    { label: "SaaS", template: `Tạo một trang sản phẩm SaaS dạng JSX.
Chủ đề:
Phong cách:
Chi tiết:
Tham khảo các file đính kèm, nếu có.
Cung cấp dưới dạng file tải về hoặc hiển thị trên Canvas.` },
  ],
  promptCopy: "Sao chép",
  promptCopied: "Đã sao chép!",
};

export default vi;
