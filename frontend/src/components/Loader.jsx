import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const nameVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const planeVariants = {
  hidden: { x: '-100vw', rotate: -45 },
  visible: {
    x: 0,
    rotate: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '100vw',
    rotate: 45,
    opacity: 0,
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
};

const Loader = ({ onComplete }) => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowName(true), 1700);
    const timer2 = setTimeout(() => onComplete(), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed z-[9999] top-0 left-0 w-full h-full bg-[var(--base-100)] flex items-center justify-center">
      <AnimatePresence>
        {!showName && (
          <Motion.div
            className="w-32 h-32"
            variants={planeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
              <img
                src="/images/plane1.png"
                alt="Paper Plane"
                className="w-full h-full object-contain"
            />
          </Motion.div>
        )}

        {showName && (
          <Motion.div
            className="flex gap-1 text-4xl md:text-5xl font-bold tracking-wide text-primary-color font-poppins"
            initial="hidden"
            animate="visible"
          >
            {'Kalpa Teli'.split('').map((char, i) => (
              <Motion.span key={i} custom={i} variants={nameVariants}>
                {char}
              </Motion.span>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
