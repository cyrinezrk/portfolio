// Toutes les données éditoriales du site, en un seul endroit.
// Pour ajouter un projet : une entrée ici, rien d'autre à toucher.

const P = process.env.PUBLIC_URL;

// Le CV : un seul endroit pour le fichier et le nom du téléchargement,
// sinon les deux boutons (Nav et Contact) finissent par diverger.
export const cv = {
  href: `${P}/CV-Cyrine-Zarkouna.pdf`,
  filename: "Cyrine_Zarkouna_CV.pdf",
};

export const TRACKS = {
  data: { fr: "Data", en: "Data" },
  ia: { fr: "IA", en: "AI" },
  web: { fr: "Web", en: "Web" },
};

export const projects = [
  {
    id: "joja",
    featured: true,
    track: "data",
    year: "2026",
    image: `${P}/joja.webp`,
    fit: "contain",
    repo: "https://github.com/cyrinezark/joja",
    stack: ["Python", "pandas", "Jupyter", "Docker", "pytest", "Sphinx"],
    // Chiffres réels tirés de l'analyse, voir notebooks/joja_eda.ipynb
    stats: [
      { value: 3.2, suffix: "M", fr: "commandes analysées", en: "orders analysed" },
      { value: 200, suffix: "k", fr: "clients", en: "customers" },
      { value: 5, suffix: "", fr: "fichiers, schéma en étoile", en: "files, star schema" },
    ],
    chart: {
      // Pénétration par département : part des commandes contenant le rayon
      type: "bars",
      unit: "%",
      fr: "Présence dans les commandes, par département",
      en: "Share of orders containing the department",
      series: [
        { label: "produce", value: 75 },
        { label: "dairy eggs", value: 68 },
        { label: "snacks", value: 45 },
        { label: "beverages", value: 45 },
      ],
    },
    fr: {
      title: "JOJA",
      tagline: "Transformer une donnée ordinaire en décision",
      role: "Analyse exploratoire · projet d'équipe Epitech T-DAT-600",
      summary:
        "Analyse exploratoire d'un jeu de données anonymisé de plus de 3 millions de commandes de courses en ligne. Le but n'était pas d'empiler des graphiques mais de tenir un fil : comprendre ce qui déclenche une commande, puis ce qui fait revenir un client.",
      highlights: [
        "Pipeline de chargement typé avec cache Parquet : les CSV bruts ne sont lus qu'une fois, le notebook redémarre en secondes.",
        "Logique réutilisable sortie du notebook vers un package `src/joja/` testé avec pytest et documenté avec Sphinx.",
        "Analyse du lift entre rayons : l'intuition vin/fromage ne tient pas, les vraies associations sortent des données.",
        "Qualité des données vérifiée avant analyse : 6,41 % de valeurs manquantes expliquées, pas masquées.",
      ],
      finding:
        "JOJA attire massivement grâce au frais : `produce` pèse 9,5 M d'articles et apparaît dans 75 % des commandes, mais c'est le rayon au plus faible réachat du top 4 (49 %). Les produits d'appel ne construisent pas la fidélité ; les laitiers (68 % de pénétration, 67 % de réachat) le font, et ils sont sous-exploités.",
      findingLabel: "Ce que les données ont dit",
    },
    en: {
      title: "JOJA",
      tagline: "Turning ordinary data into a decision",
      role: "Exploratory analysis · Epitech T-DAT-600 team project",
      summary:
        "Exploratory analysis of an anonymised dataset of 3M+ online grocery orders. The goal was not to stack charts but to hold a thread: understand what triggers an order, then what brings a customer back.",
      highlights: [
        "Typed loading pipeline with a Parquet cache: raw CSVs are read once, the notebook restarts in seconds.",
        "Reusable logic pulled out of the notebook into a `src/joja/` package, tested with pytest and documented with Sphinx.",
        "Lift analysis across aisles: the obvious wine/cheese pairing does not hold, the real associations come from the data.",
        "Data quality checked before analysis: 6.41% missing values explained, not hidden.",
      ],
      finding:
        "JOJA attracts massively through fresh produce: `produce` accounts for 9.5M items and appears in 75% of orders, yet it has the weakest reorder rate of the top 4 departments (49%). Loss leaders don't build loyalty; dairy does (68% penetration, 67% reorder), and it is underused.",
      findingLabel: "What the data said",
    },
  },
  {
    id: "alice",
    featured: true,
    track: "data",
    year: "2026",
    image: `${P}/alice.webp`,
    fit: "contain",
    repo: "https://github.com/cyrinezark/alice-in-wonderland",
    stack: ["Python", "spaCy", "gensim", "sumy", "NLTK", "uv"],
    // Chiffres vérifiables dans le code : src/services/ et src/bookworm.py
    stats: [
      { value: 4, suffix: "", fr: "analyses par fiche", en: "analyses per card" },
      { value: 5, suffix: "", fr: "métriques de vocabulaire", en: "vocabulary metrics" },
      { value: 3, suffix: "", fr: "algorithmes de résumé comparés", en: "summarisation algorithms compared" },
    ],
    chart: null,
    fr: {
      title: "Alice in Wonderland",
      tagline: "Lire un livre sans le lire",
      role: "Moteur NLP · projet Epitech",
      summary:
        "Comme le Lapin Blanc, éditeurs et libraires manquent toujours de temps. Bookworm est un outil en ligne de commande qui fabrique une « fiche de lecture » automatique à partir d'un livre du projet Gutenberg : personnages, lieux, thèmes, résumé et profil de vocabulaire.",
      highlights: [
        "Extraction des personnages et des lieux par reconnaissance d'entités nommées (spaCy), en filtrant les étiquettes PERSON, LOC, FAC et GPE.",
        "Détection des thèmes par LDA (gensim) : le livre est découpé en sections, chacune devient un document du corpus.",
        "Résumé automatique avec sumy : LSA, Luhn et LexRank implémentés côte à côte pour pouvoir les comparer.",
        "Profil de vocabulaire en cinq mesures : occurrences, formes uniques, ratio type/token, longueur et fréquence moyennes.",
        "Téléchargement et nettoyage des textes Gutenberg : en-tête et pied de page retirés par expression régulière avant toute analyse.",
      ],
      finding:
        "Le vrai travail n'est pas d'appeler un modèle, c'est de préparer le texte. Un livre Gutenberg brut contient un en-tête légal, un pied de page et une mise en forme qui faussent toutes les mesures. Sans ce nettoyage, le ratio type/token compte les mentions de licence.",
      findingLabel: "Ce que le projet m'a appris",
      cardFields: ["Personnages", "Lieux", "Thèmes", "Résumé", "Vocabulaire"],
    },
    en: {
      title: "Alice in Wonderland",
      tagline: "Reading a book without reading it",
      role: "NLP engine · Epitech project",
      summary:
        "Like the White Rabbit, publishers and editors are always running out of time. Bookworm is a command-line tool that builds an automatic \u201cbook card\u201d from any Project Gutenberg title: characters, locations, themes, summary and vocabulary profile.",
      highlights: [
        "Characters and locations extracted through named-entity recognition (spaCy), filtering the PERSON, LOC, FAC and GPE labels.",
        "Theme detection via LDA (gensim): the book is split into sections, each becoming a document in the corpus.",
        "Automatic summarisation with sumy: LSA, Luhn and LexRank implemented side by side so they can be compared.",
        "Vocabulary profile in five measures: tokens, unique types, type/token ratio, mean word length and mean frequency.",
        "Gutenberg texts downloaded and cleaned: legal header and footer stripped by regex before any analysis runs.",
      ],
      finding:
        "The real work isn't calling a model, it's preparing the text. A raw Gutenberg book carries a legal header, a footer and formatting that skew every measure. Without that cleaning, the type/token ratio is counting licence boilerplate.",
      findingLabel: "What the project taught me",
      cardFields: ["Characters", "Locations", "Themes", "Summary", "Vocabulary"],
    },
  },
  {
    id: "majoli-gpt",
    track: "ia",
    year: "2025",
    image: `${P}/majolichat.webp`,
    link: null,
    stack: ["OpenAI API", "Prompt engineering", "Automatisation"],
    fr: {
      title: "ChatGPT × Majoli",
      tagline: "Générer 200 pages partenaires sans les écrire",
      role: "Alternance chez Majoli",
      summary:
        "Automatisation de la rédaction des descriptions pour les pages partenaires de domiciliation. J'ai conçu un prompt unique, paramétré par les données de chaque partenaire, capable de produire un texte cohérent et non répétitif à l'échelle du catalogue.",
    },
    en: {
      title: "ChatGPT × Majoli",
      tagline: "Generating 200 partner pages without writing them",
      role: "Apprenticeship at Majoli",
      summary:
        "Automated copywriting for the business-address partner pages. I designed a single prompt, parameterised by each partner's data, able to produce consistent and non-repetitive text at catalogue scale.",
    },
  },
  {
    id: "waj",
    track: "data",
    year: "2024",
    image: `${P}/waj2.webp`,
    link: "https://wearejolies.com/",
    stack: ["KPI", "Google Sheets", "Automatisation", "SAV"],
    fr: {
      title: "We Are Jolies",
      tagline: "Suivi de performance et process internes",
      role: "Cheffe de projet web en alternance",
      summary:
        "Marque de lingerie et de maillots de bain, avec une boutique en ligne à faire tourner tous les jours. J'ai tenu la maintenance du site, le suivi des indicateurs, l'automatisation des process internes et le service après-vente.",
      highlights: [
        "Suivi hebdomadaire des indicateurs de la boutique : trafic, taux de conversion, panier moyen, produits qui partent et produits qui dorment.",
        "Automatisation des tableaux de suivi sur Drive, pour arrêter de recopier à la main ce qu'un tableur sait aller chercher.",
        "Service après-vente au quotidien : ce sont les messages clients qui m'ont appris à quoi ressemble un problème avant qu'il apparaisse dans les chiffres.",
        "Maintenance et corrections du site, en lien direct avec l'équipe marketing.",
      ],
      finding:
        "C'est l'alternance qui m'a fait bifurquer. Je suis arrivée pour faire le site, je suis repartie en voulant surtout comprendre ce qu'il racontait : quels produits marchent, pourquoi une page convertit mal, ce qu'un chiffre en baisse veut réellement dire. La data a cessé d'être une matière scolaire.",
      findingLabel: "Pourquoi ça compte",
    },
    en: {
      title: "We Are Jolies",
      tagline: "Performance tracking and internal process",
      role: "Web project manager, apprenticeship",
      summary:
        "A lingerie and swimwear brand with an online shop to keep running every day. I handled site maintenance, indicator tracking, internal process automation and customer support.",
      highlights: [
        "Weekly tracking of the shop's indicators: traffic, conversion rate, average basket, which products move and which ones sit still.",
        "Automated the tracking sheets on Drive, to stop copying by hand what a spreadsheet can fetch on its own.",
        "Daily customer support: it was the customer messages that taught me what a problem looks like before it shows up in the numbers.",
        "Site maintenance and fixes, working directly with the marketing team.",
      ],
      finding:
        "This apprenticeship is what turned me. I arrived to build the site and left wanting mostly to understand what it was saying: which products work, why a page converts badly, what a falling number actually means. Data stopped being a school subject.",
      findingLabel: "Why it matters",
    },
  },
  {
    id: "caninmarin",
    track: "web",
    year: "2026",
    image: `${P}/caninmarin.webp`,
    fit: "contain",
    link: "https://caninmarin.fr/",
    stack: ["Next.js", "React", "Stripe"],
    fr: {
      title: "Canin Marin",
      tagline: "Une boutique en ligne, du panier au paiement",
      role: "Conception et développement, seule",
      summary:
        "Boutique en ligne d'une marque bretonne de friandises naturelles pour chiens, fabriquées à la main dans son atelier. J'ai fait le site à 100 % : maquettes, interface, catalogue filtrable, compte client, panier, et le paiement en ligne branché sur Stripe. Un vrai site marchand, pas une vitrine avec un bouton de contact.",
      highlights: [
        "Paiement en ligne intégré avec Stripe : la commande se règle sur le site, du panier jusqu'à la confirmation.",
        "Catalogue filtrable par catégorie et par sélection, pour retrouver un produit dans une gamme qui s'agrandit.",
        "Identité et interface dessinées puis intégrées par mes soins, sur du sur-mesure plutôt qu'un thème acheté.",
      ],
      findingLabel: "Ce que j'en retiens",
      finding:
        "Un site qui encaisse de l'argent ne se traite pas comme un site vitrine. Il faut que le panier, le stock et le paiement disent tous la même chose au même moment, sinon c'est le client qui paie l'erreur.",
    },
    en: {
      title: "Canin Marin",
      tagline: "An online shop, from cart to checkout",
      role: "Design and development, solo",
      summary:
        "Online shop for a Breton brand of natural dog treats, handmade in its own workshop. I built the site end to end: mockups, interface, filterable catalogue, customer account, cart, and online payment wired to Stripe. A real storefront, not a showcase with a contact button.",
      highlights: [
        "Online payment integrated with Stripe: the order is paid for on the site, from cart to confirmation.",
        "Catalogue filtered by category and by selection, so a product stays findable as the range grows.",
        "Identity and interface designed and then built by me, custom rather than a bought theme.",
      ],
      findingLabel: "What I take from it",
      finding:
        "A site that takes money is not a showcase site. The cart, the stock and the payment all have to say the same thing at the same moment, otherwise the customer is the one who pays for the mistake.",
    },
  },
  {
    id: "kidskreol",
    track: "web",
    year: "2026",
    image: `${P}/kidskreol.webp`,
    fit: "contain",
    link: "https://kidskreol.re/",
    stack: ["Next.js", "React", "Tailwind"],
    fr: {
      title: "Kids Kréol",
      tagline: "Réserver une place en crèche, en ligne",
      role: "Conception & développement",
      summary:
        "Site d'un réseau de trois micro-crèches à Saint-Pierre, à La Réunion. Il présente les structures, les équipes et les aides au financement, et surtout il permet aux parents de réserver une place par un formulaire de pré-inscription, au lieu d'appeler et de rappeler.",
      highlights: [
        "Formulaire de réservation de place en ligne : la demande d'inscription part du site, à l'heure qui arrange les parents.",
        "Les trois crèches présentées séparément, avec leurs équipes, leurs horaires et leur cadre.",
        "Une direction artistique douce et colorée, tenue de la première maquette jusqu'à l'intégration.",
      ],
    },
    en: {
      title: "Kids Kréol",
      tagline: "Booking a nursery place online",
      role: "Design & development",
      summary:
        "Site for a network of three micro-nurseries in Saint-Pierre, on Réunion Island. It presents the sites, the teams and the funding help available, and above all it lets parents book a place through a pre-registration form instead of calling and calling back.",
      highlights: [
        "Online place-booking form: the registration request leaves from the site, at whatever hour suits the parents.",
        "The three nurseries presented separately, with their teams, their hours and their setting.",
        "A soft, colourful art direction, held from the first mockup through to the build.",
      ],
    },
  },
  {
    id: "circle",
    track: "web",
    year: "2025",
    image: `${P}/circle.webp`,
    link: null,
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    fr: {
      title: "Circle",
      tagline: "E-commerce zéro déchet",
      role: "Cheffe de projet & direction artistique",
      summary:
        "Site e-commerce pour une marque écoresponsable. J'ai piloté les maquettes, l'identité visuelle et l'univers graphique sur une stack React / Next.js / TypeScript / Tailwind.",
    },
    en: {
      title: "Circle",
      tagline: "Zero-waste e-commerce",
      role: "Project lead & art direction",
      summary:
        "E-commerce site for an eco-friendly brand. I owned the wireframes, visual identity and graphic direction on a React / Next.js / TypeScript / Tailwind stack.",
    },
  },
  {
    id: "patvtc",
    track: "web",
    year: "2024",
    image: `${P}/patvtc.webp`,
    fit: "contain",
    link: "https://patvtc.fr/",
    stack: ["React", "MySQL", "Docker", "DBeaver"],
    fr: {
      title: "Pat VTC",
      tagline: "Réserver sa course sans décrocher le téléphone",
      role: "Cheffe de projet & design",
      summary:
        "Site d'un chauffeur VTC. Tout l'intérêt du projet tenait dans la réservation : prendre rendez-vous en ligne, tout de suite, et dire d'où on part sans avoir à taper une adresse à la main.",
      highlights: [
        "Prise de rendez-vous instantanée : le client choisit son créneau et repart avec une course confirmée, sans appel ni attente de réponse.",
        "Carte de prise en charge : le point de départ se pose sur la carte, pour venir chercher le client là où il se trouve.",
      ],
      finding:
        "La carte est ce qui m'a donné le plus de fil à retordre. Afficher une carte est simple ; la brancher sur le formulaire de réservation pour qu'un point posé à l'écran devienne une adresse de départ exploitable, beaucoup moins.",
      findingLabel: "La partie difficile",
    },
    en: {
      title: "Pat VTC",
      tagline: "Booking a ride without picking up the phone",
      role: "Project lead & design",
      summary:
        "A private-hire driver's site. The whole point of the project was the booking: making an appointment online, right away, and saying where you are leaving from without typing an address by hand.",
      highlights: [
        "Instant booking: the customer picks a slot and walks away with a confirmed ride, no phone call and no waiting for an answer.",
        "Pick-up map: the starting point is dropped on the map, so the driver collects the customer wherever they are.",
      ],
      finding:
        "The map is what gave me the most trouble. Displaying a map is easy; wiring it into the booking form so that a point dropped on screen becomes a usable pick-up address is much less so.",
      findingLabel: "The hard part",
    },
  },
  {
    id: "lachtite",
    track: "web",
    year: "2024",
    image: `${P}/lachtite.webp`,
    fit: "contain",
    link: "https://lachtitemarseillaise.com/",
    stack: ["Bubble", "Design"],
    fr: {
      title: "La Chtite Marseillaise",
      tagline: "Site vitrine d'une artiste",
      role: "Front-end & design",
      summary:
        "Site d'une artiste marseillaise reconnue. Projet très orienté design : traduire un univers artistique existant en interface responsive.",
    },
    en: {
      title: "La Chtite Marseillaise",
      tagline: "An artist's showcase site",
      role: "Front-end & design",
      summary:
        "Site for a well-known Marseille artist. A design-heavy project: translating an existing artistic world into a responsive interface.",
    },
  },
  {
    id: "locatio",
    track: "web",
    year: "2024",
    image: `${P}/locatio.webp`,
    link: null,
    stack: ["Bubble", "Base de données", "Workflows"],
    fr: {
      title: "Locatio",
      tagline: "Location entre particuliers et pros",
      role: "Admin & pages catalogue",
      summary:
        "Plateforme de location de produits, de quelques heures à plusieurs mois. J'ai pris en charge l'administration et les pages listant les produits : gestion de base de données et workflows.",
    },
    en: {
      title: "Locatio",
      tagline: "Renting between individuals and pros",
      role: "Admin & catalogue pages",
      summary:
        "A product rental platform, from a few hours to several months. I owned the admin side and the product listing pages: database management and workflows.",
    },
  },
  {
    id: "cogspace",
    track: "web",
    year: "2024",
    image: `${P}/cogspace.webp`,
    link: null,
    stack: ["Vue.js", "Gamification", "IA"],
    fr: {
      title: "CogSpace",
      tagline: "Sensibilisation écologique gamifiée",
      role: "Hackathon Institut G4, en équipe",
      summary:
        "Une semaine intensive en équipe : plateforme de sensibilisation aux gestes écologiques avec défis générés par IA, système de récompenses et classements.",
    },
    en: {
      title: "CogSpace",
      tagline: "Gamified eco-awareness",
      role: "Institut G4 hackathon, in a team",
      summary:
        "An intensive team week: an eco-habits awareness platform with AI-generated challenges, a reward system and leaderboards.",
    },
  },
  {
    id: "ecosphere",
    track: "web",
    year: "2024",
    image: `${P}/ecoservice.webp`,
    link: null,
    stack: ["Front-end", "Conception produit"],
    fr: {
      title: "EcoSphere",
      tagline: "Engagement par le jeu",
      role: "Conception produit & front-end",
      summary:
        "Plateforme encourageant les bonnes pratiques écologiques par des mécaniques ludiques et des défis récurrents. Beaucoup de conception produit avant la première ligne de code.",
    },
    en: {
      title: "EcoSphere",
      tagline: "Engagement through play",
      role: "Product design & front-end",
      summary:
        "A platform encouraging good ecological habits through playful mechanics and recurring challenges. A lot of product thinking before the first line of code.",
    },
  },
  {
    // Le seul projet sans lien ni dépôt : il n'y a rien à aller voir encore.
    // `comingSoon` est ce qui le laisse malgré tout apparaître dans la liste,
    // et ce qui le pousse en dernier.
    id: "jobzz",
    comingSoon: true,
    track: "data",
    year: "2026",
    image: null,
    cover: "veil",
    link: null,
    fr: {
      title: "Jobzz",
      tagline: "En chantier",
      role: "Projet personnel · en cours",
      summary:
        "Celui-là, je le construis en ce moment, et je préfère ne pas trop en dire tant qu'il ne tient pas debout tout seul. Il part d'une question simple, dont je crois que la réponse habituelle est fausse : qu'est-ce qu'on cherche vraiment, quand on cherche un travail ?",
      findingLabel: "Pour l'instant",
      finding:
        "Le reste attendra la mise en ligne.",
    },
    en: {
      title: "Jobzz",
      tagline: "Under construction",
      role: "Personal project · in progress",
      summary:
        "This one I'm building right now, and I'd rather not say too much until it stands on its own. It starts from a simple question, whose usual answer I think is wrong: what are people actually looking for, when they look for a job?",
      findingLabel: "For now",
      finding:
        "The rest will wait for launch.",
    },
  },
];

