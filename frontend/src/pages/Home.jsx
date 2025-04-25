import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PaperPlane from '../components/plane';
import SkillSection from "../components/skillSection";
import HeroSection from "../components/heroSection";
import ProjectSection from "../components/projectSection";
import Contact from "../components/contact";
import About from "../components/about";
import { Github, Linkedin, Mail } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const ScrollSections = () => {
  const horizontalRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".horizontal-panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalRef.current,
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 2),
        end: () => "+=900vw" ,
      },
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Horizontal Scroll Section */}
      <div ref={horizontalRef} className="flex h-screen w-[200vw]">
        
        {/* <PaperPlane/> */}
        {/* Section 1 */}
        <div
          className="horizontal-panel h-screen w-screen bg-cover bg-center bg-[url('/images/phone-bg.png')] sm:bg-[url('/images/Background.png')]"
        >
          <HeroSection/>
        </div>

        {/* Section 2 */}
        <div
          className="horizontal-panel h-screen w-screen ml-[-2px] bg-cover bg-center skill-section relative
            bg-[url('/images/phone-bg.png')] sm:bg-[url('/images/Background2.png')]
          "
        >
          <SkillSection/>
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-[#1e293b] pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Vertical Scroll Sections */}
      <div className="h-[120vh] bg-greyish flex flex-col text-text text-4xl mt-[-2px]  ">
        <div className="top-0 w-full h-32 bg-gradient-to-b from-[#1e293b] to-transparent pointer-events-none z-10"></div>
        <ProjectSection className="" />
      </div>
      <div className="h-screen bg-greyish flex justify-center items-center text-text text-4xl">
        <Contact/>
      </div>
      <div className="h-screen bg-greyish flex flex-col justify-between items-center text-text text-4xl">
        <About className="" />
        <div className="bg-primary h-10 w-full bottom-0 flex justify-between">
          <h4 className='text-white text-lg self-center text-center ml-5 font-100 font-poppins'>kalpateli0711@gmail.com</h4>
          <div className='flex gap-4 mr-5 '>
            <div className='self-center'>
              <a href="https://github.com/Kalpa07" ><Github className='text-white'></Github></a> 
            </div>
            <div className='self-center'>
              <a href="https://www.linkedin.com/in/kalpa-teli-4b3489204/" ><Linkedin className='text-white'></Linkedin></a> 
            </div>
            <div className='self-center'><Mail className='text-white'></Mail> </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ScrollSections;