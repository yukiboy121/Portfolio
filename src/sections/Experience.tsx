import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';

const commits = [
  {
    hash: 'a3f8c2d',
    refs: ['HEAD -> main', 'tag: v2024'],
    msg: 'feat: found Rivera Digital Studio',
    role: 'Founder & Creative Director',
    org: 'Rivera Digital Studio',
    period: '2023 — present',
    body: 'Leading a boutique studio shipping premium web experiences for global brands.',
    bullets: ['20+ award-winning sites shipped', 'team of 8 creatives', '$1.2M ARR'],
    accent: '#00ff41',
  },
  {
    hash: '9b41e7a',
    refs: ['tag: v2023'],
    msg: 'feat: lead creative development at Flux',
    role: 'Senior Creative Developer',
    org: 'Flux Agency — NYC',
    period: '2021 — 2023',
    body: 'Led the creative dev team building immersive experiences for Fortune 500 clients.',
    bullets: ['3× Awwwards SOTD', 'mentored 5 juniors', '−60% load times'],
    accent: '#5eead4',
  },
  {
    hash: '4c9d02f',
    refs: [],
    msg: 'feat: scale SaaS from 0 → 50k users',
    role: 'Full Stack Developer',
    org: 'TechNova — Austin',
    period: '2020 — 2021',
    body: 'Core engineer on a SaaS platform. Owned the product from database to pixel.',
    bullets: ['built core architecture', 'CI/CD from scratch', '50k+ MAU'],
    accent: '#fbbf24',
  },
  {
    hash: '1e7a3b9',
    refs: ['init'],
    msg: 'chore: initial commit — first dev role',
    role: 'Frontend Developer',
    org: 'PixelCraft Studios — remote',
    period: '2019 — 2020',
    body: 'Where it all started. Responsive interfaces, interactive UIs, endless curiosity.',
    bullets: ['15+ client projects', 'modern frameworks', 'first Awwwards mention'],
    accent: '#a3e635',
  },
];

const certs = [
  { key: 'AWS-2023', name: 'Solutions Architect', issuer: 'Amazon Web Services' },
  { key: 'GUX-2022', name: 'Google UX Design', issuer: 'Google / Coursera' },
  { key: 'RJS-2023', name: 'Three.js Journey', issuer: 'Bruno Simon' },
  { key: 'ARP-2022', name: 'Advanced React Patterns', issuer: 'Frontend Masters' },
];

const CommitRow = ({ c, index }: { c: (typeof commits)[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 md:pl-14"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {/* graph node */}
      <div className="absolute left-0 md:left-3 top-1 flex flex-col items-center">
        <span
          className="text-[16px] leading-none"
          style={{ color: c.accent, textShadow: `0 0 10px ${c.accent}80` }}
        >
          ●
        </span>
      </div>

      <div className="panel panel-hover brackets p-5 md:p-6 mb-6">
        {/* commit header */}
        <div className="flex flex-wrap items-center gap-2 mb-2 text-[12px]">
          <span className="font-semibold" style={{ color: c.accent }}>
            {c.hash}
          </span>
          {c.refs.map((r) => (
            <span key={r} className="px-1.5 py-0.5 rounded text-[10px] border border-amberx/30 text-amberx/90 bg-amberx/5">
              {r}
            </span>
          ))}
          <span className="ml-auto text-faint text-[11px]">{c.period}</span>
        </div>

        <h3 className="font-display text-lg md:text-xl font-semibold text-ink mb-1">
          <span style={{ color: c.accent }}>❯</span> {c.msg}
        </h3>
        <p className="text-[12px] text-dim mb-3">
          {c.role} <span className="text-faint">@</span> <span className="text-cyanx/80">{c.org}</span>
        </p>
        <p className="text-[12px] text-dim/80 leading-relaxed mb-4">{c.body}</p>

        <div className="flex flex-wrap gap-2">
          {c.bullets.map((b) => (
            <span key={b} className="px-2 py-1 rounded text-[10px] border border-neon/10 bg-elevated/40 text-dim">
              <span style={{ color: c.accent }}>+</span> {b}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-panel/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="04"
          command="git log --career --graph --oneline"
          title="COMMIT HISTORY"
          subtitle="Every role is a commit. Every commit moved the branch forward."
        />

        <div className="grid lg:grid-cols-3 gap-10">
          {/* timeline */}
          <div className="lg:col-span-2 relative">
            {/* graph line */}
            <motion.div
              className="absolute left-[7px] md:left-[19px] top-2 bottom-8 w-[2px] rounded-full"
              style={{ background: 'linear-gradient(to bottom, #00ff41aa, #00ff4122, transparent)', transformOrigin: 'top' }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            {commits.map((c, i) => (
              <CommitRow key={c.hash} c={c} index={i} />
            ))}
          </div>

          {/* signed keys / certs */}
          <div>
            <div className="panel p-5 md:p-6 sticky top-28">
              <p className="text-[12px] text-faint mb-4">
                <span className="text-neon">$</span> gpg --list-keys --trusted
              </p>
              <div className="space-y-3">
                {certs.map((cert, i) => (
                  <motion.div
                    key={cert.key}
                    className="p-3.5 rounded border border-neon/10 bg-elevated/40 hover:border-neon/30 transition-colors brackets"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-neon text-[11px]">⚿</span>
                      <span className="text-[11px] text-faint">{cert.key}</span>
                      <span className="ml-auto text-[9px] text-neon/70 border border-neon/20 rounded px-1">
                        verified
                      </span>
                    </div>
                    <p className="text-[13px] text-ink font-medium">{cert.name}</p>
                    <p className="text-[11px] text-dim">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 text-[11px] text-faint border-t border-neon/10 pt-4">
                <span className="text-neon/70">✔</span> all commits signed · no force-pushes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
