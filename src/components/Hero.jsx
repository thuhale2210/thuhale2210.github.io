import { motion } from 'framer-motion';
import { styles } from '../styles'
import { textVariant } from "../utils/motion";
import { computergif, contactgif, educationgif, projectgif } from '../assets';

const Hero = () => {
  return (
    <>
      <section id='home' className='relative w-screen h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute top-[90px] max-w-7xl flex xl:flex-row lg:flex-col xxxs:flex-col xxs:flex-col xs:flex-col sm:flex-col md:flex-col items-start gap-5`}>
          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroSubText} text-white-300 pt-14`}>Hello! I am</h1>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}><span className='text-[#915eff]'>Hannah</span></h1>
            </div>
            <p className={`${styles.heroSubText} text-white-300 pt-10 xxs:pt-0 xxxs:pt-0 mt-5`}>
              Software development and cybersecurity are my passions
            </p>
          </motion.div>

          <motion.div variants={textVariant()} className='flex flex-col xxxs:ml-0 xxs:ml-0 xs:ml-0 sm:ml-20 md:ml-20 lg:ml-28 xl:ml-36'>
            <div className='flex flex-row'>
              <a href='#experience' className='flex items-center gap-2' onClick={() => { window.scrollTo(0, 0) }}>
                <div className='xxxs:w-36 xxs:w-44 xs:w-44 sm:w-72 md:w-72 lg:w-96 xl:w-[400px] xxxs:h-52 xxs:h-52 xs:h-60 sm:h-72 lg:h-80 rounded-tl-2xl bg-[#f0e6ef] p-5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-card background-animate'>
                  <div className='w-full flex items-center justify-center mt-3'>
                    <img className='w-40 h-auto' src={computergif} alt='computer' />
                  </div>
                  <div className='h-auto absolute bottom-5'>
                    <div className={`${styles.cardHeadText}`}>Experience & Skills</div>
                    <div className={`${styles.cardSubText} pt-2 hidden xs:block`}>Showcase my journey and technical expertise in software development and cybersecurity</div>
                  </div>
                </div>
              </a>
              <a href='#education' className='flex items-center gap-2' onClick={() => { window.scrollTo(0, 0) }}>
                <div className='xxxs:w-36 xxs:w-44 xs:w-44 sm:w-72 md:w-72 lg:w-96 xl:w-[400px] xxxs:h-52 xxs:h-52 xs:h-60 sm:h-72 lg:h-80 rounded-tr-2xl bg-[#efc3e6] flex flex-col p-5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-card background-animate'>
                  <div className='w-full flex items-center justify-center mt-5'>
                    <img className='w-36 h-auto' src={educationgif} alt='education' />
                  </div>
                  <div className='h-auto absolute bottom-5'>
                    <div className={`${styles.cardHeadText}`}>Education & Certificates</div>
                    <div className={`${styles.cardSubText} pt-2 hidden xs:block`}>Explore my academic background and certifications demonstrating expertise</div>
                  </div>
                </div>
              </a>
            </div>
            <div className='flex flex-row'>
              <a href='#projects' className='flex items-center gap-2' onClick={() => { window.scrollTo(0, 0) }}>
                <div className='xxxs:w-36 xxs:w-44 xs:w-44 sm:w-72 md:w-72 lg:w-96 xl:w-[400px] xxxs:h-52 xxs:h-52 xs:h-60 sm:h-72 lg:h-80 rounded-bl-2xl bg-[#b8bedd] flex flex-col p-5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-card background-animate'>
                  <div className='w-full flex justify-center items-center mt-2'>
                    <img className='w-40 h-auto' src={projectgif} alt='project' />
                  </div>
                  <div className='h-auto absolute bottom-5'>
                    <div className={`${styles.cardHeadText}`}>Projects</div>
                    <div className={`${styles.cardSubText} pt-2 hidden xs:block`}>View software development and cybersecurity projects with detailed descriptions</div>
                  </div>
                </div>
              </a>

              <a href='#contact' className='flex items-center gap-2' onClick={() => { window.scrollTo(0, 0) }}>
                <div className='xxxs:w-36 xxs:w-44 xs:w-44 sm:w-72 md:w-72 lg:w-96 xl:w-[400px] xxxs:h-52 xxs:h-52 xs:h-60 sm:h-72 lg:h-80 rounded-br-2xl bg-[#9c89b8] flex flex-col p-5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-card background-animate'>
                  <div className='w-full flex items-center justify-center mt-5'>
                    <img className='w-32 h-auto' src={contactgif} alt='contact' />
                  </div>
                  <div className='h-auto absolute bottom-5'>
                    <div className={`${styles.cardHeadText}`}>Contact</div>
                    <div className={`${styles.cardSubText} pt-2 hidden xs:block`}>Reach out for collaboration, opportunities, or inquiries</div>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        <div className={`${styles.paddingX} md:hidden sm:hidden xs:hidden xxs:hidden xxxs:hidden lg:hidden xl:block absolute ml-10 xs:bottom-10 bottom-32 w-full flex items-center`}>
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