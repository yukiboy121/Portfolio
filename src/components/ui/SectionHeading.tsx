"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : ""}`}>
      <motion.span
        className="inline-block text-[11px] uppercase tracking-[0.25em] font-medium text-text-secondary mb-4 px-4 py-1.5 rounded-full border border-border"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
        <span className="text-primary">.</span>
      </motion.h2>
    </div>
  );
}
