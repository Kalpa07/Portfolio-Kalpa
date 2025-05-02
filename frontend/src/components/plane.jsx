import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const PaperPlane = () => {
  const planeRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    
    gsap.set(wrapperRef.current, {
      x: 0,
      y: 0,
    });
  
    gsap.set(planeRef.current, {
      xPercent: 0,
      yPercent: 0,
    });
  
  const path = [
    { x: 0, y: 0 },
    { x: 40, y: -20 },
    { x: 80, y: -60 },
    { x: 130, y: -100 },   // Extended takeoff
  
    // 🌀 Loop pushed further and higher
    { x: 250, y: -180 },   // Higher top of loop
    { x: 350, y: -100 },   // Descending side
    { x: 370, y: 20 },     // Bottom of loop
    { x: 300, y: 100 },    // Small rise again
    { x: 270, y: 30 },     // Glide out
    { x: 320, y: 0 },      // Smooth transition
  
    // 🪂 Final glide and landing
    { x: 450, y: 80 },
    { x: 570, y: 150 },
  ];
  
  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=900",
        scrub: 1,
        markers: false,
      },
    });
  
    timeline.to(wrapperRef.current, {
      motionPath: {
        path: path,
        curviness: 1.5,
        autoRotate: true,
      },
      duration: 2,
      ease: "power.inOut",
    });
  
    gsap.to(planeRef.current, {
      y: "-=10",
      rotation: "+=2",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 0.5,
    });
  }, []);

  return (
    <div
    ref={wrapperRef}
    className="absolute top-[43%] left-[32%] sm:top-[58%] sm:left-[21%] z-50 w-[100px] h-[100px] sm:w-[180px] sm:h-[180px]"
  >
    <img
      ref={planeRef}
      src="/images/plane1.png"
      alt="Paper Plane"
      className="w-full h-full object-contain"
    />
  </div>
  );
};

export default PaperPlane;
