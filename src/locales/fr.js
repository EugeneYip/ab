const fr = {
  badge: "AI Page Publisher",
  heroTitle: ["Publiez des pages IA", "en un seul push."],
  heroSubtitle:
    "Un template simple pour transformer n'importe quel composant React généré par IA en site web. Remplacez un fichier. Pushez sur GitHub. C'est fait.",
  ctaPrimary: "Utiliser ce template",
  ctaSecondary: "Lire le README",
  readmeUrl: "https://github.com/EugeneYip/aiweb/blob/main/i/README.fr.md",
  includedLabel: "Inclus",
  includedTitle: "Ce que vous obtenez",
  includes: [
    "Plus de 40 composants shadcn/ui",
    "Plus de 160 paquets préinstallés",
    "Tailwind CSS, prêt à l'emploi",
    "Déploiement via GitHub Actions",
    "Support de domaines personnalisés",
    "Détection automatique du base path",
  ],
  howItWorksLabel: "Comment ça marche",
  howItWorksTitle: "Trois étapes pour publier",
  howItWorksSubtitle:
    "Aucune expérience en programmation requise. Demandez du JSX à l'IA, collez-le, pushez, c'est fait.",
  steps: [
    {
      number: "01",
      title: "Demandez du JSX à votre IA",
      body: "Dites à Claude, ChatGPT ou n'importe quelle IA de générer votre page sous forme de composant React au format JSX.",
    },
    {
      number: "02",
      title: "Configurez votre dépôt",
      body: "Sur la page GitHub, cliquez sur « Use this template » → « Create a new repository » pour créer votre dépôt. Votre nom d'utilisateur GitHub et le nom du repo détermineront l'URL de votre site. Ensuite, allez dans Settings → Pages et définissez Source sur GitHub Actions.",
    },
    {
      number: "03",
      title: "Collez et enregistrez",
      body: "Collez le JSX généré par l'IA dans src/App.jsx — supprimez et remplacez tout le contenu existant — puis enregistrez le fichier. GitHub Actions compile et publie votre site automatiquement.",
    },
  ],
  filesLabel: "Vos fichiers",
  filesTitle: "Ce que vous allez modifier",
  filesSubtitle:
    "La plupart du temps, vous ne touchez qu'un seul fichier. Les deux autres sont optionnels.",
  files: [
    { name: "src/App.jsx", tag: "Requis", desc: "Collez le JSX généré par l'IA ici. C'est le seul fichier que vous devez modifier.", required: true },
    { name: "index.html", tag: "Optionnel", desc: "Mettez à jour le titre, la description et Google Analytics pour correspondre à votre site.", required: false },
    { name: "public/CNAME", tag: "Optionnel", desc: "Configurez votre domaine personnalisé. Laissez tel quel si vous n'en avez pas besoin.", required: false },
  ],
  tipLabel: "Astuce",
  tipText: "Si le code de l'IA utilise un paquet non inclus dans le template, exécutez",
  tipCommand: "npm run check",
  tipAfter: "pour trouver et corriger les dépendances manquantes.",
  footerLine1: "© 2026 Eugene Yip.",
  footerLine2: "Tous droits réservés.",
  langLabel: "Langue",
  themeLight: "Mode clair",
  themeDark: "Mode sombre",
  promptLabel: "Prompt de départ",
  promptHint: "Copiez ce prompt et collez-le dans votre outil IA. Remplissez les champs vides.",
  promptVariants: [
    { label: "Landing Page", template: `Créez une landing page au format JSX pour promouvoir un produit ou service.
Thème :
Style :
Détails :
Consultez les fichiers joints comme référence, le cas échéant.
Fournissez un fichier téléchargeable ou affichez dans Canvas.` },
    { label: "Portfolio", template: `Créez une page portfolio personnel au format JSX.
Thème :
Style :
Détails :
Consultez les fichiers joints comme référence, le cas échéant.
Fournissez un fichier téléchargeable ou affichez dans Canvas.` },
    { label: "Tableau de bord", template: `Créez un tableau de bord administratif au format JSX.
Thème :
Style :
Détails :
Consultez les fichiers joints comme référence, le cas échéant.
Fournissez un fichier téléchargeable ou affichez dans Canvas.` },
    { label: "Blog", template: `Créez une page d'accueil de blog au format JSX.
Thème :
Style :
Détails :
Consultez les fichiers joints comme référence, le cas échéant.
Fournissez un fichier téléchargeable ou affichez dans Canvas.` },
    { label: "SaaS", template: `Créez une page produit SaaS au format JSX.
Thème :
Style :
Détails :
Consultez les fichiers joints comme référence, le cas échéant.
Fournissez un fichier téléchargeable ou affichez dans Canvas.` },
  ],
  promptCopy: "Copier",
  promptCopied: "Copié !",
};

export default fr;
