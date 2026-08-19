export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  stats: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "financial",
    name: "Financial Services",
    tagline: "Modernizing wealth platforms & fintech infrastructure.",
    description: "We help global banking institutions and fintech disruptors build high-trust digital banking experiences, algorithmic trading portals, and customer onboarding flows.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    stats: "$42B+ Processed Transaction Volume"
  },
  {
    id: "technology",
    name: "Enterprise Tech & SaaS",
    tagline: "Accelerating adoption for complex software platforms.",
    description: "Designing hyper-intuitive user interfaces, design systems, and product marketing engines for cloud providers, developer platforms, and enterprise software.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    stats: "15M+ Platform End Users"
  },
  {
    id: "retail",
    name: "Retail & Luxury Commerce",
    tagline: "Elevating brand storytelling to high-converting commerce.",
    description: "We blend high-craft editorial design with ultra-fast headless e-commerce architectures to convert casual browsers into brand evangelists.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    stats: "Sub-100ms Global Load Times"
  },
  {
    id: "media",
    name: "Media & Entertainment",
    tagline: "Crafting immersive content distribution platforms.",
    description: "Building next-generation streaming interfaces, interactive storytelling portals, and digital publication engines that captivate global audiences.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    stats: "4K High-Bitrate Streaming Interfaces"
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "Simplifying patient care and medical intelligence.",
    description: "Designing HIPAA-compliant digital health applications, clinical dashboard tools, and patient management experiences with rigorous UX precision.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    stats: "100% Security & Compliance Record"
  },
  {
    id: "mobility",
    name: "Mobility & Automotive",
    tagline: "Reinventing in-car software & connected travel.",
    description: "Pioneering next-generation EV dashboard interfaces, connected vehicle mobile apps, and autonomous transit fleet management software.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    stats: "In-Cabin HMI & OS Interfaces"
  }
];
