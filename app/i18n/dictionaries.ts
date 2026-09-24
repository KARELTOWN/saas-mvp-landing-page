export type Locale = "fr" | "en";
export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

interface Project {
  name: string;
  summary: string;
  description: string;
  stack: string[];
  image: string;
  url: string;
  links?: { label: string; url: string }[];
}

interface Phase {
  duration: string;
  title: string;
  description: string;
}

interface Bonus {
  title: string;
  description: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface Testimonial {
  name: string;
  rating: number;
  quote?: string;
  date: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    masterclass: string;
    benefits: string;
    faq: string;
    about: string;
    cta: string;
    ctaShort: string;
  };
  hero: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    takeawaysTitle: string;
    takeaways: string[];
    videoId: string;
    videoTitle: string;
    ctaPrimary: string;
    note: string;
  };
  trust: { label: string };
  problems: { title: string; items: string[] };
  declic: {
    title: string;
    intro: string;
    beat: string;
    costIntro: string;
    costBullets: string[];
    costClosing: string;
    risk: string;
    credibility: string;
    hook: string;
    team: string;
    insight: string;
    contrast: string;
    methodIntro: string;
    method: string;
    closing: string;
  };
  solution: { title: string; description: string };
  situation: { title: string; items: string[] };
  process: { title: string; subtitle: string; phases: Phase[] };
  caseStudy: {
    title: string;
    subtitle: string;
    projectName: string;
    projectUrl: string;
    steps: { label: string; text: string }[];
  };
  pricing: {
    title: string;
    pricePrefix: string;
    priceLabel: string;
    targetDelay: string;
    description: string;
    deliverables: string[];
  };
  bonuses: { title: string; items: Bonus[] };
  guarantee: { title: string; lead: string; detail: string };
  faqSection: { title: string; items: Faq[] };
  contact: {
    description: string;
    procedureTitle: string;
    procedure: string[];
  };
  testimonials: { title: string; subtitle: string; items: Testimonial[] };
  projects: {
    title: string;
    subtitle: string;
    detailsLabel: string;
    modalEyebrow: string;
    stackLabel: string;
    projectLinkLabel: string;
    linkUnavailableLabel: string;
    closeLabel: string;
    items: Project[];
  };
  about: {
    title: string;
    intro: string;
    trackRecordLead: string;
    trackRecordItems: string[];
    trackRecordClosing: string;
    today: string;
    pivotQuestion: string;
    pivotAnswer: string;
    forYouHeading: string;
    forYouAnswer: string;
    closing: string;
    cta: string;
  };
  footer: { line: string };
  form: {
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    loading: string;
    errorGeneric: string;
  };
}

