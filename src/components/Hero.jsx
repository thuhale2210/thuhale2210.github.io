import { motion } from "framer-motion";
import { styles } from "../styles";
import portfolioAvatar from "../assets/portfolio_avatar_animated.gif";

const focusAreas = [
  "Full-stack",
  "Healthcare Integration",
  "Security",
  "Cloud",
  "Machine Learning",
];

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * index, duration: 0.7, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section
      id='home'
      className='relative z-10 min-h-screen w-screen overflow-hidden px-6 pt-20 pb-10 sm:px-10'
    >
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.22),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(244,114,182,0.17),transparent_30%),linear-gradient(135deg,rgba(5,8,22,0.2),rgba(5,8,22,0.9))]' />
      <div className='pointer-events-none absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent' />

      <div className='relative mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='max-w-3xl'>
          <motion.h1
            variants={lineVariants}
            initial='hidden'
            animate='show'
            custom={0}
            className='max-w-[11ch] text-[50px] font-black leading-[0.95] text-white sm:text-[68px] lg:text-[82px]'
          >
            Hannah&apos;s build shelf.
          </motion.h1>

          <motion.p
            variants={lineVariants}
            initial='hidden'
            animate='show'
            custom={1}
            className={`${styles.heroSubText} mt-5 max-w-2xl px-0 text-[16px] text-slate-200 sm:px-0 sm:text-[18px]`}
          >
            A little corner for the apps, tools, labs, and experiments I&apos;ve built while
            learning, troubleshooting, and figuring things out one project at a time.
          </motion.p>

          <motion.div
            variants={lineVariants}
            initial='hidden'
            animate='show'
            custom={2}
            className='mt-7 flex flex-wrap gap-3'
          >
            {focusAreas.map((area) => (
              <span
                key={area}
                className='rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-slate-200'
              >
                {area}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.75, ease: "easeOut" }}
          className='relative'
        >
          <div className='absolute -inset-3 rounded-lg bg-gradient-to-br from-cyan-300/30 via-white/5 to-pink-300/25 blur-2xl' />
          <div className='relative overflow-hidden rounded-lg border border-white/15 bg-[#080b1f]/80 p-3 shadow-card backdrop-blur-xl'>
            <div className='flex items-center justify-between border-b border-white/10 px-2 pb-3 pt-1'>
              <div>
                <p className='text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400'>
                  NOW SHOWING
                </p>
                <p className='mt-1 text-lg font-bold text-white'>Projects from my desk</p>
              </div>
              <div className='flex gap-2'>
                <span className='h-3 w-3 rounded-full bg-pink-300' />
                <span className='h-3 w-3 rounded-full bg-amber-200' />
                <span className='h-3 w-3 rounded-full bg-cyan-300' />
              </div>
            </div>

            <div className='relative mt-3 overflow-hidden rounded-lg border border-white/10 bg-black/25'>
              <img
                src={portfolioAvatar}
                alt='Animated portfolio avatar at a project desk'
                className='aspect-[5/4] w-full object-cover'
              />
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent to-transparent' />
              
              <div className='absolute bottom-3 left-3 right-3 hidden grid-cols-2 gap-2 sm:grid'>
                <a
                  href='#projects'
                  className='group rounded-lg border border-cyan-200/30 bg-[#071521]/80 p-3 backdrop-blur-md transition hover:-translate-y-1 hover:bg-cyan-200/15'
                >
                  <span className='block text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100'>
                    Open shelf
                  </span>
                  <span className='mt-1 block text-sm font-bold text-white'>
                    View Projects <span className='transition group-hover:ml-1'>&rarr;</span>
                  </span>
                </a>

                <a
                  href='/Resume.pdf'
                  className='group rounded-lg border border-white/15 bg-[#151224]/80 p-3 backdrop-blur-md transition hover:-translate-y-1 hover:border-pink-200/45 hover:bg-white/[0.08]'
                >
                  <span className='block text-[10px] font-bold uppercase tracking-[0.2em] text-pink-100'>
                    Profile file
                  </span>
                  <span className='mt-1 block text-sm font-bold text-white'>
                    View Resume <span className='transition group-hover:ml-1'>&rarr;</span>
                  </span>
                </a>
              </div>
            </div>

            <div className='mt-3 grid grid-cols-1 gap-2 sm:hidden'>
              <a
                href='#projects'
                className='group rounded-lg border border-cyan-200/30 bg-cyan-200/10 p-3 transition hover:-translate-y-1 hover:bg-cyan-200/15'
              >
                <span className='block text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100'>
                  Open shelf
                </span>
                <span className='mt-1 block text-sm font-bold text-white'>
                  View Projects <span className='transition group-hover:ml-1'>&rarr;</span>
                </span>
              </a>

              <a
                href='/Resume.pdf'
                className='group rounded-lg border border-white/15 bg-white/[0.045] p-3 transition hover:-translate-y-1 hover:border-pink-200/45 hover:bg-white/[0.08]'
              >
                <span className='block text-[10px] font-bold uppercase tracking-[0.2em] text-pink-100'>
                  Profile file
                </span>
                <span className='mt-1 block text-sm font-bold text-white'>
                  View Resume <span className='transition group-hover:ml-1'>&rarr;</span>
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex`}>
        <a
          href='#projects'
          className='flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-slate-300 transition hover:text-white'
        >
          <span>Explore projects</span>
          <span className='flex h-11 w-7 justify-center rounded-full border border-white/35 p-2'>
            <motion.span
              animate={{ y: [0, 13, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
              className='h-2 w-2 rounded-full bg-cyan-200'
            />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
