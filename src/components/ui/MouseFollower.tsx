"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 30, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 30, mass: 0.5 });
  const dotX = useSpring(cursorX, { stiffness: 400, damping: 25, mass: 0.2 });
  const dotY = useSpring(cursorY, { stiffness: 400, damping: 25, mass: 0.2 });
  const hovering = useRef(false);
  const visible = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible.current) visible.current = true;
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovering.current =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a") ||
        !!t.closest("button") ||
        !!t.closest('[role="button"]');
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering.current ? 48 : 28,
          height: hovering.current ? 48 : 28,
          border: "1px solid rgba(124, 109, 255, 0.3)",
          backgroundColor: hovering.current
            ? "rgba(124, 109, 255, 0.06)"
            : "transparent",
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 25 },
          height: { type: "spring", stiffness: 300, damping: 25 },
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 4,
          height: 4,
        }}
        animate={{
          scale: hovering.current ? 1.6 : 1,
          opacity: visible.current ? 1 : 0,
        }}
      />
    </>
  );
}
