"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { TextReveal } from "@/components/ui/TextReveal";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Strategy", "Product", "Brand", "Experience", "AI"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[var(--bg-main)] text-current relative">
        <Header />

        {/* Hero Section */}
        <section className="pt-36 pb-20 border-b border-white/10 dark:border-white/10 light:border-black/10">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
            <TextReveal delay={0.1}>
              <Badge label="Portfolio Index" variant="emerald" />
            </TextReveal>

            <TextReveal delay={0.2}>
              <h1 className="text-display-hero font-light text-current tracking-tight">
                Selected Work <br />
                <span className="italic font-serif font-light text-[#00685B]">(2024â€“2026)</span>
              </h1>
            </TextReveal>

            <TextReveal delay={0.3}>
              <p className="text-xl text-neutral-500 dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
                A showcase of digital products, brand identities, headless commerce engines, and artificial intelligence platforms built for market leaders.
              </p>
            </TextReveal>

            {/* Filter Pills */}
            <TextReveal delay={0.4} className="pt-8">
              <div className="flex flex-wrap items-center gap-3 border-t border-white/10 dark:border-white/10 light:border-black/10 pt-8 font-mono text-xs">
                <span className="flex items-center gap-1.5 text-neutral-500 mr-2 font-bold">
                  <Filter className="w-3.5 h-3.5" /> FILTER BY:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#00685B] border-[#00685B] text-white font-bold"
                        : "bg-white/5 border-white/10 text-neutral-500 hover:text-current"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
                <span className="ml-auto text-neutral-500 font-mono">
                  SHOWING ({filteredProjects.length} / {projectsData.length})
                </span>
              </div>
            </TextReveal>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {filteredProjects.map((project, idx) => (
                <TextReveal key={project.id} delay={idx * 0.1}>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group space-y-6 cursor-pointer"
                  >
                    {/* Visual Card */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-white/10 dark:border-white/10 light:border-black/10 group-hover:border-[#00685B] transition-colors duration-500 premium-card">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-[var(--bg-main)]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-mono font-bold text-[#00685B]">
                        {project.resultMetric} â€” {project.resultLabel}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between font-mono text-xs text-neutral-500">
                        <span className="text-[#00685B] font-bold uppercase">{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-light text-current group-hover:text-[#00685B] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-light text-neutral-500 dark:text-neutral-400 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="pt-2 flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} label={tag} variant="default" />
                          ))}
                        </div>
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#00685B] uppercase tracking-wider"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </TextReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Project Drawer Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <Footer />
      </main>
    </SmoothScroll>
  );
}
