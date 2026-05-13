const en = {
  badge: "AI Page Publisher",
  heroTitle: ["Publish AI pages", "in one push."],
  heroSubtitle:
    "A clean template that turns any AI-generated React page into a live website. Replace one file. Push to GitHub. Done.",
  ctaPrimary: "Use this template",
  ctaSecondary: "Read the README",
  readmeUrl: "https://github.com/EugeneYip/aiweb#readme",
  includedLabel: "Included",
  includedTitle: "What you get",
  includes: [
    "40+ shadcn/ui components",
    "160+ pre-installed packages",
    "Tailwind CSS, ready to use",
    "GitHub Actions deployment",
    "Custom domain support",
    "Auto base path detection",
  ],
  howItWorksLabel: "How it works",
  howItWorksTitle: "Three steps to go live",
  howItWorksSubtitle:
    "No coding experience needed. Ask any AI for JSX, paste it, push, done.",
  steps: [
    {
      number: "01",
      title: "Ask your AI for JSX",
      body: "Tell Claude, ChatGPT, or any AI to generate your page as a React component in JSX format.",
    },
    {
      number: "02",
      title: "Set up your repo",
      body: "On the GitHub page, click “Use this template” → “Create a new repository” to create your own repo. Your GitHub username and repo name will determine your site URL. Then go to Settings → Pages and set Source to GitHub Actions.",
    },
    {
      number: "03",
      title: "Paste and save",
      body: "Paste the AI-generated JSX into src/App.jsx — delete and replace all existing content — then save the file. GitHub Actions will automatically build and publish your site.",
    },
  ],
  filesLabel: "Your files",
  filesTitle: "What you'll change",
  filesSubtitle:
    "Most of the time you only touch one file. The other two are optional.",
  files: [
    { name: "src/App.jsx", tag: "Required", desc: "Paste your AI-generated JSX here. This is the only file you need to change.", required: true },
    { name: "index.html", tag: "Optional", desc: "Update the page title, meta description, and Google Analytics to match your site.", required: false },
    { name: "public/CNAME", tag: "Optional", desc: "Set your custom domain. Leave as-is if you don't need one.", required: false },
  ],
  tipLabel: "Tip",
  tipText: "If your AI code uses a package not included in the template, run",
  tipCommand: "npm run check",
  tipAfter: "to find and fix missing dependencies.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "All Rights Reserved.",
  langLabel: "Language",
  themeLight: "Light mode",
  themeDark: "Dark mode",
  promptLabel: "Starter Prompt",
  promptHint: "Copy this prompt template into your AI tool, then fill in the blanks.",
  promptVariants: [
    { label: "Landing Page", template: `Create a landing page in JSX format to promote a product or service.
Topic:
Style:
Details:
See attached files for reference, if any.
Provide as a downloadable file or display in Canvas.` },
    { label: "Portfolio", template: `Create a personal portfolio website in JSX format.
Topic:
Style:
Details:
See attached files for reference, if any.
Provide as a downloadable file or display in Canvas.` },
    { label: "Dashboard", template: `Create an admin dashboard in JSX format.
Topic:
Style:
Details:
See attached files for reference, if any.
Provide as a downloadable file or display in Canvas.` },
    { label: "Blog", template: `Create a blog homepage in JSX format.
Topic:
Style:
Details:
See attached files for reference, if any.
Provide as a downloadable file or display in Canvas.` },
    { label: "SaaS", template: `Create a SaaS product website in JSX format.
Topic:
Style:
Details:
See attached files for reference, if any.
Provide as a downloadable file or display in Canvas.` },
  ],
  promptCopy: "Copy",
  promptCopied: "Copied!",
};

export default en;
