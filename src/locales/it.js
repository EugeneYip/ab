const it = {
  badge: "AI Page Publisher",
  heroTitle: ["Pubblica pagine AI", "con un solo push."],
  heroSubtitle:
    "Un template semplice per trasformare qualsiasi componente React generato dall'AI in un sito web live. Sostituisci un file. Fai push su GitHub. Fatto.",
  ctaPrimary: "Usa questo template",
  ctaSecondary: "Leggi il README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.it.md",
  includedLabel: "Incluso",
  includedTitle: "Cosa ottieni",
  includes: [
    "Oltre 40 componenti shadcn/ui",
    "Oltre 160 pacchetti preinstallati",
    "Tailwind CSS, pronto all'uso",
    "Deployment con GitHub Actions",
    "Supporto per domini personalizzati",
    "Rilevamento automatico del base path",
  ],
  howItWorksLabel: "Come funziona",
  howItWorksTitle: "Tre passi per andare online",
  howItWorksSubtitle:
    "Non serve esperienza di programmazione. Chiedi il JSX all'AI, incollalo, fai push, fatto.",
  steps: [
    {
      number: "01",
      title: "Chiedi il JSX alla tua AI",
      body: "Chiedi a Claude, ChatGPT o qualsiasi AI di generare la tua pagina come componente React in formato JSX.",
    },
    {
      number: "02",
      title: "Configura il tuo repo",
      body: "Nella pagina GitHub, clicca su “Use this template” → “Create a new repository” per creare il tuo repo. Il tuo nome utente GitHub e il nome del repo determineranno l'URL del tuo sito. Poi vai su Settings → Pages e imposta Source su GitHub Actions.",
    },
    {
      number: "03",
      title: "Incolla e salva",
      body: "Incolla il JSX generato dall'AI in src/App.jsx — cancella e sostituisci tutto il contenuto esistente — poi salva il file. GitHub Actions compila e pubblica il tuo sito automaticamente.",
    },
  ],
  filesLabel: "I tuoi file",
  filesTitle: "Cosa cambierai",
  filesSubtitle:
    "Nella maggior parte dei casi tocchi solo un file. Gli altri due sono opzionali.",
  files: [
    { name: "src/App.jsx", tag: "Obbligatorio", desc: "Incolla qui il JSX generato dall'AI. È l'unico file che devi modificare.", required: true },
    { name: "index.html", tag: "Opzionale", desc: "Aggiorna il titolo, la descrizione e Google Analytics per il tuo sito.", required: false },
    { name: "public/CNAME", tag: "Opzionale", desc: "Imposta il tuo dominio personalizzato. Lascia com'è se non ne hai bisogno.", required: false },
  ],
  tipLabel: "Suggerimento",
  tipText: "Se il codice dell'AI usa un pacchetto non incluso nel template, esegui",
  tipCommand: "npm run check",
  tipAfter: "per trovare e correggere le dipendenze mancanti.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "Tutti i diritti riservati.",
  langLabel: "Lingua",
  themeLight: "Modalità chiara",
  themeDark: "Modalità scura",
  promptLabel: "Prompt iniziale",
  promptHint: "Copia questo prompt e incollalo nel tuo strumento AI. Compila gli spazi vuoti.",
  promptVariants: [
    { label: "Landing Page", template: `Crea una landing page in formato JSX per promuovere un prodotto o servizio.
Tema:
Stile:
Dettagli:
Consulta gli allegati come riferimento, se presenti.
Fornisci come file scaricabile o mostra in Canvas.` },
    { label: "Portfolio", template: `Crea una pagina portfolio personale in formato JSX.
Tema:
Stile:
Dettagli:
Consulta gli allegati come riferimento, se presenti.
Fornisci come file scaricabile o mostra in Canvas.` },
    { label: "Dashboard", template: `Crea un dashboard amministrativo in formato JSX.
Tema:
Stile:
Dettagli:
Consulta gli allegati come riferimento, se presenti.
Fornisci come file scaricabile o mostra in Canvas.` },
    { label: "Blog", template: `Crea una homepage del blog in formato JSX.
Tema:
Stile:
Dettagli:
Consulta gli allegati come riferimento, se presenti.
Fornisci come file scaricabile o mostra in Canvas.` },
    { label: "SaaS", template: `Crea una pagina prodotto SaaS in formato JSX.
Tema:
Stile:
Dettagli:
Consulta gli allegati come riferimento, se presenti.
Fornisci come file scaricabile o mostra in Canvas.` },
  ],
  promptCopy: "Copia",
  promptCopied: "Copiato!",
};

export default it;
