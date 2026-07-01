"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE_DATA } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="relative z-10 container-main max-w-3xl">
        <SectionHeading title="Experience" subtitle="My Journey" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-accent/20" />

          <div className="space-y-2">
            {EXPERIENCE_DATA.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-12 md:pl-14"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
                }}
              >
                {/* Dot */}
                <div className="absolute left-[10px] md:left-[14px] top-7 timeline-dot" />

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 md:p-8 group cursor-default">
                  <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2 group-hover:text-gradient-primary transition-all duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-text-secondary text-[14px] leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] font-medium text-text-muted rounded-full border border-border"
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
