import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'testimonials', 'contact'];

const StatusBar = () => {
  const [section, setSection] = useState('hero');
  const [scrollPct, setScrollPct] = useState(0);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? Math.round((window.scrollY / total) * 100) : 0);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 220) {
          setSection(sections[i]);
          break;
        }
      }
    };
    const tick = () =>
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    tick();
    const clock = setInterval(tick, 1000);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(clock);
    };
  }, []);

  const line = Math.max(1, Math.round((scrollPct / 100) * 420));

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-[95] h-7 flex items-center justify-between px-3 md:px-4 text-[11px] bg-panel/95 backdrop-blur border-t border-neon/10 select-none"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-4 text-dim">
        <span className="flex items-center gap-1.5 text-neon/80">
          <span className="text-neon">⎇</span> main
        </span>
        <span className="hidden sm:flex items-center gap-1.5">
          <span className="text-neon">✓</span> 0 <span className="text-redx">✗</span> 0
        </span>
        <span className="hidden md:block text-ink/70">
          ~/<span className="text-neon">{section}</span>
        </span>
      </div>

      <div className="flex items-center gap-4 text-dim">
        <span className="hidden sm:block">
          Ln <span className="text-ink/70">{line}</span>, Col <span className="text-ink/70">1</span>
        </span>
        <span className="hidden md:block">Spaces: 2</span>
        <span className="hidden md:block">UTF-8</span>
        <span className="hidden sm:block">LF</span>
        <span className="hidden md:flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ticker" />
          <span className="text-neon/80">online</span>
        </span>
        <span className="text-ink/70">{time}</span>
      </div>
    </motion.div>
  );
};

export default StatusBar;
