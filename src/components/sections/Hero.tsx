"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";

function useTypewriter(texts: string[], typingSpeed = 60, deletingSpeed = 30, pauseMs = 2500) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (display.length < current.length) {
            setDisplay(current.slice(0, display.length + 1));
          } else {
            setTimeout(() => setDeleting(true), pauseMs);
          }
        } else {
          if (display.length > 0) {
            setDisplay(display.slice(0, -1));
          } else {
            setDeleting(false);
            setIdx((prev) => (prev + 1) % texts.length);
          }
        }
      },
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, texts, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.6 + i * 0.035,
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const typed = useTypewriter(PERSONAL.role);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e: MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [handleMouse]);

  const headingText = `Hi, I'm ${PERSONAL.name}`;
  const letters = headingText.split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient Glow Orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-100 blur-[160px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(108,99,255,0.08), transparent 70%)",
          top: "20%",
          left: "15%",
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
          transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-100 blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,229,255,0.06), transparent 70%)",
          bottom: "20%",
          right: "15%",
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
          transition: "transform 1s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-100 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.05), transparent 70%)",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
          transition: "transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 container-main text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border text-[12px] text-text-secondary tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Available for projects
          </span>
        </motion.div>

        {/* Main Heading — Letter by Letter */}
        <h1 className="text-[clamp(2.2rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-6">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={
                i >= "Hi, I'm ".length
                  ? "text-gradient-primary"
                  : "text-text-primary"
              }
              style={{ display: "inline-block", whiteSpace: letter === " " ? "pre" : undefined }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter Role */}
        <motion.div
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <span className="text-lg sm:text-xl md:text-2xl font-light text-secondary tracking-wide">
            {typed}
          </span>
          <motion.span
            className="inline-block w-[2px] h-6 sm:h-7 bg-primary ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="max-w-xl mx-auto text-text-secondary text-[15px] sm:text-base leading-relaxed mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.7 }}
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7 }}
        >
          <motion.a
            href="#projects"
            className="group relative px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm font-medium text-white overflow-hidden"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-gradient" style={{ backgroundSize: "200% 200%" }} />
            <span className="relative z-10">View Projects</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm font-medium text-text-primary border border-border hover:border-border-hover hover:bg-surface-hover transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.a>

          <motion.a
            href="#contact"
            className="px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV ↓
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex items-center justify-center gap-10 sm:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.8 }}
        >
          {[
            { value: "10+", label: "Projects" },
            { value: "3+", label: "Years Coding" },
            { value: "5+", label: "Technologies" },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-2xl sm:text-3xl font-bold text-text-primary"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.8 + i * 0.15, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-[11px] sm:text-xs text-text-muted mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-border flex justify-center pt-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-1 rounded-full bg-text-muted"
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
