import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    description: string;
  } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <LineReveal className="mb-12 md:mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-12 mb-12 md:mb-16">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-[11px] tracking-[0.2em] text-[var(--color-muted)] font-medium">
              TECHNOLOGY
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        {skillCategories.map((category, catIdx) => (
          <Reveal key={category.title} delay={catIdx * 0.1}>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-[var(--color-accent-burgundy)] font-medium mb-6">
                {category.title}
              </p>
              <div className="space-y-0">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="py-2.5 border-b border-[var(--color-border)] last:border-0"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onMouseMove={handleMouseMove}
                  >
                    <p
                      className="text-[13px] text-[var(--color-muted)] font-light transition-colors duration-200 hover:text-[var(--color-text)]"
                      data-cursor=""
                    >
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Floating tooltip */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            className="fixed z-50 pointer-events-none hidden md:block"
            style={{
              left: tooltipPos.x + 20,
              top: tooltipPos.y - 10,
            }}
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <div className="bg-[var(--color-text)] text-[var(--color-bg)] px-3 py-1.5 text-[10px] tracking-[0.05em] font-medium whitespace-nowrap">
              {hoveredSkill.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
