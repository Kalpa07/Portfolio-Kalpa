// components/PaperPlane.jsx
// import React from 'react';
// import { motion as Motion } from 'framer-motion';


// const PaperPlane = () => {
//   return (
//     // <svg
//     //   width="100%"
//     //   height="100vh"
//     //   viewBox="0 0 800 600"
//     //   style={{ position: 'absolute', top: 0, left: 0, zIndex: 20, pointerEvents: 'none' }}
//     // >
//     //   {/* Invisible path for the plane to follow */}
//     //   <Motion.path
//     //     d="M 100 300 C 300 0, 500 600, 700 300"
//     //     fill="none"
//     //     stroke="transparent"
//     //     initial={{ pathLength: 0 }}
//     //     animate={{ pathLength: 1 }}
//     //     transition={{ duration: 3, ease: "easeInOut" }}
//     //   />

//     //   {/* Plane image that follows the path */}
//     //   <Motion.image
//     //     href="/images/plane1.png"
//     //     width="100"
//     //     height="100"
//     //     className="motion-path"
//     //     initial={{ offsetDistance: '0%' }}
//     //     animate={{ offsetDistance: '100%' }}
//     //     transition={{ duration: 3, ease: 'easeInOut' }}
//     //   />
//     // </svg>
//     <Motion.div
//         className="plane-container"
//         initial={{ offsetDistance: '0%' }}
//         animate={{
//         offsetDistance: `${scrollProgress * 100}%`,
//         }}
//         transition={{
//         duration: 1, // Duration for smoothness
//         ease: 'easeOut',
//         }}
//     >
//         <img src="/images/plane1.png" alt="Paper Plane" className="paper-plane" />
//     </Motion.div>
  
//   );
// };

// export default PaperPlane;


import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const PaperPlane = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Set scroll progress when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position relative to the window height
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll percentage
      const progress = Math.min(scrollTop / (documentHeight - windowHeight), 1);
      setScrollProgress(progress); // Update scroll progress (from 0 to 1)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Motion.div
      className="plane-container"
      initial={{ offsetDistance: '0%' }}
      animate={{
        offsetDistance: `${scrollProgress * 20}%`, // Animate based on scroll progress
      }}
      transition={{ duration: 0.1 }}
    >
      <img src="/images/plane1.png" alt="Paper Plane" className="paper-plane" />
    </Motion.div>
  );
};

export default PaperPlane;
