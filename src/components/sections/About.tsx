"use client";

import { ABOUT_TEXT, EDUCATION_DATA, LANGUAGES_DATA, PERSONAL } from "@/lib/constants";
import { useInView } from "@/lib/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 md:py-36">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12">
        <h2
          className={`text-3xl md:text-4xl font-light text-primary mb-3 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About
        </h2>
        <div
          className={`h-px bg-white/[0.06] mb-12 transition-all duration-700 delay-100 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div
            className={`md:col-span-2 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {ABOUT_TEXT.map((paragraph, i) => (
              <p
                key={i}
                className={`${
                  i === 0
                    ? "text-primary/90 text-lg leading-relaxed"
                    : "text-secondary leading-relaxed"
                } ${i < ABOUT_TEXT.length - 1 ? "mb-5" : ""}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="h-px bg-white/[0.06] my-10" />

            <h3 className="text-xs uppercase tracking-[0.15em] text-secondary mb-5">
              Education
            </h3>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-b-0"
                >
                  <span className="text-primary text-sm">{edu.school}</span>
                  {edu.isCurrent && (
                    <span className="text-[11px] text-accent uppercase tracking-wider">
                      {edu.period}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`space-y-8 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary mb-2">
                Location
              </h4>
              <p className="text-primary text-sm">Sri Lanka</p>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary mb-2">
                Status
              </h4>
              <p className="text-primary text-sm">A/L Student</p>
            </div>

            <div>
              <h4 className="text-[11px] uppercase tracking-[0.15em] text-secondary mb-4">
                Languages
              </h4>
              <div className="space-y-4">
                {LANGUAGES_DATA.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-primary text-sm">{lang.name}</span>
                      <span className="text-secondary text-xs">
                        {lang.level}
                      </span>
                    </div>
                    <div className="h-px bg-white/[0.06] relative overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-1000 ease-out"
                        style={{
                          width: inView ? `${lang.percent}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
