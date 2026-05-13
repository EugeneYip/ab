const ko = {
  badge: "AI Page Publisher",
  heroTitle: ["AI 페이지를 배포하세요,", "단 한 번의 push로."],
  heroSubtitle:
    "AI가 생성한 React 컴포넌트를 바로 라이브 웹사이트로 만드는 간결한 템플릿. 파일 하나만 교체하고 GitHub에 push하면 끝.",
  ctaPrimary: "이 템플릿 사용하기",
  ctaSecondary: "README 읽기",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.ko.md",
  includedLabel: "포함 항목",
  includedTitle: "무엇이 들어있나요",
  includes: [
    "40개 이상의 shadcn/ui 컴포넌트",
    "160개 이상의 사전 설치 패키지",
    "Tailwind CSS, 바로 사용 가능",
    "GitHub Actions 자동 배포",
    "커스텀 도메인 지원",
    "자동 base path 감지",
  ],
  howItWorksLabel: "작동 방식",
  howItWorksTitle: "세 단계로 배포",
  howItWorksSubtitle:
    "코딩 경험이 없어도 돼요. AI에게 JSX를 요청하고, 붙여넣고, push하면 끝.",
  steps: [
    {
      number: "01",
      title: "AI에게 JSX 요청",
      body: "Claude, ChatGPT 또는 원하는 AI에게 페이지를 JSX 형식의 React 컴포넌트로 생성해 달라고 하세요.",
    },
    {
      number: "02",
      title: "저장소 설정",
      body: "GitHub 페이지에서 “Use this template” → “Create a new repository”를 클릭하여 저장소를 만드세요. GitHub 사용자 이름과 저장소 이름이 사이트 URL을 결정해요. 그런 다음 Settings → Pages에서 Source를 GitHub Actions로 설정하세요.",
    },
    {
      number: "03",
      title: "붙여넣고 저장",
      body: "AI가 생성한 JSX를 src/App.jsx에 붙여넣으세요 — 기존 내용을 모두 삭제하고 교체한 후 — 파일을 저장하세요. GitHub Actions가 자동으로 빌드하고 배포해요.",
    },
  ],
  filesLabel: "파일",
  filesTitle: "변경할 파일",
  filesSubtitle:
    "대부분의 경우 파일 하나만 수정하면 돼요. 나머지 둘은 선택사항이에요.",
  files: [
    { name: "src/App.jsx", tag: "필수", desc: "AI가 생성한 JSX를 여기에 붙여넣으세요. 변경이 필요한 유일한 파일이에요.", required: true },
    { name: "index.html", tag: "선택", desc: "페이지 제목, 설명, Google Analytics를 사이트에 맞게 수정하세요.", required: false },
    { name: "public/CNAME", tag: "선택", desc: "커스텀 도메인을 설정하세요. 필요 없으면 그대로 두세요.", required: false },
  ],
  tipLabel: "팁",
  tipText: "AI 코드가 템플릿에 포함되지 않은 패키지를 사용한다면",
  tipCommand: "npm run check",
  tipAfter: "를 실행해 누락된 의존성을 찾아 수정하세요.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "모든 권리 보유.",
  langLabel: "언어",
  themeLight: "라이트 모드",
  themeDark: "다크 모드",
  promptLabel: "시작 프롬프트",
  promptHint: "이 프롬프트를 복사하여 AI 도구에 붙여넣고 빈칸을 채우세요.",
  promptVariants: [
    { label: "랜딩 페이지", template: `JSX 형식으로 제품이나 서비스를 홍보하는 랜딩 페이지를 만들어 주세요.
주제:
스타일:
세부 정보:
첨부 파일이 있으면 참고해 주세요.
다운로드 파일 또는 Canvas로 제공해 주세요.` },
    { label: "포트폴리오", template: `JSX 형식으로 개인 포트폴리오 페이지를 만들어 주세요.
주제:
스타일:
세부 정보:
첨부 파일이 있으면 참고해 주세요.
다운로드 파일 또는 Canvas로 제공해 주세요.` },
    { label: "대시보드", template: `JSX 형식으로 관리자 대시보드를 만들어 주세요.
주제:
스타일:
세부 정보:
첨부 파일이 있으면 참고해 주세요.
다운로드 파일 또는 Canvas로 제공해 주세요.` },
    { label: "블로그", template: `JSX 형식으로 블로그 홈페이지를 만들어 주세요.
주제:
스타일:
세부 정보:
첨부 파일이 있으면 참고해 주세요.
다운로드 파일 또는 Canvas로 제공해 주세요.` },
    { label: "SaaS", template: `JSX 형식으로 SaaS 제품 페이지를 만들어 주세요.
주제:
스타일:
세부 정보:
첨부 파일이 있으면 참고해 주세요.
다운로드 파일 또는 Canvas로 제공해 주세요.` },
  ],
  promptCopy: "복사",
  promptCopied: "복사됨!",
};

export default ko;
