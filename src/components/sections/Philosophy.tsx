import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LineReveal from "@/components/motion/LineReveal";
import Reveal from "@/components/motion/Reveal";

const principles = [
  "I believe the best interfaces are the ones that don't need to explain themselves.",
  "Technology should adapt to people — not the other way around.",
  "Every line of code is a design decision.",
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacities = principles.map((_, i) => {
    const start = 0.1 + i * 0.15;
    const end = start + 0.12;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  });

  const yValues = principles.map((_, i) => {
    const start = 0.1 + i * 0.15;
    const end = start + 0.12;
    return useTransform(scrollYProgress, [start, end], [25, 0]);
  });

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      <LineReveal className="mb-16 md:mb-24" />

      <div className="grid grid-cols-1 md:grid-cols-12 mb-16 md:mb-20">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-[11px] tracking-[0.2em] text-[#777777] font-medium">
              HOW I THINK
            </p>
          </Reveal>
        </div>
      </div>

      <div className="space-y-16 md:space-y-24 md:ml-auto md:max-w-2xl">
        {principles.map((principle, i) => (
          <motion.div
            key={i}
            style={{ opacity: opacities[i], y: yValues[i] }}
          >
            <p className="text-[18px] md:text-[24px] lg:text-[28px] leading-[1.4] font-light text-[#111111] tracking-[-0.01em]">
              "{principle}"
            </p>
            <div className="w-8 h-px bg-[#DDDDDD] mt-6" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