export const education = [
  {
    id: "epitech",
    logo: `${P}/epitech.webp`,
    href: "https://www.epitech.eu/",
    name: "Epitech",
    fr: { period: "2025 › 2028", detail: "Pré-MSc & Master of Science" },
    en: { period: "2025 › 2028", detail: "Pre-MSc & Master of Science" },
  },
  {
    id: "g4",
    logo: `${P}/g4.webp`,
    href: "https://institut-g4.fr/",
    name: "Institut G4",
    fr: { period: "2023 › 2025", detail: "Bachelor Informatique, L2 & L3" },
    en: { period: "2023 › 2025", detail: "BSc Computer Science, years 2 & 3" },
  },
  {
    id: "montpellier",
    logo: `${P}/montpellier.webp`,
    href: "https://www.umontpellier.fr/",
    name: "Université de Montpellier",
    fr: { period: "2022 › 2023", detail: "L1 Informatique" },
    en: { period: "2022 › 2023", detail: "Computer Science, year 1" },
  },
];

export const experience = [
  {
    id: "majoli",
    logo: `${P}/majoli.webp`,
    href: "https://www.majoli.io/",
    name: "Majoli",
    fr: {
      role: "Développeuse web en alternance",
      period: "2023 › aujourd'hui",
      detail: "Développement React & no-code, automatisation IA, gestion de projet",
    },
    en: {
      role: "Web developer, apprenticeship",
      period: "2023 › now",
      detail: "React & no-code development, AI automation, project management",
    },
  },
  {
    id: "waj",
    logo: `${P}/waj.webp`,
    href: "https://wearejolies.com/",
    name: "We Are Jolies",
    fr: {
      role: "Cheffe de projet web en alternance",
      period: "2024 › 2025",
      detail: "Maintenance web, analyse KPI, automatisation, data analyse",
    },
    en: {
      role: "Web project manager, apprenticeship",
      period: "2024 › 2025",
      detail: "Web maintenance, KPI analysis, automation, data analysis",
    },
  },
];

