import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import TerminalWindow from '../components/TerminalWindow';
import { useCounter } from '../hooks/useCounter';

const stats = [
  { end: 5, suffix: '+', label: 'years_uptime', bar: 84 },
  { end: 50, suffix: '+', label: 'projects_compiled', bar: 92 },
  { end: 30, suffix: '+', label: 'clients_connected', bar: 76 },
  { end: 12, suffix: '', label: 'awards_unlocked', bar: 64 },
];

const StatBlock = ({ stat, index }: { stat: (typeof stats)[0]; index: number }) => {
  const { count, ref } = useCounter(stat.end, 2000);
  return (
    <div ref={ref} className="panel panel-hover brackets p-5">
      <p className="text-[11px] text-faint mb-2">
        <span className="text-neon/60">$</span> {stat.label}
      </p>
      <p className="font-display text-3xl md:text-4xl font-bold text-neon term-glow-soft">
        {count}
        {stat.suffix}
      </p>
      <div className="mt-3 h-1 rounded-full bg-elevated overflow-hidden">
        <motion.div
          className="h-full bg-neon/70 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${stat.bar}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="01"
          command="cat /home/alex/about.md"
          title="WHOAMI"
          subtitle="Reading the manual page of a developer who treats code like craft."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* bio terminal */}
          <TerminalWindow title="alex@dev: ~/about.md — vim" delay={0.1}>
            <div className="text-[13px] leading-relaxed space-y-4">
              <p>
                <span className="text-neon">#</span>{' '}
                <span className="text-ink font-semibold text-[15px]">about.md</span>
              </p>
              <p className="text-dim">
                I'm a <span className="text-cyanx">full-stack developer</span> who lives in the
                terminal. For <span className="text-neon">5+ years</span> I've been turning complex
                problems into <span className="text-ink">fast, secure, beautiful</span> systems —
                from real-time fintech dashboards to immersive WebGL experiences.
              </p>
              <p className="text-dim">
                My stack is <span className="text-cyanx">TypeScript-first</span>: React &amp; Next.js
                on the front, Node &amp; Python on the back, deployed on cloud infra I actually
                understand. I care about the details most people never see —{' '}
                <span className="text-ink">bundle size, latency, accessibility, the last 4%.</span>
              </p>
              <p className="text-dim">
                When I'm not shipping, I'm reverse-engineering why things are fast, breaking things
                in CTFs, or writing about the web platform.
              </p>
              {/* fake file meta */}
              <div className="pt-3 border-t border-neon/10 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-faint">
                <span>-- INSERT --</span>
                <span>md</span>
                <span className="text-neon/60">✓ saved</span>
                <span>utf-8[unix]</span>
              </div>
            </div>
          </TerminalWindow>

          {/* config / details */}
          <div className="space-y-8">
            <TerminalWindow title="alex@dev: ~/config.json" delay={0.2}>
              <pre className="text-[13px] leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-faint">{'{'}</span>
                  {'\n  '}<span className="text-cyanx">"name"</span>
                  <span className="text-faint">:</span> <span className="text-amberx">"Alex Rivera"</span>
                  <span className="text-faint">,</span>
                  {'\n  '}<span className="text-cyanx">"role"</span>
                  <span className="text-faint">:</span> <span className="text-amberx">"Full-Stack Developer"</span>
                  <span className="text-faint">,</span>
                  {'\n  '}<span className="text-cyanx">"location"</span>
                  <span className="text-faint">:</span> <span className="text-amberx">"San Francisco, CA"</span>
                  <span className="text-faint">,</span>
                  {'\n  '}<span className="text-cyanx">"focus"</span>
                  <span className="text-faint">: [</span>
                  <span className="text-amberx">"web-perf"</span>
                  <span className="text-faint">,</span> <span className="text-amberx">"security"</span>
                  <span className="text-faint">,</span> <span className="text-amberx">"creative-dev"</span>
                  <span className="text-faint">],</span>
                  {'\n  '}<span className="text-cyanx">"coffee"</span>
                  <span className="text-faint">:</span> <span className="text-neon">Infinity</span>
                  <span className="text-faint">,</span>
                  {'\n  '}<span className="text-cyanx">"available"</span>
                  <span className="text-faint">:</span> <span className="text-neon">true</span>
                  {'\n'}
                  <span className="text-faint">{'}'}</span>
                </code>
              </pre>
            </TerminalWindow>

            {/* stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <StatBlock key={s.label} stat={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
