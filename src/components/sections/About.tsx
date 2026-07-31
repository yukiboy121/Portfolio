import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

export default function About() {
  const facts = [
    { label: "Based In", value: "Sri Lanka" },
    { label: "Focus", value: "Web / Full Stack" },
    { label: "Currently", value: "Building Digital Products" },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <LineReveal className="mb-16" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Left - Content */}
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8 tracking-tight">
              About Me
            </h2>
          </Reveal>
          
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed font-light text-[var(--color-text)] mb-6">
              I build digital things with purpose. I'm a developer who believes that 
              great software should feel effortless. I work across the full stack — 
              from crafting precise frontends to building resilient backends.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base leading-relaxed text-[var(--color-muted)] font-light mb-8">
              My work spans web applications, interactive experiences, and systems. 
              I believe the best interfaces are the ones that don't need to explain themselves. 
              Every line of code is a design decision, because how things work and how they feel matter equally.
            </p>
          </Reveal>
        </div>

        {/* Right - Facts */}
        <div className="flex flex-col justify-center">
          <div className="bg-[var(--color-bg-pure)] rounded-2xl p-8 ring-1 ring-white/5 space-y-8">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.4 + i * 0.1}>
                <div>
                  <p className="text-sm text-[var(--color-muted)] font-medium mb-1">
                    {fact.label}
                  </p>
                  <p className="text-lg text-[var(--color-text)] font-semibold tracking-tight">
                    {fact.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
