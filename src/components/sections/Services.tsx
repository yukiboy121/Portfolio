import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

const services = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    image: "/images/service-web.jpg",
  },
  {
    number: "02",
    title: "FULL STACK DEVELOPMENT",
    image: "/images/service-fullstack.jpg",
  },
  {
    number: "03",
    title: "E-COMMERCE",
    image: "/images/service-ecommerce.jpg",
  },
  {
    number: "04",
    title: "INTERACTIVE EXPERIENCES",
    image: "/images/service-web.jpg",
  },
  {
    number: "05",
    title: "BACKEND SYSTEMS",
    image: "/images/service-fullstack.jpg",
  },
  {
    number: "06",
    title: "CUSTOM SOFTWARE",
    image: "/images/service-ecommerce.jpg",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
      <LineReveal className="mb-16 md:mb-24" />

      <div className="grid grid-cols-1 md:grid-cols-12 mb-16 md:mb-20">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-[11px] tracking-[0.2em] text-[#777777] font-medium">
              WHAT I DO
            </p>
          </Reveal>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative"
        onMouseMove={handleMouseMove}
      >
        {services.map((service, i) => (
          <Reveal key={service.number} delay={i * 0.06}>
            <div
              className="py-6 md:py-8 border-b border-[#E6E6E3] first:border-t group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor=""
            >
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-[11px] tracking-[0.15em] text-[#CCCCCC] font-medium transition-colors duration-500 group-hover:text-[#111111] tabular-nums">
                    {service.number}
                  </span>
                  <motion.span 
                    className="w-6 h-px bg-[#DDDDDD] hidden md:block origin-left"
                    animate={{ scaleX: hoveredIndex === i ? 1.5 : 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.h3 
                    className="font-display font-medium text-[16px] md:text-[20px] lg:text-[24px] tracking-[-0.01em] text-[#555555] transition-colors duration-500 group-hover:text-[#111111]"
                    animate={{ x: hoveredIndex === i ? 8 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {service.title}
                  </motion.h3>
                </div>
                <motion.span
                  className="text-[14px] text-[#CCCCCC] transition-colors duration-500 group-hover:text-[#111111]"
                  animate={{ x: hoveredIndex === i ? 4 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </Reveal>
        ))}

        {/* Floating image preview */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="absolute pointer-events-none z-20 hidden lg:block"
              style={{
                left: mousePos.x + 30,
                top: mousePos.y - 80,
              }}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-48 h-32 overflow-hidden shadow-xl">
                <img
                  src={services[hoveredIndex].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
