"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ABOUT_TEXT, EDUCATION_DATA, LANGUAGES_DATA, PERSONAL } from "@/lib/constants";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
});

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="relative z-10 container-main">
        <SectionHeading title="About Me" subtitle="Introduction" />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left Column — Main Bio */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio Card */}
            <motion.div className="glass-card rounded-2xl p-8 md:p-10" {...fadeUp(0)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">Who I Am</h3>
              </div>

              <div className="space-y-4">
                {ABOUT_TEXT.map((paragraph, i) => (
                  <p key={i} className="text-text-secondary text-[15px] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Location", value: "Sri Lanka", icon: "📍" },
                { label: "Status", value: "Student", icon: "🎓" },
                { label: "Experience", value: "3+ Years", icon: "💻" },
                { label: "Focus", value: "Full Stack", icon: "🚀" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="glass-card rounded-xl p-4 text-center cursor-default"
                  {...fadeUp(0.1 + i * 0.08)}
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="text-sm font-medium text-text-primary">{item.value}</div>
                  <div className="text-[11px] text-text-muted mt-0.5 uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — Education & Languages */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            <motion.div className="glass-card rounded-2xl p-8" {...fadeUp(0.15)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">Education</h3>
              </div>

              <div className="space-y-3">
                {EDUCATION_DATA.map((edu, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-150 transition-all duration-300 shrink-0" />
                    <div>
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                        {edu.school}
                      </span>
                      {edu.isCurrent && (
                        <span className="ml-2 text-[10px] font-medium text-secondary px-2 py-0.5 rounded-full bg-secondary/10 uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div className="glass-card rounded-2xl p-8" {...fadeUp(0.25)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">Languages</h3>
              </div>

              <div className="space-y-4">
                {LANGUAGES_DATA.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-primary font-medium">{lang.name}</span>
                      <span className="text-[11px] text-text-muted">{lang.level}</span>
                    </div>
                    <div className="skill-track">
                      <motion.div
                        className="skill-fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: lang.percent / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Connect Card */}
            <motion.a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card rounded-2xl p-6 group"
              {...fadeUp(0.35)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    github.com/yukiboy121
                  </span>
                </div>
                <svg className="w-4 h-4 text-text-muted group-hover:text-text-secondary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
