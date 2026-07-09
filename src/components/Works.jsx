/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const filters = [
  "All",
  "Full-stack",
  "Healthcare Integration",
  "Machine Learning",
  "Mobile",
  "Security",
  "Games",
  "Design",
];

const projectProfiles = {
  "'Finance Finesse' App": {
    category: "Full-stack",
    stack: ["Next.js", "TypeScript", "Appwrite"],
    outcome: "Built account flows, budgeting views, and finance visualizations in one product surface.",
  },
  "'TrackNTrain' Fitness App": {
    category: "Full-stack",
    stack: ["React", "JavaScript", "CSS"],
    outcome: "Designed trainer booking, recommendations, and workout tracking for a gym-style app.",
  },
  "Restaurant Order App": {
    category: "Mobile",
    stack: ["Kotlin", "Android Studio"],
    outcome: "Built a mobile ordering flow from menu browsing to checkout for restaurant pickup or delivery.",
  },
  "Community Engagement App": {
    category: "Full-stack",
    stack: ["React", "Node.js", "GraphQL", "Apollo Federation", "Gemini", "Hugging Face", "Microservices"],
    outcome: "An AI-driven community engagement platform built with a microservices architecture.",
  },
  "Bike Theft Recovery Prediction": {
    category: "Machine Learning",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Tableau", "Power BI", "Flask"],
    outcome: "Developed a predictive model to analyze and forecast bike theft incidents in Toronto using machine learning techniques.",
    writeupLink: "https://github.com/thuhale2210/comp309-final-project/blob/main/Report.pdf",
  },
  "HL7 Integration Pipeline on AWS": {
    category: "Healthcare Integration",
    stack: ["HL7", "AWS", "IguanaX", "Python"],
    outcome: "Built a healthcare integration pipeline for processing HL7-style workflows with cloud deployment patterns.",
    writeupLink: "https://binaryblooms.wordpress.com/2026/06/10/building-an-hl7-integration-pipeline-on-aws-with-iguanax/",
  },
  "Securing VPC Peering across AWS and GCP": {
    category: "Security",
    stack: ["AWS", "GCP", "Networking", "Cloud Security"],
    outcome: "A cloud security proof-of-concept focused on secure VPC peering across AWS and GCP. The project explores private cloud-to-cloud communication, trusted and untrusted network paths, routing, access control, and security best practices for protecting cloud network connections",
    writeupLink: "https://binaryblooms.wordpress.com/2025/05/01/peering-across-the-clouds-project-introduction-strengthening-vpc-connections-on-aws-and-gcp/",
  },
  "Baseball Player Statistics": {
    category: "Desktop App",
    stack: ["C#", "WPF", "ADO.NET"],
    outcome: "Built a searchable statistics interface backed by a baseball player database.",
  },
  "Restaurant Bill Calculator": {
    category: "Desktop App",
    stack: ["C#", "WPF"],
    outcome: "Created a structured bill calculator for restaurant tables and itemized totals.",
  },
  "Flappy Bird In Another World": {
    category: "Games",
    stack: ["C#", "Unity"],
    outcome: "Reimagined a classic arcade loop with custom challenges, pacing, and game interactions.",
  },
  "Pokemon Catcher": {
    category: "Games",
    signal: "Canvas game",
    stack: ["JavaScript", "HTML", "CSS"],
    outcome: "Built a browser game with pointer-driven interactions and real-time canvas rendering.",
  },
  "Pokémon Catcher": {
    category: "Games",
    stack: ["JavaScript", "HTML", "CSS"],
    outcome: "Built a browser game with pointer-driven interactions and real-time canvas rendering.",
  },
  "'TutorMe' Tutoring App": {
    category: "Design",
    stack: ["Requirements", "Architecture", "UX"],
    outcome: "Produced a software systems design artifact for a tutoring product concept.",
  },
};

const getProfile = (project) => (
  projectProfiles[project.name] || {
    category: "Full-stack",
    signal: "Project build",
    stack: project.tags.slice(1, 4).map((tag) => tag.name),
    outcome: project.description,
  }
);

const ProjectCard = ({ project, index, featured }) => {
  const profile = getProfile(project);
  const actionLabel = project.source_code_link.includes("drive.google.com")
    ? "View Artifact"
    : "View Code";

  return (
    <motion.article
      initial='hidden'
      animate='show'
      variants={fadeIn("up", "spring", index * 0.12, 0.65)}
      className={`group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-card backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-200/40 ${featured ? "lg:col-span-2" : ""
        }`}
    >
      <div className={`relative overflow-hidden ${featured ? "h-[360px]" : "h-[250px]"}`}>
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent' />

        <div className='absolute left-4 top-4 rounded-full border border-white/15 bg-[#050816]/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-md'>
          {profile.category}
        </div>

        <div className='absolute bottom-0 left-0 right-0 p-5'>
          <p className='text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300'>
            {profile.signal}
          </p>
          <h3 className='mt-2 text-2xl font-black leading-tight text-white'>
            {project.name}
          </h3>
        </div>
      </div>

      <div className='p-5'>
        <p className='text-[14px] leading-6 text-slate-300'>
          {profile.outcome}
        </p>

        <div className='mt-5 flex flex-wrap gap-2'>
          {profile.stack.map((item) => (
            <span
              key={`${project.name}-${item}`}
              className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-slate-200'
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.source_code_link}
          target='_blank'
          rel='noreferrer'
          className='mt-6 inline-flex min-h-[42px] items-center rounded-full border border-white/15 bg-white/[0.04] px-4 text-[13px] font-bold text-white transition hover:border-cyan-200/60 hover:bg-cyan-200/10'
        >
          {actionLabel} &rarr;
        </a>
        {profile.writeupLink && (
          <a
            href={profile.writeupLink}
            target='_blank'
            rel='noreferrer'
            className='ml-3 mt-6 inline-flex min-h-[42px] items-center rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 text-[13px] font-bold text-white transition hover:border-cyan-200/70 hover:bg-cyan-200/15'
          >
            View write-up &rarr;
          </a>
        )}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => (
    projects.filter((project) => {
      if (activeFilter === "All") return true;
      return getProfile(project).category === activeFilter;
    })
  ), [activeFilter]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-[13px] font-semibold uppercase tracking-[0.24em] text-cyan-100'>
          Project shelf
        </p>
        <h2 className='mt-3 text-[34px] font-black text-white sm:text-[52px]'>
          Featured builds
        </h2>
      </motion.div>

      <div className='mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='max-w-3xl text-[16px] leading-8 text-slate-300'
        >
          A curated view of the projects behind the shelf: full-stack applications, mobile builds,
          data tools, games, and design artifacts with the stack and outcome made easy to scan.
        </motion.p>

      </div>

      <div className='flex flex-wrap gap-4 mt-8'>
        {filters.map((filter) => (
          <button
            key={filter}
            type='button'
            onClick={() => setActiveFilter(filter)}
            className={`min-h-[38px] rounded-full border px-4 text-[13px] font-bold transition ${activeFilter === filter
                ? "border-cyan-200 bg-cyan-200 text-primary"
                : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-cyan-200/50"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className='mt-12 rounded-lg border border-white/10 bg-white/[0.04] p-8 text-slate-300'>
          No projects in this category yet.
        </div>
      ) : (
        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Projects, "projects");
