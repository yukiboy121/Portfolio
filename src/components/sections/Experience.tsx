"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE_DATA } from "@/lib/constants";

const accentColors = [
  "from-primary/30 via-primary/10 to-transparent",
  "from-secondary/30 via-secondary/10 to-transparent",
  "from-accent/30 via-accent/10 to-transparent",
  "from-primary/30 via-primary/10 to-transparent",
];

const borderColors = [
  "border-primary/20 group-hover:border-primary/40",
  "border-secondary/20 group-hover:border-secondary/40",
  "border-accent/20 group-hover:border-accent/40",
  "border-primary/20 group-hover:border-primary/40",
];

const dotColors = [
  "bg-primary shadow-[0_0_12px_rgba(124,109,255,0.3)]",
  "bg-secondary shadow-[0_0_12px_rgba(0,212,255,0.3)]",
  "bg-accent shadow-[0_0_12px_rgba(180,74,255,0.3)]",
  "bg-primary shadow-[0_0_12px_rgba(124,109,255,0.3)]",
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-40">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="relative z-10 container-main max-w-4xl">
        <SectionHeading title="Experience" subtitle="My Journey" />

        <div className="relative">
          <div className="absolute left-[23px] md:left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-accent/20" />

          <div className="space-y-6">
            {EXPERIENCE_DATA.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-14 md:pl-16"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <div
                  className={`absolute left-[15px] md:left-[19px] top-7 w-4 h-4 rounded-full ${dotColors[i]} transition-all duration-500`}
                />

                <div
                  className={`glass-card rounded-[24px] p-7 md:p-9 group cursor-default border-l-2 ${borderColors[i]} transition-all duration-500`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-text-primary group-hover:text-gradient-primary transition-all duration-500">
                      {exp.title}
                    </h3>
                    <span className="text-[10px] text-text-muted uppercase tracking-wider whitespace-nowrap mt-1">
                      Role {i + 1}
                    </span>
                  </div>
                  <p className="text-text-secondary text-[14px] leading-relaxed mb-5">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 text-[10px] font-medium text-text-muted rounded-full border border-border bg-surface/50 group-hover:border-border-hover group-hover:text-text-secondary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
