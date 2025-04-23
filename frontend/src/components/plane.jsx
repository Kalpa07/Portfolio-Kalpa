// import React from 'react';
// import { motion as Motion } from 'framer-motion';

// const PaperPlane = () => {

//   return (
//     <Motion.path
//         d="M 100 300 C 300 0, 500 600, 700 300"
//         fill="none"
//         stroke="red" // make the path visible
//         strokeWidth={2}
//         initial={{ pathLength: 0 }}
//         animate={{ pathLength: 1 }}
//         transition={{ duration: 3, ease: "easeInOut" }}
//     >
//       <img src="/images/plane1.png" alt="Paper Plane" className="paper-plane h-[150px] " />
//     </Motion.path>
//   );
// };

// export default PaperPlane;

// import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useRef } from 'react';

// const PaperPlane = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]); // fly up-right
//   const smoothX = useSpring(x, { stiffness: 40, damping: 20 });
//   const smoothY = useSpring(y, { stiffness: 40, damping: 20 });

//   return (
//     <Motion.img
//       ref={ref}
//       src="/images/plane1.png"
//       className="absolute top-[55%] left-[20%] h-[150px] z-20"
//       style={{ x: smoothX, y: smoothY }}
//       alt="Paper Plane"
//     />
//   );
// };

// export default PaperPlane;




// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import planeImage from "../../public/images/plane1.png"; // your plane image

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// const PaperPlane = () => {
//   const planeRef = useRef(null);

//   useEffect(() => {
//      // Set up the scroll-triggered animation with a simpler path
//      gsap.to(planeRef.current, {
//       scrollTrigger: {
//         trigger: ".hero-section", // Section to trigger scroll animation
//         start: "top top", // When the top of the section reaches the top of the viewport
//         end: "bottom top", // End of the section
//         scrub: 1, // Smooth scroll effect
//         markers: true, // Display markers for debugging
//       },
//       motionPath: {
//         path: [
//           { x: 60, y: 0 },        // Start point
//           { x: 300, y: 200 },    // Move up and right
//           { x: 500, y: 150 },    // Move down
//           { x: 700, y: 250 },    // Upward arc
//           { x: 900, y: 100 },    // Downward arc
//           { x: 1100, y: 200 }    // Final position
//         ],
//         curviness: 1.5,        // Adjust the smoothness of the curve
//         autoRotate: true,      // Make the plane rotate along the path
//       },
//       duration: 3,            // Adjust the speed of the animation
//       ease: "power1.inOut",   // Easing for smooth motion
//     });

//     // Flying up and down animation
//     gsap.to(planeRef.current, {
//       y: "-=10",
//       rotation: "+=2",
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       duration: 0.5,
//     });
//   }, []);


//   return (
//     <img
//       ref={planeRef}
//       src={planeImage}
//       alt="Paper Plane"
//       className="absolute top-[55%] left-[20%]  h-[150px] z-50"
//     />

//     // top-[55%] left-[20%] 
//   );
// }

// export default PaperPlane;


