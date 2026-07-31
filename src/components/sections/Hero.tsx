import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 max-w-[1400px] mx-auto pt-20">
      
      {/* Main Content */}
      <div className="max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--color-text)] tracking-tight leading-[1.1]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Hi, I'm Sneha.<br/>
          <span className="text-[var(--color-muted)]">A Full Stack Developer.</span>
        </motion.h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-[var(--color-muted)] max-w-2xl font-light leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          I craft digital experiences where technology meets thoughtful design — building software that feels effortless to use. Based in Sri Lanka.
        </motion.p>

        <motion.div
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-bg)] bg-[var(--color-text)] px-6 py-3 rounded-full hover:bg-[var(--color-muted)] transition-colors duration-300"
          >
            <span>View Selected Work</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-muted)] transition-colors duration-300 group"
          >
            <span>Get in touch</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
