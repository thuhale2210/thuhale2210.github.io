/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <Tilt className='w-full mt-10'>
            <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className='rounded-2xl w-full'>
                <div className="flex flex-row w-full">
                    <div className="gradient-border bg-gradient-to-r from-transparent to-[#2e264b] p-10 rounded-3xl w-2/5">
                        <div className='h-full mt-10'>
                            <p className='text-secondary text-[17px]'>{experience.date}</p>
                            <h3 className='mt-4 text-white font-bold text-[27px]'>{experience.title}</h3>
                            <p className='mt-4 mb-8 text-secondary text-[17px]'>{experience.company_name}</p>
                        </div>
                    </div>
                    <div className='gradient-border p-5 rounded-2xl w-3/5 shadow-card'>
                        <ul className='m-5 flex flex-wrap gap-3'>
                            {experience.points.map((point, index) => (
                                <li
                                    key={`experience-point-${index}`}
                                    className='text-secondary text-[15px] pl-1 tracking-wider'
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </Tilt>

    );
}

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>
                    Work Experience
                </p>
                <h2 className={`${styles.sectionHeadText}`}>
                    What I have done so far
                </h2>
            </motion.div>

            <div className='flex flex-col'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");