import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import planeImage from "../../public/images/plane1.png"; // adjust path if needed

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const PaperPlane = () => {
  const planeRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {

    // gsap.set(planeRef.current, {
    //   xPercent: -80,
    //   yPercent: -50,
    // });
    // // Animate plane along a curved path
    // gsap.to(wrapperRef.current, {
    //   scrollTrigger: {
    //     trigger: ".hero-section",
    //     start: "top top",
    //     end: "+=1200",
    //     scrub: 1,
    //     markers: false, // for debugging
    //   },
    //   motionPath: {
    //     path: [          
    //       // { x: 100, y: -40 },      // Start
    //       // { x: 160, y: -100 },     // Curve up
    //       // { x: 200, y: -160 },     // Top-left of loop
    //       // { x: 275, y: -180 },     // Peak of loop
    //       // { x: 350, y: -150 },     // Top-right of loop
    //       // { x: 390, y: -80 },      // Curve down
    //       // { x: 375, y: -10 },      // Bottom of loop
    //       // { x: 450, y: 40 },       // Coming out of loop
    //       // { x: 550, y: 90 },       // Glide
    //       // { x: 650, y: 120 },      // Landin


    //       { x: 100, y: -40 },      // Start
    //       { x: 100, y: -100 },      // Start
    //       { x: 120, y: -160 },     // Curve up
    //       { x: 160, y: -180 },     // Top-left of loop
    //       { x: 225, y: -150 },     // Peak of loop
    //       { x: 300, y: -80 },     // Top-right of loop
    //       { x: 325, y: -10 },      // Curve down
    //       { x: 300, y: -40 },      // Bottom of loop
    //       { x: 450, y: 90 },       // Coming out of loop
    //       { x: 550, y: 120 },       // Glide
    //       { x: 650, y: 120 },      // Landin
        
    //     ],
    //     curviness: 2,
    //     autoRotate: true,
    //     ease: "none",
    //   },
    //   duration: 10,
    //   ease: "power1.inOut"
    // });

    
    // gsap.to(wrapperRef.current, {
    //   scrollTrigger: {
    //     trigger: ".hero-section",
    //     start: "top top",
    //     end: "+=1200",
    //     scrub: 1,
    //   },
    //   motionPath: {
    //     path: [     
    //       { x: 100, y: -40 },      // Start
    //       { x: 100, y: -100 },      // Start
    //       { x: 120, y: -160, ease: "power1.inOut" }, // Slow down with easing here
    //       { x: 160, y: -180, ease: "power2.inOut" }, // Slow down more
    //       { x: 225, y: -150, ease: "power2.inout" }, // Keep moving fast
    //       { x: 300, y: -80, ease: "bounce.out" }, // Slow down and bounce
    //       { x: 325, y: -10, ease: "power2.out" }, // Slight easing at the end
    //       { x: 300, y: -40, ease: "power2.out" },
    //       { x: 450, y: 90, ease: "power2.out" },
    //       { x: 550, y: 120, ease: "power2.out" },
    //       { x: 650, y: 120, ease: "elastic.out(1, 0.75)" }, // Add elastic feel for landing
    //     ],
    //     curviness: 2,
    //     autoRotate: true,
    //   },
    //   duration: 10,
    //   ease: "power1.inOut",
    // });

    // Optional subtle flying effect (float)
    
    
    gsap.set(planeRef.current, {
      xPercent: -80,
      yPercent: -50,
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=1200",
        scrub: 1,
        markers: false, // for debugging
      },
    });

    // Define the path using your coordinates
    const path = [
      { x: 100, y: -40 },    // Start
      { x: 100, y: -100 },    // Ascent
      { x: 120, y: -160 },    // Curve up
      { x: 160, y: -180 },    // Top-left of loop
      { x: 225, y: -150 },    // Peak of loop
      { x: 300, y: -80 },     // Top-right of loop
      { x: 325, y: -10 },     // Curve down
      { x: 300, y: -40 },     // Bottom of loop
      { x: 450, y: 90 },      // Coming out of loop
      { x: 550, y: 120 },     // Glide
      { x: 650, y: 120 },     // Landing
    ];

    // Full path animation (default speed)
    // Using GSAP keyframes to control the speed of each section
    timeline.to(wrapperRef.current, {
      motionPath: {
        path: path,
        curviness: 2,
        autoRotate: true,
      },
      duration: 10, // Full path duration
      ease: "none", // Default ease for a constant speed
    });

    // Adding control for slowing down some parts of the animation by adjusting duration
    timeline.to(wrapperRef.current, {
      motionPath: {
        path: [path[0], path[1], path[2]],  // Slow the ascent
        curviness: 2,
        autoRotate: true,
      },
      duration: 4, // Slow ascent part
      ease: "power2.inOut", // Smooth easing for ascent
    });

    // Slow down the loop and peak (path slice 3 to 6)
    timeline.to(wrapperRef.current, {
      motionPath: {
        path: [path[3], path[4], path[5]], // Looping peak section
        curviness: 2,
        autoRotate: true,
      },
      duration: 5, // Slow loop part
      ease: "power2.inOut", // Smooth easing for loop
    });

    // Normal speed for descent and bottom loop
    timeline.to(wrapperRef.current, {
      motionPath: {
        path: [path[6], path[7], path[8]], // Descent section
        curviness: 2,
        autoRotate: true,
      },
      duration: 4, // Normal speed
      ease: "none",
    });

    // Fast landing part
    timeline.to(wrapperRef.current, {
      motionPath: {
        path: [path[9], path[10]], // Landing section
        curviness: 2,
        autoRotate: true,
      },
      duration: 3, // Fast landing
      ease: "elastic.out(1, 0.75)", // Bounce landing effect
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
    className="absolute top-[62%] left-[25%] z-50 w-[180px] h-[180px]"
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
