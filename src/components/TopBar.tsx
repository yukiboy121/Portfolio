import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const nav = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'services', href: '#services' },
  { label: 'contact', href: '#contact' },
];

const TopBar = ({ onCommandPalette }: { onCommandPalette: () => void }) => {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ['hero', ...nav.map((n) => n.href.slice(1))];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 180) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-3'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div
            className={`flex items-center justify-between rounded-lg px-4 py-2.5 border transition-all duration-500 ${
              scrolled
                ? 'bg-panel/90 backdrop-blur border-neon/10'
                : 'bg-transparent border-transparent'
            }`}
          >
            {/* Terminal chrome + identity */}
            <button
              onClick={() => go('#hero')}
              className="flex items-center gap-3 group"
              aria-label="Home"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-redx/70 group-hover:bg-redx transition-colors" />
                <span className="w-2.5 h-2.5 rounded-full bg-amberx/70 group-hover:bg-amberx transition-colors" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon/70 group-hover:bg-neon transition-colors" />
              </span>
              <span className="text-[13px] text-dim group-hover:text-ink transition-colors hidden sm:block">
                alex@dev:<span className="text-neon">~</span>/portfolio
              </span>
            </button>

            {/* Desktop nav as file tabs */}
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <button
                    key={item.label}
                    onClick={() => go(item.href)}
                    className={`relative px-3 py-1.5 text-[13px] rounded transition-colors ${
                      isActive ? 'text-neon' : 'text-dim hover:text-ink'
                    }`}
                  >
                    <span className="text-faint mr-1">~/</span>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-2 right-2 -bottom-0.5 h-[1.5px] bg-neon"
                        style={{ boxShadow: '0 0 8px rgba(0,255,65,0.7)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onCommandPalette}
                className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded border border-neon/10 text-dim text-[11px] hover:text-neon hover:border-neon/30 transition-colors"
              >
                <span>⌘K</span>
                <span className="text-faint">cmd</span>
              </button>

              <button
                onClick={() => go('#contact')}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-neon/25 bg-neon/5 text-neon text-[13px] hover:bg-neon/15 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all"
              >
                <span className="text-faint">$</span> hire_me
              </button>

              <button
                onClick={() => setOpen(true)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded border border-neon/10 text-ink"
                aria-label="Open menu"
              >
                <Menu size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 max-w-[85vw] bg-panel border-l border-neon/10 p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-[12px] text-dim">
                  alex@dev:<span className="text-neon">~</span>$
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded border border-neon/10 text-ink"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {nav.map((item, i) => (
                  <motion.button
                    key={item.label}
                    onClick={() => go(item.href)}
                    className={`text-left px-3 py-2.5 rounded text-[15px] transition-colors ${
                      active === item.href.slice(1)
                        ? 'text-neon bg-neon/5'
                        : 'text-dim hover:text-ink hover:bg-elevated/50'
                    }`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <span className="text-faint mr-2 text-[11px]">0{i + 1}</span>
                    <span className="text-faint">~/</span>
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <div className="pt-6 border-t border-neon/10 text-[11px] text-faint">
                <p>$ exit — © {new Date().getFullYear()} alex_rivera</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopBar;
