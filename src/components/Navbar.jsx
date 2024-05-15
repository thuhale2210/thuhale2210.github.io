import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, github, linkedin } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-filter backdrop-blur-[3px]`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <ul className="list-non hidden sm:flex flex-row space-x-20">
          {navLinks.map((Link) => (
            <li key={Link.id} className={`${active === Link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <div className="flex justify-items-end gap-10">
            <div className="border-white rounded-full">
              <li onClick={() => window.open('https://github.com/thuhale2210')}
                className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img
                  src={github}
                  alt='github'
                  className='w-3/4 h-3/4 object-contain'
                />
              </li>
            </div>
            <li onClick={() => window.open('https://www.linkedin.com/in/thuhale2210/')}
              className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={linkedin}
                alt='github'
                className='w-3/4 h-3/4 object-contain'
              />
            </li>
          </div>
        </Link>

        <div className="sm:hidden md:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}></img>
        </div>

        <motion.div
          variants={fadeIn("right", "spring", 1.5)}
          className={`${!toggle ? "hidden" : "flex"
            } bg-[#2b2d42] p-6 absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl`}
        >
          <ul className="list-non flex justify-end items-start flex-col gap-4">
            {navLinks.map((Link) => (
              <li key={Link.id} className={`${active === Link.title ? 'text-white' : 'text-secondary'}
              font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(Link.title)
                }}>
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;