import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const shots = [
  { name: 'nebula_dashboard.png', accent: '#00ff41', h: 380, tag: 'ui' },
  { name: 'brand_identity.png', accent: '#5eead4', h: 240, tag: 'design' },
  { name: 'mobile_app.png', accent: '#fbbf24', h: 240, tag: 'mobile' },
  { name: 'creative_dir.png', accent: '#a3e635', h: 300, tag: 'art' },
  { name: 'webgl_scene.png', accent: '#2dd4bf', h: 300, tag: '3d' },
  { name: 'motion_study.png', accent: '#34d399', h: 240, tag: 'motion' },
  { name: 'ecommerce_flow.png', accent: '#00ff41', h: 380, tag: 'ux' },
  { name: 'terminal_theme.png', accent: '#5eead4', h: 260, tag: 'theme' },
  { name: 'type_system.png', accent: '#fbbf24', h: 260, tag: 'design' },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="08"
          command="ls ~/gallery/*.png --preview"
          title="SCREENSHOTS DIR"
          subtitle="Visual experiments, design studies and interface frames. Click to inspect any pixel."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {shots.map((s, i) => (
            <motion.button
              key={s.name}
              className="w-full break-inside-avoid group text-left"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setSelected(i)}
            >
              <div className="panel panel-hover brackets overflow-hidden">
                {/* chrome */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-neon/10 bg-elevated/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-redx/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amberx/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-neon/60" />
                  <span className="ml-2 text-[10px] text-dim truncate">{s.name}</span>
                </div>

                {/* canvas */}
                <div className="relative overflow-hidden" style={{ height: s.h }}>
                  <div className="absolute inset-0" style={{ background: `linear-gradient(150deg, ${s.accent}14, transparent 60%)` }} />
                  {/* abstract composition */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] text-faint font-mono">img_{String(i + 1).padStart(3, '0')}</span>
                      <span className="w-5 h-5 rounded-full" style={{ background: `${s.accent}30` }} />
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 rounded-full w-2/3" style={{ background: `${s.accent}40` }} />
                      <div className="h-1.5 rounded-full w-1/2" style={{ background: `${s.accent}25` }} />
                      <div className="h-1.5 rounded-full w-3/4" style={{ background: `${s.accent}15` }} />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="h-8 rounded" style={{ background: `${s.accent}${(18 - j * 4).toString(16).padStart(2, '0')}` }} />
                      ))}
                    </div>
                  </div>

                  {/* hover zoom overlay */}
                  <div className="absolute inset-0 bg-void/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[12px] text-neon border border-neon/30 rounded px-3 py-1.5 bg-void/60">
                      [+] inspect --zoom
                    </span>
                  </div>
                </div>

                {/* footer meta */}
                <div className="flex items-center justify-between px-3 py-2 border-t border-neon/10 text-[10px] text-faint">
                  <span>#{s.tag}</span>
                  <span className="text-neon/50 group-hover:text-neon transition-colors">1920×1080 · png</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-void/90 backdrop-blur-md" onClick={() => setSelected(null)} />
            <motion.div
              className="relative w-full max-w-3xl panel overflow-hidden"
              style={{ borderColor: `${shots[selected].accent}35` }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon/10 bg-elevated/60">
                <span className="w-2 h-2 rounded-full bg-redx/70" />
                <span className="w-2 h-2 rounded-full bg-amberx/70" />
                <span className="w-2 h-2 rounded-full bg-neon/70" />
                <span className="ml-2 text-[11px] text-dim">~/gallery/{shots[selected].name} — inspecting</span>
                <button
                  onClick={() => setSelected(null)}
                  className="ml-auto w-7 h-7 rounded border border-neon/15 text-dim hover:text-redx hover:border-redx/40 flex items-center justify-center transition-colors"
                  aria-label="Close lightbox"
                >
                  <X size={13} />
                </button>
              </div>

              <div
                className="relative flex items-center justify-center"
                style={{ height: '55vh', background: `linear-gradient(150deg, ${shots[selected].accent}18, transparent 70%)` }}
              >
                <div className="text-center">
                  <p className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">{shots[selected].name}</p>
                  <p className="text-[12px] text-dim">
                    <span style={{ color: shots[selected].accent }}>#{shots[selected].tag}</span> · 1920×1080 · 24-bit
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 border-t border-neon/10 flex items-center justify-between text-[10px] text-faint">
                <span>esc to close</span>
                <span>
                  file {selected + 1} / {shots.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
