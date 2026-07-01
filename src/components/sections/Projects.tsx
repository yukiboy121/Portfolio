"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "@/lib/constants";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="relative z-10 container-main">
        <SectionHeading title="Projects" subtitle="Selected Work" />

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-4 py-2 text-[12px] font-medium rounded-full transition-all duration-300 ${
                active === cat
                  ? "text-white"
                  : "text-text-muted hover:text-text-secondary border border-border hover:border-border-hover"
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

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  {/* Visual Header */}
                  <div
                    className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                  >
                    {/* Decorative Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Accent Circle */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-700"
                      style={{
                        background: `radial-gradient(circle, ${project.accent}, transparent 70%)`,
                      }}
                    />

                    {/* Category Label */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-text-secondary px-3 py-1 rounded-full border border-border bg-bg/40 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 gap-2.5">
                      <motion.a
                        href="#"
                        className="px-4 py-2 rounded-full text-[11px] font-medium text-white bg-primary/80 backdrop-blur-md hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub →
                      </motion.a>
                      <motion.a
                        href="#"
                        className="px-4 py-2 rounded-full text-[11px] font-medium text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo →
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-gradient-primary transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-[13px] leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-medium text-text-muted rounded-md border border-border"
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
