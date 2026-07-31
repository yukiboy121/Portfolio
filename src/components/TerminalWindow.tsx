import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  delay?: number;
}

/** Reusable terminal / editor window frame. */
const TerminalWindow = ({
  title = 'alex@dev: ~',
  children,
  className = '',
  bodyClassName = '',
  delay = 0,
}: TerminalWindowProps) => {
  return (
    <motion.div
      className={`panel overflow-hidden panel-hover ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neon/10 bg-elevated/60">
        <span className="w-2.5 h-2.5 rounded-full bg-redx/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amberx/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-neon/70" />
        <span className="ml-3 text-[11px] text-dim truncate">{title}</span>
        <span className="ml-auto text-[10px] text-faint hidden sm:block">bash — 80×24</span>
      </div>
      <div className={`p-5 md:p-6 ${bodyClassName}`}>{children}</div>
    </motion.div>
  );
};

export default TerminalWindow;
