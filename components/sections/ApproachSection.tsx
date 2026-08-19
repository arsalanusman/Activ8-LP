"use client";

import { useState, useEffect, useRef } from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";

export function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = Number(entry.target.getAttribute("data-step-index"));
          if (!isNaN(stepIndex)) {
            setActiveStep(stepIndex);
          }
        }
      });
    }, observerOptions);

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    const target = stepRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="approach" className="py-28 md:py-40 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative transition-colors duration-400">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badgeLabel="Methodology & Process"
          headline="From first question to lasting impact."
          subheadline="A structured six-phase framework that eliminates ambiguity and ensures predictable excellence from inception to launch."
          className="mb-20"
        />

        {/* Desktop Sticky Split-Scroll Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">
          {/* Sticky Left Pin Column Wrapper - Stretches full height of grid */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 self-start space-y-8 bg-[var(--bg-card)] p-8 md:p-10 rounded-2xl border border-[var(--border-subtle)] premium-card shadow-2xl">
              <div className="text-xs font-mono text-[#00685B] uppercase tracking-widest font-bold">
                Phase Progression
              </div>

              <div className="min-h-[110px] space-y-3 transition-all duration-300">
                <h3 className="text-3xl font-normal text-[var(--text-primary)] tracking-tight font-sans">
                  {processSteps[activeStep].number} — {processSteps[activeStep].phase}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm font-normal leading-relaxed">
                  {processSteps[activeStep].title}
                </p>
              </div>

              {/* Quick Step Indicators */}
              <div className="space-y-2.5 pt-6 border-t border-[var(--border-subtle)] font-mono text-xs">
                {processSteps.map((step, idx) => (
                  <button
                    key={step.number}
                    onClick={() => handleStepClick(idx)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 text-left font-medium cursor-pointer ${
                      activeStep === idx
                        ? "bg-[#00685B]/15 border-[#00685B] text-[var(--text-primary)] shadow-md font-bold"
                        : "bg-white/5 dark:bg-white/5 light:bg-black/5 border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/10"
                    }`}
                  >
                    <span>{step.number} {step.phase}</span>
                    {activeStep === idx && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00685B] emerald-glow" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Scrollable Cards (Phase 01 through Phase 06 Evolve) */}
          <div className="lg:col-span-7 space-y-12 pb-12">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                ref={(el) => { stepRefs.current[idx] = el; }}
                data-step-index={idx}
                className="scroll-mt-36"
              >
                <TextReveal delay={0.05}>
                  <div
                    className={`p-8 sm:p-10 rounded-2xl border transition-all duration-500 premium-card ${
                      activeStep === idx
                        ? "bg-[var(--bg-card)] border-[#00685B]/60 shadow-2xl scale-[1.01]"
                        : "bg-[var(--bg-card)]/60 border-[var(--border-subtle)] hover:border-[#00685B]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-4">
                      <span className="text-[#00685B] font-bold">PHASE {step.number}</span>
                      <span className="text-[var(--text-muted)] uppercase font-semibold">{step.phase}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-normal text-[var(--text-primary)] tracking-tight mb-4 font-sans">
                      {step.title}
                    </h3>

                    <p className="text-base text-[var(--text-secondary)] font-normal leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="pt-6 border-t border-[var(--border-subtle)]">
                      <p className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold mb-3">
                        Key Deliverables
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-[var(--text-primary)] font-medium">
                        {step.deliverables.map((deliv) => (
                          <li key={deliv} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#00685B] shrink-0" />
                            <span className="text-[var(--text-primary)]">{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TextReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
