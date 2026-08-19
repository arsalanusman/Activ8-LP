"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  onClick?: () => void;
  href?: string;
  as?: "button" | "a";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  onClick,
  href,
  as = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.35;
    const y = (e.clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantsStyle = {
    primary: "bg-[#00685B] hover:bg-[#00897B] text-white border border-[#00685B] emerald-glow",
    secondary: "bg-[#0D0D12] dark:bg-white light:bg-[#0D0D12] text-white dark:text-black light:text-white hover:bg-neutral-800 dark:hover:bg-neutral-200 border border-current",
    outline: "bg-transparent text-current border border-current/20 hover:border-[#00685B] hover:bg-[#00685B]/10",
    ghost: "bg-transparent text-current/80 hover:text-current hover:bg-current/5",
  };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.1 }}
      className="inline-block"
      data-cursor="magnetic"
    >
      <Component
        href={href}
        onClick={onClick}
        className={cn(
          "relative inline-flex items-center justify-center px-7 py-4 text-xs font-mono font-semibold tracking-widest uppercase transition-all duration-300 rounded-full select-none cursor-pointer overflow-hidden group",
          variantsStyle[variant],
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-0.5 transition-transform duration-300">
          {children}
        </span>
      </Component>
    </motion.div>
  );
}
