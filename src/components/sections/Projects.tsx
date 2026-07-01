"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "@/lib/constants";

const accentColors = [
  "from-[#7c6dff]/30",
  "from-[#00d4ff]/30",
  "from-[#b44aff]/30",
  "from-[#7c6dff]/30",
  "from-[#00d4ff]/30",
  "from-[#b44aff]/30",
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-32 md:py-40">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="relative z-10 container-main">
        <SectionHeading title="Projects" subtitle="Selected Work" />

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2.5 text-[11px] font-medium rounded-full transition-all duration-300 ${
                active === cat
                  ? "text-white"
                  : "text-text-muted hover:text-text-secondary border border-border hover:border-border-hover bg-surface/30"
              }`}
            >
              {active === cat && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                  layoutId="project-tab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="glass-card rounded-[24px] overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 bg-gradient-to-br from-bg-secondary to-bg overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-700`}
                    />

                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-1000"
                      style={{
                        background: `radial-gradient(circle, ${project.accent}, transparent 70%)`,
                      }}
                    />

                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-text-secondary px-3 py-1.5 rounded-full border border-border bg-bg/50 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 gap-3">
                      <motion.a
                        href="#"
                        className="px-5 py-2.5 rounded-full text-[11px] font-medium text-white bg-primary/80 backdrop-blur-md hover:bg-primary transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub →
                      </motion.a>
                      <motion.a
                        href="#"
                        className="px-5 py-2.5 rounded-full text-[11px] font-medium text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo →
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6 md:p-7 flex-1 flex flex-col">
                    <h3 className="text-base font-semibold text-text-primary mb-2.5 group-hover:text-gradient-primary transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-[13px] leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[10px] font-medium text-text-muted rounded-lg border border-border bg-surface/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
