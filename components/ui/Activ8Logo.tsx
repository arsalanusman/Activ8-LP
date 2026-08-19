"use client";

import { cn } from "@/lib/utils";

interface Activ8LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Activ8Logo({ className, iconOnly = false, size = "md" }: Activ8LogoProps) {
  const sizeMap = {
    sm: { icon: "w-6 h-6", text: "text-lg" },
    md: { icon: "w-8 h-8", text: "text-2xl" },
    lg: { icon: "w-12 h-12", text: "text-4xl" },
  };

  return (
    <div className={cn("inline-flex items-center gap-2 select-none group cursor-pointer", className)}>
      {/* Faceted Geometric Triangle Delta Mark */}
      <div className={cn("relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110", sizeMap[size].icon)}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_12px_rgba(0,104,91,0.5)]">
          <defs>
            <linearGradient id="facet1" x1="0%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" stopColor="#004D43" />
              <stop offset="100%" stopColor="#00685B" />
            </linearGradient>
            <linearGradient id="facet2" x1="50%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00897B" />
              <stop offset="100%" stopColor="#00685B" />
            </linearGradient>
            <linearGradient id="facet3" x1="0%" y1="100%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00685B" />
              <stop offset="100%" stopColor="#00897B" />
            </linearGradient>
          </defs>

          {/* Facet Left */}
          <polygon points="50,10 10,90 50,75" fill="url(#facet1)" />
          {/* Facet Right */}
          <polygon points="50,10 50,75 90,90" fill="url(#facet2)" />
          {/* Facet Base Highlight */}
          <polygon points="10,90 50,75 90,90" fill="url(#facet3)" opacity="0.85" />
        </svg>
      </div>

      {/* Wordmark: ctiv8 */}
      {!iconOnly && (
        <span className={cn("font-sans font-black tracking-tight text-current flex items-baseline uppercase", sizeMap[size].text)}>
          <span className="tracking-tighter">ctiv8</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00685B] ml-1 emerald-glow" />
        </span>
      )}
    </div>
  );
}
