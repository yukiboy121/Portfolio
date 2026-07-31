import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const commands = [
  { label: 'cd ~/about', desc: 'who am i', section: '#about' },
  { label: 'cat skills.log', desc: 'tech stack', section: '#skills' },
  { label: 'ls ~/projects', desc: 'featured work', section: '#projects' },
  { label: 'git log --career', desc: 'experience', section: '#experience' },
  { label: 'man services', desc: 'what i offer', section: '#services' },
  { label: 'cat reviews.json', desc: 'testimonials', section: '#testimonials' },
  { label: 'ssh connect', desc: 'contact me', section: '#contact' },
  { label: 'cd ~', desc: 'back to top', section: '#hero' },
];

const CommandPalette = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);

  const filtered = useMemo(() => {
    if (!query) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
    );
  }, [query]);

  useEffect(() => setSelected(0), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === 'Enter' && filtered[selected]) {
        run(filtered[selected].section);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, filtered, selected]);

  const run = (section: string) => {
    document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' });
    setQuery('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[500] flex items-start justify-center pt-[18vh] px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-void/70 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            className="relative w-full max-w-lg panel overflow-hidden shadow-[0_0_60px_rgba(0,255,65,0.08)]"
            initial={{ scale: 0.96, y: -16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: -16, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
          >
            {/* input */}
            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-neon/10 bg-elevated/50">
              <span className="text-neon text-[13px]">❯</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="type a command…"
                className="flex-1 bg-transparent text-ink text-[13px] placeholder:text-faint focus:outline-none"
                autoFocus
              />
              <span className="text-[10px] text-faint border border-neon/10 rounded px-1.5 py-0.5">ESC</span>
            </div>

            {/* results */}
            <div className="max-h-64 overflow-y-auto py-1.5">
              {filtered.length === 0 ? (
                <p className="px-4 py-8 text-center text-faint text-[12px]">
                  command not found: {query}
                </p>
              ) : (
                filtered.map((cmd, i) => (
                  <button
                    key={cmd.label}
                    onClick={() => run(cmd.section)}
                    onMouseEnter={() => setSelected(i)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      i === selected ? 'bg-neon/8 text-ink' : 'text-dim'
                    }`}
                  >
                    <span className={i === selected ? 'text-neon' : 'text-faint'}>
                      {i === selected ? '❯' : '$'}
                    </span>
                    <span className="text-[13px] flex-1">{cmd.label}</span>
                    <span className="text-[10px] text-faint">{cmd.desc}</span>
                  </button>
                ))
              )}
            </div>

            {/* footer */}
            <div className="px-4 py-2.5 border-t border-neon/10 flex gap-4 text-[10px] text-faint bg-elevated/40">
              <span>↑↓ navigate</span>
              <span>↵ run</span>
              <span>esc close</span>
              <span className="ml-auto text-neon/50">8 commands</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
