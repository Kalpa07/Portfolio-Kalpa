// import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { Github, Linkedin, FileUser } from 'lucide-react';
// import { useRef } from 'react';

// const HeroSection = () => {
//   const sectionRef = useRef(null);

//   // Scroll progress from 0 to 1 as the section scrolls into view
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"], // when bottom of section hits top of viewport
//   });

//   // Scroll transforms X position from 0% to -30%
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
//   const smoothX = useSpring(x, { stiffness: 50, damping: 30 });

//   return (
//     <Motion.section
//       ref={sectionRef}
//       style={{ x: smoothX }}
//       className='h-full px-10 pt-10'
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 3, ease: 'easeInOut' }}
//     >
//       {/* theme and nav links */}
//       <div className='flex flex-row justify-between'>
//         <div>
//           <img src='/images/lamp.png' className='h-[270px]' />
//         </div>
//         <div className='flex flex-row mt-10 justify-between gap-15 mr-15'>
//           <div className='font-poppins text-white text-100 tracking-wider'>Projects</div>
//           <div className='font-poppins text-white text-100 tracking-wider'>Contact</div>
//         </div>
//       </div>

//       {/* name, brief and links */}
//       <div className='flex flex-row justify-center'>
//         <div className='justify-self-center'>
//           <h1 className='font-dancing text-[160px] -rotate-[8.24deg]'>Kalpa Teli</h1>
//         </div>
//         <div className='justify-items-end justify-end mt-10 ml-[50px]'>
//           <div className='w-120 text-end'>
//             <h1 className='font-poppins font-extrabold text-3xl italic'>Frontend Developer</h1>
//             <p className='text-lg mt-2 font-light'>
//               Passionate about creating user-friendly, visually appealing web experiences, I blend clean code with thoughtful design.
//               With a background in UI/UX and frontend development, I deliver seamless digital solutions
//             </p>
//           </div>
//           <div className='flex flex-row gap-5 mt-5 mr-2'>
//             <FileUser />
//             <Github />
//             <Linkedin />
//           </div>
//         </div>
//       </div>
//     </Motion.section>
//   );
// };

// export default HeroSection;


import { motion as Motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, FileUser } from 'lucide-react';

const HeroSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // triggers while sticky
  });

  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const x = useTransform(scrollYProgress, [0, 2], ["0%", "-120%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <Motion.section
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      className="h-screen px-10 pt-10 absolute top-0 left-0 z-10"
    >
      {/* theme and nav links */}
      <div className='flex flex-row justify-between'>
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
    </Motion.section>
  );
};

export default HeroSection;