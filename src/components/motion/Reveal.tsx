import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
}: RevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const offset = directionMap[direction];

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: offset.y, x: offset.x }}
        animate={
          isInView
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 0, y: offset.y, x: offset.x }
        }
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
