"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { TextReveal } from "@/components/ui/TextReveal";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { agencyConfig } from "@/data/agency";
import { ArrowRight, CheckCircle2, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [projectType, setProjectType] = useState<string>("Digital Product");
  const [budget, setBudget] = useState<string>("$100k - $250k");
  const [timeline, setTimeline] = useState<string>("3 - 4 Months");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const projectOptions = ["Digital Product", "Brand Identity", "AI Systems", "Flagship Web", "Full Rebrand"];
  const budgetOptions = ["$50k - $100k", "$100k - $250k", "$250k+"];
  const timelineOptions = ["1 - 2 Months", "3 - 4 Months", "5+ Months"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[var(--bg-main)] text-current relative">
        <Header />

        {/* Hero */}
        <section className="pt-36 pb-20 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
            <TextReveal delay={0.1}>
              <Badge label="Start A Conversation" variant="emerald" />
            </TextReveal>

            <TextReveal delay={0.2}>
              <h1 className="text-display-hero font-light text-current tracking-tight">
                Have a problem <br />
                <span className="italic font-serif font-light text-[#00685B]">worth solving?</span>
              </h1>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-xl text-neutral-500 dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
                Tell us about your organization and what you're trying to build. We'll help you evaluate feasibility and timeline options.
              </p>
            </TextReveal>
          </div>
        </section>

        {/* Interactive Brief Builder Form Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Form */}
              <div className="lg:col-span-8">
                {submitted ? (
                  <div className="p-12 rounded-3xl bg-[#00685B]/15 border border-[#00685B] text-center space-y-6">
                    <CheckCircle2 className="w-16 h-16 text-[#00685B] mx-auto" />
                    <h2 className="text-3xl font-light text-current">Project Inquiry Received</h2>
                    <p className="text-base text-neutral-500 font-light max-w-md mx-auto">
                      Thank you for submitting your project brief. A senior strategy partner will review your requirements and reach out within 24 hours.
                    </p>
                    <MagneticButton onClick={() => setSubmitted(false)} variant="outline" className="px-6 py-3 text-xs font-mono">
                      <span>Submit Another Brief</span>
                    </MagneticButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Step 1: Project Type */}
                    <div className="space-y-4">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                        01 / WHAT TYPE OF PROJECT ARE YOU PLANNING?
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {projectOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setProjectType(opt)}
                            className={`px-5 py-3 rounded-xl border text-sm font-mono transition-all cursor-pointer ${
                              projectType === opt
                                ? "bg-[#00685B] border-[#00685B] text-white font-bold"
                                : "bg-white/5 border-white/10 text-neutral-500 hover:text-current"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Budget */}
                    <div className="space-y-4">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                        02 / ESTIMATED BUDGET RANGE (USD)
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {budgetOptions.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setBudget(b)}
                            className={`px-5 py-3 rounded-xl border text-sm font-mono transition-all cursor-pointer ${
                              budget === b
                                ? "bg-[#00685B] border-[#00685B] text-white font-bold"
                                : "bg-white/5 border-white/10 text-neutral-500 hover:text-current"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 3: Timeline */}
                    <div className="space-y-4">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                        03 / DESIRED LAUNCH TIMELINE
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {timelineOptions.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTimeline(t)}
                            className={`px-5 py-3 rounded-xl border text-sm font-mono transition-all cursor-pointer ${
                              timeline === t
                                ? "bg-[#00685B] border-[#00685B] text-white font-bold"
                                : "bg-white/5 border-white/10 text-neutral-500 hover:text-current"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 4: Contact Inputs */}
                    <div className="space-y-6 pt-6 border-t border-white/10">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                        04 / YOUR CONTACT DETAILS
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full p-4 rounded-xl bg-[var(--bg-card)] border border-white/10 text-current text-sm font-mono focus:border-[#00685B] outline-none"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-4 rounded-xl bg-[var(--bg-card)] border border-white/10 text-current text-sm font-mono focus:border-[#00685B] outline-none"
                        />
                      </div>

                      <input
                        type="text"
                        placeholder="Company / Organization Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full p-4 rounded-xl bg-[var(--bg-card)] border border-white/10 text-current text-sm font-mono focus:border-[#00685B] outline-none"
                      />

                      <textarea
                        rows={4}
                        placeholder="Tell us about your project goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 rounded-xl bg-[var(--bg-card)] border border-white/10 text-current text-sm font-mono focus:border-[#00685B] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 rounded-full bg-[#00685B] hover:bg-[#00897B] text-white font-mono text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center gap-2 emerald-glow"
                    >
                      <span>Submit Project Brief</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Right Direct Contact Info */}
              <div className="lg:col-span-4 space-y-8 bg-[var(--bg-card)] p-8 sm:p-10 rounded-3xl border border-white/10 premium-card">
                <div className="space-y-4">
                  <Badge label="Direct Contact" variant="emerald" />
                  <h3 className="text-2xl font-light text-current">Prefer direct email?</h3>
                  <a
                    href={`mailto:${agencyConfig.contactEmail}`}
                    className="text-lg font-mono text-[#00685B] font-bold block hover:underline"
                  >
                    {agencyConfig.contactEmail}
                  </a>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10 text-sm font-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#00685B] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-current block font-mono">New York Headquarters</span>
                      <span className="text-neutral-500">580 Broadway, Soho, New York, NY 10012</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10 text-xs font-mono text-neutral-500">
                  <span className="text-current font-bold uppercase block">CONFIDENTIALITY GUARANTEE</span>
                  <p className="leading-relaxed">
                    All submitted project details are protected under standard mutual NDA guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
