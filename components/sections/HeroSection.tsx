"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { Badge } from "../ui/Badge";
import { TextReveal } from "../ui/TextReveal";
import { agencyConfig } from "@/data/agency";
import { HeroParticleCanvas } from "@/lib/canvas/heroParticleField";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let canvasInstance: HeroParticleCanvas | null = null;

    try {
      canvasInstance = new HeroParticleCanvas(canvasRef.current);
    } catch (e) {
      console.warn("Canvas particle initialization fallback:", e);
    }

    return () => {
      if (canvasInstance) canvasInstance.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-36 pb-20 overflow-hidden bg-[var(--bg-main)] transition-colors duration-400">
      {/* Background Interactive WebGL Particle Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <canvas ref={canvasRef} className="w-full h-full block opacity-75" />
      </div>

      {/* Ambient Emerald Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00685B]/15 blur-[180px] pointer-events-none rounded-full" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-5xl">
          {/* Badge & Category Teaser */}
          <TextReveal delay={0.1}>
            <div className="flex items-center gap-3">
              <Badge label="Digital Transformation Agency" variant="emerald" />
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--text-secondary)]">
                <Sparkles className="w-3.5 h-3.5 text-[#00685B]" />
                Strategy • Brand • Product • Experience • AI
              </span>
            </div>
          </TextReveal>

          {/* Headline Statement */}
          <TextReveal delay={0.25} className="mt-8">
            <h1 className="text-display-hero font-normal text-[var(--text-primary)] tracking-tight font-sans">
              We design what <br />
              <span className="italic font-serif font-light text-[#00685B]">businesses</span> become next.
            </h1>
          </TextReveal>

          {/* Supporting Copy */}
          <TextReveal delay={0.4} className="mt-8">
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
              {agencyConfig.heroSubheadline}
            </p>
          </TextReveal>

          {/* CTAs */}
          <TextReveal delay={0.55} className="mt-10">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <MagneticButton
                href="/work"
                as="a"
                variant="primary"
                className="px-8 py-4 text-xs font-mono font-bold"
              >
                <span>Explore our work</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href="#showreel"
                as="a"
                variant="outline"
                className="px-8 py-4 text-xs font-mono font-semibold"
              >
                <Play className="w-3.5 h-3.5 text-[#00685B]" />
                <span>Watch 2026 Reel</span>
              </MagneticButton>
            </div>
          </TextReveal>

          {/* Bottom Live Scroll Indicator & Stats Preview */}
          <div className="mt-20 pt-10 border-t border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-4 gap-6 text-[var(--text-secondary)] font-mono text-xs">
            <div>
              <span className="block text-[var(--text-primary)] font-bold text-base md:text-xl">+148%</span>
              <span className="text-[var(--text-muted)] font-medium">Avg. Conversion Lift</span>
            </div>
            <div>
              <span className="block text-[var(--text-primary)] font-bold text-base md:text-xl">18M+</span>
              <span className="text-[var(--text-muted)] font-medium">Daily Product Users</span>
            </div>
            <div>
              <span className="block text-[var(--text-primary)] font-bold text-base md:text-xl">&lt;80ms</span>
              <span className="text-[var(--text-muted)] font-medium">Global Edge Latency</span>
            </div>
            <div>
              <span className="block text-[var(--text-primary)] font-bold text-base md:text-xl">42+</span>
              <span className="text-[var(--text-muted)] font-medium">Global Design Awards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
