import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[120] origin-left bg-neon"
      style={{ scaleX, boxShadow: '0 0 12px rgba(0,255,65,0.6)' }}
    />
  );
};

export default ScrollProgress;
