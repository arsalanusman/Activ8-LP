"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers } from "lucide-react";

export function VersionSwitcher() {
  const pathname = usePathname();

  const versions = [
    { label: "V1: Cuberto Motion", href: "/v1", desc: "Horizontal reel, WebGL particles & video loop" },
    { label: "V2: Focus Lab", href: "/v2", desc: "Ultra-clean editorial grid & enterprise authority" },
    { label: "V3: Goodface Luxury", href: "/v3", desc: "Tactile glassmorphic cards & video showcase" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1.5 p-1.5 rounded-full bg-black/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl font-mono text-xs select-none">
      <div className="flex items-center gap-1 px-3 text-[#00685B] font-bold">
        <Layers className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">VERSIONS:</span>
      </div>

      {versions.map((v) => {
        const isActive = pathname === v.href || (pathname === "/" && v.href === "/v1");

        return (
          <Link
            key={v.href}
            href={v.href}
            className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-semibold ${
              isActive
                ? "bg-[#00685B] text-white shadow-md emerald-glow"
                : "text-neutral-400 hover:text-white hover:bg-white/10"
            }`}
            title={v.desc}
          >
            {v.label}
          </Link>
        );
      })}
    </div>
  );
}
