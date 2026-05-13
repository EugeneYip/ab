const ja = {
  badge: "AI Page Publisher",
  heroTitle: ["ワンプッシュで", "AIページを公開。"],
  heroSubtitle:
    "AI が生成した React コードを、そのままウェブサイトとして公開できるシンプルなテンプレート。ファイルを 1 つ差し替えて、GitHub に push するだけ。",
  ctaPrimary: "このテンプレートを使う",
  ctaSecondary: "README を読む",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ja.md",
  includedLabel: "含まれるもの",
  includedTitle: "テンプレートの中身",
  includes: [
    "shadcn/ui コンポーネント 40 種以上",
    "160 以上のパッケージをプリインストール",
    "Tailwind CSS をそのまま利用可能",
    "GitHub Actions で自動デプロイ",
    "カスタムドメイン対応",
    "ベースパスを自動検出",
  ],
  howItWorksLabel: "仕組み",
  howItWorksTitle: "3 ステップで公開",
  howItWorksSubtitle:
    "プログラミングの経験は不要。AI に JSX を頼んで、貼り付けて、push するだけ。",
  steps: [
    {
      number: "01",
      title: "AI に JSX を頼む",
      body: "Claude、ChatGPT、お好きな AI に、作りたいページを JSX 形式の React コンポーネントとして書いてもらいます。",
    },
    {
      number: "02",
      title: "リポジトリを準備",
      body: "GitHub ページで「Use this template」→「Create a new repository」をクリックして自分のリポジトリを作成。GitHub のユーザー名とリポジトリ名でサイトの URL が決まります。次に Settings → Pages で Source を GitHub Actions に設定。",
    },
    {
      number: "03",
      title: "貼り付けて保存",
      body: "AI が生成した JSX を src/App.jsx に貼り付けます。既存の内容をすべて削除して置き換えてから、ファイルを保存してください。GitHub Actions が自動でビルドして公開してくれます。",
    },
  ],
  filesLabel: "ファイル",
  filesTitle: "変更するファイル",
  filesSubtitle:
    "ほとんどの場合、編集するのは 1 ファイルだけです。残り 2 つは任意です。",
  files: [
    { name: "src/App.jsx", tag: "必須", desc: "AI が生成した JSX をここに貼り付けます。変更が必要なのはこのファイルだけです。", required: true },
    { name: "index.html", tag: "任意", desc: "ページのタイトル、説明、Google Analytics を自分のサイトに合わせて変更します。", required: false },
    { name: "public/CNAME", tag: "任意", desc: "カスタムドメインを設定します。不要ならそのままで OK。", required: false },
  ],
  tipLabel: "ヒント",
  tipText: "AI のコードがテンプレートに含まれないパッケージを使っている場合は",
  tipCommand: "npm run check",
  tipAfter: "を実行すれば、足りない依存を見つけて修正できます。",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "著作権所有。",
  langLabel: "言語",
  themeLight: "ライトモード",
  themeDark: "ダークモード",
  promptLabel: "プロンプトテンプレート",
  promptHint: "以下のプロンプトを AI ツールにコピー＆ペーストし、空欄を埋めてください。",
  promptVariants: [
    { label: "LP", template: `JSX 形式で商品・サービスを宣伝するランディングページを作ってください。
テーマ：
スタイル：
詳細情報：
添付ファイルがあれば参考にしてください。
ダウンロードファイルとして提供するか、Canvas で表示してください。` },
    { label: "ポートフォリオ", template: `JSX 形式で個人ポートフォリオページを作ってください。
テーマ：
スタイル：
詳細情報：
添付ファイルがあれば参考にしてください。
ダウンロードファイルとして提供するか、Canvas で表示してください。` },
    { label: "ダッシュボード", template: `JSX 形式で管理ダッシュボードを作ってください。
テーマ：
スタイル：
詳細情報：
添付ファイルがあれば参考にしてください。
ダウンロードファイルとして提供するか、Canvas で表示してください。` },
    { label: "ブログ", template: `JSX 形式でブログのホームページを作ってください。
テーマ：
スタイル：
詳細情報：
添付ファイルがあれば参考にしてください。
ダウンロードファイルとして提供するか、Canvas で表示してください。` },
    { label: "SaaS", template: `JSX 形式で SaaS の製品ページを作ってください。
テーマ：
スタイル：
詳細情報：
添付ファイルがあれば参考にしてください。
ダウンロードファイルとして提供するか、Canvas で表示してください。` },
  ],
  promptCopy: "コピー",
  promptCopied: "コピーしました！",
};

export default ja;
