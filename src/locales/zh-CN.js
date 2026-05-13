const zhCN = {
  badge: "AI Page Publisher",
  heroTitle: ["Push 一次", "AI 页面就上线"],
  heroSubtitle:
    "一份简洁模板，把 AI 生成的 React 页面直接变成线上网站。换掉一个文件，push 到 GitHub，就完成了。",
  ctaPrimary: "使用这个模板",
  ctaSecondary: "阅读 README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.zh-CN.md",
  includedLabel: "内置项目",
  includedTitle: "模板包含什么",
  includes: [
    "40+ 个 shadcn/ui 组件",
    "160+ 个预装包",
    "Tailwind CSS，开箱即用",
    "GitHub Actions 自动部署",
    "支持自定义域名",
    "自动检测 base path",
  ],
  howItWorksLabel: "运作方式",
  howItWorksTitle: "三步就上线",
  howItWorksSubtitle:
    "不需要编程经验。让 AI 生成 JSX，粘贴，push，即可上线。",
  steps: [
    {
      number: "01",
      title: "让 AI 生成 JSX",
      body: "让 Claude、ChatGPT 或任何 AI 用 JSX 格式帮你生成想要的 React 页面。",
    },
    {
      number: "02",
      title: "创建你的 repo",
      body: "在 GitHub 页面点击「Use this template」→「Create a new repository」创建自己的 repo。你的 GitHub 用户名和 repo 名称会决定网站网址。然后到 Settings → Pages 把 Source 设成 GitHub Actions。",
    },
    {
      number: "03",
      title: "粘贴并保存",
      body: "将 AI 生成的 JSX 粘贴到 src/App.jsx——删除并替换原来的所有内容——然后保存文件即可。GitHub Actions 会自动 build 并发布你的网站。",
    },
  ],
  filesLabel: "你的文件",
  filesTitle: "需要改的文件",
  filesSubtitle: "通常只需要修改一个文件，其余两个是可选的。",
  files: [
    { name: "src/App.jsx", tag: "必要", desc: "把 AI 生成的 JSX 粘贴到这里。这是唯一需要改的文件。", required: true },
    { name: "index.html", tag: "选用", desc: "更新页面标题、描述和 Google Analytics，配合你自己的网站。", required: false },
    { name: "public/CNAME", tag: "选用", desc: "设置你的自定义域名。不需要的话保持原样即可。", required: false },
  ],
  tipLabel: "小提示",
  tipText: "如果 AI 的代码用到了模板没预装的包，执行",
  tipCommand: "npm run check",
  tipAfter: "就能找到并修复缺少的依赖包。",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "保留所有权利。",
  langLabel: "语言",
  themeLight: "浅色模式",
  themeDark: "深色模式",
  promptLabel: "Prompt 模板",
  promptHint: "复制以下 prompt 粘贴到你的 AI 工具中，填入空白处即可。",
  promptVariants: [
    { label: "落地页", template: `请用 JSX 格式制作一个推广产品或服务的落地页。
主题：
风格：
详细信息：
如有附件，请一并参考。
请提供下载文件，或使用 Canvas 显示。` },
    { label: "作品集", template: `请用 JSX 格式制作一个个人作品集网页。
主题：
风格：
详细信息：
如有附件，请一并参考。
请提供下载文件，或使用 Canvas 显示。` },
    { label: "仪表板", template: `请用 JSX 格式制作一个后台仪表板网页。
主题：
风格：
详细信息：
如有附件，请一并参考。
请提供下载文件，或使用 Canvas 显示。` },
    { label: "博客", template: `请用 JSX 格式制作一个博客首页。
主题：
风格：
详细信息：
如有附件，请一并参考。
请提供下载文件，或使用 Canvas 显示。` },
    { label: "SaaS 产品", template: `请用 JSX 格式制作一个 SaaS 产品网页。
主题：
风格：
详细信息：
如有附件，请一并参考。
请提供下载文件，或使用 Canvas 显示。` },
  ],
  promptCopy: "复制",
  promptCopied: "已复制！",
};

export default zhCN;
