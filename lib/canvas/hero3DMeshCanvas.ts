export class Hero3DMeshCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationFrameId: number | null = null;
  private mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  private time = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Could not get 2D canvas context");
    this.ctx = context;

    this.init();
  }

  private init() {
    this.resize();
    this.addEventListeners();
    this.animate();
  }

  private resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = (this.canvas.parentElement?.clientWidth || window.innerWidth) * dpr;
    this.canvas.height = (this.canvas.parentElement?.clientHeight || window.innerHeight) * dpr;
    this.ctx.scale(dpr, dpr);
  };

  private addEventListeners() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  private handleResize = () => {
    this.resize();
  };

  private handleMouseMove = (e: MouseEvent) => {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.targetX = (e.clientX - rect.left - rect.width / 2) * 0.05;
    this.mouse.targetY = (e.clientY - rect.top - rect.height / 2) * 0.05;
  };

  private animate = () => {
    const displayWidth = this.canvas.width / (window.devicePixelRatio || 1);
    const displayHeight = this.canvas.height / (window.devicePixelRatio || 1);

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;
    this.time += 0.015;

    this.ctx.clearRect(0, 0, displayWidth, displayHeight);

    const centerX = displayWidth / 2 + this.mouse.x * 2;
    const centerY = displayHeight / 2 + this.mouse.y * 2;

    for (let r = 0; r < 3; r++) {
      const radius = 220 + r * 140;
      const angleOffset = this.time * (0.3 + r * 0.1);

      this.ctx.save();
      this.ctx.translate(centerX, centerY);
      this.ctx.rotate(angleOffset + (this.mouse.x * 0.01));
      this.ctx.scale(1, 0.45 + (this.mouse.y * 0.002));

      this.ctx.beginPath();
      this.ctx.arc(0, 0, radius, 0, Math.PI * 2);
      this.ctx.lineWidth = 1.2;

      const gradient = this.ctx.createLinearGradient(-radius, -radius, radius, radius);
      gradient.addColorStop(0, "rgba(0, 104, 91, 0.35)");
      gradient.addColorStop(0.5, "rgba(16, 185, 129, 0.15)");
      gradient.addColorStop(1, "rgba(56, 189, 248, 0.25)");

      this.ctx.strokeStyle = gradient;
      this.ctx.stroke();
      this.ctx.restore();
    }

    for (let i = 0; i < 6; i++) {
      const angle = this.time * 0.4 + (i * Math.PI) / 3;
      const orbitX = centerX + Math.cos(angle) * (260 + i * 20) + this.mouse.x * (i + 1) * 0.3;
      const orbitY = centerY + Math.sin(angle) * (120 + i * 15) + this.mouse.y * (i + 1) * 0.3;
      const orbRadius = 6 + Math.sin(this.time * 2 + i) * 3;

      const orbGradient = this.ctx.createRadialGradient(orbitX, orbitY, 0, orbitX, orbitY, orbRadius * 3);
      orbGradient.addColorStop(0, "rgba(45, 212, 191, 0.8)");
      orbGradient.addColorStop(0.5, "rgba(0, 104, 91, 0.4)");
      orbGradient.addColorStop(1, "rgba(0, 104, 91, 0)");

      this.ctx.beginPath();
      this.ctx.arc(orbitX, orbitY, orbRadius * 3, 0, Math.PI * 2);
      this.ctx.fillStyle = orbGradient;
      this.ctx.fill();
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  public destroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("mousemove", this.handleMouseMove);
  }
}