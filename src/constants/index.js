import {
    mobile,
    web,
    previousworkicon,
    centennialcollege,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    kotlin,
    java,
    python,
    nextjs,
    nodejs,
    flappybird,
    pokemoncatcher,
    trackntrain,
    baseballplayerstats,
    restaurantbillcalculator,
    portfolio,
    financetrackerapp,
    tutorme,
    restaurantorderapp,
    comingsoon,
    csharp,
    unity,
    linux,
    oraclesql,
    backend
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const cardLinks = [
    {
        id: "experience",
        title: "Experience & Skills",
    },
    {
        id: "education",
        title: "Education & Certificates",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Development",
        icon: web,
    },
    {
        title: "Mobile App Development",
        icon: mobile,
    },
    {
        title: "Cybersecurity",
        icon: backend,
    },
];

const technologies = [
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Kotlin",
        icon: kotlin,
    },
    // {
    //     name: "HTML 5",
    //     icon: html,
    // },
    // {
    //     name: "CSS 3",
    //     icon: css,
    // },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Oracle SQL",
        icon: oraclesql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Linux",
        icon: linux,
    },
    // {
    //     name: "Unity",
    //     icon: unity,
    // }
];

const experiences = [
    {
        title: "Business and IT Architecture Analyst (Co-op)",
        company_name: "Centennial College",
        icon: centennialcollege,
        iconBg: "#0b0f17",
        date: "Jan 2024 - Apr 2024",
        points: [
            "- Directly reported to Director of Enterprise Governance, Risk Management and Chief Architect to ensure alignment between business objectives and technical specifications",
            "- Engaged with internal and external stakeholders to gather requirements, evaluate solutions, and communicate recommendations",
            "- Led a team of 3 members in facilitating an ITIL workshop and collaborated with stakeholders to establish an agreed plan on incident severity levels for the college. Over 90% of attendees expressing satisfaction with the organization and content delivery"
        ],
    },
    {
        title: "Financial Risk Analyst",
        company_name: "GIMO Joint Stock Company | VP Bank | Deloitte Consulting",
        icon: previousworkicon,
        iconBg: "#0b0f17",
        date: "2021 - 2022",
        points: [
            "- Collected and processed data for monthly risk reports",
            "- Extracted and transformed data to resolve data issues and find insights using SQL",
            "- Wrote report and performed analysis on RWA, CAR, capital consumption and risk-adjusted return for key business units and providing them with recommendations for potential mitigation",
        ],
    },
];

const education = [
    {
        degree: "Software Engineering Technology",
        institution: "Centennial College",
        location: "Toronto, Canada",
        year: "2022 - 2025",
    },
    {
        degree: "Bachelor in Finance",
        institution: "National Economics University",
        location: "Hanoi, Vietnam",
        year: "2016 - 2020",
    }
];

const achievements = [
    {
        title: "First runner-up",
        competition: "WIMTACH Hackathon partnering with Scarborough Food Network",
        year: "2023",
    }
];

const certificates = [
    {
        name: "ISC2 Certified in Cybersecurity",
        organization: "International Information System Security Certification Consortium (ISC2)",
        credentialnumber: "Credential ID: 2071341",
        credential_link: "https://www.credly.com/badges/607970d8-bd05-48c5-9663-8ab02ffec1b8",
    },
    {
        name: "Info-Tech Security and Risk",
        organization: "Info-Tech",
        credentialnumber: "Credential ID: 38741",
        credential_link: "https://drive.google.com/file/d/1E07b4yB1FMO3gKFqy7wK6xMiD86iTEhW/view?usp=share_link",
    },
    {
        name: "Info-Tech Service Planning & Architecture",
        organization: "Info-Tech",
        credentialnumber: "Credential ID: 38565",
        credential_link: "https://drive.google.com/file/d/1KXjPUpMWldMAJO81Tjvu1g1znxeqwSOM/view?usp=share_link",
    },
    {
        name: "GARP Financial Risk Manager (FRM) Part I",
        organization: "Global Association of Risk Professionals (GARP)",
        credentialnumber: "GARP ID: 1729934",
        credential_link: "https://drive.google.com/file/d/1YVNwTWXYXM4DZ-t2lqmr7tRYDfbzY46e/view?usp=share_link",
    },
];

