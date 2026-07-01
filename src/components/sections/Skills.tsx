"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS_DATA } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  layers: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  palette: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
  wrench: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385 5.385a1.5 1.5 0 01-2.12-2.12L9.3 13.03m2.12 2.14L21.75 4.56a5.25 5.25 0 00-7.19-7.19l-10.67 10.67a5.25 5.25 0 007.19 7.19z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
};

const chipGradients = [
  "from-primary/20 to-primary/5 border-primary/20",
  "from-secondary/20 to-secondary/5 border-secondary/20",
  "from-accent/20 to-accent/5 border-accent/20",
  "from-primary/15 to-primary/5 border-primary/15",
  "from-secondary/15 to-secondary/5 border-secondary/15",
];

const chipTextColors = [
  "text-primary",
  "text-secondary",
  "text-accent",
  "text-primary",
  "text-secondary",
];

const iconBgColors = [
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
  "bg-accent/10 text-accent",
  "bg-primary/10 text-primary",
  "bg-secondary/10 text-secondary",
];

function SkillChip({
  name,
  level,
  index,
  catIdx,
}: {
  name: string;
  level: number;
  index: number;
  catIdx: number;
}) {
  return (
    <motion.span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-medium border bg-gradient-to-br ${chipGradients[catIdx % chipGradients.length]} ${chipTextColors[catIdx % chipTextColors.length]} hover:scale-105 transition-all duration-300 cursor-default`}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: catIdx * 0.08 + index * 0.04,
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{ y: -3, scale: 1.05 }}
    >
      <span className="text-[10px] font-mono opacity-60">{level}%</span>
      {name}
    </motion.span>
  );
}

export default function Skills() {
  const categories = Object.values(SKILLS_DATA);

  return (
    <section id="skills" className="relative py-32 md:py-40">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute inset-0 bg-mesh pointer-events-none" />

      <div className="relative z-10 container-main">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies" gradient />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className="glass-card rounded-[24px] p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: catIdx * 0.08,
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl ${iconBgColors[catIdx]} flex items-center justify-center transition-all duration-300`}
                >
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIdx) => (
                  <SkillChip
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIdx}
                    catIdx={catIdx}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