// Langages, environnements et outils seulement : les bibliothèques d'un projet
// se lisent dans le `stack` de ce projet, pas ici.
// Chaque compétence pointe vers son site officiel, ou, à défaut de site, vers
// la page la plus officielle qui existe (la norme ISO pour SQL, ECMA pour
// JavaScript, le W3C pour HTML et CSS, kernel.org pour Linux).
export const skillGroups = [
  {
    id: "data",
    fr: { title: "Data & analyse" },
    en: { title: "Data & analysis" },
    items: [
      { name: "Python", img: `${P}/pythoned.webp`, href: "https://www.python.org/" },
      { name: "Jupyter", img: null, href: "https://jupyter.org/" },
      { name: "SQL", img: `${P}/MySQL.svg`, href: "https://www.iso.org/standard/76583.html" },
      { name: "MariaDB", img: `${P}/maria.webp`, href: "https://mariadb.org/" },
    ],
  },
  {
    id: "dev",
    fr: { title: "Développement" },
    en: { title: "Development" },
    items: [
      { name: "React", img: `${P}/logo192.png`, href: "https://react.dev/" },
      {
        name: "JavaScript",
        img: null,
        href: "https://ecma-international.org/publications-and-standards/standards/ecma-262/",
      },
      { name: "HTML / CSS", img: `${P}/html.webp`, href: "https://www.w3.org/standards/" },
      { name: "Java", img: `${P}/java.webp`, href: "https://dev.java/" },
      { name: "Docker", img: null, href: "https://www.docker.com/" },
      { name: "Linux", img: `${P}/LINUX.webp`, href: "https://www.kernel.org/" },
    ],
  },
  {
    id: "produit",
    fr: { title: "Produit & outils" },
    en: { title: "Product & tools" },
    items: [
      { name: "Figma", img: `${P}/Figma.webp`, href: "https://www.figma.com/" },
      { name: "Bubble", img: `${P}/bubble.webp`, href: "https://bubble.io/" },
      { name: "Shopify", img: `${P}/shopify.webp`, href: "https://www.shopify.com/" },
      { name: "Trello", img: `${P}/trello.webp`, href: "https://trello.com/" },
      { name: "Workspace", img: `${P}/google.webp`, href: "https://workspace.google.com/" },
      { name: "phpMyAdmin", img: `${P}/Phpmyadmin.webp`, href: "https://www.phpmyadmin.net/" },
    ],
  },
];

