import { motion } from 'framer-motion';

const items = ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE', 'THREE.JS', 'GSAP', 'TAILWIND', 'PYTHON', 'GRAPHQL', 'AWS', 'DOCKER', 'FIGMA'];

const MarqueeSection = () => {
  return (
    <div className="py-14 md:py-20 overflow-hidden border-y border-neon/8 bg-panel/30">
      {/* top line */}
      <div className="flex overflow-hidden mb-3">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        >
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-4xl md:text-6xl font-bold tracking-tight text-transparent hover:text-neon/20 transition-colors duration-500 cursor-default"
                style={{ WebkitTextStroke: '1px rgba(0,255,65,0.28)' }}
              >
                {item}
              </span>
              <span className="text-neon/40 text-xl">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* bottom line — reversed, dimmer */}
      <div className="flex overflow-hidden opacity-40">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
        >
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-[12px] text-faint tracking-[0.3em]">{`[ ${item} ]`}</span>
              <span className="text-neon/20">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSection;
