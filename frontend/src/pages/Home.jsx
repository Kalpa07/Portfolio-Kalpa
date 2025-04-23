import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Github, Linkedin, FileUser } from 'lucide-react';
import PaperPlane from '../components/plane';
import SkillSection from "../components/skillSection";

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
        
        <PaperPlane/>
        {/* Section 1 */}
        <div
          className="horizontal-panel h-screen w-screen bg-cover bg-center "
          style={{ backgroundImage: "url('/images/Background.png')" }}
        >
          <div className='flex flex-row justify-between hero-section'>
        <div>
          <img src='/images/lamp.png' className='h-[270px]' />
        </div>
        <div className='flex flex-row mt-10 justify-between gap-15 mr-15'>
          <div className='font-poppins text-white text-100 tracking-wider'>Projects</div>
          <div className='font-poppins text-white text-100 tracking-wider'>Contact</div>
        </div>
      </div>

      {/* name, brief and links */}
      <div className='flex flex-row justify-center'>
        <div className='justify-self-center'>
          <h1 className='font-dancing text-[160px] -rotate-[8.24deg]'>Kalpa Teli</h1>
        </div>
        <div className='justify-items-end justify-end mt-10 ml-[50px]'>
          <div className='w-120 text-end'>
            <h1 className='font-poppins font-extrabold text-3xl italic'>Frontend Developer</h1>
            <p className='text-lg mt-2 font-light'>
              Passionate about creating user-friendly, visually appealing web experiences, I blend clean code with thoughtful design.
              With a background in UI/UX and frontend development, I deliver seamless digital solutions
            </p>
          </div>
          <div className='flex flex-row gap-5 mt-5 mr-2'>
            <FileUser />
            <Github />
            <Linkedin />
          </div>
        </div>
      </div>
        </div>

        {/* Section 2 */}
        <div
          className="horizontal-panel h-screen w-screen ml-[-2px] bg-cover bg-center skill-section relative"
          style={{ backgroundImage: "url('/images/Background2.png')" }}
        >
          <SkillSection/>
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-[#1e293b] pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Vertical Scroll Sections */}
      <div className="h-screen bg-greyish flex justify-center items-center text-white text-4xl relative">
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#1e293b] to-transparent pointer-events-none z-10"></div>

        Section 3 (Vertical)
      </div>
      <div className="h-screen bg-greyish flex justify-center items-center text-white text-4xl">
        Section 4 (Vertical)
      </div>
      <div className="h-screen bg-greyish flex justify-center items-center text-white text-4xl">
        Section 5 (Vertical)
      </div>
    </div>
  );
};

export default ScrollSections;