export const personal = [
  { id: "bac", img: `${P}/bac.svg`, fr: "Bac général : Maths, Physique-Chimie, NSI.", en: "French baccalauréat: Maths, Physics-Chemistry, Computer Science." },
  { id: "theatre", img: `${P}/theatre.svg`, fr: "6 ans de théâtre.", en: "6 years of theatre." },
  { id: "chant", img: `${P}/chant.svg`, fr: "7 ans de chant.", en: "7 years of singing." },
  { id: "sport", img: `${P}/sport.svg`, fr: "La salle de sport, pour la santé et la discipline.", en: "The gym, for health and discipline." },
];

export const ui = {
  fr: {
    role: "Étudiante en informatique · direction data",
    heroLead:
      "Je viens du développement web, je vais vers la data. Ce qui m'intéresse n'est pas le graphique, c'est la décision qu'il permet de prendre.",
    availabilityTag: "Avis de recherche",
    availability: "Je cherche une alternance en contrat d'apprentissage, pour terminer mes études jusqu'en 2028.",
    heroBefore: "Ce que je cherche, c'est",
    heroRotating: ["l'histoire", "le motif", "la décision", "la surprise"],
    heroCtaWork: "Voir mes projets",
    heroCtaContact: "Me contacter",
    scroll: "Défiler",
    navHome: "Accueil",
    navWork: "Projets",
    navAbout: "Parcours",
    navContact: "Contact",
    workTitle: "Projets",
    workLead: "Mes derniers projets data en tête, et tout le reste juste après.",
    featuredLabel: "Projet data",
    filterAll: "Tout",
    readMore: "Lire la suite",
    prev: "Projet précédent",
    next: "Projet suivant",
    projectCount: "projets",
    workNote: "Je travaille encore aujourd'hui, et tous mes projets professionnels ne sont pas ici : certains restent internes ou sous accord de confidentialité.",
    dragHint: "Faites glisser, ou utilisez les flèches du clavier",
    close: "Fermer",
    liveSite: "Voir le site",
    viewCode: "Voir le code",
    stackLabel: "Stack",
    aboutTitle: "Parcours",
    aboutLead: "Trois ans d'alternance et trois écoles, à glisser du site que je construis vers ce que le site raconte.",
    educationTitle: "Formation",
    experienceTitle: "Expériences",
    skillsTitle: "Compétences",
    personalTitle: "En dehors de l'écran",
    contactTitle: "Parlons-en",
    contactLead: "Une question, une alternance, une idée de projet ? Une ligne suffit.",
    downloadCv: "Télécharger mon CV",
    switchLanguage: "EN",
    switchLanguageAria: "Passer le site en anglais",
    switchTheme: "Mode nuit",
    switchThemeAria: "Passer le site en mode nuit",
    switchThemeBack: "Mode jour",
    switchThemeBackAria: "Revenir au mode jour",
    footer: "Conçu et développé par Cyrine Zarkouna",
    comingSoon: "Bientôt",
  },
  en: {
    role: "Computer science student · heading into data",
    heroLead:
      "I come from web development, I'm heading into data. What interests me isn't the chart, it's the decision it makes possible.",
    availabilityTag: "Wanted",
    availability: "I am looking for an apprenticeship contract to finish my degree, through to 2028.",
    heroBefore: "What I look for is",
    heroRotating: ["the story", "the pattern", "the decision", "the surprise"],
    heroCtaWork: "See my work",
    heroCtaContact: "Get in touch",
    scroll: "Scroll",
    navHome: "Home",
    navWork: "Projects",
    navAbout: "About",
    navContact: "Contact",
    workTitle: "Projects",
    workLead: "My latest data projects first, and everything else right after.",
    featuredLabel: "Data project",
    filterAll: "All",
    readMore: "Read more",
    prev: "Previous project",
    next: "Next project",
    projectCount: "projects",
    workNote: "I am still working today, and not all of my professional projects are here: some stay internal or under a confidentiality agreement.",
    dragHint: "Drag, or use the arrow keys",
    close: "Close",
    liveSite: "Visit site",
    viewCode: "View code",
    stackLabel: "Stack",
    aboutTitle: "Background",
    aboutLead: "Three years of apprenticeship and three schools, sliding from building the site to reading what it says.",
    educationTitle: "Education",
    experienceTitle: "Experience",
    skillsTitle: "Skills",
    personalTitle: "Away from the screen",
    contactTitle: "Let's talk",
    contactLead: "A question, an apprenticeship, a project idea? One line is enough.",
    downloadCv: "Download my CV",
    switchLanguage: "FR",
    switchLanguageAria: "Switch the site to French",
    switchTheme: "Night mode",
    switchThemeAria: "Switch the site to night mode",
    switchThemeBack: "Day mode",
    switchThemeBackAria: "Back to day mode",
    footer: "Designed and built by Cyrine Zarkouna",
    comingSoon: "Soon",
  },
};
