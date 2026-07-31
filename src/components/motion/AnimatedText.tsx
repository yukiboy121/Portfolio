import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.04,
  tag: Tag = "div",
}: AnimatedTextProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const words = text.split(" ");

  return (
    <Tag ref={ref as any} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 3 }}
            animate={
              isInView
                ? { y: "0%", rotate: 0 }
                : { y: "110%", rotate: 3 }
            }
            transition={{
              duration: 0.7,
              delay: delay + i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
