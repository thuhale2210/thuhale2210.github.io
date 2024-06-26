import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import DownloadButton from "./Download";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Get to know me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I am Software Engineer student whose interests are in software development, cloud and security.
        I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-5'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("right", "spring", 1.5)}
        className="py-10">
        <div className="grid gap-8 items-start place-items-end text-[20px]">
          <div className="relative">
            <div className="absolute -inset-1.5 border-2 border-[#251e3d] rounded-xl shadow-card background-animate"></div>
            <DownloadButton />
          </div>
        </div>
      </motion.div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full border-2 border-[#251e3d] p-[1px] rounded-[20px] shadow-card'
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default SectionWrapper(About, "about");
