import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });
  const frameX = useSpring(x, { stiffness: 220, damping: 26 });
  const frameY = useSpring(y, { stiffness: 220, damping: 26 });
  const [hovering, setHovering] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor="pointer"], input, textarea, [role="button"]');
      setHovering(!!interactive);
      if (frameRef.current) {
        frameRef.current.style.width = interactive ? '34px' : '20px';
        frameRef.current.style.height = interactive ? '34px' : '20px';
        frameRef.current.style.borderColor = interactive ? 'rgba(0,255,65,0.9)' : 'rgba(0,255,65,0.35)';
      }
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
    };
  }, [x, y]);

  return (
    <>
      {/* block cursor dot */}
      <motion.div
        className="cursor-block hidden md:block"
        style={{ left: springX, top: springY, x: '-50%', y: '-50%' }}
      >
        <div
          className="bg-neon"
          style={{
            width: hovering ? 5 : 8,
            height: hovering ? 5 : 14,
            boxShadow: '0 0 10px rgba(0,255,65,0.7)',
            transition: 'width .15s, height .15s',
          }}
        />
      </motion.div>

      {/* outer frame */}
      <motion.div
        ref={frameRef}
        className="cursor-frame hidden md:block rounded-[3px] border"
        style={{
          left: frameX,
          top: frameY,
          x: '-50%',
          y: '-50%',
          width: 20,
          height: 20,
          borderColor: 'rgba(0,255,65,0.35)',
          transition: 'width .25s, height .25s, border-color .25s',
        }}
      />
    </>
  );
};

export default CustomCursor;
