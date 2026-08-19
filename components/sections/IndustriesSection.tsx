"use client";

import { useState } from "react";
import Image from "next/image";
import { industriesData } from "@/data/industries";
import { SectionHeading } from "../ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export function IndustriesSection() {
  const [activeIndustryId, setActiveIndustryId] = useState(industriesData[0].id);

  const activeIndustry = industriesData.find((ind) => ind.id === activeIndustryId) || industriesData[0];

  return (
    <section id="industries" className="py-28 md:py-40 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative transition-colors duration-400">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badgeLabel="Domain Expertise"
          headline="Experience across high-stakes industries."
          subheadline="Bespoke digital product strategy tailored to complex regulatory environments, high-volume transactions, and demanding user expectations."
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Industry Interactive List */}
          <div className="lg:col-span-6 space-y-4">
            {industriesData.map((ind) => {
              const isActive = activeIndustryId === ind.id;

              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveIndustryId(ind.id)}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 cursor-pointer premium-card ${
                    isActive
                      ? "bg-[var(--bg-card)] border-[#00685B]/50 text-[var(--text-primary)] shadow-xl"
                      : "bg-[var(--bg-card)]/50 border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl sm:text-3xl font-normal tracking-tight font-sans text-[var(--text-primary)]">
                      {ind.name}
                    </h3>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform ${
                        isActive ? "text-[#00685B] rotate-45 scale-110" : "text-[var(--text-muted)]"
                      }`}
                    />
                  </div>
                  {isActive && (
                    <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                      {ind.tagline}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Backdrop Visual Display */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] premium-card">
              <Image
                src={activeIndustry.image}
                alt={activeIndustry.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/40 to-transparent" />

              {/* Overlay Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-[var(--bg-main)]/90 backdrop-blur-md border border-[var(--border-subtle)] space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                  {activeIndustry.name} Track Record
                </span>
                <p className="text-xl sm:text-2xl font-normal text-[var(--text-primary)] font-sans">
                  {activeIndustry.stats}
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal">
                  {activeIndustry.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
