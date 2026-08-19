"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "drag">("default");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      const cursorTextAttr = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

      if (cursorTextAttr) {
        setCursorText(cursorTextAttr);
        setCursorState("view");
      } else if (cursorAttr === "view") {
        setCursorState("view");
        setCursorText("VIEW");
      } else if (cursorAttr === "drag") {
        setCursorState("drag");
        setCursorText("DRAG");
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorState("hover");
        setCursorText("");
      } else {
        setCursorState("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-colors duration-200"
      animate={{
        x: position.x - (cursorState === "view" || cursorState === "drag" ? 44 : cursorState === "hover" ? 24 : 8),
        y: position.y - (cursorState === "view" || cursorState === "drag" ? 44 : cursorState === "hover" ? 24 : 8),
        width: cursorState === "view" || cursorState === "drag" ? 88 : cursorState === "hover" ? 48 : 16,
        height: cursorState === "view" || cursorState === "drag" ? 88 : cursorState === "hover" ? 48 : 16,
        backgroundColor:
          cursorState === "view" || cursorState === "drag"
            ? "#00685B"
            : cursorState === "hover"
            ? "rgba(0, 104, 91, 0.2)"
            : "rgba(0, 104, 91, 0.85)",
        borderColor: cursorState === "hover" ? "#00685B" : "rgba(0, 104, 91, 0)",
        borderWidth: cursorState === "hover" ? 1.5 : 0,
      }}
      transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.2 }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[11px] font-mono font-bold tracking-widest text-white uppercase text-center"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
