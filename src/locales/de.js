const de = {
  badge: "AI Page Publisher",
  heroTitle: ["KI-Seiten veröffentlichen", "mit einem Push."],
  heroSubtitle:
    "Ein schlankes Template, um jede KI-generierte React-Seite in eine Live-Website zu verwandeln. Eine Datei ersetzen. Auf GitHub pushen. Fertig.",
  ctaPrimary: "Dieses Template verwenden",
  ctaSecondary: "README lesen",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.de.md",
  includedLabel: "Enthalten",
  includedTitle: "Was du bekommst",
  includes: [
    "Über 40 shadcn/ui-Komponenten",
    "Über 160 vorinstallierte Pakete",
    "Tailwind CSS, sofort einsatzbereit",
    "Deployment mit GitHub Actions",
    "Eigene Domains möglich",
    "Automatische Base-Path-Erkennung",
  ],
  howItWorksLabel: "So funktioniert's",
  howItWorksTitle: "In drei Schritten online",
  howItWorksSubtitle:
    "Keine Programmierkenntnisse nötig. Frag eine KI nach JSX, füge es ein, push, fertig.",
  steps: [
    {
      number: "01",
      title: "Frag deine KI nach JSX",
      body: "Bitte Claude, ChatGPT oder eine beliebige KI, deine Seite als React-Komponente im JSX-Format zu erstellen.",
    },
    {
      number: "02",
      title: "Richte dein Repo ein",
      body: "Klicke auf der GitHub-Seite auf „Use this template“ → „Create a new repository”, um dein eigenes Repo zu erstellen. Dein GitHub-Benutzername und der Repo-Name bestimmen die URL deiner Seite. Gehe dann zu Settings → Pages und setze Source auf GitHub Actions.",
    },
    {
      number: "03",
      title: "Einfügen und speichern",
      body: "Füge das von der KI generierte JSX in src/App.jsx ein — lösche den gesamten vorhandenen Inhalt und ersetze ihn — und speichere die Datei. GitHub Actions baut und veröffentlicht deine Seite automatisch.",
    },
  ],
  filesLabel: "Deine Dateien",
  filesTitle: "Was du änderst",
  filesSubtitle:
    "Meistens änderst du nur eine Datei. Die anderen beiden sind optional.",
  files: [
    { name: "src/App.jsx", tag: "Erforderlich", desc: "Füge das KI-generierte JSX hier ein. Das ist die einzige Datei, die du ändern musst.", required: true },
    { name: "index.html", tag: "Optional", desc: "Aktualisiere Seitentitel, Beschreibung und Google Analytics passend zu deiner Seite.", required: false },
    { name: "public/CNAME", tag: "Optional", desc: "Richte deine eigene Domain ein. Lass es wie es ist, wenn du keine brauchst.", required: false },
  ],
  tipLabel: "Tipp",
  tipText: "Falls dein KI-Code ein Paket verwendet, das nicht im Template enthalten ist, führe",
  tipCommand: "npm run check",
  tipAfter: "aus, um fehlende Abhängigkeiten zu finden und zu beheben.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "Alle Rechte vorbehalten.",
  langLabel: "Sprache",
  themeLight: "Hellmodus",
  themeDark: "Dunkelmodus",
  promptLabel: "Starter-Prompt",
  promptHint: "Kopiere diesen Prompt und füge ihn in dein KI-Tool ein. Fülle die Lücken aus.",
  promptVariants: [
    { label: "Landing Page", template: `Erstelle eine Landing Page im JSX-Format zur Bewerbung eines Produkts oder Services.
Thema:
Stil:
Details:
Beziehe dich auf angehängte Dateien als Referenz, falls vorhanden.
Als Download-Datei bereitstellen oder in Canvas anzeigen.` },
    { label: "Portfolio", template: `Erstelle eine persönliche Portfolio-Website im JSX-Format.
Thema:
Stil:
Details:
Beziehe dich auf angehängte Dateien als Referenz, falls vorhanden.
Als Download-Datei bereitstellen oder in Canvas anzeigen.` },
    { label: "Dashboard", template: `Erstelle ein Admin-Dashboard im JSX-Format.
Thema:
Stil:
Details:
Beziehe dich auf angehängte Dateien als Referenz, falls vorhanden.
Als Download-Datei bereitstellen oder in Canvas anzeigen.` },
    { label: "Blog", template: `Erstelle eine Blog-Startseite im JSX-Format.
Thema:
Stil:
Details:
Beziehe dich auf angehängte Dateien als Referenz, falls vorhanden.
Als Download-Datei bereitstellen oder in Canvas anzeigen.` },
    { label: "SaaS", template: `Erstelle eine SaaS-Produktseite im JSX-Format.
Thema:
Stil:
Details:
Beziehe dich auf angehängte Dateien als Referenz, falls vorhanden.
Als Download-Datei bereitstellen oder in Canvas anzeigen.` },
  ],
  promptCopy: "Kopieren",
  promptCopied: "Kopiert!",
};

export default de;
