"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { TextReveal } from "../ui/TextReveal";
import { ProjectModal } from "../ui/ProjectModal";

export function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="py-28 md:py-40 bg-[var(--bg-main)] border-b border-[var(--border-subtle)] relative transition-colors duration-400">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionHeading
          badgeLabel="Selected Work"
          headline="Ideas that became products, brands and experiences."
          subheadline="A curated selection of digital transformations delivered for enterprise clients and category disruptors."
          className="mb-20"
        />

        {/* Case Studies Grid */}
        <div className="space-y-24 md:space-y-36">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <TextReveal key={project.id} delay={0.1}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center cursor-pointer`}
                  data-cursor="view"
                  data-cursor-text="VIEW"
                >
                  {/* Visual Image Block */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] relative aspect-[16/10] group-hover:border-[#00685B] transition-colors duration-500 premium-card`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Result Metric Floating Badge */}
                    <div className="absolute top-6 left-6 z-10 bg-[var(--bg-main)]/90 backdrop-blur-md border border-[var(--border-subtle)] px-4 py-2.5 rounded-full flex items-center gap-3">
                      <span className="text-[#00685B] font-mono font-bold text-base md:text-lg">
                        {project.resultMetric}
                      </span>
                      <span className="text-xs text-[var(--text-secondary)] font-semibold hidden sm:inline-block">
                        {project.resultLabel}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Text Content Metadata */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    } space-y-6`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] font-semibold">
                      <span className="text-[#00685B] uppercase font-bold">{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--text-primary)] group-hover:text-[#00685B] transition-colors duration-300 font-sans">
                      {project.title}
                    </h3>

                    <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tag Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} label={tag} variant="default" />
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)] group-hover:text-[#00685B] transition-colors uppercase tracking-widest cursor-pointer"
                      >
                        <span>Explore case study</span>
                        <ArrowUpRight className="w-4 h-4 text-[#00685B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </TextReveal>
            );
          })}
        </div>
      </div>

      {/* Slide-over Project Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
