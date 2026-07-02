"use client";

import { PERSONAL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "#2997ff" }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] animate-[orb-1_20s_ease-in-out_infinite]"
          style={{ background: "#5e5ce6", top: "-10%", right: "-10%" }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[100px] animate-[orb-2_25s_ease-in-out_infinite]"
          style={{ background: "#2997ff", bottom: "-10%", left: "-5%" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-10 opacity-0 animate-fade-up">
          Portfolio &mdash; 2026
        </p>

        <h1 className="text-[clamp(3rem,12vw,140px)] font-light leading-[0.85] tracking-[-0.03em] text-primary mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {PERSONAL.firstName}
          <br />
          {PERSONAL.lastName}
        </h1>

        <p
          className="text-lg md:text-xl font-medium mb-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent opacity-0 animate-fade-up-sm"
          style={{ animationDelay: "0.3s" }}
        >
          Full Stack Developer
        </p>

        <p
          className="text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up-sm"
          style={{ animationDelay: "0.45s" }}
        >
          {PERSONAL.tagline}
        </p>

        <div
          className="flex items-center justify-center gap-3 md:gap-4 opacity-0 animate-fade-up-sm"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-primary text-black text-sm font-medium hover:bg-white/90 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-white/[0.08] text-primary text-sm font-medium hover:bg-white/[0.06] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
