export interface InsightItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
}

export const insightsData: InsightItem[] = [
  {
    id: "ai-interface-age",
    slug: "designing-for-the-age-of-generative-ai",
    category: "AI & Experience",
    title: "Designing for the Age of Generative AI: Beyond Prompt Boxes",
    date: "August 2026",
    readTime: "6 min read",
    author: "Elena Rostova, VP Design",
    summary: "Static graphical user interfaces are evolving into dynamic, adaptive canvas systems that morph continuously in response to user intent."
  },
  {
    id: "product-longevity",
    slug: "why-digital-products-fail-after-launch",
    category: "Product Strategy",
    title: "Why Digital Products Fail 12 Months After Launch",
    date: "July 2026",
    readTime: "5 min read",
    author: "Marcus Vance, Chief Strategy Officer",
    summary: "Building a great v1 product is standard. Sustaining market momentum requires scalable design governance, real-time analytics feedback loops, and evolutionary design architecture."
  },
  {
    id: "brand-architecture",
    slug: "the-future-of-brand-experience",
    category: "Brand Systems",
    title: "Dynamic Brand Systems: Moving Beyond Static Logo Guidelines",
    date: "June 2026",
    readTime: "7 min read",
    author: "Kaito Tanaka, Executive Creative Director",
    summary: "Modern brands live inside interactive, motion-driven spatial environments. Here is how we construct flexible design systems engineered for code and fluid interaction."
  }
];
