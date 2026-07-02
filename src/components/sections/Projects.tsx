"use client";

import { useState } from "react";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, inView } = useInView(0.05);

  const filtered =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-36 bg-surface">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <h2
          className={`text-3xl md:text-4xl font-light text-primary mb-3 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Projects
        </h2>
        <div
          className={`h-px bg-white/[0.06] mb-8 transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-150 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-black border-primary"
                  : "text-secondary border-white/[0.08] hover:text-primary hover:border-white/[0.2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS_DATA)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        backgroundColor: `${project.accent}0d`,
        borderColor: `${project.accent}20`,
      }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: project.accent }}
          />
          <span className="text-[11px] text-secondary uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <h3 className="text-primary text-lg font-medium mb-2">
          {project.title}
        </h3>

        <p className="text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-secondary border border-white/[0.08] rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8 pointer-events-none">
        <span
          className="text-sm font-medium"
          style={{ color: project.accent }}
        >
          View Details &rarr;
        </span>
      </div>
    </div>
  );
}
