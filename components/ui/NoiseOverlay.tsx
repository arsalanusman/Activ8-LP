"use client";

export function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9990] opacity-[0.035] bg-noise"
      aria-hidden="true"
    />
  );
}
