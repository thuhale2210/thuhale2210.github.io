/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education, achievements, certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Education</p>
                <h2 className={styles.sectionHeadText}>My Academic Achievements</h2>
            </motion.div>

            <div className='flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col xxxs:flex-col gap-5'>
                <div className='gap-5 flex flex-col'>
                    <div className='flex flex-wrap gap-5 mt-10'>
                        {education.map((education, index) => (
                            <EducationCard key={education.title} index={index} {...education} />
                        ))}
                    </div>
                    <div className='flex flex-wrap gap-5'>
                        {achievements.map((achievements, index) => (
                            <AchievementCard key={achievements.title} index={index} {...achievements} />
                        ))}
                    </div>
                </div>

                <div className='flex flex-col gap-5 lg:mt-10'>
                    <CertificateCard />
                </div>
            </div>
        </>
    );
};

// eslint-disable-next-line react/prop-types
const EducationCard = ({ index, institution, degree, location, year }) => (
    <Tilt className='md:w-[300px] sm:w-[500px] xs:w-[300px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full border border-gray-600 p-[1px] rounded-[20px] bg-[#304d6d] bg-opacity-20 shadow-card background-animate'
        >
            <div
                // eslint-disable-next-line react/no-unknown-property
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='rounded-[20px] py-5 px-8 min-h-[250px] flex justify-evenly flex-col'
            >
                <div>
                    <h3 className='text-white text-[18px] font-semibold'>{degree}</h3>
                    <p className='text-secondary text-[15px]' style={{ marginTop: 5 }}>{institution}</p>
                    <p className='text-secondary text-[15px]' style={{ marginTop: 3 }}>{location}</p>
                    <p className='text-secondary text-[15px]' style={{ marginTop: 3 }}>{year}</p>
                    <p className='text-gray-600 text-[10px] font-semibold border rounded-[20px] p-2 bg-gradient-to-tr from-slate-100 to-[#9ac6c5] background-animate w-20 text-center mt-5'>Education</p>
                </div>
            </div>
        </motion.div>
    </Tilt>
);

const AchievementCard = ({ index, title, competition, year }) => (
    <Tilt className='md:w-[620px] sm:w-[500px] xs:w-[300px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5 + 1, 0.75)}
            className='w-full border border-gray-600 p-[1px] rounded-[20px] bg-[#907ad6] bg-opacity-20 shadow-card background-animate'
        >
            <div
                // eslint-disable-next-line react/no-unknown-property
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='rounded-[20px] py-5 px-8 min-h-[250px] flex justify-evenly flex-col'
            >
                <div>
                    <h3 className='text-white text-[18px] font-semibold'>{title}</h3>
                    <p className='text-secondary text-[15px]' style={{ marginTop: 5 }}>{competition}</p>
                    <p className='text-secondary text-[15px]' style={{ marginTop: 3 }}>{year}</p>
                    <p className='text-gray-700 text-[10px] font-semibold border rounded-[20px] p-2 bg-gradient-to-tr from-[#b8bedd] to-[#a9a4c1] background-animate w-20 text-center mt-5'>Hackathon</p>
                </div>
            </div>
        </motion.div>
    </Tilt>
);

const CertificateCard = () => {
    const [hoveredName, setHoveredName] = useState(null);

    return (
        <Tilt className='md:w-[620px] sm:w-[500px] xs:w-[300px] w-full h-full'>
            <motion.div
                variants={fadeIn("right", "spring", 1.5, 0.75)}
                className='w-full border border-gray-600 p-[1px] rounded-[20px] bg-[#e27396] bg-opacity-10 shadow-card background-animate h-full'
            >
                <div className='rounded-[20px] py-5 px-8 min-h-[250px] flex justify-evenly flex-col mt-5'>
                    <div className='flex flex-wrap gap-5'>
                        {certificates.map(({ name, organization, credentialnumber, credential_link }) => (
                            <div key={name}>
                                <a href={credential_link}>
                                    <h3
                                        onMouseEnter={() => setHoveredName(name)}
                                        onMouseLeave={() => setHoveredName(null)}
                                        className='text-white text-[18px] font-semibold flex flex-row'
                                    >
                                        {name}
                                        {hoveredName === name && (
                                            <motion.div
                                                variants={{
                                                    visible: { opacity: 1, x: 0 },
                                                    hidden: { opacity: 0, x: 10 },
                                                }}
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                transition={{ duration: 0.3 }}
                                                className='text-gray-100 text-[10px] border font-normal rounded-[20px] p-1 w-36 text-center ml-5 flex-row'
                                            >
                                                Click to see credentials
                                            </motion.div>
                                        )}
                                    </h3>

                                </a>
                                <p className='text-secondary text-[15px]' style={{ marginTop: 5 }}>{organization}</p>
                                <p className='text-secondary text-[15px]' style={{ margin: 3 }}>{credentialnumber}</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-gray-700 text-[10px] font-semibold border rounded-[20px] p-2 bg-gradient-to-tr from-[#f0e6ef] to-[#8e87a1] background-animate w-20 text-center mt-5'>Certificate</p>
                </div>
            </motion.div>
        </Tilt>
    );
}

export default SectionWrapper(Education, "education");
