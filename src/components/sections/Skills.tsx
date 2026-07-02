"use client";

import { SKILLS_DATA } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

export default function Skills() {
  const { ref, inView } = useInView();

  const categories = Object.values(SKILLS_DATA);

  return (
    <section id="skills" className="py-24 md:py-36 bg-surface">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <h2
          className={`text-3xl md:text-4xl font-light text-primary mb-3 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Skills
        </h2>
        <div
          className={`h-px bg-white/[0.06] mb-12 transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-[11px] uppercase tracking-[0.15em] text-secondary mb-5">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary text-sm">{skill.name}</span>
                      <span className="text-secondary text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${skill.level}%` : "0%",
                          background:
                            "linear-gradient(90deg, #2997ff, #5e5ce6)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
