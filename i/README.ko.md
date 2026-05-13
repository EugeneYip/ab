# AI Page Publisher

> AI가 생성한 React 페이지를 한 번의 push로 웹에 배포하세요.

| [English](../README.md) · [中文](README.zh.md) · [简体](README.zh-CN.md) · [Español](README.es.md) · [日本語](README.ja.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [العربية](README.ar.md) · [Português](README.pt.md) · [हिन्दी](README.hi.md) · [Tiếng Việt](README.vi.md) · [Bahasa Indonesia](README.id.md) · [한국어](README.ko.md) · [Русский](README.ru.md) · [Italiano](README.it.md) · [Türkçe](README.tr.md) · [اردو](README.ur.md) · [ไทย](README.th.md) · [עברית](README.he.md) |
| :-- |

Claude, ChatGPT 또는 원하는 AI로 페이지를 생성하세요. `src/App.jsx`에 붙여넣으세요. Push하면 끝.

## 빠른 시작

1. **AI에게 JSX 요청** — Claude, ChatGPT 또는 원하는 AI에게 페이지를 **JSX 형식**의 React 컴포넌트로 생성해 달라고 하세요

   <details>
   <summary>시작 프롬프트 (클릭하여 펼치기, 복사)</summary>

   ```
   src/App.jsx로 바로 사용할 수 있는 React 페이지를 JSX 형식으로 만들어 주세요.

   주제: [웹사이트 주제 — 예: 카페, 포트폴리오, SaaS 제품 소개]
   스타일: [디자인 스타일 — 예: 미니멀, 모던, 컬러풀, 기업형]
   세부사항: [원하는 섹션 — 예: 히어로, 기능 소개, 후기, 요금제, 문의]

   기술 요구사항:
   - 모든 스타일링에 Tailwind CSS 사용
   - 적절한 경우 shadcn/ui 컴포넌트 사용 (@/components/ui/에서 import)
   - 아이콘은 lucide-react 사용
   - 모바일과 데스크톱 모두 반응형으로 제작
   - 내보내기 형식: export default function App()
   - 단일 파일, 추가 CSS 파일이나 CDN 스크립트 없이
   ```

   </details>

2. **이 템플릿 사용** — GitHub 페이지에서 **"Use this template"** → **"Create a new repository"**를 클릭하여 저장소를 만드세요. GitHub 사용자 이름과 저장소 이름이 사이트 URL을 결정합니다 (`https://<사용자명>.github.io/<저장소명>/`)
3. **GitHub Pages 활성화** — **Settings → Pages**에서 Source를 **GitHub Actions**로 설정하세요
4. [`src/App.jsx`](../src/App.jsx)를 **교체** — AI가 생성한 JSX를 이 파일에 붙여넣고, **기존 내용을 모두 삭제하고 교체한 후** 저장

## 커스터마이즈 (선택사항)

| 항목 | 방법 |
| :-- | :-- |
| 페이지 제목, 설명, Google Analytics | [`index.html`](../index.html)에서 `<title>`, `<meta name="description">`, Google Analytics를 수정하세요 |
| 커스텀 도메인 | [`public/CNAME`](../public/CNAME)의 placeholder를 도메인으로 교체하고 (예: `mysite.com`), DNS를 GitHub Pages로 설정한 뒤, **Settings → Pages → Custom domain**에 같은 도메인을 입력하세요. 또는 **Settings → Secrets and variables → Actions → Variables**에서 `CUSTOM_DOMAIN` repository variable을 생성하세요 |

## 포함 항목

이 템플릿은 AI 생성 페이지에서 흔히 사용하는 모든 것이 사전 구성되어 있습니다:

- **React 18 + Vite + Tailwind CSS 3** — 현대적이고 빠른 제로 설정 빌드
- **40개 이상의 shadcn/ui 컴포넌트** `src/components/ui/`에 사전 설치
- **모든 Radix UI 프리미티브** 접근성 있는 인터랙션 지원
- **아이콘** — `lucide-react`, `react-icons`, `@heroicons/react`
- **차트 및 데이터 시각화** — `recharts`, `chart.js` + `react-chartjs-2`, `d3`, `apexcharts`
- **지도** — `leaflet` + `react-leaflet`, `@react-google-maps/api`, `react-simple-maps`
- **비디오 및 오디오** — `react-player`, `howler`
- **애니메이션** — `framer-motion`, `react-spring`, `lottie-react`, `react-confetti`, `aos`, `tailwindcss-animate`
- **리치 텍스트** — `@tiptap/react` + starter-kit + 12개 확장 기능 (link, image, table, color, highlight...)
- **폼** — `react-hook-form` + `@hookform/resolvers` + `zod`, `react-number-format`
- **플로 다이어그램** — `@xyflow/react`
- **3D** — `three`, `@react-three/fiber`, `@react-three/drei`
- **이미지** — `react-easy-crop`, `react-image-gallery`, `yet-another-react-lightbox`, `react-lazy-load-image-component`
- **PDF** — `jspdf`, `@react-pdf/renderer`, `react-pdf`, `pdf-lib`
- **캘린더** — `react-big-calendar`, `react-day-picker`
- **결제** — `@stripe/stripe-js` + `@stripe/react-stripe-js`
- **i18n** — `i18next` + `react-i18next`
- **SEO** — `react-helmet-async`
- **이메일** — `@emailjs/browser`
- **파일 처리** — `file-saver`, `jszip`, `papaparse`, `xlsx`
- **검색** — `fuse.js`
- **UI 효과** — `react-type-animation`, `@tsparticles/react`, `react-parallax-tilt`
- **드래그 앤 드롭** — `@dnd-kit/core` + sortable, `react-beautiful-dnd`
- **캐러셀** — `embla-carousel-react`, `swiper`, `react-slick`
- **Canvas** — `fabric`
- **CSS-in-JS** — `styled-components`, `@emotion/react`
- **유틸리티** — `date-fns`, `dayjs`, `lodash`, `axios`, `zustand`, `react-router-dom`, `nanoid`, `crypto-js`, `@faker-js/faker` 등 다수

> Tree-shaking 덕분에 실제로 사용하는 패키지만 최종 번들에 포함됩니다.

## 누락된 import 확인

AI 생성 코드가 사전 설치되지 않은 패키지를 사용하는 경우 실행하세요:

```bash
npm run check
```

소스 파일을 스캔하여 누락된 의존성을 정확한 `npm install` 명령어와 함께 알려줍니다.

## Base path 작동 방식

빌드 시 올바른 base path가 자동으로 감지됩니다:

| 시나리오 | Base path |
| :-- | :-- |
| 커스텀 도메인 (CNAME에 도메인 있음) | `/` |
| GitHub Pages (커스텀 도메인 없음) | `/<저장소명>/` |
| 로컬 개발 | `/` |

수동 설정이 필요 없습니다.

## 파일 구조

```
├── src/
│   ├── App.jsx              ← 이 파일을 교체하세요
│   ├── main.jsx             ← 진입점 (수정하지 마세요)
│   ├── index.css            ← Tailwind + shadcn 테마
│   ├── lib/utils.js         ← cn() 유틸리티
│   ├── hooks/use-toast.js   ← Toast hook
│   └── components/ui/       ← shadcn/ui 컴포넌트
├── public/
│   ├── CNAME                ← 커스텀 도메인 (선택사항)
│   └── favicon.svg          ← 사이트 아이콘
├── scripts/
│   └── check-imports.js     ← 누락된 의존성 감지
├── .github/workflows/
│   └── deploy.yml           ← GitHub Actions 배포
├── index.html               ← 페이지 제목과 meta 태그
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## shadcn/ui 컴포넌트 추가

템플릿에 40개 이상의 shadcn 컴포넌트가 포함되어 있습니다. 더 필요하면:

```bash
npx shadcn@latest add <컴포넌트명>
```

`components.json`이 이미 구성되어 있습니다.

## 로컬 개발

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173`을 여세요.

## 문제 해결

**import 오류로 빌드 실패.**
`npm run check`를 실행하여 누락된 패키지를 확인하고 설치하세요.

**배포 후 페이지가 빈 화면.**
GitHub Pages의 Source가 "Deploy from a branch"가 아닌 **GitHub Actions**로 설정되어 있는지 확인하세요.

**커스텀 도메인이 작동하지 않음.**
`public/CNAME`에 도메인만 있는지 확인하세요. DNS 레코드도 점검하세요.
