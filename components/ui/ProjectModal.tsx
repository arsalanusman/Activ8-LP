"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { Badge } from "./Badge";
import { MagneticButton } from "./MagneticButton";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex justify-end overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Slide-over Drawer Panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-3xl bg-[var(--bg-main)] text-current h-full overflow-y-auto border-l border-white/10 dark:border-white/10 light:border-black/10 p-6 sm:p-10 md:p-12 shadow-2xl flex flex-col justify-between"
        >
          <div className="space-y-8">
            {/* Header Controls */}
            <div className="flex items-center justify-between border-b border-white/10 dark:border-white/10 light:border-black/10 pb-6">
              <div className="flex items-center gap-3 font-mono text-xs text-[#00685B] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>{project.client} • {project.year}</span>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-[#00685B] hover:text-white transition-colors text-current"
                aria-label="Close Project Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Category */}
            <div className="space-y-3">
              <Badge label={project.category} variant="emerald" />
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-current">
                {project.title}
              </h2>
            </div>

            {/* Image Preview Container */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 light:border-black/10 bg-[var(--bg-card)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[var(--bg-main)]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-mono font-bold text-[#00685B]">
                {project.resultMetric} — {project.resultLabel}
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                Project Overview
              </h4>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Deliverables & Technology Stack */}
            <div className="space-y-4 pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#00685B] font-bold">
                Architecture & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-light text-sm text-neutral-600 dark:text-neutral-300">
                {project.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00685B] shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Button */}
          <div className="pt-10 mt-10 border-t border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-between">
            <MagneticButton
              href={`/work/${project.slug}`}
              as="a"
              variant="primary"
              className="w-full py-4 text-xs font-mono font-bold justify-center"
            >
              <span>View Full Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
