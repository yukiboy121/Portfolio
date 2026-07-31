import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const filters = ['--all', '--web', '--saas', '--ecommerce', '--creative'];

const projects = [
  {
    id: 1,
    name: 'nebula-finance',
    title: 'Nebula Finance',
    cat: '--saas',
    accent: '#00ff41',
    status: 'running',
    description: 'Real-time fintech dashboard with live portfolio analytics, WebSocket streams and AI-powered trade insights for high-frequency traders.',
    problem: 'Traders juggled 5+ tools to monitor portfolios. Data was stale by the time it rendered.',
    solution: 'Single React dashboard with WebSocket feeds, custom canvas charts and a predictive ML layer on Python.',
    results: '+40% trading efficiency · 10k users in month one · p95 render < 16ms.',
    tech: ['react', 'typescript', 'd3.js', 'websockets', 'python', 'aws'],
    metrics: { stars: 842, forks: 121, build: 'passing' },
  },
  {
    id: 2,
    name: 'lumiere-studio',
    title: 'Lumière Studio',
    cat: '--creative',
    accent: '#5eead4',
    status: 'deployed',
    description: 'Award-winning site for a luxury creative agency — immersive WebGL scenes, GSAP choreography and buttery 60fps transitions.',
    problem: 'The agency\'s brand screamed premium; their old site whispered template.',
    solution: 'Fully custom Three.js scenes, scroll-driven GSAP timelines and a headless CMS for their team.',
    results: 'Awwwards SOTD · +300% inbound inquiries · 1.1s LCP on 4G.',
    tech: ['next.js', 'three.js', 'gsap', 'framer-motion', 'sanity'],
    metrics: { stars: 1204, forks: 210, build: 'passing' },
  },
  {
    id: 3,
    name: 'meridian-shop',
    title: 'Meridian Commerce',
    cat: '--ecommerce',
    accent: '#fbbf24',
    status: 'running',
    description: 'Headless commerce for a luxury fashion label: AR try-on, AI recommendations and a 3-step checkout that feels illegal to use.',
    problem: 'Cart abandonment at 78%. The checkout felt like filing taxes.',
    solution: 'Headless storefront, AR.js try-on, ML recommendations and a rebuilt 3-step checkout flow.',
    results: '+60% conversion · $2M first quarter · abandonment down to 31%.',
    tech: ['next.js', 'shopify', 'ar.js', 'tensorflow', 'stripe'],
    metrics: { stars: 566, forks: 98, build: 'passing' },
  },
  {
    id: 4,
    name: 'pulse-health',
    title: 'Pulse Health',
    cat: '--web',
    accent: '#34d399',
    status: 'running',
    description: 'Unified health platform — wearable sync, HIPAA-compliant data pipeline, ML health predictions and telemedicine built in.',
    problem: 'Health data lived in 6 siloed apps. Nothing talked to anything.',
    results: '500k+ downloads · 4.8★ rating · 50+ hospital partnerships.',
    solution: 'One platform, real-time wearable sync, FHIR-compliant APIs and on-device ML insights.',
    tech: ['react-native', 'node.js', 'fhir', 'tensorflow', 'postgresql'],
    metrics: { stars: 923, forks: 154, build: 'passing' },
  },
  {
    id: 5,
    name: 'aether-audio',
    title: 'Aether Music',
    cat: '--web',
    accent: '#a3e635',
    status: 'deployed',
    description: 'Next-gen streaming with spatial audio via Web Audio API, ML-curated playlists and live social listening rooms.',
    problem: 'Discovery was broken — same 40 songs on every platform, zero social layer.',
    solution: 'WebAudio spatial engine, graph-based recommender and realtime listening rooms over CRDTs.',
    results: '1M streams week one · TechCrunch feature · 34% D30 retention.',
    tech: ['react', 'web-audio', 'redis', 'graphql', 'yjs'],
    metrics: { stars: 731, forks: 87, build: 'passing' },
  },
  {
    id: 6,
    name: 'atlas-travel',
    title: 'Atlas Travel',
    cat: '--saas',
    accent: '#2dd4bf',
    status: 'running',
    description: 'AI trip planner with 3D destination previews, smart itineraries and collaborative planning that syncs in realtime.',
    problem: 'Planning a trip meant 14 tabs and a spreadsheet nobody updated.',
    solution: 'LLM itinerary generation, Mapbox GL previews and CRDT-based group planning.',
    results: '200k trips planned · $5M bookings facilitated · 4.9★ avg.',
    tech: ['next.js', 'openai', 'mapbox', 'prisma', 'stripe'],
    metrics: { stars: 654, forks: 76, build: 'passing' },
  },
];