const projectsFr: Project[] = [
  {
    name: "Opinbase",
    summary: "Transformez les retours clients en actions.",
    description:
      "Opinbase est une plateforme SaaS conçue pour aider les entreprises à recueillir, centraliser et exploiter les avis de leurs clients.\n\nL’idée est simple : permettre à une entreprise de recueillir le ressenti d’un client au moment où son expérience vient de se produire, plutôt que d’attendre qu’il publie spontanément un avis sur une plateforme externe.\n\nGrâce à un QR code placé dans un restaurant, une boutique, un hôtel, un centre de formation ou tout autre point de contact, le client peut accéder instantanément à un formulaire et partager son expérience en quelques secondes.\n\nL’entreprise peut ensuite retrouver l’ensemble de ces retours dans un espace centralisé, suivre leur évolution et identifier rapidement les situations nécessitant une intervention.\n\n## Comprendre ce que pensent réellement les clients\nOpinbase ne se limite pas à collecter des notes.\n\nLes retours peuvent être organisés et filtrés afin de faire ressortir les tendances, les problèmes récurrents et les points de satisfaction. L’entreprise peut ainsi suivre l’évolution de son expérience client dans le temps et comprendre ce qui fonctionne ou nécessite une amélioration.\n\nChaque avis peut également être suivi jusqu’à sa résolution. Une remarque négative ne reste donc pas simplement enregistrée dans une base de données : elle peut devenir un élément à traiter par l’équipe concernée.\n\n## Réagir rapidement aux avis importants\nLorsqu’un nouveau retour est reçu, l’entreprise peut être immédiatement informée.\n\nLes notifications permettent notamment aux équipes de prendre connaissance rapidement des avis sensibles et d’intervenir lorsqu’une situation nécessite une réponse.\n\nOpinbase permet également de consulter les retours directement depuis Telegram, notamment pour suivre les derniers avis et accéder rapidement aux informations importantes sans devoir se connecter systématiquement au tableau de bord.\n\n## Transformer les données en décisions\nÀ mesure que les avis s’accumulent, Opinbase permet de prendre du recul sur l’ensemble des retours collectés.\n\nL’entreprise peut notamment observer l’évolution de sa note, comparer les performances de différents QR codes et identifier les sujets qui reviennent régulièrement dans les commentaires.\n\nL’intelligence artificielle intervient également pour aider à analyser les retours, identifier les situations importantes, proposer des réponses et faire ressortir des pistes d’amélioration.\n\nL’objectif n’est donc pas simplement de savoir « combien de clients sont satisfaits ? », mais également de comprendre « pourquoi ? » et « que pouvons-nous améliorer ? ».\n\n## Une expérience adaptée à chaque entreprise\nChaque entreprise peut personnaliser son expérience de collecte afin de conserver son identité visuelle.\n\nLes QR codes peuvent être utilisés pour différencier plusieurs points de contact : un établissement, un service, une équipe, une campagne ou encore un événement.\n\nCela permet notamment aux entreprises disposant de plusieurs points de vente ou de plusieurs équipes de comprendre plus précisément d’où proviennent leurs retours.\n\n## Du feedback à la réputation en ligne\nOpinbase permet également de distinguer les retours positifs des retours nécessitant une prise en charge.\n\nLorsqu’un client est satisfait, l’entreprise peut l’orienter vers une plateforme d’avis externe afin de l’encourager à partager publiquement son expérience.\n\nÀ l’inverse, lorsqu’un client rencontre un problème, son retour peut être traité en interne afin de permettre à l’entreprise de comprendre la situation et d’y apporter une réponse.\n\nOpinbase crée ainsi un lien entre écoute du client, amélioration de l’expérience et réputation en ligne.\n\n## Une plateforme pensée pour les entreprises\nQu’il s’agisse d’un restaurant souhaitant connaître l’expérience de ses clients, d’un centre de formation souhaitant recueillir les impressions de ses apprenants ou d’une entreprise disposant de plusieurs établissements, Opinbase permet de centraliser les retours et de les exploiter depuis un même espace.\n\n### En résumé\nOpinbase transforme un simple QR code en un canal permanent de dialogue avec les clients.\n\nLe client peut facilement donner son avis.\n\nL’entreprise peut rapidement prendre connaissance des retours.\n\nLes données permettent d’identifier les problèmes récurrents.\n\nL’intelligence artificielle aide à comprendre les tendances et à déterminer les actions à envisager.\n\nEt les retours positifs peuvent contribuer à développer la réputation en ligne.\n\nL’objectif : ne plus seulement collecter des avis, mais utiliser chaque retour client comme une opportunité d’améliorer l’expérience et l’entreprise.",
    stack: [
      "Node.js",
      "Express.js ES6+",
      "Vue.js",
      "Cloudflare R2",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Typesense",
      "Docker",
      "Docker Compose",
      "OpenAI API",
      "TailwindCSS",
      "TypeScript",
      "CI/CD GitLab",
    ],
    image: "/projects/bugreveal.png",
    url: "",
  },
  {
    name: "FileTransfer",
    summary: "Partagez vos fichiers simplement et en toute sécurité.",
    description:
      "FileTransfer est une solution de transfert de fichiers conçue pour permettre à un utilisateur d’envoyer facilement plusieurs fichiers à un ou plusieurs destinataires.\n\nL’expérience est volontairement simple : l’expéditeur sélectionne ses fichiers, indique les destinataires et définit les conditions d’accès au transfert. Les destinataires reçoivent ensuite directement par email un lien leur permettant d’accéder aux fichiers et de les télécharger.\n\n## Un transfert pensé pour les fichiers importants\nFileTransfer permet de regrouper plusieurs fichiers au sein d’un même transfert, ce qui facilite notamment l’envoi de documents, d’images, de vidéos ou d’archives.\n\nL’expéditeur peut également définir une durée de validité pour son transfert. Une fois celle-ci dépassée, le contenu n’est plus accessible.\n\nPour les fichiers nécessitant une protection supplémentaire, un mot de passe peut être associé au transfert. Le destinataire doit alors fournir ce mot de passe avant de pouvoir accéder aux fichiers.\n\n## Une expérience entièrement automatisée\nL’un des objectifs du projet est de supprimer les étapes inutiles lors du partage.\n\nAprès la création d’un transfert, les destinataires sont automatiquement informés par email. Ils reçoivent un lien leur permettant d’accéder directement au contenu qui leur est destiné.\n\nL’expéditeur n’a donc pas besoin d’envoyer manuellement les liens à chaque personne.\n\n## Protéger les fichiers pendant leur stockage\nLes fichiers transférés sont protégés avant leur conservation dans l’espace de stockage.\n\nCette approche permet de limiter l’exposition des documents stockés et de conserver une séparation entre les fichiers eux-mêmes et les informations nécessaires à leur gestion.\n\nLorsqu’un destinataire télécharge un fichier, celui-ci lui est transmis dans son format d’origine.\n\n## Un accès contrôlé\nChaque transfert possède son propre accès.\n\nUn destinataire ne peut accéder qu’au transfert auquel son lien correspond, tandis que les conditions définies par l’expéditeur, notamment l’expiration ou la protection par mot de passe, sont prises en compte lors de l’accès.\n\nCela permet d’éviter de transformer le partage de fichiers en simple dépôt de documents accessible publiquement.\n\n## Une base pour différents usages\nFileTransfer peut servir de fondation à différents services de partage de fichiers :\n\n- transmission de documents à des clients ;\n- échanges de fichiers entre collaborateurs ;\n- envoi de dossiers administratifs ;\n- livraison de fichiers à des partenaires ou prestataires ;\n- partage de contenus volumineux ;\n- transmission de documents nécessitant une durée d’accès limitée.\n\nLa solution peut également être intégrée à une application ou à un portail existant afin d’ajouter une fonctionnalité de transfert de fichiers sans avoir à développer tout le mécanisme depuis zéro.\n\n## Le parcours en quelques étapes\nSélectionner → Destinataires → Protéger → Envoyer → Télécharger\n\nL’expéditeur garde le contrôle sur les conditions du partage, tandis que le destinataire bénéficie d’un accès direct depuis son email.\n\n### L’objectif du projet\nFileTransfer a été conçu autour d’un principe simple :\n\nRendre le transfert de fichiers aussi simple qu’un email, tout en apportant davantage de contrôle sur l’accès aux fichiers.\n\nLe projet constitue ainsi une base complète pour construire des services de transfert de fichiers personnalisés, adaptés aux besoins d’entreprises, d’équipes ou de plateformes SaaS.",
    stack: [
      "Node.js",
      "Express.js ES6+",
      "MySQL",
      "Sequelize",
      "Redis",
      "Cloudflare R2",
    ],
    image: "/projects/case-study-default.svg",
    url: "",
  },
  {
    name: "SURVEY MC",
    summary: "Plateforme d’enquête de satisfaction.",
    description:
      "SURVEY MC est une application interne conçue pour permettre à une organisation de créer, diffuser et gérer facilement des enquêtes de satisfaction auprès de ses collaborateurs.\n\nL’objectif est de simplifier toute la démarche de collecte de feedback : de la création du questionnaire jusqu’à sa diffusion auprès des personnes concernées.\n\nGrâce à une interface intuitive, les administrateurs peuvent concevoir des enquêtes adaptées à leurs différents besoins, en choisissant librement la manière dont chaque question doit être présentée. Les questionnaires peuvent ainsi s’adapter à différents types de réponses et de situations.\n\nL’application permet également de définir des conditions d’affichage afin de proposer une expérience plus personnalisée aux répondants. Certaines questions peuvent ainsi apparaître uniquement lorsque les réponses précédentes le justifient, permettant de construire des enquêtes plus pertinentes et moins contraignantes.\n\nUne fois l’enquête créée, elle peut être facilement partagée auprès des collaborateurs via différents canaux. L’objectif est de rendre la collecte des retours aussi simple que possible, tout en centralisant la gestion des enquêtes au sein d’un même espace.\n\nLes administrateurs disposent également d’un espace leur permettant de gérer les utilisateurs et l’accès à la plateforme, afin de conserver un environnement organisé et maîtrisé.\n\n## Une solution pensée pour écouter les collaborateurs\nSURVEY MC ne se limite pas à la création de questionnaires. L’application facilite la mise en place d’une véritable démarche de collecte de feedback interne.\n\nElle permet aux équipes de poser les bonnes questions, de recueillir plus facilement les opinions des collaborateurs et de disposer d’un outil centralisé pour organiser leurs différentes campagnes d’enquête.\n\nL’enjeu est simple : donner à l’entreprise un moyen structuré d’écouter ses collaborateurs et de mieux comprendre leur expérience.\n\n## Une expérience d’enquête flexible\nChaque enquête peut être construite selon les objectifs de l’administrateur. Qu’il s’agisse de mesurer la satisfaction, recueillir un avis, demander une information ou permettre au collaborateur de transmettre un document, les questionnaires peuvent être adaptés au contexte de chaque enquête.\n\nCette flexibilité permet d’utiliser la plateforme pour différents besoins internes sans devoir recréer un outil spécifique à chaque fois.\n\n## Une plateforme pensée pour évoluer\nSURVEY MC a été conçu comme une base permettant d’aller progressivement vers une solution plus complète de mesure et d’amélioration de l’expérience collaborateur.\n\nL’idée est de transformer progressivement les simples réponses aux questionnaires en une meilleure compréhension des attentes, des difficultés et du niveau de satisfaction des collaborateurs.\n\nSURVEY MC : créer des enquêtes simplement, recueillir les retours et mieux comprendre l’expérience des collaborateurs.",
    stack: [
      "TailwindCSS",
      "Node.js",
      "Express.js ES6+",
      "Vue.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Docker",
      "Docker Compose",
    ],
    image: "/projects/case-study-default.svg",
    url: "",
  },
  {
    name: "BugReveal",
    summary: "Feedback et monitoring utilisateur.",
    description:
      "L’idée de BugReveal est inspirée de BugHerd.\n\nUn simple script JavaScript, généré depuis la plateforme et intégré à n’importe quelle application web, permet de collecter automatiquement différents événements :\n\n- erreurs JavaScript ;\n- erreurs et messages de console ;\n- clics et interactions utilisateur ;\n- rage clicks et comportements inhabituels ;\n- événements importants survenus pendant la navigation.\n\nLa plateforme peut également enregistrer les sessions des utilisateurs. Les données sont chiffrées puis stockées sur Cloudflare R2. L’utilisateur de la plateforme peut ensuite visualiser la session et identifier précisément le contexte et le moment où une erreur ou un comportement problématique s’est produit sur son site ou dans son application.\n\n### Feedback directement depuis l’application\nL’utilisateur final n’a pas besoin de quitter le site pour signaler un problème.\n\nDepuis l’application équipée du script, il peut notamment :\n\n- effectuer une capture d’écran ;\n- enregistrer son écran ;\n- ajouter des annotations ;\n- décrire son problème ;\n- envoyer directement son feedback.\n\nLe contexte technique associé au feedback peut également être automatiquement récupéré afin de faciliter le diagnostic par l’équipe de développement. Chaque feedback est accompagné d’un enregistrement de session, d’un enregistrement des erreurs de console et des anomalies applicatives, afin de comprendre la provenance du problème signalé.\n\n### Transformation du feedback en tâches\nLa plateforme peut être connectée à des outils de gestion de projet comme Trello. Un feedback utilisateur peut ainsi être transformé directement en tâche, avec les informations nécessaires au développeur : description, capture, session concernée, erreurs détectées et contexte technique.\n\nL’objectif est de permettre à une équipe de passer rapidement de :\n\n« Un utilisateur rencontre un problème » à : « Voici exactement ce qu’il a fait, l’erreur qui s’est produite et le contexte permettant de la reproduire. »\n\nLa plateforme devient ainsi un pont entre l’utilisateur, le produit et l’équipe technique.",
    stack: [
      "Node.js",
      "Express.js ES6+",
      "Vue.js",
      "Cloudflare R2",
      "MongoDB",
      "Redis",
      "BullMQ",
      "rweb",
      "Elasticsearch",
      "Docker",
      "Docker Compose",
    ],
    image: "/projects/case-study-default.svg",
    url: "",
  },
  {
    name: "ASOWEMAN",
    summary: "Gestion des établissements scolaires et centres de formation.",
    description:
      "ASOWEMAN est une plateforme de gestion conçue pour les établissements scolaires et centres de formation.\n\nElle permet de centraliser dans un même espace la gestion des apprenants, des formateurs et collaborateurs, des documents ainsi que différentes opérations administratives de l’établissement.\n\nL’objectif est de remplacer une gestion dispersée entre fichiers, documents et outils différents par un environnement unique permettant aux responsables de mieux organiser leur établissement au quotidien.\n\n## Gérer les apprenants simplement\nASOWEMAN permet de centraliser les informations relatives aux étudiants et apprenants de l’établissement.\n\nLes responsables peuvent retrouver leurs profils et organiser les informations selon les niveaux ou les catégories définies par l’établissement.\n\nCette centralisation facilite le suivi administratif et permet de disposer d’une information plus facilement accessible lorsqu’elle est nécessaire.\n\n## Gérer les équipes de l’établissement\nLa plateforme permet également de gérer les collaborateurs et les personnes intervenant dans l’établissement.\n\nLes informations peuvent être organisées selon les fonctions et les départements, permettant aux responsables d’avoir une vision plus claire de leur organisation.\n\nPour les centres de formation, cela permet notamment de mieux structurer les informations relatives aux équipes qui participent au fonctionnement des formations.\n\n## Simplifier la gestion administrative\nASOWEMAN regroupe plusieurs opérations administratives dans un même environnement.\n\nLes responsables peuvent notamment gérer les congés, les informations salariales et les prêts accordés aux collaborateurs, tout en conservant un historique des opérations.\n\nL’objectif est de réduire les tâches administratives répétitives et d’éviter la multiplication des fichiers utilisés pour suivre ces informations.\n\n## Centraliser les documents\nLes établissements produisent et utilisent quotidiennement de nombreux documents.\n\nASOWEMAN permet de les centraliser et de les organiser au sein de la plateforme.\n\nLes responsables peuvent également créer des modèles de documents réutilisables, puis générer de nouveaux documents à partir d’informations déjà disponibles.\n\nCela facilite notamment la production de documents administratifs et réduit le temps consacré aux tâches répétitives.\n\n## Une plateforme adaptée aux différents rôles\nDans un établissement, un administrateur, un responsable pédagogique ou un autre collaborateur n’ont pas nécessairement les mêmes responsabilités.\n\nASOWEMAN permet donc de définir les accès en fonction des rôles de chaque utilisateur.\n\nChacun peut ainsi disposer d’un accès correspondant à ses responsabilités, tout en protégeant les informations auxquelles il ne doit pas accéder.\n\n## Une meilleure visibilité sur l’activité\nLes opérations réalisées dans la plateforme peuvent être suivies afin de conserver une trace des actions importantes.\n\nCette fonctionnalité apporte davantage de transparence et facilite le suivi administratif de l’établissement.\n\nLes responsables peuvent ainsi mieux comprendre les actions effectuées dans la plateforme et conserver un historique des opérations.\n\n## Pour les écoles comme pour les centres de formation\nASOWEMAN a été pensé pour répondre aux besoins de structures qui doivent gérer à la fois leurs apprenants, leurs équipes et leurs opérations administratives.\n\nIl peut notamment être utilisé par :\n\n- établissements scolaires ;\n- écoles privées ;\n- centres de formation professionnelle ;\n- centres de formation continue ;\n- instituts et établissements spécialisés.\n\n## L’objectif du projet\nLa problématique est simple :\n\n> Comment permettre à un établissement de gérer ses apprenants et son administration depuis un seul espace ?\n\nASOWEMAN apporte une réponse en réunissant les principales informations et opérations de l’établissement dans une plateforme centralisée.\n\nASOWEMAN : une plateforme pour mieux organiser, administrer et piloter son établissement scolaire ou son centre de formation.",
    stack: ["Laravel", "Node.js", "Vue.js", "MongoDB"],
    image: "/projects/case-study-default.svg",
    url: "",
  },
];

