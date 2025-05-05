import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PaperPlane from '../components/plane';
import SkillSection from "../components/skillSection";
import HeroSection from "../components/heroSection";
import ProjectSection from "../components/projectSection";
import Contact from "../components/contact";
import About from "../components/about";
import { Copyright, Github, Linkedin, Mail } from 'lucide-react';
import CursorGlow from "../components/cursorGlow";
import Bubbles from "../components/Bubbles";

gsap.registerPlugin(ScrollTrigger);

const ScrollSections = () => {
  const horizontalRef = useRef(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    console.log('Theme applied:', theme);
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'darktheme' : 'lighttheme');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  useEffect(() => {
    const sections = gsap.utils.toArray(".horizontal-panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=900vw",
      },
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (

    <div className="w-full overflow-x-hidden snap-y snap-mandatory overflow-y-scroll scroll-smooth hide-scrollbar">
      {/* Horizontal Scroll Section */}
      <CursorGlow />
      <div ref={horizontalRef} className="flex h-screen w-[200vw] snap-x snap-start">
        <PaperPlane />
        {/* Section 1 */}
        <div
          className="horizontal-panel h-screen w-screen bg-cover bg-center bg-home-light snap-start"
        >
          <HeroSection handleThemeToggle={handleThemeToggle} />
        </div>
        {/* Section 2 */}
        <div
          className="horizontal-panel h-screen w-screen ml-[-2px] bg-cover bg-center skill-section relative snap-start bg-skill-light"
        >
          <SkillSection />
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-[var(--base-100)] pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Vertical Scroll Sections */}
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll hide-scrollbar snap-start">

        <div id="projects" className="h-screen bg-base-100 flex flex-col theme-text text-4xl mt-[-2px] cursor-none snap-start">
          <ProjectSection className="custom-pointer cursor-none" />
        </div>
        <div id="contact" className="h-screen bg-base-100 flex justify-center items-center theme-text text-4xl snap-start ">
          <Contact />
        </div>
        <div className="h-screen bg-base-100 flex flex-col justify-between items-center theme-text text-4xl snap-start about-container">
          <About className="" />
          <div className="z-[999] bg-primary-color h-10 w-full bottom-0 flex justify-between">
            <h4 className='text-white text-lg self-center text-center ml-5 font-100 font-poppins'>
              <Copyright className="inline h-4 w-4" /> Kalpa Teli 2025
            </h4>
            {/* footer */}
            <div className='flex gap-4 mr-5 text-white'>
              <div className='relative group self-center w-8'>
                <a href="https://github.com/Kalpa07" ><Github className=' hover:h-7 hover:w-7'></Github></a>
                <div className="absolute w-max -top-8 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                  Github
                </div>
              </div>
              <div className='relative group self-center w-8'>
                <a href="https://www.linkedin.com/in/kalpa-teli-4b3489204/" ><Linkedin className=' hover:h-7 hover:w-7'></Linkedin></a>
                <div className="absolute w-max -top-8 left-1/2 -translate-x-1/2 bg-black  text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                  LinkedIn
                </div>
              </div>
              <div className='relative group self-center w-8'>
                <a href="mailto:hikalpa07@gmail.com"><Mail className=' hover:h-7 hover:w-7'></Mail></a>
                <div className="absolute w-max -top-8 left-1/2 -translate-x-1/2 bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                  Email Me
                </div>
              </div>
            </div>
          </div>
          <Bubbles/>
        </div>
      </div>
    </div>
  );
};

export default ScrollSections;