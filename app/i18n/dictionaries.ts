export type Locale = "fr" | "en";
export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

interface Project {
  name: string;
  year: string;
  role: string;
  description: string;
  stack: string[];
  image: string;
  url: string;
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
  nav: { solution: string; process: string; pricing: string; faq: string; cta: string };
  hero: {
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
  pricing: { title: string; priceLabel: string; description: string; bullets: string[] };
  bonuses: { title: string; items: Bonus[] };
  guarantee: { title: string; lead: string; detail: string };
  faqSection: { title: string; items: Faq[] };
  contact: { title: string; description: string; procedureTitle: string; procedure: string[] };
  testimonials: { title: string; subtitle: string; items: Testimonial[] };
  projects: { title: string; subtitle: string; items: Project[] };
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
  footer: { line: string; linkedin: string };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    submit: string;
    loading: string;
    note: string;
    errorGeneric: string;
  };
}

const projectsFr: Project[] = [
  {
    name: "BugReveal",
    year: "2026",
    role: "Développeur Vue.js / Fullstack",
    description:
      "Application de collecte d'avis client et d'analyse par IA, pour aider les équipes à exploiter les retours et faciliter la prise de décision.",
    stack: ["JavaScript", "Vue", "Express.js", "API OpenAI", "API REST"],
    image: "/projects/bugreveal.png",
    url: "https://bugreveal.com/",
  },
  {
    name: "PISJ",
    year: "2024",
    role: "Développeur Vue.js puis chef de projet",
    description:
      "Plateforme d'information et de signalement judiciaire : parcours usager, traitement de dossiers, coordination projet et suivi de livraison.",
    stack: ["PHP", "Laravel", "Vue", "MySQL"],
    image: "/projects/pisj.png",
    url: "https://pisj.justice.bj/",
  },
  {
    name: "Génération d'arrêtés",
    year: "2024",
    role: "Développeur Vue.js / Fullstack",
    description:
      "Plateforme de génération d'arrêtés pour le Ministère de la Justice : arrêtés de droit du sol, de mariage, de nationalité béninoise et de répudiation de nationalité, formulaires métier et automatisation documentaire.",
    stack: ["PHP", "Laravel", "Vue", "Workflow"],
    image: "/projects/arrete-justice.png",
    url: "https://arrete.justice.bj/",
  },
  {
    name: "CLEVA",
    year: "2024",
    role: "Développeur Vue.js / Fullstack",
    description:
      "Application de gestion de parc automobile : suivi des véhicules, connectée à une API Laravel.",
    stack: ["PHP", "Laravel", "Vue"],
    image: "/projects/cleva.png",
    url: "https://cleva.waouhmonde.com/",
  },
  {
    name: "Barreau du Togo",
    year: "2023",
    role: "Développeur Vue.js / Fullstack",
    description:
      "Application de gestion administrative connectée à une API Laravel : tableaux de bord, formulaires, droits d'accès et suivi opérationnel.",
    stack: ["PHP", "Laravel", "Vue", "Back-office"],
    image: "/projects/barreau-togo.png",
    url: "https://administration.barreaudutogo.tg/",
  },
  {
    name: "XROAD, ADN et APIEX",
    year: "2022",
    role: "Développeur Vue.js/Nuxt.js",
    description:
      "Site réalisé en Nuxt et module de paiement consommant une API SOAP pour Drupal, Joomla et Prestashop.",
    stack: ["Nuxt.js", "Laravel", "SOAP", "CMS"],
    image: "/projects/web-institutionnel.png",
    url: "https://apiex.bj/",
  },
];

