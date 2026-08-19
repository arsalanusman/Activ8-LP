"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>("03");

  return (
    <section id="services" className="py-28 md:py-40 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative transition-colors duration-400">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badgeLabel="Services & Capabilities"
          headline="Full-spectrum digital capabilities, built for transformation."
          subheadline="We eliminate the friction between strategy, design, and engineering by delivering all disciplines under one unified studio roof."
          className="mb-20"
        />

        {/* Services Accordion List */}
        <div className="space-y-4">
          {servicesData.map((service) => {
            const isActive = activeId === service.number || activeId === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                className={`group relative rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer premium-card ${
                  isActive
                    ? "bg-[var(--bg-card)] border-[#00685B]/50 shadow-2xl"
                    : "bg-[var(--bg-card)]/60 border-[var(--border-subtle)] hover:border-[#00685B]/30"
                }`}
              >
                {/* Active Emerald Glow Line */}
                {isActive && (
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#00685B] emerald-glow" />
                )}

                <div className="p-8 sm:p-10 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {/* Number & Title */}
                    <div className="flex items-center gap-6">
                      <span
                        className={`font-mono text-xl sm:text-2xl font-bold transition-colors ${
                          isActive ? "text-[#00685B]" : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--text-primary)] font-sans">
                        {service.title}
                      </h3>
                    </div>

                    {/* Tagline Preview */}
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-semibold text-[var(--text-secondary)] max-w-xs hidden sm:block">
                        {service.tagline}
                      </p>
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isActive
                            ? "bg-[#00685B] border-[#00685B] text-white rotate-45 scale-110 emerald-glow"
                            : "bg-white/5 border-[var(--border-subtle)] text-[var(--text-muted)] group-hover:border-[#00685B] group-hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Capability Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-8"
                      >
                        <div className="lg:col-span-6 space-y-4">
                          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="lg:col-span-6">
                          <p className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold mb-4">
                            Core Deliverables
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[var(--text-primary)] font-medium">
                            {service.capabilities.map((cap) => (
                              <li key={cap} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#00685B] shrink-0" />
                                <span className="text-[var(--text-primary)]">{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
