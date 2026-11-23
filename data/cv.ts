// Toutes les données du CV au même endroit : la page est générée à partir de ce fichier au build.

export const profil = {
  nom: "Ailyas Filali",
  titre: "Étudiant BUT 3 Informatique — Data & Développement",
  ville: "Liévin (62)",
  email: "ailyasfilali7@gmail.com",
  github: "https://github.com/ailyasfilali",
  portfolio: "https://ailyasfilali.github.io/portfolio/",
  permis: "Permis B",
  recherche:
    "Stage orienté développement & data (analyse de données / machine learning) — à partir de mars 2027",
};

export const formation = [
  {
    intitule: "BUT Informatique — IUT de Lens",
    detail: "Parcours orienté développement et données",
    periode: "2024 – 2027",
  },
  {
    intitule: "Baccalauréat Général",
    detail: "Spécialités Mathématiques & Numérique et Sciences Informatiques (NSI)",
    periode: "2021 – 2024",
  },
];

export const experiences = [
  {
    intitule: "Stagiaire Développement JavaScript & PHP — Stone Life Capital (Paris)",
    periode: "",
    detail: "",
    missions: [
      "Mise en place et suivi d'infrastructures de génération de leads (tracking, qualification, remontée de données)",
      "Développement front-end et administration WordPress sur les sites du groupe",
      "Optimisation SEO et analyse de performance basée sur les données de trafic",
    ],
  },
  {
    intitule: "Poseur de cuisine",
    periode: "2021 – Actuel",
    detail: "Missions ponctuelles pendant les vacances scolaires",
    missions: ["Préparation de chantier, montage et assemblage, organisation"],
  },
];

export const projets = [
  {
    intitule: "IA de détection de détresse émotionnelle (Python)",
    periode: "Janvier 2026",
    description:
      "Application web d'analyse de sentiments par Machine Learning détectant automatiquement des signes de détresse dans un texte.",
  },
  {
    intitule: "Application Laravel — SoundWave",
    periode: "Décembre 2025",
    description:
      "Plateforme web de référencement d'articles musicaux (comptes utilisateurs, publication d'articles).",
  },
  {
    intitule: "Bibliothèque de synthèse musicale (Java)",
    periode: "Novembre 2025",
    description:
      "Librairie de synthèse sonore simulant divers instruments à partir de partitions MusicXML.",
  },
];

export const competences = [
  {
    categorie: "Data & ML",
    items: [
      "Python (Pandas, NumPy, Scikit-learn, Django)",
      "Machine Learning",
      "Apprentissage par renforcement (DQN)",
      "PostgreSQL",
      "Neo4j / Cypher",
    ],
  },
  {
    categorie: "Développement",
    items: ["PHP", "Java", "JavaScript", "HTML/CSS", "Laravel", "React", "Next.js", "WordPress"],
  },
  {
    categorie: "Outils",
    items: ["Git", "Docker / Podman", "Maven", "JUnit / DBUnit", "VS Code", "Jupyter"],
  },
];

export const langues = ["Français (natif)", "Anglais (B2)", "Espagnol (B1)", "Arabe (B1)"];

export const loisirs = ["Course à pied", "Football", "Échecs", "Sport automobile", "Musculation"];
