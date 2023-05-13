import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { NatureCanvas } from './canvas/';
import { fadeIn, textVariant } from "../utils/motion";


const Hero = () => {
  return (
    <>
      <section id='home' className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm <span className='text-[#915eff]'>Hannah!</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop web applications and games
            </p>
          </motion.div>
        </div>

        <NatureCanvas />

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.dev
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero