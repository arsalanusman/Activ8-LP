export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    phase: "Discover",
    title: "Uncovering Deep Strategic Clarity",
    description: "We interrogate business goals, interview key stakeholders, audit existing tech stacks, and map market opportunities to establish a clear, focused strategic compass.",
    deliverables: ["Stakeholder Alignment Matrix", "Tech Architecture Audit", "Competitive Ecosystem Map", "Strategic Roadmap"]
  },
  {
    number: "02",
    phase: "Define",
    title: "Architecting the Experience Blueprint",
    description: "We define core user personas, information architecture, functional requirements, and experience principles before writing a single line of code or drawing a pixel.",
    deliverables: ["Information Architecture", "Core UX Flows", "Technical Specification", "Product Vision Brief"]
  },
  {
    number: "03",
    phase: "Design",
    title: "Crafting Distinctive Visual Systems",
    description: "Our design team creates bespoke visual languages, motion prototypes, accessible UI components, and rich micro-interactions that elevate brand perception.",
    deliverables: ["Design System", "Interactive Motion Prototypes", "High-Fidelity UI Screens", "Accessibility Governance"]
  },
  {
    number: "04",
    phase: "Build",
    title: "Precision Engineering & System Integration",
    description: "We transform design specifications into production-grade frontend and backend architectures, adhering to strict clean code standards and automated test coverage.",
    deliverables: ["Production Frontend App", "API & Cloud Microservices", "CMS & Headless Integration", "Automated QA Suite"]
  },
  {
    number: "05",
    phase: "Launch",
    title: "Orchestrating Frictionless Go-Live",
    description: "We manage launch readiness, infrastructure stress testing, analytics setup, and deployment orchestration to guarantee a flawless go-to-market rollout.",
    deliverables: ["Global CDN Deployment", "Performance Tuning Audit", "Analytics & Tracking Setup", "Team Enablement Training"]
  },
  {
    number: "06",
    phase: "Evolve",
    title: "Continuous Iteration & Growth Engine",
    description: "Post-launch, we utilize real-time telemetry, user session data, and A/B experimentation to continuously optimize performance, conversion, and feature expansion.",
    deliverables: ["Telemetry Dashboards", "Conversion Rate Optimization", "Feature Backlog Expansion", "Quarterly Strategy Reviews"]
  }
];
