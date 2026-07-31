import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GlitchText from './GlitchText';

interface SectionHeadingProps {
  index: string;
  command: string;
  title: string;
  subtitle?: string;
}

/** Terminal-style section heading: comment, command prompt, big scramble title. */
const SectionHeading = ({ index, command, title, subtitle }: SectionHeadingProps) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="mb-14 md:mb-20">
      <motion.p
        className="text-[12px] text-faint mb-3 tracking-wider"
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-neon/50">//</span> section_{index}
      </motion.p>

      <motion.p
        className="text-[13px] md:text-[14px] text-dim mb-4"
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <span className="text-neon">$</span> {command}
        <span className="block-cursor" />
      </motion.p>

      <h2
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.02]"
      >
        <GlitchText text={title} />
      </h2>

      {subtitle && (
        <motion.p
          className="mt-5 text-dim text-[14px] md:text-[15px] max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
