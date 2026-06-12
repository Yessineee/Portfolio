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
        title: "National Hemodialysis Platform",
        description: "Designed and developed a full-stack national platform for hemodialysis center management across Tunisia, in collaboration with the Ministry of Health (CIMS). Covers patient records, medical sessions, equipment tracking, staff management, and national reporting.",
        tech: ["Spring Boot", "React", "PostgreSQL", "JWT"],
        github: null,
        demo: null,
        confidential: true,
        featured: true,
        screenshots: [
          { src: "/screenshots/admin-dashboard.png", label: "Admin Dashboard — National Overview" },
          { src: "/screenshots/ministry-stats.png", label: "Ministry Statistics — National View" },
          { src: "/screenshots/patient-dashboard.png", label: "Patient — Personal Dashboard" },
          { src: "/screenshots/medecin-fiche.png", label: "Médecin — Patient Medical Record" },
          { src: "/screenshots/infirmier-dashboard.png", label: "Infirmier — Session Management" },
        ],
      },
      {
        title: "Intelligent Chatbot System",
        description: "Full-stack chatbot with NLP and ML-powered intent classification, built with Python, Flask, and React.",
        tech: ["Python", "Flask", "React", "TypeScript", "NLTK", "Scikit-learn"],
        github: "https://github.com/Yessineee/ai-chatbot",
        demo: "https://yessine-chatbot.vercel.app/",
        confidential: false,
        featured: true,
      },
      {
        title: "Library Management System",
        description: "Java-based full-stack app with MySQL backend, admin/user portals, and real-time inventory tracking.",
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