const projectsEn: Project[] = [
  {
    name: "Opinbase",
    summary: "Turn customer feedback into action.",
    description:
      "Opinbase is a SaaS platform designed to help businesses collect, centralize and use customer feedback.\n\nBusinesses can capture a customer's experience as it happens through a QR code. Customers instantly access a form and share their experience.\n\nThe company can then find all feedback in one central space, track its evolution and quickly identify situations that require action.\n\nOpinbase also analyzes feedback, identifies recurring problems and uses artificial intelligence to understand trends and suggest areas for improvement.",
    stack: [
      "Node.js",
      "Express.js ES6+",
      "Vue.js",
      "Cloudflare R2",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Typesense",
      "Docker",
      "Docker Compose",
      "OpenAI API",
      "TailwindCSS",
      "TypeScript",
      "GitLab CI/CD",
    ],
    image: "/projects/bugreveal.png",
    url: "",
  },
  {
    name: "FileTransfer",
    summary: "Share files simply and securely.",
    description:
      "FileTransfer is a file-transfer solution that lets users easily send multiple files to one or more recipients.\n\nThe sender selects files, adds recipients and defines access conditions. Recipients receive an email with a link to access and download the files.\n\nA transfer can be protected with a password and an expiration period. Files are also protected before being stored.",
    stack: [
      "Node.js",
      "Express.js ES6+",
      "MySQL",
      "Sequelize",
      "Redis",
      "Cloudflare R2",
    ],
    image: "/projects/case-study-default.svg",
    url: "",
  },
  {
    name: "SURVEY MC",
    summary: "Employee satisfaction survey platform.",
    description:
      "SURVEY MC is an internal application designed to help organizations create, distribute and manage employee satisfaction surveys.\n\nAdministrators can design surveys for their needs, customize questions and define display conditions for a more relevant respondent experience.\n\nThe platform makes it easier to collect feedback and provides a central space for organizing survey campaigns.",
    stack: [
      "TailwindCSS",
      "Node.js",
      "Express.js ES6+",
      "Vue.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Docker",
      "Docker Compose",
    ],
    image: "/projects/case-study-default.svg",
    url: "",
  },
  {
    name: "BugReveal",
    summary: "User feedback and monitoring.",
    description:
      "BugReveal is a user feedback and monitoring platform inspired by BugHerd.\n\nA JavaScript script generated by the platform can be integrated into a web application to collect events such as JavaScript errors, console errors and messages, clicks, rage clicks and other important navigation events.\n\nThe platform can also record user sessions to identify the exact context in which an error or problematic behavior occurred.\n\nUsers can take screenshots, record their screen, add annotations and send feedback directly from the application.\n\nFeedback can then be turned into tasks through integrations with project management tools such as Trello.",
    stack: [
      "Node.js",
      "Express.js ES6+",
      "Vue.js",
      "Cloudflare R2",
      "MongoDB",
      "Redis",
      "BullMQ",
      "rweb",
      "Elasticsearch",
      "Docker",
      "Docker Compose",
    ],
    image: "/projects/case-study-default.svg",
    url: "https://bugreveal.com/",
  },
  {
    name: "ASOWEMAN",
    summary: "Management platform for schools and training centers.",
    description:
      "ASOWEMAN is a management platform designed for schools and training centers.\n\nIt centralizes information about learners, employees and the organization's administrative operations.\n\nThe platform manages students, employees, departments, leave, salaries, loans and administrative documents.\n\nIt also includes user and permission management so access can match each user's responsibilities.",
    stack: ["Laravel", "Node.js", "Vue.js", "MongoDB"],
    image: "/projects/case-study-default.svg",
    url: "",
  },
];

