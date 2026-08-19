"use client";

export function ClientStrip() {
  const clients = [
    { name: "NIKE DIGITAL", code: "NKE" },
    { name: "AUDEMARS PIGUET", code: "AP" },
    { name: "SONY AUDIO", code: "SNY" },
    { name: "RIMOWA", code: "RMW" },
    { name: "STRIPE PLATFORM", code: "STP" },
    { name: "SPOTIFY", code: "SPOT" },
    { name: "SAMSUNG GLOBAL", code: "SMSN" },
    { name: "PORSCHE DIGITAL", code: "PAH" },
  ];

  return (
    <section className="py-12 bg-[var(--bg-surface)] border-y border-white/10 dark:border-white/10 light:border-black/10 overflow-hidden relative select-none transition-colors duration-400">
      <div className="max-w-[1600px] mx-auto px-6 mb-6">
        <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500 text-center font-medium">
          Trusted by ambitious global organizations
        </p>
      </div>

      {/* Infinite Slow Marquee */}
      <div className="flex overflow-hidden relative">
        {/* Gradient Edge Blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-surface)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-surface)] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-4 text-lg sm:text-xl font-mono font-bold tracking-tight text-neutral-500 hover:text-current transition-colors duration-300 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-700 group-hover:bg-[#00685B] transition-colors" />
              <span>{client.name}</span>
              <span className="text-xs text-neutral-500 font-normal">[{client.code}]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
