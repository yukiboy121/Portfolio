import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  const links = [
    { label: 'about', href: '#about' },
    { label: 'projects', href: '#projects' },
    { label: 'services', href: '#services' },
    { label: 'contact', href: '#contact' },
  ];

  const socials = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@alexrivera.dev' },
  ];

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-neon/10 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* identity */}
          <div>
            <p className="text-[13px] text-dim mb-3">
              alex@dev:<span className="text-neon">~</span>$ <span className="text-ink">exit</span>
            </p>
            <p className="font-display text-2xl font-bold text-ink mb-2">
              ALEX<span className="text-neon term-glow-soft">RIVERA</span>
            </p>
            <p className="text-[12px] text-dim leading-relaxed max-w-xs">
              Full-stack developer shipping fast, secure, beautiful systems from San Francisco.
            </p>
          </div>

          {/* sitemap */}
          <div>
            <p className="text-[11px] text-faint tracking-widest uppercase mb-4">// sitemap</p>
            <div className="space-y-2">
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => go(l.href)}
                  className="flex items-center gap-2 text-[13px] text-dim hover:text-neon transition-colors group"
                >
                  <span className="text-faint group-hover:text-neon transition-colors">~/</span>
                  {l.label}
                  <span className="opacity-0 group-hover:opacity-100 text-neon transition-opacity">↗</span>
                </button>
              ))}
            </div>
          </div>

          {/* socials */}
          <div>
            <p className="text-[11px] text-faint tracking-widest uppercase mb-4">// connect</p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded border border-neon/12 flex items-center justify-center text-dim hover:text-neon hover:border-neon/40 hover:bg-neon/5 hover:shadow-[0_0_16px_rgba(0,255,65,0.15)] transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <s.icon size={15} />
                </motion.a>
              ))}
            </div>
            <p className="mt-5 text-[11px] text-faint">
              <span className="text-neon/60">$</span> echo "hello" | nc alexrivera.dev 22
            </p>
          </div>
        </div>

        {/* exit line */}
        <div className="pt-6 border-t border-neon/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-faint">
          <p>
            © {year} alex_rivera · <span className="text-neon/70">exit code 0</span> · no processes left hanging
          </p>
          <p>
            built with <span className="text-cyanx/80">react</span> + <span className="text-cyanx/80">framer-motion</span> ·
            compiled in <span className="text-neon/70">42ms</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
