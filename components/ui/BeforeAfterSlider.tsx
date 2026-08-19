"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Legacy UX",
  afterLabel = "Activ8 Redesign",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden select-none border border-[var(--border-subtle)] cursor-ew-resize bg-[var(--bg-card)] premium-card"
    >
      {/* After Image (Full Background) */}
      <Image
        src={afterImage}
        alt={afterLabel}
        fill
        sizes="(max-width: 1200px) 100vw, 80vw"
        className="object-cover"
      />
      <div className="absolute top-4 right-4 bg-[#00685B] text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase shadow-lg z-10">
        {afterLabel}
      </div>

      {/* Before Image (Clipped overlay wrapper) */}
      <div
        className="absolute top-0 bottom-0 left-0 overflow-hidden z-10"
        style={{ width: `${sliderPosition}%` }}
      >
        <div
          className="relative h-full"
          style={{ width: containerWidth ? `${containerWidth}px` : "100%" }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 80vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase border border-white/15 z-20">
        {beforeLabel}
      </div>

      {/* Divider Bar & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-2 border-[#00685B]">
          <MoveHorizontal className="w-5 h-5 text-[#00685B]" />
        </div>
      </div>
    </div>
  );
}
