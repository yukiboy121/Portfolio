"use client";

import { EXPERIENCE_DATA } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 md:py-36">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <h2
          className={`text-3xl md:text-4xl font-light text-primary mb-3 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Experience
        </h2>
        <div
          className={`h-px bg-white/[0.06] mb-12 transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="space-y-0">
          {EXPERIENCE_DATA.map((exp, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="py-6 md:py-8 border-t border-white/[0.06] first:border-t-0">
                <div className="grid md:grid-cols-4 gap-4 md:gap-8">
                  <div className="md:col-span-1">
                    <span className="text-secondary text-xs font-medium tracking-wide">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-primary text-lg font-medium mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-secondary border border-white/[0.08] rounded-full px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
