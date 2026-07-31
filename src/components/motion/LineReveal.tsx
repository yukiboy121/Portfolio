import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface LineRevealProps {
  delay?: number;
  className?: string;
}

export default function LineReveal({ delay = 0, className = "" }: LineRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="h-px bg-[#E6E6E3] w-full origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  );
}