const projectsEn: Project[] = [
  {
    name: "BugReveal",
    year: "2026",
    role: "Vue.js / Fullstack Developer",
    description:
      "Customer feedback collection and AI-analysis application, helping teams act on feedback and speed up decision-making.",
    stack: ["JavaScript", "Vue", "Express.js", "OpenAI API", "REST API"],
    image: "/projects/bugreveal.png",
    url: "https://bugreveal.com/",
  },
  {
    name: "PISJ",
    year: "2024",
    role: "Vue.js Developer, then Project Lead",
    description:
      "Judicial information and reporting platform: user journeys, case handling, project coordination and delivery tracking.",
    stack: ["PHP", "Laravel", "Vue", "MySQL"],
    image: "/projects/pisj.png",
    url: "https://pisj.justice.bj/",
  },
  {
    name: "Decree Generation",
    year: "2024",
    role: "Vue.js / Fullstack Developer",
    description:
      "Platform for generating official decrees at the Beninese Ministry of Justice: land rights, marriage, nationality and nationality-renunciation decrees, business forms and document automation.",
    stack: ["PHP", "Laravel", "Vue", "Workflow"],
    image: "/projects/arrete-justice.png",
    url: "https://arrete.justice.bj/",
  },
  {
    name: "CLEVA",
    year: "2024",
    role: "Vue.js / Fullstack Developer",
    description:
      "Fleet management application: vehicle tracking, connected to a Laravel API.",
    stack: ["PHP", "Laravel", "Vue"],
    image: "/projects/cleva.png",
    url: "https://cleva.waouhmonde.com/",
  },
  {
    name: "Togo Bar Association",
    year: "2023",
    role: "Vue.js / Fullstack Developer",
    description:
      "Administrative management application connected to a Laravel API: dashboards, forms, access rights and operational tracking.",
    stack: ["PHP", "Laravel", "Vue", "Back-office"],
    image: "/projects/barreau-togo.png",
    url: "https://administration.barreaudutogo.tg/",
  },
  {
    name: "XROAD, ADN and APIEX",
    year: "2022",
    role: "Vue.js/Nuxt.js Developer",
    description:
      "Site built with Nuxt and a payment module consuming a SOAP API for Drupal, Joomla and Prestashop.",
    stack: ["Nuxt.js", "Laravel", "SOAP", "CMS"],
    image: "/projects/web-institutionnel.png",
    url: "https://apiex.bj/",
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
        "Développeur Vue.js & Nuxt.js pour SaaS et startups. Je transforme ton idée en application fonctionnelle en 4 semaines, du cadrage au lancement. 1 000 € prix fixe.",
    },
    nav: { solution: "Solution", process: "Process", pricing: "Tarifs", faq: "FAQ", cta: "Réserver un appel" },
    hero: {
      titleBefore: "Ton application en ligne dans ",
      titleHighlight: "4 semaines",
      titleAfter: ". Pas dans 6 mois",
      subtitle:
        "Je ==transforme ton idée== en ==application fonctionnelle==, que tu peux montrer à tes premiers utilisateurs en un mois. Leurs retours te disent quoi construire ensuite, au lieu de le deviner.",
      ctaPrimary: "Réserver mon appel de cadrage",
      ctaSecondary: "Voir le déroulé",
      note: "1 000 € prix fixe · Appel de cadrage gratuit · Aucun engagement",
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
        "Si ton projet n'a pas encore vu le jour, ce n'est pas parce que ton idée est mauvaise. C'est parce qu'entre l'agence à 5 000 € qui te promet six mois pour avoir une première version, et le freelance qui disparaît sans donner de nouvelles, personne ne t'a proposé ==un chemin court==.",
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
        "Un produit sorti en ==quatre semaines== a le droit de se tromper : il reste du budget pour corriger. Un produit sorti en ~~huit mois~~ a moins le droit à l'erreur, et c'est exactement ce qui le condamne.",
      methodIntro: "D'où ma méthode :",
      method:
        "On fige le périmètre avant d'écrire la première ligne. Tu vois une démo chaque semaine, pas un rapport d'avancement. Et à la fin, ==le code t'appartient entièrement== — tu n'es prisonnier de personne, moi compris.",
      closing: "Quatre semaines. Ton produit en ligne. Avec assez de budget restant pour la suite.",
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
      subtitle: "Un processus simple, découpé en 4 phases, avec un point d'avancement chaque semaine.",
      phases: phasesFr,
    },
    caseStudy: {
      title: "Étude de cas",
      subtitle: "Un projet personnel, pour te montrer la méthode en conditions réelles.",
      projectName: "OpinBase",
      projectUrl: "https://bugreveal.com/",
      steps: [
        {
          label: "Le problème",
          text: "Les commerçants — physiques comme en ligne — n'ont pas de moyen simple de savoir ce que leurs clients pensent vraiment, et prennent des décisions sur leurs produits et services sans données fiables.",
        },
        {
          label: "Le périmètre figé",
          text: "Génération de QR code, collecte d'avis publique, dashboard basique, notifications Telegram en temps réel. Rien d'autre pour la v1 — l'analyse IA, les recommandations et les alertes sont venues après, une fois le produit validé par l'usage.",
        },
        {
          label: "La durée réelle",
          text: "4 semaines, du premier commit à un produit notifié en temps réel et utilisable par de vrais commerçants.",
        },
        {
          label: "Le résultat",
          text: "Savoir ce que les clients ne disent pas spontanément, améliorer ses produits et services en conséquence, et fidéliser sa clientèle.",
        },
      ],
    },
    pricing: {
      title: "L'investissement",
      priceLabel: "1 000 €",
      description:
        "Un tarif fixe pour une v1 complète en 4 semaines : cadrage, développement, tests et mise en production. Pensé pour tester ton idée vite, sans te ruiner.",
      bullets: [
        "5 fois moins cher qu'une agence de développement, qui te facturera au minimum 5 000 € pour te retrouver sur une longue liste d'attente clients",
        "Aucun frais de recrutement ni salaire mensuel à porter, contrairement à une équipe interne",
        "Code livré et documenté : tu peux poursuivre le développement de ton application même si je ne suis plus ton développeur",
      ],
    },
    bonuses: {
      title: "Inclus, sans supplément",
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
          title: "Disponibilité prioritaire 2 semaines après le lancement",
          description:
            "Je reste joignable en priorité pour répondre à tes questions techniques pendant la mise en main.",
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
          question: "Est-ce que je possède le code source ?",
          answer:
            "Oui, à 100 %. Le code, la documentation et les accès te sont transférés intégralement à la fin du projet.",
        },
        {
          question: "Que se passe-t-il si le périmètre change en cours de route ?",
          answer:
            "On en reparle ensemble avant toute implémentation. Un ajout qui dépasse le périmètre validé en semaine 1 peut nécessiter un supplément, toujours discuté et validé avec toi avant d'être facturé.",
        },
        {
          question: "Comment se passe le paiement ?",
          answer: "Un acompte au démarrage, le solde à la livraison. Aucune surprise le jour J.",
        },
        {
          question: "Travailles-tu à partir d'une maquette Figma existante ?",
          answer:
            "Oui. Si tu n'as pas encore de maquette, on cadre les écrans ensemble pendant la semaine 1.",
        },
      ],
    },
    contact: {
      title: "Prêt à lancer ton application ?",
      description:
        "Laisse ton nom et ton email, tu seras redirigé vers mon calendrier pour choisir un créneau d'appel de cadrage gratuit de 30 minutes.",
      procedureTitle: "Comment ça se passe ?",
      procedure: [
        "Tu remplis le formulaire ci-contre avec ton nom et ton email.",
        "Tu es redirigé vers mon calendrier pour choisir un créneau de 30 minutes.",
        "On discute de ton projet en visio, gratuitement et sans engagement.",
        "Si c'est aligné, on valide ensemble le périmètre de ta v1 au tarif fixe de 1 000 €.",
        "Le cadrage démarre : Semaine 1 commence.",
      ],
    },
    testimonials: {
      title: "Ils me recommandent",
      subtitle: "Avis clients vérifiés, laissés sur mon profil professionnel Google.",
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
      title: "Réalisations",
      subtitle:
        "Une sélection de projets où Vue.js a joué un rôle central : du design Figma à l'application réactive, pilotée par API et prête pour la production.",
      items: projectsFr,
    },
    about: {
      title: "À propos",
      intro: "Je m'appelle Karel Towanou. Je construis des applications web depuis 2020.",
      trackRecordLead:
        "Durant mon parcours, j'ai travaillé sur des projets d'institutions gouvernementales, d'entreprises et de startups :",
      trackRecordItems: [
        "Plateforme de signalement judiciaire — Ministère de la Justice du Bénin",
        "Système de gestion de dossiers — Autorité de Protection des Données Personnelles",
        "Application de gestion administrative — Barreau du Togo",
        "Application de gestion — Cour spéciale des affaires foncières de Cotonou",
      ],
      trackRecordClosing:
        "Des projets où les données sont sensibles, où les utilisateurs sont réels, et où ==un bug ne se règle pas par un message d'excuse==.",
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
      line: "Karel Towanou — Développeur Vue.js & Nuxt.js pour SaaS et startups",
      linkedin: "LinkedIn",
    },
    form: {
      nameLabel: "Ton nom",
      namePlaceholder: "Ton prénom",
      emailLabel: "Ton email",
      emailPlaceholder: "toi@startup.com",
      submit: "Réserver mon appel de cadrage",
      loading: "Envoi en cours...",
      note: "Aucun engagement. Tu seras redirigé vers mon calendrier pour choisir un créneau.",
      errorGeneric: "Une erreur est survenue, réessaie.",
    },
  },
  en: {
    meta: {
      title: "Your Application in 4 Weeks — Karel Towanou",
      description:
        "Vue.js & Nuxt.js developer for SaaS and startups. I turn your idea into a working application in 4 weeks, from scoping to launch. Fixed price: €1,000.",
    },
    nav: { solution: "Solution", process: "Process", pricing: "Pricing", faq: "FAQ", cta: "Book a call" },
    hero: {
      titleBefore: "Your app live in ",
      titleHighlight: "4 weeks",
      titleAfter: ". Not 6 months",
      subtitle:
        "I ==turn your idea== into a ==working application==, one you can show your first users within a month. Their feedback tells you what to build next, instead of guessing.",
      ctaPrimary: "Book my scoping call",
      ctaSecondary: "See the process",
      note: "€1,000 fixed price · Free scoping call · No commitment",
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
      closing: "Four weeks. Your product live. With enough budget left for what comes next.",
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
      subtitle: "A simple process, split into 4 phases, with a progress checkpoint every week.",
      phases: phasesEn,
    },
    caseStudy: {
      title: "Case study",
      subtitle: "A personal project, to show you the method in real conditions.",
      projectName: "OpinBase",
      projectUrl: "https://bugreveal.com/",
      steps: [
        {
          label: "The problem",
          text: "Merchants — physical and online — have no simple way to know what their customers really think, and end up making decisions about their products and services without reliable data.",
        },
        {
          label: "The locked scope",
          text: "QR code generation, public review collection, a basic dashboard, real-time Telegram notifications. Nothing else for v1 — AI analysis, recommendations and alerts came later, once the product was validated by real usage.",
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
      priceLabel: "€1,000",
      description:
        "A fixed price for a complete v1 in 4 weeks: scoping, development, testing and production launch. Built to test your idea fast, without breaking the bank.",
      bullets: [
        "5 times cheaper than a dev agency, which will charge you at least €5,000 and put you on a long client waitlist",
        "No hiring costs or monthly salaries to carry, unlike an in-house team",
        "Code delivered and documented: you can keep building your application even if I'm no longer the developer",
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
          description: "I stay reachable as a priority to answer your technical questions during handover.",
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
          question: "Do I own the source code?",
          answer: "Yes, 100%. The code, documentation and access are fully handed over at the end of the project.",
        },
        {
          question: "What happens if the scope changes along the way?",
          answer:
            "We talk it through before any implementation. An addition that goes beyond the scope locked in week 1 may need a supplement, always discussed and approved by you before it's billed.",
        },
        {
          question: "How does payment work?",
          answer: "A deposit at the start, the balance on delivery. No surprises on the day.",
        },
        {
          question: "Do you work from an existing Figma mockup?",
          answer:
            "Yes. If you don't have a mockup yet, we'll scope the screens together during week 1.",
        },
      ],
    },
    contact: {
      title: "Ready to launch your application?",
      description:
        "Leave your name and email, you'll be redirected to my calendar to pick a free 30-minute scoping call slot.",
      procedureTitle: "How it works",
      procedure: [
        "You fill in the form with your name and email.",
        "You're redirected to my calendar to pick a 30-minute slot.",
        "We discuss your project over video, free and with no commitment.",
        "If it's a fit, we lock in the scope of your v1 together at the fixed price of €1,000.",
        "Scoping starts: Week 1 begins.",
      ],
    },
    testimonials: {
      title: "What people say",
      subtitle: "Verified client reviews, left on my professional Google profile.",
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
      title: "Selected work",
      subtitle:
        "A selection of projects where Vue.js played a central role: from Figma design to a reactive, API-driven, production-ready application.",
      items: projectsEn,
    },
    about: {
      title: "About",
      intro: "I'm Karel Towanou. I've been building web applications since 2020.",
      trackRecordLead: "Along the way, I've worked on projects for government institutions, companies and startups:",
      trackRecordItems: [
        "Judicial reporting platform — Benin's Ministry of Justice",
        "Case management system — Personal Data Protection Authority",
        "Administrative management application — Togo Bar Association",
        "Management application — Special Court for Land Affairs of Cotonou",
      ],
      trackRecordClosing:
        "Projects where the data is sensitive, the users are real, and ==a bug doesn't get fixed with an apology message==.",
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
      line: "Karel Towanou — Vue.js & Nuxt.js developer for SaaS and startups",
      linkedin: "LinkedIn",
    },
    form: {
      nameLabel: "Your name",
      namePlaceholder: "Your first name",
      emailLabel: "Your email",
      emailPlaceholder: "you@startup.com",
      submit: "Book my scoping call",
      loading: "Sending...",
      note: "No commitment. You'll be redirected to my calendar to pick a slot.",
      errorGeneric: "Something went wrong, please try again.",
    },
  },
};
