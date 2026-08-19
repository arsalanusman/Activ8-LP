"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { agencyConfig } from "@/data/agency";
import { ThemeToggle } from "../ui/ThemeToggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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

  const menuLinks = [
    { label: "Home", href: "/", count: "01" },
    { label: "Work", href: "/work", count: "05" },
    { label: "Services", href: "/services", count: "06" },
    { label: "About", href: "/about", count: "03" },
    { label: "AI Capability", href: "/services#ai", count: "NEW" },
    { label: "Contact", href: "/contact", count: "GO" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--bg-main)] text-current flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
        >
          {/* Header Bar inside overlay */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold tracking-tighter uppercase font-mono">
              {agencyConfig.name} <span className="text-[#00685B]">•</span>
            </span>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-3 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 hover:bg-[#00685B] transition-colors text-current hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Core Navigation Links */}
          <nav className="my-auto py-8">
            <ul className="space-y-4 md:space-y-6">
              {menuLinks.map((link, idx) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-baseline justify-between text-4xl sm:text-6xl md:text-7xl font-light tracking-tight hover:text-[#00685B] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-neutral-500 group-hover:text-[#00685B]">
                      {link.count}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Footer Metadata & Timezones */}
          <div className="border-t border-white/10 dark:border-white/10 light:border-black/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-neutral-500 dark:text-neutral-400 font-light">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Direct Inquiry</p>
              <a
                href={`mailto:${agencyConfig.contactEmail}`}
                className="text-current hover:text-[#00685B] transition-colors inline-flex items-center gap-1 font-mono font-medium"
              >
                {agencyConfig.contactEmail} <ArrowUpRight className="w-4 h-4 text-[#00685B]" />
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Studio Timezones</p>
              <div className="flex gap-4 font-mono text-xs">
                {agencyConfig.locations.map((loc) => (
                  <div key={loc.code}>
                    <span className="text-current font-medium">{loc.code}: </span>
                    <span className="text-neutral-500">{clocks[loc.code] || "--:--"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
