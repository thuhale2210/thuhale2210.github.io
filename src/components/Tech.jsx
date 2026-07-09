import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const toolkits = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "Java", "Kotlin"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Appwrite", "Oracle SQL", "ADO.NET", "Data visualization"],
  },
  {
    title: "Cloud & Security",
    items: ["AWS", "Docker", "Linux", "Security fundamentals", "GRC"],
  },
  {
    title: "Product Craft",
    items: ["System design", "Figma", "Requirements", "Git", "Documentation"],
  },
];

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-[13px] font-semibold uppercase tracking-[0.24em] text-cyan-100'>
          Toolkit
        </p>
        <h2 className='mt-3 text-[34px] font-black text-white sm:text-[52px]'>
          What I build with
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 max-w-3xl text-[16px] leading-8 text-slate-300'
      >
        A practical mix of tools from class projects, portfolio builds, data workflows,
        and security-minded experiments.
      </motion.p>

      <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5'>
        {toolkits.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up", "spring", index * 0.08, 0.65)}
            className='rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-card backdrop-blur-xl'
          >
            <h3 className='text-[15px] font-black uppercase tracking-[0.16em] text-white'>
              {group.title}
            </h3>
            <div className='mt-5 flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-white/10 bg-[#050816]/45 px-3 py-1 text-[12px] font-medium text-slate-200'
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "toolkit");
