"use client";

import { Badge } from "../ui/Badge";
import { TextReveal } from "../ui/TextReveal";

export function AgencyIntro() {
  return (
    <section className="py-28 md:py-40 bg-[var(--bg-main)] border-b border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-400">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Label */}
          <div className="lg:col-span-4 space-y-6">
            <TextReveal delay={0.1}>
              <Badge label="What We Do" variant="emerald" />
            </TextReveal>
            <TextReveal delay={0.2}>
              <h3 className="text-xl sm:text-2xl font-normal text-[var(--text-secondary)] tracking-tight max-w-sm">
                Strategy, creative direction, product design, engineering and AI—united under one senior team.
              </h3>
            </TextReveal>
          </div>

          {/* Right Column Editorial Statement */}
          <div className="lg:col-span-8 space-y-8">
            <TextReveal delay={0.3}>
              <h2 className="text-display-section font-normal text-[var(--text-primary)] tracking-tight leading-none">
                We turn complex business challenges into simple, <span className="text-[#00685B] font-semibold">distinctive digital experiences</span>.
              </h2>
            </TextReveal>

            <TextReveal delay={0.4}>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-3xl">
                We don't simply make websites. We partner with visionaries, industry leaders, and high-growth enterprises to define what they should build, create memorable brands, design digital products, and scale technology architectures that move markets.
              </p>
            </TextReveal>

            {/* Core Capability Pillars Overview */}
            <TextReveal delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--border-subtle)] font-mono text-xs text-[var(--text-secondary)]">
                <div className="space-y-1">
                  <span className="text-[#00685B] font-bold block">01 / STRATEGY</span>
                  <p className="text-[var(--text-secondary)] font-sans text-sm font-medium">Vision & Roadmap</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#00685B] font-bold block">02 / BRAND</span>
                  <p className="text-[var(--text-secondary)] font-sans text-sm font-medium">Identity & Systems</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#00685B] font-bold block">03 / PRODUCT</span>
                  <p className="text-[var(--text-secondary)] font-sans text-sm font-medium">UX/UI & Platforms</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#00685B] font-bold block">04 / EXPERIENCE</span>
                  <p className="text-[var(--text-secondary)] font-sans text-sm font-medium">Commerce & Content</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#00685B] font-bold block">05 / TECH</span>
                  <p className="text-[var(--text-secondary)] font-sans text-sm font-medium">Cloud & Frontend</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[#00685B] font-bold block">06 / AI</span>
                  <p className="text-[var(--text-secondary)] font-sans text-sm font-medium">Intelligent Workflows</p>
                </div>
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
