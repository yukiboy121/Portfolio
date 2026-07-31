import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';
import GlitchText from '../components/GlitchText';

const script: { type: 'cmd' | 'out'; text: string; tone?: string }[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'alex_rivera — full-stack developer', tone: 'ink' },
  { type: 'cmd', text: 'cat mission.txt' },
  { type: 'out', text: '"Build fast. Ship secure. Make it beautiful."', tone: 'dim' },
  { type: 'cmd', text: './deploy --portfolio' },
  { type: 'out', text: '✔ deployed to production in 42ms', tone: 'neon' },
];

const sysInfo = [
  { k: 'OS', v: 'Developer v5.0.24' },
  { k: 'Host', v: 'San Francisco, CA' },
  { k: 'Kernel', v: 'React 19 / Next.js 15' },
  { k: 'Uptime', v: '5+ years' },
  { k: 'Packages', v: '50+ projects shipped' },
  { k: 'Shell', v: 'TypeScript 5.x' },
  { k: 'Theme', v: 'hacker_green [dark]' },
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // type through the terminal script
  useEffect(() => {
    if (line >= script.length) return;
    const current = script[line];
    if (current.type === 'out') {
      const t = setTimeout(() => setLine((l) => l + 1), 500);
      return () => clearTimeout(t);
    }
    if (chars < current.text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 55);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setChars(0);
      setLine((l) => l + 1);
    }, 350);
    return () => clearTimeout(t);
  }, [line, chars]);

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const socials = [
    { icon: Github, label: 'github', href: '#' },
    { icon: Linkedin, label: 'linkedin', href: '#' },
    { icon: Twitter, label: 'twitter', href: '#' },
    { icon: Mail, label: 'mail', href: '#contact' },
  ];

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* layered background */}
      <div className="absolute inset-0">
        <MatrixRain opacity={0.12} />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,255,65,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.4) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        {/* green ambient glow */}
        <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-neon/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-cyanx/[0.04] blur-[140px]" />
        {/* giant watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block select-none pointer-events-none">
          <span className="font-display font-bold text-[220px] leading-none text-transparent" style={{ WebkitTextStroke: '1px rgba(0,255,65,0.07)' }}>
            {'</>'}
          </span>
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT — identity + terminal */}
          <div className="lg:col-span-7 space-y-8">
            {/* status chips */}
            <motion.div
              className="flex flex-wrap items-center gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="flex items-center gap-2 px-3 py-1 rounded border border-neon/20 bg-neon/5 text-[11px] text-neon">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ticker" />
                SYSTEM ONLINE
              </span>
              <span className="px-3 py-1 rounded border border-neon/10 text-[11px] text-dim">
                [ OPEN_TO_WORK ]
              </span>
              <span className="px-3 py-1 rounded border border-neon/10 text-[11px] text-dim hidden sm:block">
                v5.0 — senior
              </span>
            </motion.div>

            {/* giant name */}
            <div>
              <h1 className="font-display font-bold tracking-tight leading-[0.95]">
                <span className="block text-6xl sm:text-7xl lg:text-8xl text-ink">
                  <GlitchText text="ALEX" delay={2} />
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl text-neon term-glow mt-1">
                  <GlitchText text="RIVERA_" delay={6} />
                </span>
              </h1>
              <motion.p
                className="mt-5 text-[14px] md:text-[15px] text-dim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <span className="text-neon">&gt;</span> full-stack developer
                <span className="text-faint"> &amp; </span>security enthusiast
                <span className="block-cursor" />
              </motion.p>
            </div>

            {/* terminal typing */}
            <motion.div
              className="panel max-w-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b border-neon/10 bg-elevated/60">
                <span className="w-2 h-2 rounded-full bg-redx/70" />
                <span className="w-2 h-2 rounded-full bg-amberx/70" />
                <span className="w-2 h-2 rounded-full bg-neon/70" />
                <span className="ml-2 text-[10px] text-dim">alex@dev: ~/intro</span>
              </div>
              <div className="p-4 text-[13px] leading-relaxed min-h-[132px]">
                {script.slice(0, line + 1).map((l, i) => {
                  if (l.type === 'cmd') {
                    const isTyping = i === line;
                    const text = isTyping ? l.text.slice(0, chars) : l.text;
                    return (
                      <p key={i} className="text-ink">
                        <span className="text-neon">➜</span> <span className="text-cyanx">~</span>{' '}
                        {text}
                        {isTyping && <span className="block-cursor" />}
                      </p>
                    );
                  }
                  if (i > line) return null;
                  return (
                    <p
                      key={i}
                      className={
                        l.tone === 'neon' ? 'text-neon/90' : l.tone === 'dim' ? 'text-dim' : 'text-ink/80'
                      }
                    >
                      {l.text}
                    </p>
                  );
                })}
                {line >= script.length && (
                  <p className="text-ink">
                    <span className="text-neon">➜</span> <span className="text-cyanx">~</span>{' '}
                    <span className="block-cursor" />
                  </p>
                )}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <button
                onClick={() => go('#projects')}
                className="group flex items-center gap-2 px-5 py-3 rounded bg-neon text-void text-[13px] font-semibold hover:shadow-[0_0_32px_rgba(0,255,65,0.35)] transition-all brackets"
              >
                <span className="text-void/60">$</span> ./view_projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => go('#contact')}
                className="flex items-center gap-2 px-5 py-3 rounded border border-neon/25 text-neon text-[13px] hover:bg-neon/10 hover:border-neon/50 transition-all brackets"
              >
                <span className="text-dim">$</span> ssh connect
              </button>
            </motion.div>

            {/* socials as commands */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span className="text-[11px] text-faint">links:</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-neon/10 text-dim text-[11px] hover:text-neon hover:border-neon/40 hover:bg-neon/5 transition-all"
                >
                  <s.icon size={13} />
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — neofetch system panel */}
          <div className="lg:col-span-5">
            <motion.div
              className="panel brackets overflow-hidden"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-neon/10 bg-elevated/60">
                <span className="text-[10px] text-dim">neofetch — sysinfo</span>
                <span className="text-[10px] text-neon/60">▮▮▮▯ 78%</span>
              </div>

              <div className="p-5 md:p-6 grid sm:grid-cols-2 gap-6 items-center">
                {/* ASCII logo */}
                <div className="text-neon term-glow-soft text-[11px] md:text-[12px] ascii animate-float-slow select-none">
{`   █████╗  ██████╗
  ██╔══██╗ ██╔══██╗
  ███████║ ██████╔╝
  ██╔══██║ ██╔══██╗
  ██║  ██║ ██║  ██║
  ╚═╝  ╚═╝ ╚═╝  ╚═╝`}
                </div>

                {/* sys info */}
                <div className="text-[12px] space-y-1.5">
                  <p className="text-ink font-semibold mb-2">
                    alex@dev <span className="text-faint">———</span>
                  </p>
                  {sysInfo.map((row, i) => (
                    <motion.p
                      key={row.k}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.07 }}
                    >
                      <span className="text-neon w-20 flex-shrink-0">{row.k}</span>
                      <span className="text-dim">{row.v}</span>
                    </motion.p>
                  ))}
                  {/* palette swatches */}
                  <div className="flex gap-1 pt-3">
                    {['#030705', '#0a3d1f', '#22c55e', '#00ff41', '#5eead4', '#fbbf24', '#ff4d4d', '#c9e4d4'].map((c) => (
                      <span key={c} className="w-4 h-4 rounded-[3px]" style={{ background: c }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* bottom meter */}
              <div className="px-5 pb-5">
                <div className="flex justify-between text-[10px] text-faint mb-1.5">
                  <span>cpu — creativity</span>
                  <span className="text-neon">98%</span>
                </div>
                <div className="h-1.5 rounded-full bg-elevated overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-neon"
                    style={{ boxShadow: '0 0 10px rgba(0,255,65,0.5)' }}
                    initial={{ width: 0 }}
                    animate={{ width: '98%' }}
                    transition={{ duration: 1.4, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-faint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-[10px] tracking-widest">scroll || exit</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown size={14} className="text-neon/60" />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
