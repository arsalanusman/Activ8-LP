"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { agencyConfig } from "@/data/agency";
import { Badge } from "../ui/Badge";

export function Footer() {
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

  return (
    <footer className="bg-[var(--bg-surface)] text-[var(--text-primary)] border-t border-[var(--border-subtle)] pt-20 pb-12 relative overflow-hidden transition-colors duration-400">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00685B]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--border-subtle)]">
          {/* Agency Brand & Mission */}
          <div className="md:col-span-5 space-y-6">
            <Badge label="Global Digital Agency" variant="emerald" />
            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight max-w-md font-sans text-[var(--text-primary)]">
              We design digital products, brands and platforms that move enterprise organizations forward.
            </h3>
            <p className="text-sm font-mono text-[var(--text-muted)] font-medium">
              © {new Date().getFullYear()} {agencyConfig.name} Digital Inc. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm font-medium text-[var(--text-secondary)]">
              <li><Link href="/work" className="hover:text-[#00685B] transition-colors">Selected Work</Link></li>
              <li><Link href="/services" className="hover:text-[#00685B] transition-colors">Services & Capabilities</Link></li>
              <li><Link href="/about" className="hover:text-[#00685B] transition-colors">About & Culture</Link></li>
              <li><Link href="/services#ai" className="hover:text-[#00685B] transition-colors">AI & Intelligence Practice</Link></li>
              <li><Link href="/contact" className="hover:text-[#00685B] transition-colors">Start A Conversation</Link></li>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold mb-4">
                Direct Inquiry
              </p>
              <a
                href={`mailto:${agencyConfig.contactEmail}`}
                className="text-lg font-mono text-[var(--text-primary)] hover:text-[#00685B] transition-colors inline-flex items-center gap-1.5 font-bold"
              >
                {agencyConfig.contactEmail} <ArrowUpRight className="w-4 h-4 text-[#00685B]" />
              </a>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold mb-4">
                Connect
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)] font-medium">
                {agencyConfig.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00685B] transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Live Timezones */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold mb-3">
                Global Studios
              </p>
              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                {agencyConfig.locations.map((loc) => (
                  <div key={loc.code} className="bg-white/5 dark:bg-white/5 light:bg-black/5 border border-[var(--border-subtle)] p-3 rounded-lg">
                    <span className="block text-[var(--text-primary)] font-bold">{loc.city}</span>
                    <span className="block text-[var(--text-muted)] mt-1 font-semibold">{clocks[loc.code] || "--:--"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Large Typography Brand Footprint */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[14vw] font-black tracking-tighter uppercase text-current/5 leading-none select-none font-sans">
            {agencyConfig.name}
          </div>
          <div className="flex gap-6 text-xs text-[var(--text-muted)] font-mono font-medium">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Security & Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
