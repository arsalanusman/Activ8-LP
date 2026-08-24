"use client";

import { useState, useRef, ReactNode, MouseEvent } from "react";

interface HeroGlassCardProps {
  children: ReactNode;
  className?: string;
}

export function HeroGlassCard({ children, className = "" }: HeroGlassCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
      className={`relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-xl transition-all duration-300 overflow-hidden premium-card shadow-2xl ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 104, 91, 0.22), transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
}
