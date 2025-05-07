import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const PaperPlane = () => {
  const planeRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const setupAnimation = () => {
      const isMobile = window.innerWidth < 540;

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
        { x: 130, y: -100 },
        { x: 250, y: -180 },
        { x: 350, y: -100 },
        { x: 370, y: 20 },
        { x: 300, y: 100 },
        { x: 270, y: 30 },
        { x: 320, y: 0 },
        { x: 450, y: 80 },
        { x: 570, y: 120 },
      ];

      const mobilePath = [
        { x: 0, y: 0 },
        { x: 20, y: -40 },
        { x: 35, y: -90 },
        { x: 50, y: -100 },
        { x: 65, y: -90 },
        { x: 60, y: -40 },
        { x: 55, y: 0 },
        { x: 57, y: 100 },
        { x: 60, y: 240 },
        { x: 63, y: 280 },
        { x: 65, y: 300 }, // ⬆️ raised further
      ];      

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=900",
          scrub: 1,
          markers: false,
          onUpdate: (self) => {
            if (self.direction === -1) {
              gsap.to(planeRef.current, {
                scaleX: -1,
                duration: 0.1,
              });
            } else {
              gsap.to(planeRef.current, {
                scaleX: 1,
                duration: 0.1,
              });
            }
          },
        },
      });

      timeline.to(wrapperRef.current, {
        motionPath: {
          path: isMobile ? mobilePath : path,
          curviness: 1.5,
          autoRotate: isMobile ? [true, 0, 90] : true,
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
    };

    const plane = planeRef.current;

    const savePosition = () => {
      const rect = plane.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

      sessionStorage.setItem("planeX", rect.left + scrollLeft);
      sessionStorage.setItem("planeY", rect.top + scrollTop);
    };

    setTimeout(savePosition, 2000);

    setupAnimation();
    window.addEventListener("resize", setupAnimation);
    return () => window.removeEventListener("resize", setupAnimation);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute top-[38%] left-[32%] sm:top-[63%] sm:left-[21%] z-5 w-[100px] h-[100px] sm:w-[180px] sm:h-[180px]"
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
