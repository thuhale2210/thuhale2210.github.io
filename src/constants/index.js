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
    flappybird,
    pokemoncatcher,
    // newproject,
    // fitnessapp,
    trackntrain,
    portfolio,
    financetrackerapp,
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
        title: "Game Development",
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
        name: "Unity",
        icon: unity,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
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
];

const experiences = [
    {
        title: "Business and IT Architecture Analyst",
        company_name: "Centennial College",
        icon: centennialcollege,
        iconBg: "#0b0f17",
        date: "Jan 2024 - Apr 2024",
        points: [
            "Directly reported to Director of Enterprise Governance, Risk Management and Chief Architect to ensure alignment between business objectives and technical specifications",
            "Participated in the creation of business documentation and models",
            "Engaged with internal and external stakeholders to gather requirements, evaluate solutions, and communicate recommendations, demonstrating strong interpersonal and communication skills within a professional environment",
        ],
    },
    {
        title: "Financial Risk Analyst",
        company_name: "GIMO Joint Stock Company | VP Bank | Deloitte Consulting",
        icon: previousworkicon,
        iconBg: "#0b0f17",
        date: "2021 - 2022",
        points: [
            "Collected and processed data for monthly risk reports",
            "Extracted and transformed data to resolve data issues and find insights using SQL",
            "Wrote report and performed analysis on RWA, CAR, capital consumption and risk-adjusted return for key business units and providing them with recommendations for potential mitigation",
        ],
    },
    // {
    //     title: "Risk Management Associate ",
    //     company_name: "Vietnam Prosperity Joint Stock Commercial Bank",
    //     // icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Sep 2021 - Mar 2022",
    //     points: [
    //         "Extracted and transformed data to resolve data issues and find insights using SQL",
    //         "Wrote report and performed analysis on RWA, CAR, capital consumption and risk-adjusted return for key business units and providing them with recommendations for potential mitigation",
    //     ],
    // },
    // {
    //     title: "Financial Risk Advisory",
    //     company_name: "Deloitte Consulting",
    //     // icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Conducted primary and secondary research, processed data on Excel, wrote reports for a gender equality research project of the IFC Vietnam",
    //         "Conducted research on leading practices to develop grading tool, assessed client's performance, wrote reports and business requirements document, and assisted senior manager in project management for Fraud & Anti-money laundering consulting project of Military Commercial Joint Stock Bank",
    //         "Performed compliance check at client's sites as part of the Sanofi compliance consulting project",
    //     ],
    // },
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
        name: "GARP Financial Risk Manager (FRM) Part I",
        organization: "Global Association of Risk Professionals (GARP)",
        credentialnumber: "GARP ID: 1729934",
        credential_link: "https://drive.google.com/file/d/1YVNwTWXYXM4DZ-t2lqmr7tRYDfbzY46e/view?usp=share_link",
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
];

const projects = [
    {
        name: "Personal Finance Tracking App (Coming Soon)",
        description:
            "An app that provides users with a range of financial tracking features, including expense tracking, income monitoring, budgeting tools, and data visualizations to help them gain insights into their financial health",
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
                name: "MongoDB",
                color: "green-text-gradient",
            },
        ],
        image: financetrackerapp,
        source_code_link: " ",
    },
    {
        name: "'TrackNTrain' Fitness App",
        description:
            "TrackNTrain mimics a commercial gym app, allowing users to book sessions with available trainers, receive exercise recommendations, and track their fitness routines.",
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
];

export { experiences, services, education, achievements, certificates, technologies, projects };