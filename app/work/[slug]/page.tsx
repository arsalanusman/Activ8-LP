import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Layers, Sparkles, ShieldCheck } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] relative">
        <Header />

        {/* Hero Section */}
        <section className="pt-36 pb-20 border-b border-[var(--border-subtle)]">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[#00685B] transition-colors font-bold"
            >
              <ArrowLeft className="w-4 h-4" /> BACK TO WORK INDEX
            </Link>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge label={project.client} variant="emerald" />
                <span className="text-xs font-mono text-[var(--text-muted)] font-bold">• {project.year}</span>
                <span className="text-xs font-mono text-[var(--text-muted)] font-bold">• {project.category}</span>
              </div>
              <h1 className="text-display-hero font-normal text-[var(--text-primary)] tracking-tight max-w-5xl font-sans">
                {project.title}
              </h1>
            </div>

            {/* Key Metric Highlights Header Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] font-mono text-xs shadow-lg">
              <div>
                <span className="text-[#00685B] font-bold block uppercase text-xs">VERIFIED IMPACT</span>
                <span className="text-3xl font-bold text-[var(--text-primary)] block mt-1">{project.resultMetric}</span>
                <span className="text-[var(--text-secondary)] font-medium">{project.resultLabel}</span>
              </div>
              <div>
                <span className="text-[#00685B] font-bold block uppercase text-xs">CORE DISCIPLINE</span>
                <span className="text-base font-bold text-[var(--text-primary)] block mt-2">{project.category}</span>
              </div>
              <div>
                <span className="text-[#00685B] font-bold block uppercase text-xs">AGENCY SCOPE</span>
                <span className="text-base font-bold text-[var(--text-primary)] block mt-2">End-to-End Transformation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full-bleed Hero Visual */}
        <section className="py-16">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-card)] premium-card">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1600px) 100vw, 1600px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Challenge & Solution Narrative */}
        <section className="py-20 md:py-32 border-b border-[var(--border-subtle)]">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 space-y-6">
                <Badge label="Strategic Challenge" variant="emerald" />
                <h3 className="text-2xl font-normal text-[var(--text-primary)] tracking-tight font-sans">
                  Re-architecting digital touchpoints for modern consumer expectations.
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-6 text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
                <p>
                  {project.description}
                </p>
                <p>
                  Activ8 brought together strategic design research, bespoke UX/UI systems, micro-frontend engineering, and custom AI personalization pipelines to solve key legacy bottlenecks and accelerate market velocity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Before & After UX Slider Section */}
        <section className="py-20 md:py-32 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge label="Interactive UX Evolution" variant="emerald" />
              <h2 className="text-display-section font-normal text-[var(--text-primary)] tracking-tight font-sans">
                Before & After UX Transformation
              </h2>
              <p className="text-base text-[var(--text-secondary)] font-normal">
                Drag the interactive slider below to explore how Activ8 redesigned the interface layout, typography hierarchy, and transaction flows.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80"
              afterImage={project.image}
              beforeLabel="Legacy Portal (Before)"
              afterLabel="Activ8 Redesign (After)"
            />
          </div>
        </section>

        {/* Technology Stack & Deliverables */}
        <section className="py-20 md:py-32 border-b border-[var(--border-subtle)]">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
            <div className="max-w-3xl space-y-4">
              <Badge label="Engineering & Capabilities" variant="emerald" />
              <h2 className="text-3xl sm:text-4xl font-normal text-[var(--text-primary)] font-sans">
                Architecture & System Deliverables
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 premium-card">
                <Layers className="w-6 h-6 text-[#00685B]" />
                <h4 className="text-xl font-bold font-mono text-[var(--text-primary)]">Design System</h4>
                <p className="text-sm font-normal text-[var(--text-secondary)] leading-relaxed">
                  Comprehensive UI component token library, accessible color palettes, and motion guidelines.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 premium-card">
                <Sparkles className="w-6 h-6 text-[#00685B]" />
                <h4 className="text-xl font-bold font-mono text-[var(--text-primary)]">AI Personalization</h4>
                <p className="text-sm font-normal text-[var(--text-secondary)] leading-relaxed">
                  Real-time contextual recommendation engines fine-tuned on first-party behavioral telemetry.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] space-y-4 premium-card">
                <ShieldCheck className="w-6 h-6 text-[#00685B]" />
                <h4 className="text-xl font-bold font-mono text-[var(--text-primary)]">Headless Edge Engine</h4>
                <p className="text-sm font-normal text-[var(--text-secondary)] leading-relaxed">
                  Sub-80ms global CDN distribution with serverless microservices and automated QA suite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Pagination Bar */}
        <section className="py-24 bg-[var(--bg-surface)] text-[var(--text-primary)] border-b border-[var(--border-subtle)]">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono text-[#00685B] uppercase font-bold tracking-widest block mb-2">
                NEXT CASE STUDY
              </span>
              <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-[var(--text-primary)] font-sans">
                {nextProject.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-mono mt-1">Client: {nextProject.client}</p>
            </div>

            <MagneticButton
              href={`/work/${nextProject.slug}`}
              as="a"
              variant="primary"
              className="px-8 py-4 text-xs font-mono font-bold shrink-0"
            >
              <span>Explore Next Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
