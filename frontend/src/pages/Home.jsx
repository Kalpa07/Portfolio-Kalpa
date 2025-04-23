import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PaperPlane from '../components/plane';
import SkillSection from "../components/skillSection";
import HeroSection from "../components/heroSection";


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
          <HeroSection/>
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
