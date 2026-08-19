"use client";

import { useState, useRef, ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  cursorText?: string;
}

export function SpotlightCard({
  children,
  className,
  onClick,
  cursorText = "VIEW",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-cursor="view"
      data-cursor-text={cursorText}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-[var(--bg-card)] transition-all duration-500 premium-card group cursor-pointer",
        className
      )}
    >
      {/* Mouse Radial Emerald Spotlight Halo */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 104, 91, 0.22), transparent 80%)`,
          }}
        />
      )}

      {children}
    </div>
  );
}
