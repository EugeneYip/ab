const es = {
  badge: "AI Page Publisher",
  heroTitle: ["Publica páginas de IA", "con un solo push."],
  heroSubtitle:
    "Una plantilla sencilla para llevar cualquier componente de React generado por IA directo a la web. Cambias un archivo, haces push a GitHub y listo.",
  ctaPrimary: "Usar esta plantilla",
  ctaSecondary: "Leer el README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.es.md",
  includedLabel: "Incluido",
  includedTitle: "Lo que obtienes",
  includes: [
    "Más de 40 componentes de shadcn/ui",
    "Más de 160 paquetes preinstalados",
    "Tailwind CSS, listo para usar",
    "Despliegue con GitHub Actions",
    "Soporte para dominio personalizado",
    "Detección automática de base path",
  ],
  howItWorksLabel: "Cómo funciona",
  howItWorksTitle: "Tres pasos y listo",
  howItWorksSubtitle:
    "No necesitas saber programar. Pide JSX a la IA, pégalo, haz push y ya.",
  steps: [
    {
      number: "01",
      title: "Pide JSX a tu IA",
      body: "Dile a Claude, ChatGPT o la IA que prefieras que te genere tu página como componente React en formato JSX.",
    },
    {
      number: "02",
      title: "Configura tu repo",
      body: "En la página de GitHub, haz clic en “Use this template” → “Create a new repository” para crear tu propio repo. Tu nombre de usuario de GitHub y el nombre del repo determinarán la URL de tu sitio. Luego ve a Settings → Pages y pon Source en GitHub Actions.",
    },
    {
      number: "03",
      title: "Pega y guarda",
      body: "Pega el JSX generado por la IA en src/App.jsx — borra y reemplaza todo el contenido existente — y guarda el archivo. GitHub Actions se encarga de compilar y publicar tu sitio automáticamente.",
    },
  ],
  filesLabel: "Tus archivos",
  filesTitle: "Qué vas a cambiar",
  filesSubtitle:
    "Casi siempre solo tocas un archivo. Los otros dos son opcionales.",
  files: [
    { name: "src/App.jsx", tag: "Obligatorio", desc: "Pega aquí el JSX que te generó la IA. Es el único archivo que tienes que cambiar.", required: true },
    { name: "index.html", tag: "Opcional", desc: "Actualiza el título, la descripción y Google Analytics para que coincidan con tu sitio.", required: false },
    { name: "public/CNAME", tag: "Opcional", desc: "Configura tu dominio personalizado. Si no lo necesitas, déjalo como está.", required: false },
  ],
  tipLabel: "Consejo",
  tipText: "Si el código de tu IA usa un paquete que no viene en la plantilla, ejecuta",
  tipCommand: "npm run check",
  tipAfter: "para encontrar y arreglar las dependencias que faltan.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "Todos los derechos reservados.",
  langLabel: "Idioma",
  themeLight: "Modo claro",
  themeDark: "Modo oscuro",
  promptLabel: "Prompt inicial",
  promptHint: "Copia este prompt y pégalo en tu herramienta de IA. Rellena los espacios en blanco.",
  promptVariants: [
    { label: "Landing Page", template: `Crea una landing page en formato JSX para promocionar un producto o servicio.
Tema:
Estilo:
Detalles:
Consulta los archivos adjuntos como referencia, si los hay.
Entrega como archivo descargable o muestra en Canvas, como prefieras.` },
    { label: "Portafolio", template: `Crea una página de portafolio personal en formato JSX.
Tema:
Estilo:
Detalles:
Consulta los archivos adjuntos como referencia, si los hay.
Entrega como archivo descargable o muestra en Canvas, como prefieras.` },
    { label: "Dashboard", template: `Crea un dashboard administrativo en formato JSX.
Tema:
Estilo:
Detalles:
Consulta los archivos adjuntos como referencia, si los hay.
Entrega como archivo descargable o muestra en Canvas, como prefieras.` },
    { label: "Blog", template: `Crea una página de inicio de un blog en formato JSX.
Tema:
Estilo:
Detalles:
Consulta los archivos adjuntos como referencia, si los hay.
Entrega como archivo descargable o muestra en Canvas, como prefieras.` },
    { label: "SaaS", template: `Crea una página de producto SaaS en formato JSX.
Tema:
Estilo:
Detalles:
Consulta los archivos adjuntos como referencia, si los hay.
Entrega como archivo descargable o muestra en Canvas, como prefieras.` },
  ],
  promptCopy: "Copiar",
  promptCopied: "¡Copiado!",
};

export default es;
