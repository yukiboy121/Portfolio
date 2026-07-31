import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

const experiences = [
  {
    year: "2026",
    description:
      "Building advanced full-stack applications, interactive experiences and digital products. Focusing on creating software that feels as good as it works.",
  },
  {
    year: "2025",
    description:
      "Expanding into backend systems, Discord bots, and larger web applications. Developing expertise in database design and server architecture.",
  },
  {
    year: "2024",
    description:
      "Deepening frontend skills with React and TypeScript. Building e-commerce platforms and exploring game development with FiveM systems.",
  },
  {
    year: "2023",
    description:
      "Beginning the journey into web development. Learning JavaScript, building first projects, and discovering a passion for clean, functional design.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
      <LineReveal className="mb-16 md:mb-24" />

      <div className="grid grid-cols-1 md:grid-cols-12 mb-16 md:mb-20">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-[11px] tracking-[0.2em] text-[#777777] font-medium">
              EXPERIENCE
            </p>
          </Reveal>
        </div>
      </div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <Reveal key={exp.year} delay={i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 py-8 md:py-12 border-b border-[#E6E6E3] first:border-t group hover:bg-[#F3F3F1]/50 transition-colors duration-500 -mx-4 px-4 md:-mx-6 md:px-6">
              <div className="md:col-span-2 flex items-baseline gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DDDDDD] group-hover:bg-[#111111] transition-colors duration-500 mt-2 hidden md:block" />
                <p className="font-display font-semibold text-[22px] md:text-[28px] tracking-[-0.03em] text-[#CCCCCC] group-hover:text-[#111111] transition-colors duration-500">
                  {exp.year}
                </p>
              </div>
              <div className="md:col-span-7 md:col-start-4 mt-3 md:mt-1">
                <p className="text-[14px] md:text-[15px] leading-[1.75] text-[#999999] group-hover:text-[#555555] font-light max-w-lg transition-colors duration-500">
                  {exp.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
