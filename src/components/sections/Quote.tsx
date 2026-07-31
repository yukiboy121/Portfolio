import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Quote() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0.1, 0.25], [30, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.35], [30, 0]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.45], [30, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-40 md:py-56 px-6 md:px-12 max-w-[1400px] mx-auto flex items-center justify-center min-h-[70vh]"
    >
      <div className="w-full">
        <div className="w-12 h-px bg-[#E6E6E3] mx-auto mb-16 md:mb-24" />
        <div className="font-display font-bold text-[9vw] md:text-[6vw] lg:text-[5vw] leading-[1.05] tracking-[-0.04em] text-[#111111] text-center">
          <motion.div style={{ opacity: opacity1, y: y1 }}>
            GOOD SOFTWARE
          </motion.div>
          <motion.div style={{ opacity: opacity2, y: y2 }} className="text-[#999999]">
            SHOULD FEEL
          </motion.div>
          <motion.div style={{ opacity: opacity3, y: y3 }}>
            EFFORTLESS.
          </motion.div>
        </div>
        <div className="w-12 h-px bg-[#E6E6E3] mx-auto mt-16 md:mt-24" />
      </div>
    </section>
  );
}
