"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "center" | "left";
  gradient?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-20 md:mb-24 ${align === "center" ? "text-center" : ""}`}
    >
      <motion.span
        className="inline-block text-[10px] uppercase tracking-[0.3em] font-medium text-text-secondary mb-5 px-5 py-2 rounded-full border border-border bg-surface/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] ${
          gradient ? "text-gradient-primary" : "text-text-primary"
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
