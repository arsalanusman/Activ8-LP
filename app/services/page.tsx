"use client";

import { servicesData } from "@/data/services";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { TextReveal } from "@/components/ui/TextReveal";
import { AISandboxCanvas } from "@/components/ui/AISandboxCanvas";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[var(--bg-main)] text-current relative">
        <Header />

        {/* Hero */}
        <section className="pt-36 pb-20 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
            <TextReveal delay={0.1}>
              <Badge label="Services & AI Practice" variant="emerald" />
            </TextReveal>

            <TextReveal delay={0.2}>
              <h1 className="text-display-hero font-light text-current tracking-tight">
                Capabilities built for <br />
                <span className="italic font-serif font-light text-[#00685B]">digital transformation.</span>
              </h1>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-xl text-neutral-500 dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
                We unite strategy, creative direction, product design, frontend/backend engineering, and generative AI features into one senior delivery engine.
              </p>
            </TextReveal>
          </div>
        </section>

        {/* AI Interactive Sandbox Section */}
        <section className="py-20 bg-[var(--bg-surface)] border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
            <div className="max-w-3xl space-y-4">
              <Badge label="Interactive Technology Practice" variant="emerald" />
              <h2 className="text-display-section font-light text-current tracking-tight">
                AI & Neural UI Sandbox
              </h2>
              <p className="text-base text-neutral-500 font-light leading-relaxed">
                Experiment with Activ8's live neural UI physics simulation engine. Toggle modes and adjust node parameters below.
              </p>
            </div>

            <AISandboxCanvas />
          </div>
        </section>

        {/* Full Services Breakdown */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-20">
            {servicesData.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-white/10 dark:border-white/10 light:border-black/10 space-y-8 premium-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 dark:border-white/10 light:border-black/10 pb-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl font-bold text-[#00685B]">
                      {service.number}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-light text-current">
                      {service.title}
                    </h2>
                  </div>
                  <Badge label={service.tagline} variant="emerald" />
                </div>

                <p className="text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-3xl">
                  {service.description}
                </p>

                <div className="space-y-4 pt-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                    Core Capabilities & Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm font-light text-neutral-600 dark:text-neutral-300">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2.5 bg-white/5 dark:bg-white/5 light:bg-black/5 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-[#00685B] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#050507] text-white">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-light tracking-tight">
                Need a custom capability audit?
              </h3>
              <p className="text-sm text-neutral-400 font-mono mt-2">
                We design tailored team pods for global transformation projects.
              </p>
            </div>
            <MagneticButton href="/contact" as="a" variant="primary" className="px-8 py-4 text-xs font-mono font-bold">
              <span>Schedule Capability Audit</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
