import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end pb-12 md:pb-16 px-6 md:px-12 max-w-[1400px] mx-auto pt-20">
      {/* Small metadata top-right */}
      <motion.div
        className="absolute top-28 md:top-32 right-6 md:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-[9px] md:text-[10px] tracking-[0.25em] text-[var(--color-muted)] font-medium text-right leading-relaxed">
          BASED IN<br />SRI LANKA
        </p>
      </motion.div>

      {/* Main Typography */}
      <div className="relative mt-auto">
        {/* Line 1 - HELLO, */}
        <div className="overflow-hidden">
          <motion.p
            className="text-[11px] md:text-[13px] tracking-[0.25em] text-[var(--color-muted)] font-medium mb-5 md:mb-8"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            HELLO, I'M
          </motion.p>
        </div>

        {/* Name - SNEHA */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display font-extrabold text-[17vw] md:text-[13vw] lg:text-[11vw] leading-[0.82] tracking-[-0.05em] text-[var(--color-text)]"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            SNEHA
          </motion.h1>
        </div>

        {/* Name - NETHSARA */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display font-extrabold text-[13vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.88] tracking-[-0.04em] text-[var(--color-text)] md:ml-[8vw]"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          >
            NETHSARA<span className="text-[var(--color-accent-burgundy)]">.</span>
          </motion.h1>
        </div>

        {/* Bottom row: role + description */}
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] tracking-[0.2em] text-[var(--color-muted)] font-medium">
              DEVELOPER
            </p>
            <p className="text-[10px] tracking-[0.2em] text-[var(--color-muted)] font-medium mt-0.5">
              CREATIVE TECHNOLOGIST
            </p>
          </motion.div>

          <motion.div
            className="max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[13px] md:text-[14px] leading-[1.7] text-[var(--color-muted)] font-light">
              I craft digital experiences where technology 
              meets thoughtful design — building software 
              that feels effortless to use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-medium text-[var(--color-text)] group"
              data-cursor=""
            >
              <span>SELECTED WORK</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                ↓
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Vertical line accent */}
      <motion.div
        className="absolute left-6 md:left-12 top-28 md:top-32 hidden md:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "top" }}
      >
        <div className="w-px h-16 bg-[var(--color-border)]" />
      </motion.div>
    </section>
  );
}
