const pt = {
  badge: "AI Page Publisher",
  heroTitle: ["Publique páginas de IA", "com um único push."],
  heroSubtitle:
    "Um template simples para transformar qualquer componente React gerado por IA em um site no ar. Troque um arquivo. Faça push no GitHub. Pronto.",
  ctaPrimary: "Usar este template",
  ctaSecondary: "Ler o README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.pt.md",
  includedLabel: "Incluído",
  includedTitle: "O que você recebe",
  includes: [
    "40+ componentes shadcn/ui",
    "160+ pacotes pré-instalados",
    "Tailwind CSS, pronto para usar",
    "Deploy com GitHub Actions",
    "Suporte a domínios personalizados",
    "Detecção automática de base path",
  ],
  howItWorksLabel: "Como funciona",
  howItWorksTitle: "Três passos para o ar",
  howItWorksSubtitle:
    "Não precisa saber programar. Peça JSX à IA, cole, faça push e pronto.",
  steps: [
    {
      number: "01",
      title: "Peça JSX à sua IA",
      body: "Diga ao Claude, ChatGPT ou qualquer IA para gerar sua página como componente React em formato JSX.",
    },
    {
      number: "02",
      title: "Configure seu repo",
      body: "Na página do GitHub, clique em “Use this template” → “Create a new repository” para criar seu repositório. Seu nome de usuário do GitHub e o nome do repo determinarão a URL do seu site. Depois vá em Settings → Pages e defina Source como GitHub Actions.",
    },
    {
      number: "03",
      title: "Cole e salve",
      body: "Cole o JSX gerado pela IA em src/App.jsx — apague e substitua todo o conteúdo existente — e salve o arquivo. O GitHub Actions compila e publica seu site automaticamente.",
    },
  ],
  filesLabel: "Seus arquivos",
  filesTitle: "O que você vai mudar",
  filesSubtitle:
    "Na maioria das vezes você só altera um arquivo. Os outros dois são opcionais.",
  files: [
    { name: "src/App.jsx", tag: "Obrigatório", desc: "Cole o JSX gerado pela IA aqui. Este é o único arquivo que você precisa mudar.", required: true },
    { name: "index.html", tag: "Opcional", desc: "Atualize o título, a descrição e o Google Analytics para combinar com seu site.", required: false },
    { name: "public/CNAME", tag: "Opcional", desc: "Configure seu domínio personalizado. Se não precisar, deixe como está.", required: false },
  ],
  tipLabel: "Dica",
  tipText: "Se o código da IA usa um pacote que não está no template, execute",
  tipCommand: "npm run check",
  tipAfter: "para encontrar e corrigir dependências faltantes.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "Todos os direitos reservados.",
  langLabel: "Idioma",
  themeLight: "Modo claro",
  themeDark: "Modo escuro",
  promptLabel: "Prompt inicial",
  promptHint: "Copie este prompt e cole na sua ferramenta de IA. Preencha os espaços em branco.",
  promptVariants: [
    { label: "Landing Page", template: `Crie uma landing page em formato JSX para promover um produto ou serviço.
Tema:
Estilo:
Detalhes:
Consulte os arquivos em anexo como referência, se houver.
Forneça como arquivo para download ou exiba no Canvas.` },
    { label: "Portfólio", template: `Crie uma página de portfólio pessoal em formato JSX.
Tema:
Estilo:
Detalhes:
Consulte os arquivos em anexo como referência, se houver.
Forneça como arquivo para download ou exiba no Canvas.` },
    { label: "Dashboard", template: `Crie um dashboard administrativo em formato JSX.
Tema:
Estilo:
Detalhes:
Consulte os arquivos em anexo como referência, se houver.
Forneça como arquivo para download ou exiba no Canvas.` },
    { label: "Blog", template: `Crie uma homepage de blog em formato JSX.
Tema:
Estilo:
Detalhes:
Consulte os arquivos em anexo como referência, se houver.
Forneça como arquivo para download ou exiba no Canvas.` },
    { label: "SaaS", template: `Crie uma página de produto SaaS em formato JSX.
Tema:
Estilo:
Detalhes:
Consulte os arquivos em anexo como referência, se houver.
Forneça como arquivo para download ou exiba no Canvas.` },
  ],
  promptCopy: "Copiar",
  promptCopied: "Copiado!",
};

export default pt;
