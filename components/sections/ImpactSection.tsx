"use client";

import { impactMetrics } from "@/data/metrics";
import { SectionHeading } from "../ui/SectionHeading";
import { TextReveal } from "../ui/TextReveal";

export function ImpactSection() {
  return (
    <section className="py-28 md:py-40 bg-[var(--bg-main)] border-b border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-400">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00685B]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badgeLabel="Selected Impact"
          headline="Beautiful is only the beginning."
          subheadline="We measure our craft by the tangible, long-term business outcomes we generate for our clients."
          className="mb-20"
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, idx) => (
            <TextReveal key={metric.label} delay={idx * 0.1}>
              <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#00685B] transition-colors duration-300 group space-y-4 premium-card">
                <div className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                  {metric.category}
                </div>
                <div className="text-5xl sm:text-6xl font-normal tracking-tight text-[var(--text-primary)] group-hover:text-[#00685B] transition-colors duration-300 font-sans">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-[var(--text-primary)]">
                  {metric.label}
                </div>
                <p className="text-sm font-normal text-[var(--text-secondary)] leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
