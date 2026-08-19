export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
  category: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    value: "+148%",
    label: "Conversion Lift",
    description: "Average increase in checkout & lead conversion across client digital products.",
    category: "Performance"
  },
  {
    value: "18M+",
    label: "Daily End-Users",
    description: "Global audience engaging with platforms designed & engineered by Activ8.",
    category: "Scale"
  },
  {
    value: "<80ms",
    label: "Global Response Time",
    description: "Average edge CDN response latency across our deployed headless web apps.",
    category: "Speed"
  },
  {
    value: "42+",
    label: "Global Design Awards",
    description: "International recognitions for digital product design, UX, and WebGL innovation.",
    category: "Craftsmanship"
  }
];
