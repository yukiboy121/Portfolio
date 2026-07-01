"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        !!t.closest("a") ||
        !!t.closest("button"),
      );
    };

    const leave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [visible]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: pos.x - (hovering ? 20 : 5),
        y: pos.y - (hovering ? 20 : 5),
        width: hovering ? 40 : 10,
        height: hovering ? 40 : 10,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.3,
      }}
      style={{
        borderRadius: "50%",
        background: hovering ? "transparent" : "rgba(108, 99, 255, 0.5)",
        border: hovering ? "1px solid rgba(108, 99, 255, 0.4)" : "none",
        mixBlendMode: hovering ? "normal" : "normal",
      }}
    />
  );
}
