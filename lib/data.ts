export type Language = "fr" | "en";


export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi, I am",
            role: "Full Stack Developer",
            description: "Passionate about innovation, I develop high-performance and scalable web solutions with high added value.",
            downloadCv: "Download CV",
            contactMe: "Contact Me",
        },
        about: {
            title: "Overview",
            subtitle: "Introduction",
            description: "I'm a passionate Full Stack Developer focused on creating practical and efficient web applications. I work with React on the front-end and PHP/Laravel on the back-end, leveraging databases to build responsive and user-friendly solutions that address real needs. I enjoy writing clean, maintainable code and continuously improving my skills by exploring new technologies and best practices. Outside of coding, I like learning about the latest web trends and sharing knowledge with the developer community.",
        },
        experience: {
            title: "Work Experience",
            subtitle: "What I have done so far",
        },
        skills: {
            title: "Technical Skills",
        },
        projects: {
            title: "My Projects",
            viewGithub: "View on GitHub",
            description: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
        },
        contact: {
            title: "Contact Me",
            email: "Email",
            github: "GitHub",
        },
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            contact: "Contact",
        },
        hero: {
            greeting: "Bonjour, je suis",
            role: "Développeur Full Stack",
            description: "Passionné par l’innovation, je développe des solutions web performantes et évolutives à forte valeur ajoutée.",
            downloadCv: "Télécharger CV",
            contactMe: "Me Contacter",
        },
        about: {
            title: "Aperçu",
            subtitle: "Introduction",
            description: "Je suis un développeur Full Stack passionné, concentré sur la création d'applications web pratiques et efficaces. Je travaille avec React pour le front-end et PHP/Laravel pour le back-end, en exploitant les bases de données pour construire des solutions réactives et conviviales qui répondent à des besoins réels. J'aime écrire du code propre et maintenable, et améliorer continuellement mes compétences en explorant de nouvelles technologies. En dehors du code, j'aime suivre les dernières tendances web et partager mes connaissances avec la communauté.",
        },
        experience: {
            title: "Expérience Professionnelle",
            subtitle: "Ce que j'ai accompli jusqu'à présent",
        },
        skills: {
            title: "Compétences Techniques",
        },
        projects: {
            title: "Mes Projets",
            viewGithub: "Voir sur GitHub",
            description: "Les projets suivants présentent mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers les dépôts de code et des démos en direct. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer des projets efficacement.",
        },
        contact: {
            title: "Contactez-moi",
            email: "Email",
            github: "GitHub",
        },
    },
};

export const profileData = {
    name: "Malak",
    role: {
        fr: "Développeur Full Stack",
    },
    email: "malakmalak2005123@gmail.com",
    github: "https://github.com/malakmalak2005123-cmd",
    linkedin: "https://www.linkedin.com/in/malak-messaoudi/",
    skills: {
        frontend: [
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "JavaScript", icon: "js" },
            { name: "React", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Figma", icon: "figma" },
        ],
        backend: [
            { name: "PHP", icon: "php" },
            { name: "Laravel", icon: "laravel" },
        ],
        databases: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MySQL", icon: "mysql" },
        ],
    },
    experiences: [
        {
            title: "Développeuse Full Stack (Laravel/Vue.js)",
            company_name: "Ark-x Talent Solutions",
            icon: "freelance",
            iconBg: "#383E56",
            date: "Oct 2025 - Fév 2026",
            points: [
                "Développement d’un site web e-commerce pour un guide touristique, incluant gestion des profils utilisateurs, des rendez-vous pour hôtels et restaurants, et planification des activités.",
                "Collaboration avec l’équipe pour optimiser l’expérience utilisateur et les performances de l’application.",
            ],
            tech: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "Git", "GitHub", "Vue.js"]
        },
        {
            title: "Développeuse Web PHP (Stage / Projet encadré)",
            company_name: "CHU",
            icon: "agency",
            iconBg: "#E6DEDD",
            date: "Mar 2025 - Avr 2025",
            points: [
                "Création d’une interface utilisateur avec React et CSS pour afficher les informations médicales des patients.",
                "Mise en place d’un système de prise de rendez-vous en ligne (choix de la date, de l’heure et du médecin).",
                "Gestion des données des patients et des rendez-vous via une base MySQL.",
                "Travail sur un projet encadré dans un contexte académique.",
            ],
            tech: ["Ract", "PHP", "MySQL", "HTML", "CSS", "Git", "GitHub", "Postman"]
        },
    ],
    services: [
        {
            title: "Clean Code",
            icon: "code",
            description: {
                en: "Writing maintainable, scalable code that stands the test of time.",
                fr: "Écriture de code maintenable et évolutif qui résiste à l'épreuve du temps."
            }
        },
        {
            title: "Innovation",
            icon: "innovation",
            description: {
                en: "Always exploring new technologies and creative solutions.",
                fr: "Exploration constante de nouvelles technologies et solutions créatives."
            }
        },
        {
            title: "Goal-Oriented",
            icon: "goal",
            description: {
                en: "Focused on delivering results that exceed expectations.",
                fr: "Concentré sur la livraison de résultats dépassant les attentes."
            }
        },
        {
            title: "Performance",
            icon: "performance",
            description: {
                en: "Optimizing every aspect for speed and efficiency.",
                fr: "Optimisation de chaque aspect pour la vitesse et l'efficacité."
            }
        },
    ],
    projects: [
        {
            id: "catshop",
            title: "CatShop",
            description: {
                en: "An e-commerce website dedicated to cat adoption, allowing users to browse available cat profiles, make online adoption requests, and access essential products related to cat well-being.",
                fr: "Un site web e-commerce dédié à l’adoption de chats, permettant aux utilisateurs de consulter les profils des chats disponibles, d’effectuer des demandes d’adoption en ligne et d’accéder aux produits essentiels liés au bien-être des chats.",
            },
            tags: ["PHP", "Laravel", "Vue.js", "MySQL", "HTML", "CSS", "Docker", "Git", "GitHub"],
            link: "/projects/catshop", // Internal link
            liveUrl: "https://catshop-production-2fb1.up.railway.app/home.php",
            repoUrl: "https://github.com/malakmalak2005123-cmd/CatShop",
            images: [
                "/images/projects/catshop/image.png",
                "/images/projects/catshop/image copy.png",
                "/images/projects/catshop/image copy 2.png",
                "/images/projects/catshop/image copy 3.png",
                "/images/projects/catshop/image copy 4.png",
            ],
            features: [
                "Browse Available Cats for Adoption",
                "Add Selected Pets to Cart",
                "Adoption Form with Personal Information",
                "Responsive and Secure Web Design"
            ]
        },
        {
            id: "tourist-guide",
            title: "Tourist Guide Website",
            description: {
                en: "Tourist website featuring destinations, hotels using HTML/CSS.",
                fr: "Site web touristique avec destinations, hôtels et restaurants.",
            },
            tags: ["HTML", "CSS", "JS"],
            link: "#",
            images: [],
            features: []
        },
    ],
};
