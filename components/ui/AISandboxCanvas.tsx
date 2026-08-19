"use client";

import { useEffect, useRef, useState } from "react";
import { Sliders, RefreshCw, Cpu } from "lucide-react";

export function AISandboxCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<"generative" | "agents" | "rag" | "neural">("generative");
  const [speed, setSpeed] = useState<number>(1.2);
  const [density, setDensity] = useState<number>(60);
  const [activeNodesCount, setActiveNodesCount] = useState<number>(60);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", resize);

    // Create sandbox nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
    }> = [];

    for (let i = 0; i < density; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 3 + 1.5,
        pulse: Math.random() * Math.PI * 2,
      });
    }
    setActiveNodesCount(nodes.length);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.0015;

      // Draw background neural grid
      ctx.strokeStyle = "rgba(0, 104, 91, 0.06)";
      ctx.lineWidth = 1;
      const step = mode === "rag" ? 40 : mode === "agents" ? 70 : 100;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Update & Draw Nodes
      nodes.forEach((node, i) => {
        node.x += node.vx * speed;
        node.y += node.vy * speed;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Node render
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = mode === "generative" ? "#00685B" : mode === "agents" ? "#00897B" : mode === "rag" ? "#33A090" : "#004D43";
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = mode === "neural" ? 160 : mode === "agents" ? 120 : 100;
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 104, 91, ${(1 - dist / maxDist) * 0.45})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [mode, speed, density]);

  return (
    <div className="rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-[var(--bg-card)] p-6 sm:p-8 space-y-6 premium-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 dark:border-white/10 light:border-black/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00685B]/15 text-[#00685B] flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold font-mono tracking-wide text-current">
              Activ8 AI Neural Engine Sandbox
            </h4>
            <p className="text-xs text-neutral-500 font-mono">
              Live Interactive UI Node Physics Simulation
            </p>
          </div>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {(["generative", "agents", "rag", "neural"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1.5 rounded-lg border transition-all uppercase cursor-pointer ${
                mode === m
                  ? "bg-[#00685B] border-[#00685B] text-white font-bold"
                  : "bg-white/5 border-transparent text-neutral-500 hover:text-current"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Live Interactive Canvas */}
      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#070709] border border-white/10">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute top-4 left-4 font-mono text-xs text-[#00685B] bg-black/80 px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00685B] animate-ping" />
          <span>MODE: {mode.toUpperCase()}</span> | <span>NODES: {activeNodesCount}</span>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 font-mono text-xs">
        <div className="space-y-2">
          <div className="flex justify-between text-neutral-500">
            <span>NODE DENSITY</span>
            <span className="text-[#00685B] font-bold">{density}</span>
          </div>
          <input
            type="range"
            min="30"
            max="120"
            value={density}
            onChange={(e) => setDensity(Number(e.target.value))}
            className="w-full accent-[#00685B] cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-neutral-500">
            <span>NEURAL VELOCITY</span>
            <span className="text-[#00685B] font-bold">{speed.toFixed(1)}x</span>
          </div>
          <input
            type="range"
            min="0.4"
            max="3.0"
            step="0.2"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full accent-[#00685B] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
