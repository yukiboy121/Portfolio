import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

export default function About() {
  const facts = [
    { label: "BASED IN", value: "SRI LANKA" },
    { label: "FOCUS", value: "WEB / FULL STACK" },
    { label: "CURRENTLY", value: "BUILDING DIGITAL PRODUCTS" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <LineReveal className="mb-12 md:mb-16" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
        {/* Left - Label */}
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-[11px] tracking-[0.2em] text-[var(--color-muted)] font-medium">
              ABOUT
            </p>
          </Reveal>
        </div>

        {/* Right - Content */}
        <div className="md:col-span-9 md:col-start-4">
          <Reveal delay={0.15}>
            <p className="text-[20px] md:text-[26px] lg:text-[30px] leading-[1.4] font-light text-[var(--color-text)] max-w-2xl tracking-[-0.01em]">
              I build digital things with purpose. I'm a developer who believes that 
              great software should feel effortless. I work across the full stack — 
              from crafting precise frontends to building resilient backends.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-[14px] md:text-[16px] leading-[1.8] text-[var(--color-muted)] font-light mt-8 max-w-xl">
              My work spans web applications, interactive experiences, and systems. 
              I believe the best interfaces are the ones that don't need to explain themselves. 
              Every line of code is a design decision, because how things work and how they feel matter equally.
            </p>
          </Reveal>

          {/* Facts */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.4 + i * 0.1}>
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-[var(--color-accent-burgundy)] font-medium mb-2">
                    {fact.label}
                  </p>
                  <p className="text-[13px] tracking-[0.05em] text-[var(--color-text)] font-medium">
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
