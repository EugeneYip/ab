# AI Page Publisher

> AI が生成した React ページを、たった 1 回の push でウェブに公開。

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Claude、ChatGPT、お好きな LLM でページを生成して、`src/App.jsx` に貼り付けて push。それだけで完了です。

## クイックスタート

1. **AI に JSX で生成してもらう** — Claude、ChatGPT などに、作りたいページを **JSX 形式**の React コンポーネントとして書いてもらいます

   <details>
   <summary>プロンプトテンプレート（クリックして展開、コピー）</summary>

   ```
   src/App.jsx としてそのまま使える React ページを JSX 形式で作成してください。

   テーマ：[サイトのテーマ — 例：カフェ、ポートフォリオ、SaaS プロダクト紹介]
   スタイル：[デザインスタイル — 例：ミニマル、モダン、カラフル、コーポレート]
   詳細：[必要なセクション — 例：ヒーロー、特徴紹介、お客様の声、料金、お問い合わせ]

   技術要件：
   - スタイリングはすべて Tailwind CSS を使用
   - 必要に応じて shadcn/ui コンポーネントを使用（@/components/ui/ からインポート）
   - アイコンは lucide-react を使用
   - モバイルとデスクトップの両方に対応（レスポンシブ）
   - エクスポート形式：export default function App()
   - 単一ファイルのみ、追加の CSS ファイルや CDN スクリプトは不要
   ```

   </details>

2. **このテンプレートを使う** — GitHub ページで **「Use this template」** → **「Create a new repository」** をクリックして自分のリポジトリを作成。GitHub のユーザー名とリポジトリ名でサイトの URL が決まります（`https://<ユーザー名>.github.io/<リポジトリ名>/`）
3. **GitHub Pages を有効化** — **Settings → Pages** で Source を **GitHub Actions** に設定
4. [`src/App.jsx`](../src/App.jsx) を**差し替え** — AI が生成した JSX をこのファイルに貼り付け、**既存の内容をすべて削除して置き換えて**から保存

## カスタマイズ（任意）

| 項目 | やり方 |
| :-- | :-- |
| ページタイトル、説明、Google Analytics | [`index.html`](../index.html) の `<title>`、`<meta name="description">` と Google Analytics を編集 |
| カスタムドメイン | [`public/CNAME`](../public/CNAME) のプレースホルダーを自分のドメイン（例: `mysite.com`）に書き換え、DNS を GitHub Pages に向けて、**Settings → Pages → Custom domain** に同じドメインを入力。または **Settings → Secrets and variables → Actions → Variables** で `CUSTOM_DOMAIN` という repository variable を追加してもOK |

## 含まれているもの

AI が作るページでよく使うものは、このテンプレートに最初からひと通り揃っています。

- **React 18 + Vite + Tailwind CSS 3** — モダンで速い、設定不要のビルド環境
- **shadcn/ui コンポーネント 40 種以上** を `src/components/ui/` にプリインストール済み
- **Radix UI のプリミティブ一式** でアクセシブルな操作に対応
- **アイコン** — `lucide-react`、`react-icons`、`@heroicons/react`
- **チャートとデータ可視化** — `recharts`、`chart.js` と `react-chartjs-2`、`d3`、`apexcharts`
- **地図** — `leaflet` と `react-leaflet`、`@react-google-maps/api`、`react-simple-maps`
- **動画・音声** — `react-player`、`howler`
- **アニメーション** — `framer-motion`、`react-spring`、`lottie-react`、`react-confetti`、`aos`、`tailwindcss-animate`
- **リッチテキスト** — `@tiptap/react` と starter-kit + 12 種の拡張（link、image、table、color、highlight…）
- **フォーム** — `react-hook-form` と `@hookform/resolvers`、`zod`、`react-number-format`
- **フロー図** — `@xyflow/react`
- **3D** — `three`、`@react-three/fiber`、`@react-three/drei`
- **画像** — `react-easy-crop`、`react-image-gallery`、`yet-another-react-lightbox`、`react-lazy-load-image-component`
- **PDF** — `jspdf`、`@react-pdf/renderer`、`react-pdf`、`pdf-lib`
- **カレンダー** — `react-big-calendar`、`react-day-picker`
- **決済** — `@stripe/stripe-js` と `@stripe/react-stripe-js`
- **i18n** — `i18next` と `react-i18next`
- **SEO** — `react-helmet-async`
- **メール** — `@emailjs/browser`
- **ファイル操作** — `file-saver`、`jszip`、`papaparse`、`xlsx`
- **検索** — `fuse.js`
- **UIエフェクト** — `react-type-animation`、`@tsparticles/react`、`react-parallax-tilt`
- **ドラッグ＆ドロップ** — `@dnd-kit/core` + sortable、`react-beautiful-dnd`
- **カルーセル** — `embla-carousel-react`、`swiper`、`react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`、`@emotion/react`
- **ユーティリティ** — `date-fns`、`dayjs`、`lodash`、`axios`、`zustand`、`react-router-dom`、`nanoid`、`crypto-js`、`@faker-js/faker` など多数

> Tree-shaking が効くので、実際に使っているパッケージだけが最終バンドルに残ります。

## 足りない依存のチェック

AI が生成したコードがプリインストールされていないパッケージを使っているときは、次を実行してください。

```bash
npm run check
```

ソースファイルをスキャンして、足りない依存を、そのまま使える `npm install` コマンドつきで報告します。

## ベースパスの仕組み

ビルド時に正しいベースパスが自動で検出されます。

| シナリオ | ベースパス |
| :-- | :-- |
| カスタムドメイン（CNAME にドメインあり） | `/` |
| GitHub Pages（カスタムドメインなし） | `/<リポジトリ名>/` |
| ローカル開発 | `/` |

手動設定は必要ありません。

## ファイル構成

```
├── src/
│   ├── App.jsx              ← このファイルを差し替え
│   ├── main.jsx             ← エントリーポイント（触らない）
│   ├── index.css            ← Tailwind と shadcn テーマ
│   ├── lib/utils.js         ← cn() ユーティリティ
│   ├── hooks/use-toast.js   ← トースト hook
│   └── components/ui/       ← shadcn/ui コンポーネント
├── public/
│   ├── CNAME                ← カスタムドメイン（任意）
│   └── favicon.svg          ← サイトアイコン
├── scripts/
│   └── check-imports.js     ← 足りない依存を検出
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions デプロイ
├── index.html               ← ページタイトルと meta タグ
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## shadcn/ui コンポーネントを追加する

テンプレートには 40 以上の shadcn コンポーネントが入っています。もっと欲しい場合は次を実行してください。

```bash
npx shadcn@latest add <コンポーネント名>
```

`components.json` は設定済みです。

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

## トラブルシューティング

**ビルドが import エラーで落ちる**
`npm run check` で足りないパッケージを確認して、そのままインストールしてください。

**デプロイ後にページが真っ白**
GitHub Pages の Source が「Deploy from a branch」ではなく **GitHub Actions** になっているか確認してください。

**カスタムドメインが効かない**
`public/CNAME` に自分のドメインだけが書かれているか、DNS レコードも合わせて確認してください。
