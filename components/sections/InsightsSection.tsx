"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import { insightsData } from "@/data/insights";
import { SectionHeading } from "../ui/SectionHeading";
import { TextReveal } from "../ui/TextReveal";

export function InsightsSection() {
  return (
    <section id="insights" className="py-28 md:py-40 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative transition-colors duration-400">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badgeLabel="Editorial & Thought Leadership"
          headline="Thinking out loud."
          subheadline="Perspectives on design craftsmanship, digital strategy, AI interfaces, and technology architecture from our senior leadership."
          className="mb-20"
        />

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((article, idx) => (
            <TextReveal key={article.id} delay={idx * 0.15}>
              <article className="group flex flex-col justify-between p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#00685B] transition-colors duration-300 h-full premium-card">
                <div className="space-y-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] font-semibold">
                    <span className="text-[#00685B] uppercase font-bold">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-normal text-[var(--text-primary)] tracking-tight group-hover:text-[#00685B] transition-colors duration-300 leading-snug font-sans">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm sm:text-base font-normal text-[var(--text-secondary)] leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Author & Read Article CTA */}
                <div className="pt-8 mt-8 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)] font-semibold">
                  <span>{article.author}</span>
                  <a
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-[var(--text-primary)] group-hover:text-[#00685B] transition-colors font-bold"
                  >
                    <span>Read</span>
                    <ArrowUpRight className="w-4 h-4 text-[#00685B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
