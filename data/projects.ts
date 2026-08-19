export interface ProjectItem {
  id: string;
  slug: string;
  client: string;
  title: string;
  category: string;
  description: string;
  image: string;
  aspectRatio: "portrait" | "landscape" | "wide";
  resultMetric: string;
  resultLabel: string;
  year: string;
  tags: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "nike-nextgen",
    slug: "nike-nextgen-commerce",
    client: "Nike Digital",
    title: "Next-Generation Global Commerce Engine",
    category: "Strategy / Product / Technology",
    description: "Architecting a high-frequency, headless digital flagship store engineered for hyper-personalized member drops and sub-100ms global page loads.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=85",
    aspectRatio: "wide",
    resultMetric: "+148%",
    resultLabel: "Digital Checkout Conversion Rate",
    year: "2026",
    tags: ["Headless Commerce", "Design System", "AI Personalization"]
  },
  {
    id: "ap-flagship",
    slug: "audemars-piguet-experience",
    client: "Audemars Piguet",
    title: "Ultra-Luxury Horology Experience Platform",
    category: "Brand / Experience / Technology",
    description: "Designing an immersive 3D spatial web application for haute horlogerie collectors, combining 8K tactile watch exploration with private appointment booking.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "portrait",
    resultMetric: "4.2M",
    resultLabel: "Collector Impressions in Launch Month",
    year: "2025",
    tags: ["3D Spatial Experience", "Luxury E-Commerce", "WebGL"]
  },
  {
    id: "veloce-ai",
    slug: "veloce-ai-platform",
    client: "Veloce Enterprise",
    title: "Autonomous Intelligence Workspace",
    category: "AI / Product / Strategy",
    description: "Building an enterprise AI platform that unifies real-time predictive analytics, workflow automation, and natural language command systems for global teams.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    aspectRatio: "landscape",
    resultMetric: "65%",
    resultLabel: "Reduction in Operational Processing Time",
    year: "2026",
    tags: ["Generative UI", "AI Copilot System", "Design Tokens"]
  },
  {
    id: "rimowa-os",
    slug: "rimowa-connected-os",
    client: "RIMOWA",
    title: "Connected Travel Companion Platform",
    category: "Product / Experience / Mobile",
    description: "Creating a seamless mobile iOS & Android companion application allowing luxury travelers to track luggage location, register lifetime warranties, and access city guides.",
    image: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=1600&q=85",
    aspectRatio: "portrait",
    resultMetric: "820K",
    resultLabel: "Active Connected Travelers",
    year: "2025",
    tags: ["iOS & Android App", "IoT Integration", "Service Design"]
  },
  {
    id: "sony-sound",
    slug: "sony-spatial-audio",
    client: "Sony Audio",
    title: "Interactive Spatial Audio Showcase",
    category: "Experience / Brand / Tech",
    description: "Crafting a WebGL web audio experiment showcasing 360 Reality Audio capabilities across browser environments without hardware friction.",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=85",
    aspectRatio: "wide",
    resultMetric: "+220%",
    resultLabel: "Increase in Demo Session Duration",
    year: "2025",
    tags: ["Web Audio API", "Interactive Storytelling", "Brand Campaign"]
  }
];