const ProjectCard = ({ p, index, onOpen }: { p: (typeof projects)[0]; index: number; onOpen: () => void }) => {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <motion.article
      ref={ref}
      className="group panel panel-hover brackets overflow-hidden cursor-pointer flex flex-col"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={onOpen}
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon/10 bg-elevated/60">
        <span className="w-2 h-2 rounded-full bg-redx/70" />
        <span className="w-2 h-2 rounded-full bg-amberx/70" />
        <span className="w-2 h-2 rounded-full bg-neon/70" />
        <span className="ml-2 text-[11px] text-dim truncate">~/projects/{p.name}</span>
        <span
          className="ml-auto text-[9px] px-1.5 py-0.5 rounded border"
          style={{ color: p.accent, borderColor: `${p.accent}40`, background: `${p.accent}0d` }}
        >
          ● {p.status}
        </span>
      </div>

      {/* fake app preview */}
      <div className="relative h-44 overflow-hidden border-b border-neon/10">
        <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${p.accent}0f, transparent 65%)` }} />
        <div className="absolute inset-0 p-4 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="h-2.5 w-2.5 rounded-sm" style={{ background: `${p.accent}66` }} />
            <div className="h-2 rounded-full w-1/3" style={{ background: `${p.accent}2e` }} />
            <div className="ml-auto h-2 rounded-full w-12 bg-elevated" />
          </div>
          <div className="h-2 rounded-full w-3/4 bg-elevated" />
          <div className="h-2 rounded-full w-1/2 bg-elevated" />
          <div className="grid grid-cols-3 gap-2 mt-2 flex-1">
            {[0.3, 0.2, 0.12].map((o, i) => (
              <div key={i} className="rounded-md border border-neon/5" style={{ background: `${p.accent}${Math.round(o * 255).toString(16).padStart(2, '0')}` }} />
            ))}
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-16 rounded" style={{ background: `${p.accent}33` }} />
            <div className="h-5 w-16 rounded bg-elevated" />
          </div>
        </div>
        {/* hover scanline */}
        <motion.div
          className="absolute inset-x-0 h-10 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{ background: `linear-gradient(180deg, transparent, ${p.accent}14, transparent)` }}
          animate={{ top: ['0%', '80%'] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] text-faint mb-1.5">
          <span style={{ color: p.accent }}>❯</span> {p.cat.slice(2)} · 2024
        </p>
        <h3 className="font-display text-xl font-semibold text-ink group-hover:text-neon transition-colors">
          {p.title}
        </h3>
        <p className="text-[12px] text-dim leading-relaxed mt-2 line-clamp-2 flex-1">{p.description}</p>

        {/* tech */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {p.tech.slice(0, 4).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-[10px] border border-neon/10 text-dim bg-elevated/40">
              {t}
            </span>
          ))}
          {p.tech.length > 4 && <span className="px-2 py-0.5 text-[10px] text-faint">+{p.tech.length - 4}</span>}
        </div>

        {/* actions */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neon/10 text-[11px]">
          <span className="text-neon/80 group-hover:text-neon">$ ./live --demo</span>
          <span className="text-faint group-hover:text-dim transition-colors">$ open README</span>
          <span className="ml-auto text-faint flex items-center gap-1">
            ★ {p.metrics.stars}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectModal = ({ p, onClose }: { p: (typeof projects)[0]; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="absolute inset-0 bg-void/85 backdrop-blur-md" onClick={onClose} />

    <motion.div
      className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto panel scrollbar-hide"
      style={{ borderColor: `${p.accent}30` }}
      initial={{ scale: 0.94, y: 36, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.94, y: 36, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 30 }}
    >
      {/* editor tab bar */}
      <div className="sticky top-0 z-10 flex items-center gap-1 px-3 pt-2 pb-0 bg-panel/95 backdrop-blur border-b border-neon/10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-t border border-b-0 border-neon/15 bg-elevated/70 text-[11px] text-ink">
          <span style={{ color: p.accent }}>●</span> {p.name}/README.md
          <button onClick={onClose} className="ml-2 text-faint hover:text-redx transition-colors" aria-label="Close">
            <X size={12} />
          </button>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 text-[11px] text-faint">
          <span style={{ color: p.accent }}>●</span> terminal
        </div>
      </div>

      <div className="p-6 md:p-10">
        <p className="text-[11px] text-faint mb-2">
          <span style={{ color: p.accent }}>#</span> {p.cat.slice(2)} · production ·{' '}
          <span className="text-neon/70">build {p.metrics.build}</span>
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-ink mb-3">{p.title}</h3>
        <p className="text-[13px] text-dim leading-relaxed mb-8">{p.description}</p>

        {/* readme sections */}
        {[
          { h: '## The Problem', body: p.problem, c: '#ff4d4d' },
          { h: '## The Solution', body: p.solution, c: '#5eead4' },
          { h: '## Results', body: p.results, c: '#00ff41' },
        ].map((s, i) => (
          <motion.div
            key={s.h}
            className="mb-6"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
          >
            <h4 className="text-[14px] font-semibold mb-2" style={{ color: s.c }}>
              {s.h}
            </h4>
            <p className="text-[13px] text-dim leading-relaxed pl-4 border-l border-neon/10">{s.body}</p>
          </motion.div>
        ))}

        {/* tech as json */}
        <div className="panel p-4 mb-8">
          <p className="text-[11px] text-faint mb-2">package.json — dependencies</p>
          <p className="text-[12px] text-dim">
            <span className="text-faint">{'{'}</span>{' '}
            {p.tech.map((t, i) => (
              <span key={t}>
                <span className="text-cyanx">"{t}"</span>
                <span className="text-faint">:</span> <span className="text-amberx">"latest"</span>
                {i < p.tech.length - 1 && <span className="text-faint">,</span>}{' '}
              </span>
            ))}
            <span className="text-faint">{'}'}</span>
          </p>
        </div>

        {/* metrics + actions */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 px-4 py-2.5 rounded text-[12px] font-semibold text-void"
            style={{ background: p.accent, boxShadow: `0 0 24px ${p.accent}40` }}
          >
            <ExternalLink size={13} /> ./live --demo
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 px-4 py-2.5 rounded border border-neon/20 text-[12px] text-ink hover:bg-neon/10 transition-colors"
          >
            <Github size={13} /> git clone
          </a>
          <span className="ml-auto text-[11px] text-faint">
            ★ {p.metrics.stars} · ⑂ {p.metrics.forks}
          </span>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState('--all');
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const visible = filter === '--all' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="03"
          command="ls -la ~/projects --featured --sort=impact"
          title="FEATURED PROJECTS"
          subtitle="6 repositories, battle-tested in production. Click any window to open its README."
        />

        {/* filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-[12px] text-faint mr-2">filter:</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded text-[12px] border transition-all ${
                filter === f
                  ? 'border-neon/50 bg-neon/10 text-neon shadow-[0_0_16px_rgba(0,255,65,0.15)]'
                  : 'border-neon/10 text-dim hover:text-ink hover:border-neon/25'
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-faint hidden sm:block">
            {visible.length} directories found
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {visible.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} onOpen={() => setSelected(p)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal p={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
