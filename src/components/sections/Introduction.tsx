import AnimatedText from "@/components/motion/AnimatedText";
import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";

export default function Introduction() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 max-w-[1400px] mx-auto">
      <LineReveal className="mb-16 md:mb-24" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <AnimatedText
            text="I BUILD DIGITAL THINGS WITH PURPOSE."
            className="font-display font-bold text-[7vw] md:text-[4.5vw] lg:text-[3.5vw] leading-[1.1] tracking-[-0.03em] text-[#111111]"
          />
        </div>
      </div>

      <Reveal delay={0.3} className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-5 md:col-start-7">
          <p className="text-[14px] md:text-[15px] leading-[1.85] text-[#777777] font-light">
            I enjoy turning complex ideas into simple, useful, and beautifully 
            engineered digital experiences. Whether it's a full-stack web application 
            or an interactive system, every project begins with the same question — 
            how can this feel better?
          </p>
          <div className="w-8 h-px bg-[#E6E6E3] mt-8" />
        </div>
      </Reveal>
    </section>
  );
}
