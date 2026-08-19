"use client";

import { ArrowRight, Mail } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { Badge } from "../ui/Badge";
import { TextReveal } from "../ui/TextReveal";
import { agencyConfig } from "@/data/agency";

export function FinalCTA() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[var(--bg-main)] relative overflow-hidden transition-colors duration-400">
      {/* Ambient Emerald Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00685B]/20 blur-[190px] pointer-events-none rounded-full" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <TextReveal delay={0.1}>
            <div className="flex justify-center">
              <Badge label="Start A Conversation" variant="emerald" />
            </div>
          </TextReveal>

          <TextReveal delay={0.25}>
            <h2 className="text-display-hero font-normal text-[var(--text-primary)] tracking-tight font-sans">
              Have a problem <br />
              <span className="italic font-serif font-light text-[#00685B]">worth solving?</span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.4}>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mx-auto">
              Tell us what you're trying to change. We'll help you figure out what's possible.
            </p>
          </TextReveal>

          <TextReveal delay={0.55}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <MagneticButton
                href={`mailto:${agencyConfig.contactEmail}`}
                as="a"
                variant="primary"
                className="px-10 py-5 text-sm font-mono font-bold"
              >
                <span>Start a conversation</span>
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>

              <a
                href={`mailto:${agencyConfig.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[#00685B] transition-colors py-3 font-semibold"
              >
                <Mail className="w-4 h-4 text-[#00685B]" />
                <span>{agencyConfig.contactEmail}</span>
              </a>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
