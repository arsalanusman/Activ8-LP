import { Badge } from "./Badge";
import { TextReveal } from "./TextReveal";

interface SectionHeadingProps {
  badgeLabel: string;
  headline: string;
  subheadline?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badgeLabel,
  headline,
  subheadline,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center mx-auto" : "items-start"
      } max-w-4xl ${className}`}
    >
      <TextReveal delay={0.05}>
        <Badge label={badgeLabel} variant="emerald" />
      </TextReveal>
      <TextReveal delay={0.15} className="mt-4">
        <h2 className="text-display-section font-normal text-[var(--text-primary)] tracking-tight font-sans">
          {headline}
        </h2>
      </TextReveal>
      {subheadline && (
        <TextReveal delay={0.25} className="mt-4">
          <p className="text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl">
            {subheadline}
          </p>
        </TextReveal>
      )}
    </div>
  );
}
