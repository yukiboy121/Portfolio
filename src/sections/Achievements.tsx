import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import { useCounter } from '../hooks/useCounter';

const counters = [
  { end: 12, suffix: '', label: 'awards.exe', accent: '#fbbf24' },
  { end: 50, suffix: '+', label: 'projects_shipped', accent: '#00ff41' },
  { end: 99, suffix: '%', label: 'client_satisfaction', accent: '#5eead4' },
  { end: 3, suffix: '×', label: 'awwwards_sotd', accent: '#a3e635' },
];

const badges = [
  { icon: '🏆', title: 'Site of the Day', from: 'Awwwards', year: '2024', rarity: 'LEGENDARY' },
  { icon: '⭐', title: 'Developer Award', from: 'Awwwards', year: '2023', rarity: 'EPIC' },
  { icon: '🎨', title: 'Best UI Design', from: 'CSS Design Awards', year: '2023', rarity: 'EPIC' },
  { icon: '💡', title: 'Innovation Award', from: 'FWA', year: '2023', rarity: 'RARE' },
  { icon: '🏅', title: 'Honorable Mention', from: 'Awwwards', year: '2022', rarity: 'RARE' },
  { icon: '✨', title: 'Best Portfolio', from: 'Godly.website', year: '2024', rarity: 'LEGENDARY' },
];

const rarityColor: Record<string, string> = {
  LEGENDARY: '#fbbf24',
  EPIC: '#5eead4',
  RARE: '#a3e635',
};

const CounterRow = ({ c, index }: { c: (typeof counters)[0]; index: number }) => {
  const { count, ref } = useCounter(c.end, 2200);
  const { ref: barRef, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div ref={ref} className="panel panel-hover brackets p-5">
      <div ref={barRef} className="flex items-baseline justify-between mb-1">
        <p className="text-[11px] text-faint">
          <span style={{ color: c.accent }}>$</span> {c.label}
        </p>
        <p className="font-display text-3xl md:text-4xl font-bold" style={{ color: c.accent, textShadow: `0 0 16px ${c.accent}50` }}>
          {count}
          {c.suffix}
        </p>
      </div>
      <div className="h-1.5 rounded-full bg-elevated overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: c.accent, boxShadow: `0 0 8px ${c.accent}80` }}
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : {}}
          transition={{ duration: 1.6, delay: 0.2 + index * 0.1 }}
        />
      </div>
      <p className="mt-2 text-[10px] text-faint">
        [{index + 1}/4] downloaded <span style={{ color: c.accent }}>✔</span>
      </p>
    </div>
  );
};

const Achievements = () => {
  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-panel/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="07"
          command="sudo apt list --unlocked-achievements"
          title="ACHIEVEMENTS UNLOCKED"
          subtitle="Trophies collected along the way. Password required: none — they're public record."
        />

        {/* counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {counters.map((c, i) => (
            <CounterRow key={c.label} c={c} index={i} />
          ))}
        </div>

        {/* badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map((b, i) => {
            const rc = rarityColor[b.rarity];
            return (
              <motion.div
                key={b.title}
                className="panel panel-hover brackets p-5 flex items-center gap-4 group"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <motion.span
                  className="text-3xl flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  {b.icon}
                </motion.span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-ink font-semibold truncate">{b.title}</p>
                  <p className="text-[11px] text-dim">{b.from} · {b.year}</p>
                </div>
                <span
                  className="text-[9px] font-bold tracking-widest px-1.5 py-1 rounded border flex-shrink-0"
                  style={{ color: rc, borderColor: `${rc}40`, background: `${rc}0d` }}
                >
                  {b.rarity}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
