"use client";

import { Cpu, Bot, Sparkles, Network, ArrowRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import { MagneticButton } from "../ui/MagneticButton";
import { TextReveal } from "../ui/TextReveal";
import { AISandboxCanvas } from "../ui/AISandboxCanvas";

export function AISection() {
  const aiPillars = [
    {
      icon: Sparkles,
      title: "Generative Canvas & Interfaces",
      description: "Moving beyond chat textboxes. Designing adaptive UI components that dynamically render based on user intent and real-time data context."
    },
    {
      icon: Bot,
      title: "Autonomous Workflow Agents",
      description: "Architecting multi-step autonomous AI agent systems that automate complex corporate operations and legacy data pipelines."
    },
    {
      icon: Cpu,
      title: "Custom LLM & RAG Integration",
      description: "Fine-tuning domain-specific language models and high-speed vector retrieval databases engineered for enterprise security."
    },
    {
      icon: Network,
      title: "AI Product Strategy & Governance",
      description: "Helping boardrooms evaluate AI opportunities, mitigate hallucination risk, and establish scalable AI product roadmaps."
    }
  ];

  return (
    <section id="ai" className="py-28 md:py-40 bg-[var(--bg-main)] border-b border-[var(--border-subtle)] relative overflow-hidden transition-colors duration-400">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00685B]/15 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        <div className="max-w-4xl space-y-6">
          <TextReveal delay={0.1}>
            <Badge label="AI & Intelligence Practice" variant="emerald" />
          </TextReveal>
          <TextReveal delay={0.2}>
            <h2 className="text-display-section font-normal text-[var(--text-primary)] tracking-tight font-sans">
              AI is changing the interface. <br />
              <span className="text-[#00685B] font-semibold">We're designing what comes next.</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
              Artificial intelligence is rearchitecting how humans interact with software. We help leaders build meaningful AI features that drive genuine productivity and strategic differentiation—not temporary hype.
            </p>
          </TextReveal>
        </div>

        {/* Live Interactive AI Canvas Sandbox Component */}
        <TextReveal delay={0.35}>
          <AISandboxCanvas />
        </TextReveal>

        {/* AI Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {aiPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <TextReveal key={pillar.title} delay={idx * 0.1}>
                <div className="p-8 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#00685B] transition-colors duration-300 group space-y-6 relative overflow-hidden premium-card">
                  <div className="w-12 h-12 rounded-xl bg-[#00685B]/10 border border-[#00685B]/30 flex items-center justify-center text-[#00685B] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#00685B]" />
                  </div>
                  <h3 className="text-2xl font-normal text-[var(--text-primary)] tracking-tight font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-[var(--text-secondary)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </TextReveal>
            );
          })}
        </div>

        {/* AI CTA */}
        <TextReveal delay={0.5} className="mt-8 text-center sm:text-left">
          <MagneticButton
            href="/services#ai"
            as="a"
            variant="primary"
            className="px-8 py-4 text-xs font-mono font-bold"
          >
            <span>Explore our AI capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </TextReveal>
      </div>
    </section>
  );
}
