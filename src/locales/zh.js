const zh = {
  badge: "AI Page Publisher",
  heroTitle: ["Push 一次", "AI 頁面就上線"],
  heroSubtitle:
    "一份簡潔範本，把 AI 生成的 React 頁面直接變成線上網站。換掉一個檔案，push 到 GitHub，就完成了。",
  ctaPrimary: "使用這個範本",
  ctaSecondary: "閱讀 README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.zh.md",
  includedLabel: "內建項目",
  includedTitle: "範本包含什麼",
  includes: [
    "40+ 個 shadcn/ui 元件",
    "160+ 個預裝套件",
    "Tailwind CSS，開箱即用",
    "GitHub Actions 自動部署",
    "支援自訂網域",
    "自動偵測 base path",
  ],
  howItWorksLabel: "運作方式",
  howItWorksTitle: "三步就上線",
  howItWorksSubtitle:
    "不需要寫程式經驗。請 AI 生成 JSX，貼上，push，即可上線。",
  steps: [
    {
      number: "01",
      title: "請 AI 生成 JSX",
      body: "請 Claude、ChatGPT 或任何 AI 用 JSX 格式幫你生成想要的 React 頁面。",
    },
    {
      number: "02",
      title: "建立你的 repo",
      body: "在 GitHub 頁面點選「Use this template」→「Create a new repository」建立自己的 repo。你的 GitHub 使用者名稱與 repo 名稱會決定網站網址。接著到 Settings → Pages 把 Source 設成 GitHub Actions。",
    },
    {
      number: "03",
      title: "貼上並儲存",
      body: "將 AI 生成的 JSX 貼進 src/App.jsx——刪除並取代原有的所有內容——然後儲存檔案即可。GitHub Actions 會自動 build 並發佈你的網站。",
    },
  ],
  filesLabel: "你的檔案",
  filesTitle: "需要改的檔案",
  filesSubtitle: "通常只需要修改一個檔案，其餘兩個是進階選用。",
  files: [
    { name: "src/App.jsx", tag: "必要", desc: "把 AI 生成的 JSX 貼到這裡。這是唯一需要改的檔案。", required: true },
    { name: "index.html", tag: "選用", desc: "更新頁面標題、描述和 Google Analytics，配合你自己的網站。", required: false },
    { name: "public/CNAME", tag: "選用", desc: "設定你的自訂網域。不需要的話維持原樣即可。", required: false },
  ],
  tipLabel: "小提示",
  tipText: "如果 AI 的程式碼用到了範本沒預裝的套件，執行",
  tipCommand: "npm run check",
  tipAfter: "就能找到並修復缺少的相依套件。",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "版權所有。",
  langLabel: "語言",
  themeLight: "亮色模式",
  themeDark: "暗色模式",
  promptLabel: "Prompt 範本",
  promptHint: "複製以下 prompt 貼到你的 AI 工具中，填入空白處即可。",
  promptVariants: [
    { label: "落地頁", template: `請用 JSX 格式製作一個推廣產品或服務的落地頁。
主題：
風格：
詳細資訊：
如有附件，請一併參考。
請提供下載檔，或使用 Canvas 顯示。` },
    { label: "作品集", template: `請用 JSX 格式製作一個個人作品集網頁。
主題：
風格：
詳細資訊：
如有附件，請一併參考。
請提供下載檔，或使用 Canvas 顯示。` },
    { label: "儀表板", template: `請用 JSX 格式製作一個後台儀表板網頁。
主題：
風格：
詳細資訊：
如有附件，請一併參考。
請提供下載檔，或使用 Canvas 顯示。` },
    { label: "部落格", template: `請用 JSX 格式製作一個部落格首頁。
主題：
風格：
詳細資訊：
如有附件，請一併參考。
請提供下載檔，或使用 Canvas 顯示。` },
    { label: "SaaS 產品", template: `請用 JSX 格式製作一個 SaaS 產品網頁。
主題：
風格：
詳細資訊：
如有附件，請一併參考。
請提供下載檔，或使用 Canvas 顯示。` },
  ],
  promptCopy: "複製",
  promptCopied: "已複製！",
};

export default zh;
