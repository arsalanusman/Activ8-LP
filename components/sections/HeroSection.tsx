"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, Star, Sparkles, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { Badge } from "../ui/Badge";
import { TextReveal } from "../ui/TextReveal";
import { agencyConfig } from "@/data/agency";
import { Hero3DMeshCanvas } from "@/lib/canvas/hero3DMeshCanvas";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;
    let canvasInstance: Hero3DMeshCanvas | null = null;
    try {
      canvasInstance = new Hero3DMeshCanvas(canvasRef.current);
    } catch (e) {
      console.warn("Canvas 3D Mesh fallback:", e);
    }
    return () => {
      if (canvasInstance) canvasInstance.destroy();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    setMousePos({
      x: (clientX / window.innerWidth - 0.5) * 25,
      y: (clientY / window.innerHeight - 0.5) * 25,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 overflow-hidden bg-[var(--bg-main)] transition-colors duration-400 select-none"
    >
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden opacity-5">
        <span className="text-[26vw] font-black tracking-tighter text-current uppercase font-sans leading-none select-none">
          ACTIV8
        </span>
      </div>

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] bg-gradient-to-tr from-[#00685B]/25 via-emerald-500/15 to-cyan-400/20 blur-[230px] pointer-events-none rounded-full transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-center space-y-10">
        
        <TextReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00685B]/10 border border-[#00685B]/30 text-xs font-mono font-bold text-[var(--text-primary)] shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00685B]" />
              </span>
              <span className="text-[#00685B] uppercase tracking-wider">AVAILABLE FOR Q3/Q4 PROJECTS</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[var(--border-subtle)] text-xs font-mono">
              <div className="flex -space-x-2">
                <img className="w-6 h-6 rounded-full border border-[var(--bg-main)] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Client 1" />
                <img className="w-6 h-6 rounded-full border border-[var(--bg-main)] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Client 2" />
                <img className="w-6 h-6 rounded-full border border-[var(--bg-main)] object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" alt="Client 3" />
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
              </div>
              <span className="text-[var(--text-secondary)] font-medium">Trusted by 100+ Enterprise Leaders</span>
            </div>
          </div>
        </TextReveal>

        <TextReveal delay={0.25}>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal text-[var(--text-primary)] tracking-tight font-sans max-w-6xl mx-auto leading-[1.02]">
            Designing the next layer of digital fusion{" "}
            <span className="italic font-serif font-light bg-gradient-to-r from-[#00685B] via-emerald-400 to-teal-300 bg-clip-text text-transparent block sm:inline">
              where thought becomes reality.
            </span>
          </h1>
        </TextReveal>

        <TextReveal delay={0.4}>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mx-auto">
            {agencyConfig.heroSubheadline}
          </p>
        </TextReveal>

        <TextReveal delay={0.55}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
            <MagneticButton
              href="/work"
              as="a"
              variant="primary"
              className="px-10 py-5 text-xs font-mono font-bold tracking-wider uppercase shadow-2xl hover:shadow-[#00685B]/40"
            >
              <span>Explore Our Vision</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </MagneticButton>

            <MagneticButton
              href="#showreel"
              as="a"
              variant="outline"
              className="px-9 py-4.5 text-xs font-mono font-semibold"
            >
              <Play className="w-4 h-4 text-[#00685B]" />
              <span>Watch 2026 Showreel</span>
            </MagneticButton>
          </div>
        </TextReveal>

        <TextReveal delay={0.65}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left max-w-6xl mx-auto">
            
            <a href="#showreel" className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 flex flex-col justify-between premium-card cursor-pointer shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85"
                alt="2026 Agency Showreel"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              <div className="relative z-20 flex justify-between items-start font-mono text-xs">
                <span className="bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-white font-bold uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  2026 SHOWREEL
                </span>
                <span className="text-white/90 font-bold">01:42</span>
              </div>

              <div className="relative z-20 space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Where Thought Becomes Design
                </p>
                <h3 className="text-xl font-normal text-white font-sans flex items-center justify-between">
                  <span>Interactive Brand Experience</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-emerald-400" />
                </h3>
              </div>
            </a>

            <a href="/work/nike-nextgen-commerce" className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 flex flex-col justify-between premium-card cursor-pointer shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85"
                alt="Nike NextGen Commerce"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              <div className="relative z-20 flex justify-between items-start font-mono text-xs">
                <span className="bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-white font-bold uppercase">
                  NIKE DIGITAL
                </span>
                <span className="bg-[#00685B] text-white px-2.5 py-0.5 rounded-full font-bold">
                  +148% LIFT
                </span>
              </div>

              <div className="relative z-20 space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Headless Flagship Platform
                </p>
                <h3 className="text-xl font-normal text-white font-sans flex items-center justify-between">
                  <span>NextGen Commerce Engine</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-emerald-400" />
                </h3>
              </div>
            </a>

            <a href="/work/veloce-ai-platform" className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 flex flex-col justify-between premium-card cursor-pointer shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85"
                alt="Veloce AI Workspace"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

              <div className="relative z-20 flex justify-between items-start font-mono text-xs">
                <span className="bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-white font-bold uppercase">
                  VELOCE ENTERPRISE
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                  AI COPILOT
                </span>
              </div>

              <div className="relative z-20 space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Autonomous Intelligence
                </p>
                <h3 className="text-xl font-normal text-white font-sans flex items-center justify-between">
                  <span>Enterprise AI Workspace</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-emerald-400" />
                </h3>
              </div>
            </a>

          </div>
        </TextReveal>
      </div>

      <div className="relative z-10 mt-16 pt-8 border-t border-[var(--border-subtle)] max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <p className="text-center font-mono text-xs text-[var(--text-muted)] font-semibold uppercase tracking-widest mb-6">
          Loved by 100+ global brands and category disruptors
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 font-mono text-xs font-bold text-[var(--text-secondary)] opacity-85">
          <span className="hover:text-[#00685B] transition-colors tracking-widest">▲ NIKE DIGITAL</span>
          <span className="hover:text-[#00685B] transition-colors tracking-widest">▲ AUDEMARS PIGUET</span>
          <span className="hover:text-[#00685B] transition-colors tracking-widest">▲ RIMOWA CONNECTED</span>
          <span className="hover:text-[#00685B] transition-colors tracking-widest">▲ SONY AUDIO 360</span>
          <span className="hover:text-[#00685B] transition-colors tracking-widest">▲ VELOCE AI</span>
        </div>
      </div>
    </section>
  );
}