const projects = [
    {
        name: "'Finance Finesse' App",
        description:
            "A 2-in-1 banking solution that provides users with a range of financial tracking features, including expense tracking, income monitoring, budgeting tools, and data visualizations to help them gain insights into their financial health. The app also offers a secure and convenient way to manage their bank accounts and credit cards",
        tags: [
            {
                name: "Solo Project",
                color: "yellow-text-gradient",
            },
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "Next.js",
                color: "gray-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
            {
                name: "Appwrite",
                color: "green-text-gradient",
            },
        ],
        image: financetrackerapp,
        source_code_link: "https://github.com/thuhale2210/finance-finesse-a-banking-app",
    },
    {
        name: "'TrackNTrain' Fitness App",
        description:
            "TrackNTrain mimics a commercial gym app, allowing users to book sessions with available trainers, receive exercise recommendations, and track their fitness routines",
        tags: [
            {
                name: "Group Project",
                color: "yellow-text-gradient",
            },
            {
                name: "JavaScript",
                color: "",
            },
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: trackntrain,
        source_code_link: "https://github.com/thuhale2210/comp229-group2-trackntrain",
    },
    {
        name: "Restaurant Order App",
        description:
            "This Android app, using Tim Hortons' branding, enables customers to order food online for home delivery or store pick-up from a restaurant. It allows users to choose from various types of food and drinks, following a seamless navigation process through different menus and finally checkout with a payment method of their choice",
        tags: [
            {
                name: "Solo Project",
                color: "yellow-text-gradient",
            },
            {
                name: "Kotlin",
                color: "purple-text-gradient",
            },
            {
                name: "Android Studio",
                color: "green-text-gradient",
            },
        ],
        image: restaurantorderapp,
        source_code_link: "https://github.com/thuhale2210/restaurant-order-app",
    },
    {
        name: "Portfolio Website",
        description:
            "A place to show my passion, projects, and achievements. A way to share my thoughts on the world and technology",
        tags: [
            {
                name: "Solo Project",
                color: "yellow-text-gradient",
            },
            {
                name: "JavaScript",
                color: "",
            },
            {
                name: "React.js",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/thuhale2210/thuhale2210.github.io",
    },
    {
        name: "Baseball Player Statistics",
        description:
            "This WPF application is a project built using C# and ADO.NET Entity Framework. It provides a user interface to interact with the `Players` table in the `Baseball` database. The application allows users to search for players by name or ID, display all players, calculate batting averages, and more",
        tags: [
            {
                name: "Solo Project",
                color: "yellow-text-gradient",
            },
            {
                name: "C-sharp",
                color: "blue-text-gradient",
            },
            {
                name: "WPF",
                color: "green-text-gradient",
            },
            {
                name: "ADO.NET Entity Framework",
                color: "pink-text-gradient",
            },
        ],
        image: baseballplayerstats,
        source_code_link: "https://github.com/thuhale2210/comp212-baseball-player-stats",
    },
    {
        name: "Restaurant Bill Calculator",
        description:
            "A WPF (.NET Framework) app that calculates a restaurant table's bill",
        tags: [
            {
                name: "Solo Project",
                color: "yellow-text-gradient",
            },
            {
                name: "C-sharp",
                color: "blue-text-gradient",
            },
            {
                name: "WPF",
                color: "green-text-gradient",
            },
        ],
        image: restaurantbillcalculator,
        source_code_link: "https://github.com/thuhale2210/comp212-lab3-restaurant-bill-calculator",
    },
    {
        name: "Flappy Bird In Another World",
        description:
            "An innovated version of the classic Flappy Bird game with added challenges and unique features",
        tags: [
            {
                name: "Solo Project",
                color: "yellow-text-gradient",
            },
            {
                name: "C-sharp",
                color: "blue-text-gradient",
            },
            {
                name: "Unity",
                color: "green-text-gradient",
            },
        ],
        image: flappybird,
        source_code_link: "https://github.com/thuhale2210/Flappy-Bird--in-another-world-",
    },
    {
        name: "Pokémon Catcher",
        description:
            "A web-based game involves catching Pokémon characters using a mouse-controlled net",
        tags: [
            {
                name: "Solo Project",
                color: "yellow-text-gradient",
            },
            {
                name: "JavaScript",
                color: "",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: pokemoncatcher,
        source_code_link: "https://github.com/thuhale2210/Pokemon-Catcher---A-Simple-Canvas-Game",
    },
    {
        name: "'TutorMe' Tutoring App",
        description:
            "A comprehensive Software Systems Design document for an innovative tutoring solution app, addressing challenges faced by students in higher education and proposing solutions to improve their learning experience",
        tags: [
            {
                name: "Group Project",
                color: "yellow-text-gradient",
            },
            {
                name: "Software System Design Project",
                color: "blue-text-gradient",
            },
        ],
        image: tutorme,
        source_code_link: "https://drive.google.com/file/d/1Df8tyQqdGded2NAb94PBV5UFU71dDcgn/view?usp=share_link",
    },
];

export { experiences, services, education, achievements, certificates, technologies, projects };