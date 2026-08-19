export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  visualAccent: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "strategy",
    number: "01",
    title: "Strategy",
    tagline: "Navigating digital complexity with strategic foresight.",
    description: "We help global leadership clarify direction, unlock new growth verticals, and architect product ecosystems that align brand vision with enterprise value.",
    capabilities: ["Business Strategy", "Digital Product Strategy", "Experience Strategy", "Portfolio Architecture", "Market Positioning"],
    visualAccent: "from-blue-600/20 to-indigo-900/30"
  },
  {
    id: "brand",
    number: "02",
    title: "Brand",
    tagline: "Building iconic identities for the digital-first era.",
    description: "We craft distinctive, elastic brand systems engineered for motion, immersive digital interfaces, and high-impact physical touchpoints.",
    capabilities: ["Brand Identity Systems", "Design Language Systems", "Visual Architecture", "Motion Guidelines", "Brand Governance"],
    visualAccent: "from-blue-500/20 to-cyan-900/30"
  },
  {
    id: "product",
    number: "03",
    title: "Product",
    tagline: "Designing digital products people love to use.",
    description: "From complex enterprise platforms to consumer mobile apps, we design high-craft digital products with flawless interaction details and scalable design systems.",
    capabilities: ["Product UX/UI Design", "Design Systems", "Prototyping & Motion", "Native Mobile Apps", "Web Applications"],
    visualAccent: "from-sky-600/20 to-blue-900/30"
  },
  {
    id: "experience",
    number: "04",
    title: "Experience",
    tagline: "Transforming customer touchpoints into business advantages.",
    description: "We orchestrate omnichannel digital experiences that capture imagination, elevate conversion, and foster long-term customer loyalty.",
    capabilities: ["Flagship Web Experiences", "Headless E-Commerce", "Service Design", "Interactive Art Direction", "Content Strategy"],
    visualAccent: "from-blue-700/20 to-slate-900/30"
  },
  {
    id: "technology",
    number: "05",
    title: "Technology",
    tagline: "Architecting resilient, high-speed digital engines.",
    description: "Our engineering practice builds clean, robust, enterprise-grade software architectures engineered for extreme performance, security, and global scale.",
    capabilities: ["Frontend Engineering", "Full-Stack Architecture", "Headless & Microservices", "Cloud Infrastructure", "Performance Tuning"],
    visualAccent: "from-indigo-600/20 to-blue-950/30"
  },
  {
    id: "ai",
    number: "06",
    title: "AI & Intelligence",
    tagline: "Designing human-centered artificial intelligence.",
    description: "We move AI past gimmickry. We design intelligent interfaces, custom workflow automation engines, and generative AI features that supercharge productivity.",
    capabilities: ["AI Strategy & Integration", "Generative UX Systems", "Intelligent Workflows", "Custom LLM Fine-Tuning", "Automated Agents"],
    visualAccent: "from-blue-400/25 to-blue-900/40"
  }
];
