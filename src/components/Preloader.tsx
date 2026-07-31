import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { text: 'ALEX.OS v2.4.1 — secure boot', dim: true },
  { text: '> mounting /dev/portfolio ............ OK', ok: true },
  { text: '> loading modules [react, ts, node] .. OK', ok: true },
  { text: '> establishing encrypted channel ..... OK', ok: true },
  { text: '> ACCESS GRANTED', accent: true },
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= bootLines.length) {
          clearInterval(lineTimer);
          return v;
        }
        return v + 1;
      });
    }, 260);
    return () => clearInterval(lineTimer);
  }, []);

  useEffect(() => {
    if (visibleLines < bootLines.length) return;
    const pTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(pTimer);
          setTimeout(() => {
            setExiting(true);
            setTimeout(onComplete, 900);
          }, 350);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 60);
    return () => clearInterval(pTimer);
  }, [visibleLines, onComplete]);

  const pct = Math.min(Math.floor(progress), 100);
  const barLen = 24;
  const filled = Math.round((pct / 100) * barLen);
  const bar = '█'.repeat(filled) + '░'.repeat(barLen - filled);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-void"
          exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="w-full max-w-md px-8">
            {/* Terminal chrome */}
            <div className="panel overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon/10 bg-elevated/50">
                <span className="w-2.5 h-2.5 rounded-full bg-redx/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amberx/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon/70" />
                <span className="ml-3 text-[11px] text-dim">alex@dev: ~/boot</span>
              </div>

              <div className="p-6 text-[13px] leading-relaxed">
                {bootLines.slice(0, visibleLines).map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={
                      line.accent
                        ? 'text-neon term-glow font-semibold'
                        : line.ok
                          ? 'text-ink/80'
                          : 'text-dim'
                    }
                  >
                    {line.text}
                    {line.ok && <span className="text-neon ml-1">✓</span>}
                  </motion.p>
                ))}

                {visibleLines >= bootLines.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4"
                  >
                    <p className="text-dim text-[11px] mb-1.5">compiling portfolio</p>
                    <p className="text-neon text-[13px]">
                      [{bar}] <span className="text-ink">{pct}%</span>
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            <p className="text-center text-[10px] text-faint mt-6 tracking-widest uppercase">
              root access required
            </p>
          </div>

          {/* ambient corner ticks */}
          <div className="absolute top-6 left-6 text-neon/30 text-[10px]">┌ SYS</div>
          <div className="absolute top-6 right-6 text-neon/30 text-[10px]">BOOT ┐</div>
          <div className="absolute bottom-6 left-6 text-neon/30 text-[10px]">└ {new Date().getFullYear()}</div>
          <div className="absolute bottom-6 right-6 text-neon/30 text-[10px]">TTY1 ┘</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
