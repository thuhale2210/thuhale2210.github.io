/* eslint-disable react/prop-types */
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#2a2945",
                opacity: 0.8,
                color: "#fff",
                border: `1px solid #4b5563`,
                borderRadius: "15px",
                boxShadow: "0px 35px 120px -15px #211e35",
            }}
            contentArrowStyle={{ borderRight: '7px solid #4b5563' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[65%] h-[65%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold mt-5 ml-3'>{experience.title}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: '12px' }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-3 mb-5 list-disc ml-7 space-y-2 gap-5'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

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

            <div className='mt-10 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");