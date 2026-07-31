import Reveal from "@/components/motion/Reveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="h-px bg-[var(--color-border)] mb-12 md:mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Brand */}
        <div className="md:col-span-4">
          <Reveal>
            <div>
              <p className="font-display font-semibold text-[14px] tracking-wider text-[var(--color-text)]">
                SN
              </p>
              <p className="text-[12px] text-[var(--color-muted)] font-light mt-1">
                SNEHA NETHSARA
              </p>
              <p className="text-[11px] text-[var(--color-muted)] font-light mt-0.5">
                Developer & Creative Developer
              </p>
            </div>
          </Reveal>
        </div>

        {/* Links */}
        <div className="md:col-span-3 md:col-start-6">
          <Reveal delay={0.1}>
            <div className="space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300 font-medium"
                data-cursor="OPEN ↗"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300 font-medium"
                data-cursor="OPEN ↗"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:hello@snehanethsara.com"
                className="block text-[11px] tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300 font-medium"
                data-cursor=""
              >
                EMAIL
              </a>
            </div>
          </Reveal>
        </div>

        {/* Back to top */}
        <div className="md:col-span-3 md:col-start-10 md:text-right">
          <Reveal delay={0.2}>
            <div className="flex flex-col items-start md:items-end gap-4">
              <button
                onClick={scrollToTop}
                className="text-[11px] tracking-[0.15em] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300 font-medium group"
                data-cursor=""
              >
                <span>BACK TO TOP</span>
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:-translate-y-0.5">
                  ↑
                </span>
              </button>
              <p className="text-[10px] text-[var(--color-muted)] font-light">
                © 2026
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
