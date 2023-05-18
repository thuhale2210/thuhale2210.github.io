import React from "react";
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
        className='mt-4 text-secondary text-[16px] max-w-4xl leading-[30px]'
      >
        I'm a software developer with experience in C# and JavaScript. I'm interested
        in developing efficient, scalable, and user-friendly solutions that solve real-world problems. 
        I also have huge love for game development. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("right", "spring", 1.5)}
        className="py-10">
        <div className="grid gap-8 items-start place-items-end">
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 background-animate"></div>
            <DownloadButton />
          </div>
        </div>
      </motion.div>
    </>
  );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-pink-600 to-purple-600 p-[1px] rounded-[20px] shadow-card background-animate'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary/90 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default SectionWrapper(About, "about");
