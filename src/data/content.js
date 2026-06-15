export const data={
    name: "Yessine Helal",
    title: "IT Student & Cybersecurity Enthusiast",
    bio: "Started with video games, ended up obsessed with how systems work under the hood. That curiosity led through software engineering and into cybersecurity - a field where the complexity and constant evolution means there's always something new to learn.",
    email: "yessinehelal@hotmail.com",
    location: "Ariana, Tunisia",
    github: "https://github.com/Yessineee",
    linkedin: "https://www.linkedin.com/in/yessine-helal/",

    skills:[
        { category: "Languages", items: ["Python", "Java", "C++", "C"] },
        { category: "Web", items: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
        { category: "Frameworks", items: ["Spring Boot", "Flask"] },
        { category: "Tools", items: ["Docker", "MySQL", "Git"] },
        { category: "AI / ML", items: ["Scikit-learn", "NLTK", "NLP"] },
        { category: "Cybersecurity", items: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite"] },
    ],

    projects: [
      {
        title_en: "National Hemodialysis Platform",
        title_fr: "Plateforme Nationale d'Hémodialyse",
        description_en: "Designed and developed a full-stack national platform for hemodialysis center management across Tunisia, in collaboration with the Ministry of Health (CIMS). Covers patient records, medical sessions, equipment tracking, staff management, and national reporting.",
        description_fr: "Conception et développement d'une plateforme nationale full-stack pour la gestion des centres d'hémodialyse en Tunisie, en collaboration avec le Ministère de la Santé (CIMS). Couvre les dossiers patients, les séances médicales, le suivi des équipements, la gestion du personnel et les rapports nationaux.",
        tech: ["Spring Boot", "React", "PostgreSQL", "JWT"],
        github: null,
        demo: null,
        confidential: true,
        featured: true,
        screenshots: [
          { src: "/screenshots/admin-dashboard.png", label_en: "Admin Dashboard — National Overview", label_fr: "Admin — Vue Nationale" },
          { src: "/screenshots/ministry-stats.png", label_en: "Ministry Statistics — National View", label_fr: "Ministère — Statistiques Nationales" },
          { src: "/screenshots/patient-dashboard.png", label_en: "Patient — Personal Dashboard", label_fr: "Patient — Tableau de Bord Personnel" },
          { src: "/screenshots/medecin-fiche.png", label_en: "Médecin — Patient Medical Record", label_fr: "Médecin — Dossier Médical du Patient" },
          { src: "/screenshots/infirmier-dashboard.png", label_en: "Infirmier — Session Management", label_fr: "Infirmier — Gestion des Séances" },
        ],
      },
      {
        title_en: "Intelligent Chatbot System",
        title_fr: "Système de Chatbot Intelligent",
        description_en: "Full-stack chatbot with NLP and ML-powered intent classification, built with Python, Flask, and React.",
        description_fr: "Chatbot conversationnel full-stack avec classification d'intentions basée sur le NLP. Développé avec Python, Flask et React — déployé sur Render et Vercel avec un pipeline CI/CD.",
        tech: ["Python", "Flask", "React", "TypeScript", "NLTK", "Scikit-learn"],
        github: "https://github.com/Yessineee/ai-chatbot",
        demo: "https://yessine-chatbot.vercel.app/",
        confidential: false,
        featured: true,
      },
      {
        title_en: "Library Management System",
        title_fr: "Système de Gestion de Bibliothèque",
        description_en: "Java-based full-stack app with MySQL backend, admin/user portals, and real-time inventory tracking.",
        description_fr: "Application full-stack en Java avec un schéma MySQL normalisé, des portails admin et utilisateur séparés, et un suivi en temps réel des stocks et transactions.",
        tech: ["Java", "MySQL", "JDBC", "Java Swing"],
        github: "https://github.com/Yessineee/Library-App",
        demo: null,
        confidential: false,
        featured: false,
      },
  ],

  education: [
    {
      degree_en: "Bachelor's Degree in Software Engineering and Information Systems",
      degree_fr: "Licence en Génie Logiciel et Systèmes d'Information",
      school_en: "Faculty of Sciences of Tunis",
      school_fr: "Faculté des Sciences de Tunis",
      period: "2023 - 2026",
      achievement_en: "GRADUATED WITH HIGH DISTINCTION",
      achievement_fr: "LICENCE OBTENUE AVEC MENTION TRÈS BIEN",
    }
  ],
  certifications: [
    { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Jan 2026", credential: "https://www.credly.com/badges/5314e8a6-565a-4f1c-baf5-11d70787b65c" },
    { name: "AWS Academy Graduate: Cloud Foundations", issuer: "Amazon Web Services", date: "Dec 2025" , credential:"https://www.credly.com/badges/8c61546f-d9d3-40ab-98ca-584c169aa937" },
    { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "Amazon Web Services", date: "Jan 2026", credential: "https://www.credly.com/badges/53b232aa-9749-49c6-8298-3741a043c80f/public_url" },
    { name: "Fundamentals of Deep Learning", issuer: "NVIDIA", date: "Nov 2025", credential: "https://drive.google.com/file/d/15F7_omz_FXHQFIMOlczEidFLeK-TbiRS/view" },
  ],

  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Fluent" },
    { name: "German", level: "Basic" },
  ],

}