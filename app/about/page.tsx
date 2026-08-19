"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { TextReveal } from "@/components/ui/TextReveal";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Award, Globe, Users, ArrowUpRight } from "lucide-react";
import { agencyConfig } from "@/data/agency";

export default function AboutPage() {
  const [clocks, setClocks] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateClocks = () => {
      const times: Record<string, string> = {};
      agencyConfig.locations.forEach((loc) => {
        times[loc.code] = new Date().toLocaleTimeString("en-US", {
          timeZone: loc.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
      });
      setClocks(times);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 10000);
    return () => clearInterval(interval);
  }, []);

  const leadership = [
    {
      name: "Kaito Tanaka",
      role: "Executive Creative Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      bio: "Former design partner at Fantasy & Instrument with 14 years shaping iconic global brand systems."
    },
    {
      name: "Elena Rostova",
      role: "VP of Product & AI Systems",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      bio: "Pioneering generative interface design and human-centered artificial intelligence workflows."
    },
    {
      name: "Marcus Vance",
      role: "Chief Strategy Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      bio: "Ex-Publicis Sapient enterprise strategist advising Fortune 500 boardrooms on digital transformation."
    }
  ];

  const awards = [
    { year: "2026", title: "Awwwards Site of the Month", category: "Nike NextGen Commerce" },
    { year: "2025", title: "FWA of the Day", category: "Audemars Piguet Spatial Platform" },
    { year: "2025", title: "Webby Award Nominee", category: "Best User Experience Design" },
    { year: "2024", title: "Red Dot Best of the Best", category: "Digital Product Architecture" },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[var(--bg-main)] text-current relative">
        <Header />

        {/* Hero Manifesto */}
        <section className="pt-36 pb-20 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
            <TextReveal delay={0.1}>
              <Badge label="About Activ8" variant="emerald" />
            </TextReveal>

            <TextReveal delay={0.2}>
              <h1 className="text-display-hero font-light text-current tracking-tight">
                Where strategy becomes <br />
                <span className="italic font-serif font-light text-[#00685B]">digital experience.</span>
              </h1>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-xl text-neutral-500 dark:text-neutral-400 font-light max-w-3xl leading-relaxed">
                Activ8 was founded on a simple premise: traditional agencies talk about digital, while software companies struggle with creative brand storytelling. We unite strategy, design, engineering and AI under one roof to build digital products that define categories.
              </p>
            </TextReveal>
          </div>
        </section>

        {/* Leadership Team Grid */}
        <section className="py-20 md:py-32 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
            <div className="max-w-3xl space-y-4">
              <Badge label="Senior Leadership" variant="emerald" />
              <h2 className="text-display-section font-light text-current">
                Led by practitioners, not account executives.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((person) => (
                <div key={person.name} className="space-y-6 group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-white/10 premium-card">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-current">{person.name}</h3>
                    <p className="text-xs font-mono text-[#00685B] uppercase font-bold">{person.role}</p>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Studio Locations */}
        <section className="py-20 md:py-32 bg-[var(--bg-surface)] border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
            <div className="max-w-3xl space-y-4">
              <Badge label="Global Footprint" variant="emerald" />
              <h2 className="text-display-section font-light text-current">
                Three studios, one synchronized team.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {agencyConfig.locations.map((loc) => (
                <div key={loc.code} className="p-8 rounded-2xl bg-[var(--bg-card)] border border-white/10 space-y-4 premium-card">
                  <div className="flex items-center justify-between font-mono text-xs text-[#00685B] font-bold">
                    <span>{loc.code} STUDIO</span>
                    <span className="bg-[#00685B]/15 px-3 py-1 rounded-full">{clocks[loc.code] || "--:--"}</span>
                  </div>
                  <h3 className="text-3xl font-light text-current">{loc.city}</h3>
                  <p className="text-xs text-neutral-500 font-mono">
                    Full-service product, design & AI practice hub.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Wall */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge label="Recognitions & Awards" variant="emerald" />
              <h2 className="text-3xl sm:text-4xl font-light text-current">
                42+ International Design & Craft Recognitions
              </h2>
            </div>

            <div className="space-y-4 font-mono text-sm">
              {awards.map((award) => (
                <div key={award.title} className="p-6 rounded-xl bg-[var(--bg-card)] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Award className="w-5 h-5 text-[#00685B]" />
                    <span className="font-bold text-current">{award.title}</span>
                  </div>
                  <span className="text-neutral-500">{award.category}</span>
                  <span className="text-[#00685B] font-bold">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
