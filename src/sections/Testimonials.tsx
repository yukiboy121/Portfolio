import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const reviews = [
  {
    id: '#042',
    author: 'sarahchen',
    name: 'Sarah Chen',
    role: 'CEO · Lumière Studio',
    body: 'Alex transformed our digital presence entirely. The site doesn\'t just look incredible — it converts. Inquiries up 300% in the first month. His attention to detail is genuinely unmatched.',
    status: 'merged',
    accent: '#fbbf24',
    stars: 5,
  },
  {
    id: '#038',
    author: 'marcusj',
    name: 'Marcus Johnson',
    role: 'CTO · TechNova',
    body: 'Working with Alex was a game-changer. He took gnarly technical requirements and shipped an intuitive, beautiful interface. Code quality is impeccable — clean, documented, fast.',
    status: 'merged',
    accent: '#5eead4',
    stars: 5,
  },
  {
    id: '#035',
    author: 'emwatson',
    name: 'Emily Watson',
    role: 'Founder · Meridian',
    body: 'Alex doesn\'t build websites — he engineers experiences. Conversion up 60% after the redesign. He speaks both fluent developer and fluent business, which is rare.',
    status: 'merged',
    accent: '#00ff41',
    stars: 5,
  },
  {
    id: '#029',
    author: 'dpark',
    name: 'David Park',
    role: 'Head of Product · Pulse Health',
    body: 'The level of craft is unmatched. He delivered ahead of schedule with features we didn\'t even know we needed. A true creative technologist who sweats the last 4%.',
    status: 'merged',
    accent: '#a3e635',
    stars: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, [auto]);

  const r = reviews[current];

  return (
    <section id="testimonials" className="relative py-28 md:py-36 overflow-hidden">
      {/* scrolling log watermark */}
      <div className="absolute top-10 inset-x-0 overflow-hidden opacity-[0.035] pointer-events-none select-none">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-display font-bold text-[110px] tracking-tighter">
            LGTM · APPROVED · MERGED · SHIPPED · LGTM · APPROVED · MERGED · SHIPPED · LGTM · APPROVED ·
          </span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="06"
          command="cat reviews.json --verified"
          title="PULL REQUESTS OF PRAISE"
          subtitle="Code reviews from the humans who shipped with me. All approved, zero change-requests."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={r.id}
                className="panel brackets p-7 md:p-10 relative overflow-hidden"
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -22, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px]" style={{ background: `${r.accent}12` }} />

                {/* PR header */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-[12px] font-semibold" style={{ color: r.accent }}>{r.id}</span>
                  <span className="text-[12px] text-ink/80">review: {r.author} approved these changes</span>
                  <span className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] text-void font-semibold" style={{ background: r.accent }}>
                    ✓ {r.status}
                  </span>
                </div>

                <p className="text-[15px] md:text-[16px] text-ink/90 leading-relaxed mb-8 relative z-10">
                  <span className="text-neon text-xl align-middle mr-1">"</span>
                  {r.body}
                  <span className="text-neon text-xl align-middle ml-1">"</span>
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded flex items-center justify-center font-display font-bold text-void text-lg"
                    style={{ background: r.accent, boxShadow: `0 0 18px ${r.accent}50` }}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[14px] text-ink font-semibold">
                      @{r.author} <span className="text-faint font-normal">— {r.name}</span>
                    </p>
                    <p className="text-[11px] text-dim">{r.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(r.stars)].map((_, i) => (
                      <span key={i} className="text-amberx text-[12px]">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => { setAuto(false); setCurrent((c) => (c - 1 + reviews.length) % reviews.length); }}
              className="w-9 h-9 rounded border border-neon/15 text-dim hover:text-neon hover:border-neon/40 flex items-center justify-center transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={15} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAuto(false); setCurrent(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === current ? 'w-7 bg-neon shadow-[0_0_8px_rgba(0,255,65,0.6)]' : 'w-1.5 bg-faint hover:bg-dim'}`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { setAuto(false); setCurrent((c) => (c + 1) % reviews.length); }}
              className="w-9 h-9 rounded border border-neon/15 text-dim hover:text-neon hover:border-neon/40 flex items-center justify-center transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          {/* contributor row */}
          <div className="flex justify-center mt-7 -space-x-2.5">
            {reviews.map((rev, i) => (
              <button
                key={rev.id}
                onClick={() => { setAuto(false); setCurrent(i); }}
                className={`w-9 h-9 rounded border-2 flex items-center justify-center text-[11px] font-bold text-void transition-all ${
                  i === current ? 'border-neon scale-110 z-10' : 'border-void opacity-50 hover:opacity-90'
                }`}
                style={{ background: rev.accent }}
                aria-label={rev.author}
              >
                {rev.name.charAt(0)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
