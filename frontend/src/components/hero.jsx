import { motion as Motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Motion.section
      className="min-h-screen flex items-center justify-center bg-blue-100"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0.95, scale: 0.98 }}
      transition={{ duration: 3, ease: 'easeInOut' }} // matches plane duration
    >
      <h1 className="text-5xl font-bold">Hey, I’m Kalpa 👋</h1>
    </Motion.section>
  );
};

export default HeroSection;