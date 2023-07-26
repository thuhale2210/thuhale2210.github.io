import {
    mobile,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    flappybird,
    pokemoncatcher,
    newproject,
    fitnessapp,
    thelongjourney,
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
        id: "work",
        title: "Work",
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
        title: "Continuously updating...",
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

// const experiences = [
//     {
//         title: "Risk Analyst",
//         company_name: "GIMO Joint Stock Company",
//         icon: meta,
//         iconBg: "#E6DEDD",
//         date: "Apr 2022 - Jul 2022",
//         points: [
//             "Collected and processed data for monthly risk reports",
//             "Developed credit evaluation model which is applied for 100+ organization customers",
//             "Developed new repayment method for individual customers and its risk assessment procedures",
//         ],
//     },
//     {
//         title: "Risk Management Associate ",
//         company_name: "Vietnam Prosperity Joint Stock Commercial Bank",
//         icon: shopify,
//         iconBg: "#383E56",
//         date: "Sep 2021 - Mar 2022",
//         points: [
//             "Extracted and transformed data to resolve data issues and find insights using SQL",
//             "Wrote report and performed analysis on RWA, CAR, capital consumption and risk-adjusted return for key business units and providing them with recommendations for potential mitigation",
//         ],
//     },
//     {
//         title: "Financial Risk Advisory",
//         company_name: "Deloitte Consulting",
//         icon: tesla,
//         iconBg: "#E6DEDD",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Conducted primary and secondary research, processed data on Excel, wrote reports for a gender equality research project of the IFC Vietnam",
//             "Conducted research on leading practices to develop grading tool, assessed client's performance, wrote reports and business requirements document, and assisted senior manager in project management for Fraud & Anti-money laundering consulting project of Military Commercial Joint Stock Bank",
//             "Performed compliance check at client's sites as part of the Sanofi compliance consulting project",
//         ],
//     },
// ];

const projects = [
    {
        name: "Flappy Bird In Another World",
        description:
            "An innovated version of the classic Flappy Bird game with added challenges and unique features",
        tags: [
            {
                name: "C#",
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
                name: "JavaScript",
                color: "yellow-text-gradient",
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
        name: "Fitness App",
        description:
            "A fitness app that fetch data (exercise descriptions and relevant Youtube videos) from RapidAPI",
        tags: [
            {
                name: "JavaScript",
                color: "yellow-text-gradient",
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
        image: fitnessapp,
        source_code_link: "https://github.com/thuhale2210/Fitness-app",
    },
    {
        name: "The Long Journey",
        description:
            "An app that records your experience in the world of art",
        tags: [
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
            {
                name: "ComingSoon",
                color: " ",
            },
        ],
        image: thelongjourney,
        source_code_link: " ",
    },
    {
        name: "TBA",
        description:
            "A multi-player tabletop game that will send you into the madness",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "Unity",
                color: "green-text-gradient",
            },
            {
                name: "ComingSoon",
                color: " ",
            },
        ],
        image: newproject,
        source_code_link: " ",
    },
];

export { services, technologies, projects };