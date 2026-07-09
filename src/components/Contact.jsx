import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const contactLinks = [
  { label: "Email", value: "thuhale2210@gmail.com", href: "mailto:thuhale2210@gmail.com" },
  { label: "GitHub", value: "github.com/thuhale2210", href: "https://github.com/thuhale2210" },
  { label: "LinkedIn", value: "linkedin.com/in/thuhale2210", href: "https://www.linkedin.com/in/thuhale2210/" },
  { label: "WordPress", value: "binaryblooms.wordpress.com", href: "https://binaryblooms.wordpress.com/" },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_zf9irmo",
      "template_s8h3uqg",
      {
        from_name: form.name,
        to_name: "Hannah",
        from_email: form.email,
        to_email: "thuhale2210@gmail.com",
        message: form.message,
      },
      "AwJOO_srh_lv_7zr-"
    )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <div className='grid gap-8 overflow-hidden lg:grid-cols-[0.85fr_1.15fr]'>
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.75)}
        className='rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-card backdrop-blur-xl sm:p-8'
      >
        <p className='text-[13px] font-semibold uppercase tracking-[0.24em] text-cyan-100'>
          Contact
        </p>
        <h2 className='mt-3 text-[34px] font-black text-white sm:text-[52px]'>
          Let&apos;s connect
        </h2>
        <p className='mt-4 text-[16px] leading-8 text-slate-300'>
          Have a project, role, research idea, or technical problem worth untangling?
          I&apos;m happy to talk.
        </p>

        <div className='mt-8 space-y-3'>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className='block rounded-lg border border-white/10 bg-[#050816]/45 p-4 transition hover:-translate-y-1 hover:border-cyan-200/45 hover:bg-cyan-200/10'
            >
              <span className='block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400'>
                {link.label}
              </span>
              <span className='mt-1 block text-sm font-bold text-white sm:text-base'>
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className='rounded-lg border border-white/10 bg-[#080b1f]/80 p-6 shadow-card backdrop-blur-xl sm:p-8'
      >
        <div className='mb-8 flex items-center justify-between border-b border-white/10 pb-4'>
          <div>
            <p className='text-[12px] font-semibold uppercase tracking-[0.22em] text-slate-400'>
              Message window
            </p>
            <h3 className='mt-1 text-xl font-bold text-white'>Send a note</h3>
          </div>
          <div className='flex gap-2'>
            <span className='h-3 w-3 rounded-full bg-pink-300' />
            <span className='h-3 w-3 rounded-full bg-amber-200' />
            <span className='h-3 w-3 rounded-full bg-cyan-300' />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='mb-3 text-sm font-bold text-white'>Your name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Jane Developer'
              className='rounded-lg border border-white/10 bg-white/[0.055] px-5 py-4 font-medium text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/60'
            />
          </label>

          <label className='flex flex-col'>
            <span className='mb-3 text-sm font-bold text-white'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='jane@example.com'
              className='rounded-lg border border-white/10 bg-white/[0.055] px-5 py-4 font-medium text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/60'
            />
          </label>

          <label className='flex flex-col'>
            <span className='mb-3 text-sm font-bold text-white'>Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to build or discuss?'
              className='rounded-lg border border-white/10 bg-white/[0.055] px-5 py-4 font-medium text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/60'
            />
          </label>

          <button
            type='submit'
            className='inline-flex min-h-[48px] w-fit items-center justify-center rounded-full bg-white px-7 text-[14px] font-bold text-primary transition hover:-translate-y-1 hover:bg-cyan-100'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
