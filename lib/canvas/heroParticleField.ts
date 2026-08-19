"use client";

export class HeroParticleCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animId: number = 0;
  private particles: Array<{
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    pulse: number;
  }> = [];
  private mouse = { x: -1000, y: -1000, radius: 200 };
  private width: number = 0;
  private height: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas 2D context unavailable");
    this.ctx = context;

    this.init();
    this.bindEvents();
    this.animate();
  }

  private init() {
    this.resize();
    this.particles = [];
    const count = Math.min(Math.floor((this.width * this.height) / 10000), 140);

    for (let i = 0; i < count; i++) {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      this.particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.7 + 0.25,
        pulse: Math.random() * Math.PI * 2,
      });
    }
  }

  private resize = () => {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    this.width = parent.clientWidth;
    this.height = parent.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(dpr, dpr);
  };

  private bindEvents() {
    window.addEventListener("resize", this.resize);
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseleave", this.handleMouseLeave);
  }

  private handleMouseMove = (e: MouseEvent) => {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  };

  private handleMouseLeave = () => {
    this.mouse.x = -1000;
    this.mouse.y = -1000;
  };

  private animate = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const time = Date.now() * 0.001;

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const gridColor = isLight ? "rgba(0, 104, 91, 0.04)" : "rgba(255, 255, 255, 0.02)";
    const nodeColor = "0, 104, 91"; // #00685B Emerald Teal

    // Draw ambient grid lines
    this.ctx.strokeStyle = gridColor;
    this.ctx.lineWidth = 1;
    const step = 90;
    for (let x = 0; x < this.width; x += step) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.height);
      this.ctx.stroke();
    }
    for (let y = 0; y < this.height; y += step) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.width, y);
      this.ctx.stroke();
    }

    // Connect particles
    for (let i = 0; i < this.particles.length; i++) {
      const p1 = this.particles[i];
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0 || p1.x > this.width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > this.height) p1.vy *= -1;

      // Mouse repulsion
      const dx = this.mouse.x - p1.x;
      const dy = this.mouse.y - p1.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < this.mouse.radius) {
        const angle = Math.atan2(dy, dx);
        const force = (this.mouse.radius - dist) / this.mouse.radius;
        p1.x -= Math.cos(angle) * force * 3.5;
        p1.y -= Math.sin(angle) * force * 3.5;
      }

      // Draw Particle
      const currentAlpha = p1.alpha + Math.sin(time * 2 + p1.pulse) * 0.18;
      this.ctx.beginPath();
      this.ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${nodeColor}, ${Math.max(0.15, currentAlpha)})`;
      this.ctx.fill();

      // Inter-particle connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const pDx = p1.x - p2.x;
        const pDy = p1.y - p2.y;
        const pDist = Math.sqrt(pDx * pDx + pDy * pDy);

        if (pDist < 150) {
          const lineAlpha = (1 - pDist / 150) * 0.32;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(${nodeColor}, ${lineAlpha})`;
          this.ctx.lineWidth = 0.85;
          this.ctx.stroke();
        }
      }
    }

    this.animId = requestAnimationFrame(this.animate);
  };

  public destroy() {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseleave", this.handleMouseLeave);
    cancelAnimationFrame(this.animId);
  }
}