const phasesFr: Phase[] = [
  {
    duration: "30 min",
    title: "Phase 0 — Appel de cadrage",
    description:
      "On discute de ton idée, de ton marché et de tes contraintes. Je te dis honnêtement si une application en 4 semaines est réaliste pour ton projet.",
  },
  {
    duration: "Semaine 1",
    title: "Cadrage projet",
    description:
      "Spécifications fonctionnelles, choix techniques, découpage en lots. Tu valides le périmètre exact avant que je code une seule ligne.",
  },
  {
    duration: "Semaines 2-3",
    title: "Build du cœur produit",
    description:
      "Développement des fonctionnalités clés avec démo à la fin de chaque semaine, pour ajuster le tir en continu plutôt qu'à la fin.",
  },
  {
    duration: "Semaine 4",
    title: "Lancement",
    description:
      "Tests, mise en production, transfert de code et de documentation. Ton application est en ligne, entre tes mains, sans dépendance à moi.",
  },
];

const phasesEn: Phase[] = [
  {
    duration: "30 min",
    title: "Phase 0 — Scoping call",
    description:
      "We talk through your idea, your market and your constraints. I'll tell you honestly whether a 4-week application is realistic for your project.",
  },
  {
    duration: "Week 1",
    title: "Project scoping",
    description:
      "Functional specs, technical choices, work broken into batches. You validate the exact scope before I write a single line of code.",
  },
  {
    duration: "Weeks 2-3",
    title: "Building the core product",
    description:
      "Core features get built with a demo at the end of every week, so we adjust continuously instead of at the very end.",
  },
  {
    duration: "Week 4",
    title: "Launch",
    description:
      "Testing, production deployment, code and documentation handover. Your application is live, in your hands, with no dependency on me.",
  },
];

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    meta: {
      title: "Ton application en 4 semaines — Karel Towanou",
      description:
        "Je transforme ton idée en MVP fonctionnel en 4 semaines, du cadrage au lancement. 800 € prix fixe.",
    },
    nav: {
      masterclass: "Masterclass",
      benefits: "Bénéfices",
      faq: "FAQ",
      about: "À propos",
      cta: "Réserver mon appel de cadrage",
      ctaShort: "Réserver mon appel",
    },
    hero: {
      titleBefore: "Ton application en ligne dans ",
      titleHighlight: "4 semaines",
      titleAfter: ". Pas dans 6 mois",
      subtitle:
        "Je transforme ton idée en MVP fonctionnel, que tu peux montrer à tes premiers utilisateurs en 4 semaines. On cadre ensemble le périmètre du MVP, tu valides ce qui doit être construit, puis je m'occupe du développement et de la mise en ligne.",
      takeawaysTitle: "Ce que tu vas tirer de cette masterclass",
      takeaways: [
        "Pourquoi tant de projets s'éloignent de leur objectif initial : construire une solution logicielle qui répond au besoin d'un marché cible, et qui est réellement utilisée.",
        "Les erreurs que font beaucoup de porteurs d'idée de logiciels.",
        "Pourquoi construire une première version de son application avec des fonctionnalités restreintes est la meilleure option.",
      ],
      videoId: "xqCsf42Zh2Q",
      videoTitle: "Masterclass — Lancer son application en 4 semaines",
      ctaPrimary: "Réserver mon appel de cadrage",
      note: "Appel de cadrage gratuit de 30 minutes · Aucun engagement",
    },
    trust: { label: "Déjà utilisé pour :" },
    problems: {
      title: "Tu reconnais cette situation ?",
      items: [
        "Ton idée tourne en boucle dans ta tête depuis des mois, mais elle n'existe encore nulle part.",
        "Une agence t'a proposé un devis à cinq chiffres et plusieurs mois de délai, pour une première version.",
        "Tu as essayé le no-code : ça allait vite, jusqu'au jour où tu as voulu une vraie fonctionnalité métier.",
        "Un freelance a ralenti, puis disparu, en laissant un code que personne ne peut reprendre.",
        "Les semaines passent mais ton projet est au point mort.",
        "Tu as commencé à apprendre à coder pour t'en sortir seul. Tu es à 30 heures de tutoriels et à zéro ligne en production.",
        "Tu ajoutes des fonctionnalités à ton idée à chaque fois que tu y penses. Le projet grossit, mais il ne démarre pas.",
      ],
    },
    declic: {
      title: "Le déclic",
      intro:
        "Si ton projet n'a pas encore vu le jour, ce n'est pas parce que ton idée est mauvaise. C'est parce que tu passes beaucoup de temps à peaufiner le cahier des charges et à imaginer les fonctionnalités à la place des vrais utilisateurs, plutôt qu'à tester quelques fonctionnalités utiles sur le marché afin de recueillir leurs retours.",
      beat: "Et dans ton cas, le temps perdu coûte bien plus que de l'argent.",
      costIntro:
        "Six mois de développement, c'est six mois où tu paies sans ==tester ton produit sur le marché réel==.",
      costBullets: [
        "Tu enrichis un cahier des charges au lieu d'écouter des utilisateurs.",
        "Ton budget fond sur des réunions et des maquettes pendant qu'un concurrent, lui, encaisse ses premiers clients.",
      ],
      costClosing:
        "J'ai vu des porteurs de projet mettre leur produit en ligne après des mois de développement, sans ==plus un euro pour le faire connaître==, et avec une idée qui ne correspondait plus au marché.",
      risk: "Le vrai risque n'est pas de construire le mauvais produit. C'est de mettre si longtemps à le construire que ==tu n'as plus les moyens de le corriger==.",
      credibility:
        "J'ai passé ces dernières années à construire des plateformes pour des institutions gouvernementales et des startups : Ministère de la Justice du Bénin, Autorité de Protection des Données Personnelles...",
      hook: "Mais ce qui m'a le plus marqué, ce sont ces projets startup que j'ai vus se construire pendant des mois pour finir avec ==trois utilisateurs==.",
      team: "Des équipes qui ont tout donné. Un produit soigné, complet, bien codé. Et personne en face. Le budget parti, l'énergie aussi, et cette question qui arrive trop tard : ==est-ce que quelqu'un en voulait vraiment ?==",
      insight:
        "Le déclic est venu de là. Ces projets n'ont pas échoué par manque de compétence technique — ==ils étaient souvent mieux construits que ceux qui marchent==. Ils ont échoué parce qu'ils ont attendu six mois avant de poser la seule question qui compte : ==est-ce que ça intéresse quelqu'un ?==",
      contrast:
        "Un produit sorti en ==quatre semaines== a le droit de se tromper : il reste du budget pour corriger. Un produit sorti en ~~dix mois~~ a moins le droit à l'erreur, et c'est exactement ce qui le condamne.",
      methodIntro: "D'où ma méthode :",
      method:
        "On fige le périmètre avant d'écrire la première ligne. Tu vois une démo chaque semaine, pas un rapport d'avancement. Et à la fin, ==le code t'appartient entièrement== — tu n'es prisonnier de personne, moi compris.",
      closing:
        "Quatre semaines. Ton produit en ligne. Avec assez de budget restant pour la suite.",
    },
    solution: {
      title: "La solution",
      description:
        "On décide ensemble ce qui entre dans la première version, et surtout ce qui n'y entre pas. Quatre semaines plus tard, ton produit est en ligne et confronté à de vrais utilisateurs. Tu arrêtes de deviner : tu t'appuies sur leurs retours pour savoir quoi développer ensuite.",
    },
    situation: {
      title: "Dans 4 semaines, voici où tu en seras",
      items: [
        "Une application en ligne, utilisable par tes premiers testeurs, pas juste une maquette.",
        "Des retours et des chiffres réels pour valider ton marché ou pitcher des investisseurs.",
        "Un code que tu possèdes à 100 %, documenté, que n'importe quel développeur peut reprendre.",
        "Plus aucune dépendance à un prestataire qui pourrait ralentir ou disparaître.",
      ],
    },
    process: {
      title: "Le déroulé",
      subtitle:
        "Un processus simple, découpé en 4 phases, avec un point d'avancement chaque semaine.",
      phases: phasesFr,
    },
    caseStudy: {
      title: "Étude de cas",
      subtitle: "Un produit conçu pour répondre à un besoin métier concret.",
      projectName: "OpinBase",
      projectUrl: "https://bugreveal.com/",
      steps: [
        {
          label: "Le problème",
          text: "Les commerçants savent que des outils de sondage existent (Typeform, Google Forms), mais ils sont conçus pour des équipes marketing, facturés en devises fortes, et trop complexes pour un usage quotidien simple. Résultat : la plupart des petits commerçants n'en utilisent aucun, et prennent leurs décisions produit sans données.",
        },
        {
          label: "Le périmètre figé",
          text: "Génération de QR code, collecte d'avis publique, dashboard basique, notifications Telegram en temps réel, l'analyse et la recommandation IA. Rien d'autre pour la v1 — les réponses automatiques, les alertes sont venues après, une fois le produit validé par l'usage.",
        },
        {
          label: "La durée réelle",
          text: "4 semaines entre la phase de préparation et la finalisation d'un produit utilisable par de vrais commerçants.",
        },
        {
          label: "Le résultat",
          text: "Savoir ce que les clients ne disent pas spontanément, améliorer ses produits et services en conséquence, et fidéliser sa clientèle.",
        },
      ],
    },
    pricing: {
      title: "L'investissement",
      pricePrefix: "À partir de",
      priceLabel: "800 €",
      targetDelay: "Délai cible : 4 semaines • Selon le périmètre validé",
      description:
        "Une première version exploitable pour avancer vers tes utilisateurs, avec un périmètre clair et validé ensemble.",
      deliverables: [
        "Cadrage de ton idée : Définition des fonctionnalités essentielles de ton MVP.",
        "Conception de l'interface : Une application responsive adaptée à ton projet.",
        "Développement sur mesure : Une solution construite selon tes besoins métier.",
        "Intégration des API nécessaires : Connexion aux services prévus dans le périmètre.",
        "Tests et corrections : Vérification des fonctionnalités livrées.",
        "Livraison de ton MVP : Une première version exploitable pour avancer vers tes utilisateurs.",
      ],
    },
    bonuses: {
      title: "Inclus",
      items: [
        {
          title: "Documentation technique complète",
          description:
            "Pas juste le code : une doc claire sur l'architecture, les choix techniques et comment faire évoluer le produit.",
        },
        {
          title: "Session de transfert de compétences",
          description:
            "Un point dédié à la fin du projet pour que tu sois autonome sur la base de code (ou ton futur développeur si tu décides de passer la main à un autre).",
        },
        {
          title: "Garantie de correction de bugs de 7 jours",
          description:
            "Je reste à ta disposition pour répondre à tes questions techniques et corriger des éventuels bugs sur le travail réalisé.",
        },
      ],
    },
    guarantee: {
      title: "La garantie",
      lead: "Le périmètre est figé ensemble dès la semaine 1.",
      detail:
        "En cas de retard qui m'incombe, je finalise le développement du périmètre validé dans un délai supplémentaire d'une semaine — sans frais additionnels.",
    },
    faqSection: {
      title: "Questions fréquentes",
      items: [
        {
          question: "4 semaines, c'est vraiment réaliste ?",
          answer:
            "Ça dépend entièrement du périmètre. C'est justement l'objet de l'appel de cadrage gratuit : je te dis honnêtement si c'est jouable, ou ce qu'il faudrait couper pour que ça le soit.",
        },
        {
          question: "L'appel de cadrage est-il vraiment gratuit ?",
          answer:
            "Oui. 30 minutes, sans frais et sans engagement. Tu repars avec l'utilisateur cible, le périmètre de ta v1 et tes tâches organisées, même si on ne travaille pas ensemble ensuite.",
        },
        {
          question: "Je n'ai qu'une idée, pas de cahier des charges. Ça suffit ?",
          answer:
            "C'est exactement le bon moment. L'appel sert justement à transformer ton idée en un périmètre clair. Arriver sans document écrit ne pose aucun problème.",
        },
        {
          question: "À qui s'adresse cette masterclass ?",
          answer:
            "Aux porteurs d'idée qui veulent mettre une première version entre les mains d'utilisateurs réels : fondateurs non techniques, indépendants et dirigeants de petites structures qui ont un besoin métier précis.",
        },
        {
          question: "Dois-je préparer quelque chose avant l'appel ?",
          answer:
            "Regarde la masterclass, puis note en quelques lignes le problème que ton produit résout et pour qui. C'est largement suffisant pour qu'on avance dès les premières minutes.",
        },
        {
          question: "Et si mon projet ne tient pas en 4 semaines ?",
          answer:
            "Je te le dis pendant l'appel, sans détour. On identifie alors la partie de ton idée qui peut être mise en ligne en premier, et le reste attend les retours de tes utilisateurs.",
        },
      ],
    },
    contact: {
      description:
        "Laisse ton email, tu seras redirigé vers mon calendrier pour choisir un créneau d'appel de cadrage gratuit de 30 minutes.",
      procedureTitle: "Ce que je t'aide à définir lors de l'appel de cadrage",
      procedure: [
        "L'utilisateur cible de ton idée, pour ne pas construire un produit pour tout le monde — et donc pour personne.",
        "Ce que la première version doit faire, et surtout ce qu'elle ne fera pas.",
        "L'organisation de tes tâches pour arriver à une application fonctionnelle en 4 semaines.",
      ],
    },
    testimonials: {
      title: "Ils me recommandent",
      subtitle:
        "Avis clients vérifiés, laissés sur mon profil professionnel Google.",
      items: [
        {
          name: "Romaric Madegnan",
          rating: 4,
          quote:
            "Cédric est un bon développeur web. Il m'a notamment aider dans le développement du site web d'un de nos clients.",
          date: "avril 2022",
        },
        {
          name: "Jean Pascal Gui",
          rating: 5,
          quote: "Très professionnel. Je recommande.",
          date: "juillet 2022",
        },
        {
          name: "Esther Lucette N'Goyi",
          rating: 5,
          date: "il y a 6 semaines",
        },
      ],
    },
    projects: {
      title: "Études de cas",
      subtitle:
        "Des produits conçus pour répondre à des besoins métier concrets, de la collecte de feedback au partage sécurisé de fichiers.",
      detailsLabel: "Voir l'étude de cas",
      modalEyebrow: "Étude de cas",
      stackLabel: "Technologies",
      projectLinkLabel: "Visiter le projet",
      linkUnavailableLabel: "Lien non disponible",
      closeLabel: "Fermer l'étude de cas",
      items: projectsFr,
    },
    about: {
      title: "À propos",
      intro:
        "Je m'appelle Karel Towanou. Je construis des applications web depuis 2020.",
      trackRecordLead:
        "En parallèle, j'ai conçu et développé mes propres produits SaaS, de l'idée à la mise en ligne :",
      trackRecordItems: [
        "Opinbase — Collecte d'avis clients par QR code, avec analyse IA et notifications en temps réel",
        "BugReveal — Feedback utilisateur et rejeu de session pour retrouver l'origine exacte d'un bug",
        "FileTransfer — Envoi de fichiers protégé par mot de passe et lien à durée limitée",
        "SURVEY MC — Plateforme d'enquêtes de satisfaction avec questions conditionnelles",
      ],
      trackRecordClosing:
        "Sur chacun, j'ai eu à trancher exactement ce que tu vas trancher pendant l'appel de cadrage : ==ce qui entre dans la première version, et ce qui attend les retours des utilisateurs==.",
      today:
        "Aujourd'hui, je consacre mon temps à créer des applications web pour des startups qui veulent ==tester rapidement le marché== et valider leurs idées.",
      pivotQuestion: "Pourquoi ce virage ?",
      pivotAnswer:
        "Parce que j'ai vu trop de bons projets mourir non pas d'un défaut technique, mais d'un ~~excès de préparation~~. Des équipes qui construisent pendant ~~huit mois~~, se pensent enfin prêtes, et découvrent qu'il n'y avait personne en face. Je sais construire solide — c'est mon métier depuis cinq ans. J'ai appris qu'il fallait d'abord ==construire vite==.",
      forYouHeading: "Ce que ça change pour toi.",
      forYouAnswer:
        "Tu as un développeur confirmé, réellement investi dans la réussite de ton projet. J'utilise l'IA pour accélérer l'implémentation, ==sans jamais faire l'impasse sur la revue de code==.",
      closing: "Et à la fin, le code t'appartient. Entièrement.",
      cta: "Réserver mon appel de cadrage",
    },
    footer: {
      line: "Je transforme votre idée en MVP en 4 semaines",
    },
    form: {
      emailLabel: "Ton email",
      emailPlaceholder: "toi@startup.com",
      submit: "Réserver mon appel de cadrage",
      loading: "Envoi en cours...",
      errorGeneric: "Une erreur est survenue, réessaie.",
    },
  },
  en: {
    meta: {
      title: "Your Application in 4 Weeks — Karel Towanou",
      description:
        "I turn your idea into a working application in 4 weeks, from scoping to launch. Fixed price: €1,000.",
    },
    nav: {
      masterclass: "Masterclass",
      benefits: "Benefits",
      faq: "FAQ",
      about: "About",
      cta: "Book my scoping call",
      ctaShort: "Book my call",
    },
    hero: {
      titleBefore: "Your app live in ",
      titleHighlight: "4 weeks",
      titleAfter: ". Not 6 months",
      subtitle:
        "I turn your validated idea into a working MVP you can put in front of your first users in 4 weeks. We define the MVP scope together, you approve what gets built, then I handle the development and launch.",
      takeawaysTitle: "What you'll take away from this masterclass",
      takeaways: [
        "Why so many projects drift away from their original goal: building software that answers a real need in a target market, and that actually gets used.",
        "The mistakes most software founders make.",
        "Why building a first version with a deliberately limited set of features is the better option.",
      ],
      videoId: "xqCsf42Zh2Q",
      videoTitle: "Masterclass — Launching your application in 4 weeks",
      ctaPrimary: "Book my scoping call",
      note: "Free 30-minute scoping call · No commitment",
    },
    trust: { label: "Already used for:" },
    problems: {
      title: "Does this sound familiar?",
      items: [
        "Your idea has been looping in your head for months, but it doesn't exist anywhere yet.",
        "An agency quoted you five figures and a multi-month timeline, for a first version.",
        "You tried no-code: it was fast, until the day you needed a real business feature.",
        "A freelancer slowed down, then disappeared, leaving behind code no one else can pick up.",
        "The weeks go by but your project is stuck in place.",
        "You started learning to code to figure it out yourself. You're 30 hours of tutorials in and zero lines in production.",
        "You add features to your idea every time you think of one. The project keeps growing, but it never launches.",
      ],
    },
    declic: {
      title: "The turning point",
      intro:
        "If your project hasn't shipped yet, it's not because your idea is bad. It's because between the agency quoting €5,000 and six months for a first version, and the freelancer who vanishes without a word, no one has offered you ==a short path==.",
      beat: "And in your case, lost time costs far more than money.",
      costIntro:
        "Six months of development is six months paying without ==testing your product on the real market==.",
      costBullets: [
        "You keep polishing a spec instead of listening to users.",
        "Your budget burns on meetings and mockups while a competitor is already signing their first customers.",
      ],
      costClosing:
        "I've seen founders put their product live after months of development, with ==no money left to make it known==, and an idea that no longer fit the market.",
      risk: "The real risk isn't building the wrong product. It's taking so long to build it that ==you no longer have the means to fix it==.",
      credibility:
        "Over the past few years I've built platforms for government institutions and startups: Benin's Ministry of Justice, the Personal Data Protection Authority...",
      hook: "But what struck me most were the startup projects I watched get built for months, only to end up with ==three users==.",
      team: "Teams that gave everything. A polished, complete, well-built product. And no one on the other side. The budget gone, the energy gone, and the question that comes too late: ==did anyone actually want this?==",
      insight:
        "That's where the turning point came from. Those projects didn't fail from a lack of technical skill — they were often better built than the ones that succeed. They failed because they waited six months before asking the only question that matters: ==is anyone interested in this?==",
      contrast:
        "A product shipped in ==four weeks== has the right to be wrong: there's still budget left to fix it. A product shipped in ~~eight months~~ has less room for error, and that's exactly what dooms it.",
      methodIntro: "Hence my method:",
      method:
        "We lock the scope before writing a single line. You see a demo every week, not a status report. And at the end, ==the code is entirely yours== — you're not held hostage by anyone, me included.",
      closing:
        "Four weeks. Your product live. With enough budget left for what comes next.",
    },
    solution: {
      title: "The solution",
      description:
        "We decide together what goes into the first version — and, more importantly, what doesn't. Four weeks later, your product is live and facing real users. You stop guessing: their feedback tells you what to build next.",
    },
    situation: {
      title: "Here's where you'll be in 4 weeks",
      items: [
        "A live application your first testers can actually use, not just a mockup.",
        "Real feedback and numbers to validate your market or pitch investors.",
        "Code you own 100%, documented, that any developer can pick up.",
        "No more dependency on a provider who could slow down or disappear.",
      ],
    },
    process: {
      title: "The process",
      subtitle:
        "A simple process, split into 4 phases, with a progress checkpoint every week.",
      phases: phasesEn,
    },
    caseStudy: {
      title: "Case study",
      subtitle: "A product designed to solve a concrete business need.",
      projectName: "OpinBase",
      projectUrl: "https://bugreveal.com/",
      steps: [
        {
          label: "The problem",
          text: "Merchants know survey tools exist (Typeform, Google Forms), but they're built for marketing teams, billed in strong currencies, and too complex for simple daily use. Result: most small merchants use none of them, and make product decisions without any data.",
        },
        {
          label: "The locked scope",
          text: "QR code generation, public review collection, a basic dashboard, real-time Telegram notifications, AI analysis and recommendations. Nothing else for v1 — automatic replies and alerts came later, once the product was validated by real usage.",
        },
        {
          label: "The real duration",
          text: "4 weeks, from the first commit to a real-time-notified product usable by real merchants.",
        },
        {
          label: "The result",
          text: "Knowing what customers don't say out loud, improving products and services accordingly, and building loyalty.",
        },
      ],
    },
    pricing: {
      title: "The investment",
      pricePrefix: "From",
      priceLabel: "€800",
      targetDelay: "Target timeline: 4 weeks • Depending on the agreed scope",
      description:
        "A usable first version to move toward your users, with a clear scope agreed together from the start.",
      deliverables: [
        "Idea scoping : Define the essential features of your MVP.",
        "Interface design : A responsive application adapted to your project.",
        "Custom development : A solution built around your business needs.",
        "API integration : Connect the services included in the agreed scope.",
        "Testing and fixes : Verify the delivered functionality.",
        "MVP delivery : A first usable version to move toward your users.",
      ],
    },
    bonuses: {
      title: "Included, no extra cost",
      items: [
        {
          title: "Complete technical documentation",
          description:
            "Not just the code: clear docs on the architecture, technical choices, and how to grow the product.",
        },
        {
          title: "Knowledge-transfer session",
          description:
            "A dedicated session at the end of the project so you're self-sufficient on the codebase (or your next developer, if you decide to hand it off to someone else).",
        },
        {
          title: "Priority availability for 2 weeks after launch",
          description:
            "I stay reachable as a priority to answer your technical questions during handover.",
        },
      ],
    },
    guarantee: {
      title: "The guarantee",
      lead: "The scope is locked together as early as week 1.",
      detail:
        "If a delay is on my end, I finish building the agreed scope within one extra week — at no additional cost.",
    },
    faqSection: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Is 4 weeks really realistic?",
          answer:
            "It entirely depends on scope. That's the whole point of the free scoping call: I'll tell you honestly whether it's doable, or what would need to be cut for it to be.",
        },
        {
          question: "Is the scoping call really free?",
          answer:
            "Yes. 30 minutes, no charge and no commitment. You leave with your target user, the scope of your v1 and your tasks organized, even if we don't end up working together.",
        },
        {
          question: "I only have an idea, no spec. Is that enough?",
          answer:
            "That's exactly the right moment. The call is there to turn your idea into a clear scope. Showing up without a written document is not a problem.",
        },
        {
          question: "Who is this masterclass for?",
          answer:
            "Founders who want to put a first version in the hands of real users: non-technical founders, freelancers and small-business owners with a specific business need.",
        },
        {
          question: "Do I need to prepare anything before the call?",
          answer:
            "Watch the masterclass, then write down in a few lines the problem your product solves and who it's for. That's plenty for us to make progress from the first minutes.",
        },
        {
          question: "What if my project doesn't fit into 4 weeks?",
          answer:
            "I'll tell you during the call, straight up. We then identify the part of your idea that can go live first, and the rest waits for feedback from your users.",
        },
      ],
    },
    contact: {
      description:
        "Leave your email, you'll be redirected to my calendar to pick a free 30-minute scoping call slot.",
      procedureTitle: "What I help you define during the scoping call",
      procedure: [
        "The target user for your idea, so you don't build a product for everyone — and therefore for no one.",
        "What the first version must do, and above all what it won't do.",
        "How your tasks are organized to reach a working application in 4 weeks.",
      ],
    },
    testimonials: {
      title: "What people say",
      subtitle:
        "Verified client reviews, left on my professional Google profile.",
      items: [
        {
          name: "Romaric Madegnan",
          rating: 4,
          quote:
            "Cedric is a good web developer. He helped us build a website for one of our clients.",
          date: "April 2022",
        },
        {
          name: "Jean Pascal Gui",
          rating: 5,
          quote: "Very professional. I recommend.",
          date: "July 2022",
        },
        {
          name: "Esther Lucette N'Goyi",
          rating: 5,
          date: "6 weeks ago",
        },
      ],
    },
    projects: {
      title: "Case studies",
      subtitle:
        "Products built to solve concrete business needs, from feedback collection to secure file sharing.",
      detailsLabel: "View case study",
      modalEyebrow: "Case study",
      stackLabel: "Technology",
      projectLinkLabel: "Visit project",
      linkUnavailableLabel: "Private or unavailable link",
      closeLabel: "Close case study",
      items: projectsEn,
    },
    about: {
      title: "About",
      intro:
        "I'm Karel Towanou. I've been building web applications since 2020.",
      trackRecordLead:
        "Alongside that, I've designed and built my own SaaS products, from idea to launch:",
      trackRecordItems: [
        "Opinbase — Customer feedback collection through QR codes, with AI analysis and real-time notifications",
        "BugReveal — User feedback and session replay to pinpoint exactly where a bug came from",
        "FileTransfer — File sending protected by a password and a time-limited link",
        "SURVEY MC — Satisfaction survey platform with conditional questions",
      ],
      trackRecordClosing:
        "On each one, I had to decide exactly what you'll decide during the scoping call: ==what goes into the first version, and what waits for user feedback==.",
      today:
        "Today, I spend my time building web applications for startups that want to ==quickly test the market== and validate their ideas.",
      pivotQuestion: "Why the shift?",
      pivotAnswer:
        "Because I've seen too many good projects die not from a technical flaw, but from ~~over-preparation~~. Teams that build for ~~eight months~~, finally think they're ready, and discover there was no one on the other side. I know how to build solid — it's been my job for five years. I learned that you have to ==build fast== first.",
      forYouHeading: "What this means for you.",
      forYouAnswer:
        "You get a seasoned developer, genuinely invested in your project's success. I use AI to speed up implementation, ==never skipping code review==.",
      closing: "And at the end, the code is yours. Entirely.",
      cta: "Book my scoping call",
    },
    footer: {
      line: "I turn your idea into an MVP in 4 weeks",
    },
    form: {
      emailLabel: "Your email",
      emailPlaceholder: "you@startup.com",
      submit: "Book my scoping call",
      loading: "Sending...",
      errorGeneric: "Something went wrong, please try again.",
    },
  },
};
