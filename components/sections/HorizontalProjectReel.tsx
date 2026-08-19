"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { SpotlightCard } from "../ui/SpotlightCard";
import { ProjectModal } from "../ui/ProjectModal";

export function HorizontalProjectReel() {
  const reelRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollLeft = () => {
    if (reelRef.current) {
      reelRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (reelRef.current) {
      reelRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 md:py-40 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] relative transition-colors duration-400 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 flex items-end justify-between">
        <SectionHeading
          badgeLabel="Cuberto Showcase Reel"
          headline="Selected Projects Reel"
          subheadline="Drag or scroll horizontally to explore our latest digital product and brand transformations."
        />

        {/* Scroll Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="p-4 rounded-full border border-[var(--border-subtle)] bg-white/5 hover:bg-[#00685B] hover:text-white transition-colors cursor-pointer text-current"
            aria-label="Scroll reel left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="p-4 rounded-full border border-[var(--border-subtle)] bg-white/5 hover:bg-[#00685B] hover:text-white transition-colors cursor-pointer text-current"
            aria-label="Scroll reel right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={reelRef}
        className="flex gap-8 overflow-x-auto no-scrollbar px-6 sm:px-10 lg:px-16 pb-8 snap-x snap-mandatory"
        data-cursor="drag"
        data-cursor-text="DRAG"
      >
        {projectsData.map((project) => (
          <div key={project.id} className="min-w-[320px] sm:min-w-[440px] md:min-w-[540px] snap-start shrink-0">
            <SpotlightCard
              onClick={() => setSelectedProject(project)}
              className="p-6 space-y-6"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[var(--bg-main)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[var(--bg-main)]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] text-xs font-mono font-bold text-[#00685B]">
                  {project.resultMetric} — {project.resultLabel}
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)] font-semibold">
                  <span className="text-[#00685B] font-bold uppercase">{project.client}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-normal text-[var(--text-primary)] group-hover:text-[#00685B] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-normal line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t) => (
                      <Badge key={t} label={t} variant="default" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#00685B]">
                    <span>VIEW</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
