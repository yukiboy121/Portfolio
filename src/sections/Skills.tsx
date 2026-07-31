import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';

const categories = ['--all', '--frontend', '--backend', '--uiux', '--database', '--cloud', '--tools'];

const skills = [
  { name: 'react', version: '19.0.0', level: 95, cat: '--frontend' },
  { name: 'next.js', version: '15.1.0', level: 92, cat: '--frontend' },
  { name: 'typescript', version: '5.7.0', level: 93, cat: '--frontend' },
  { name: 'tailwindcss', version: '4.0.0', level: 96, cat: '--frontend' },
  { name: 'three.js', version: '0.170.0', level: 78, cat: '--frontend' },
  { name: 'gsap', version: '3.12.5', level: 85, cat: '--frontend' },
  { name: 'framer-motion', version: '11.18.0', level: 90, cat: '--frontend' },
  { name: 'node.js', version: '22.0.0', level: 88, cat: '--backend' },
  { name: 'python', version: '3.13.0', level: 82, cat: '--backend' },
  { name: 'graphql', version: '16.9.0', level: 84, cat: '--backend' },
  { name: 'express', version: '4.21.0', level: 87, cat: '--backend' },
  { name: 'fastapi', version: '0.115.0', level: 76, cat: '--backend' },
  { name: 'figma', version: 'latest', level: 90, cat: '--uiux' },
  { name: 'prototyping', version: 'adv', level: 88, cat: '--uiux' },
  { name: 'design-systems', version: '2.0', level: 86, cat: '--uiux' },
  { name: 'postgresql', version: '17.0', level: 83, cat: '--database' },
  { name: 'mongodb', version: '8.0.0', level: 85, cat: '--database' },
  { name: 'redis', version: '7.4.0', level: 75, cat: '--database' },
  { name: 'aws', version: 'cert', level: 80, cat: '--cloud' },
  { name: 'docker', version: '27.0.0', level: 78, cat: '--cloud' },
  { name: 'vercel', version: 'edge', level: 92, cat: '--cloud' },
  { name: 'git', version: '2.47.0', level: 95, cat: '--tools' },
  { name: 'linux', version: 'kernel', level: 84, cat: '--tools' },
  { name: 'vite', version: '6.0.0', level: 91, cat: '--tools' },
];

const barLen = 18;

const SkillRow = ({ skill, index }: { skill: (typeof skills)[0]; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const filled = Math.round((skill.level / 100) * barLen);
  const bar = '█'.repeat(filled) + '░'.repeat(barLen - filled);

  return (
    <motion.div
      ref={ref}
      className="group panel panel-hover brackets px-4 py-3.5"
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <p className="text-[13px] text-ink group-hover:text-neon transition-colors truncate">
          <span className="text-faint mr-1.5">▸</span>
          {skill.name}
          <span className="text-faint">@</span>
          <span className="text-dim text-[11px]">{skill.version}</span>
        </p>
        <span className="text-[11px] text-neon/80 flex-shrink-0">{skill.level}%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-neon/50 tracking-tighter whitespace-pre font-mono">
          [{bar}]
        </span>
        {inView && (
          <motion.span
            className="text-[10px] text-neon ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.04 }}
          >
            ✔ installed
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [active, setActive] = useState('--all');
  const filtered = active === '--all' ? skills : skills.filter((s) => s.cat === active);

  return (
    <section id="skills" className="relative py-28 md:py-36">
      {/* ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-panel/40 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-neon/[0.03] blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          index="02"
          command="npm install --global my_skills"
          title="TECH STACK"
          subtitle="24 packages installed globally. Zero vulnerabilities. Constantly updating."
        />

        {/* category flags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3.5 py-1.5 rounded text-[12px] border transition-all ${
                active === cat
                  ? 'border-neon/50 bg-neon/10 text-neon shadow-[0_0_16px_rgba(0,255,65,0.15)]'
                  : 'border-neon/10 text-dim hover:text-ink hover:border-neon/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* install log header */}
        <div className="flex items-center justify-between mb-4 text-[11px] text-faint">
          <span>
            <span className="text-neon/60">$</span> npm i -g {active === '--all' ? '*' : active.slice(2)}
            <span className="block-cursor" />
          </span>
          <span className="hidden sm:block">
            {filtered.length} packages · <span className="text-neon/70">0 deprecated</span>
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((skill, i) => (
              <SkillRow key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* footer log line */}
        <motion.p
          className="mt-8 text-[12px] text-faint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-neon/60">✔</span> added {filtered.length} packages in{' '}
          <span className="text-dim">1.2s</span> — audit <span className="text-neon/70">passed</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
