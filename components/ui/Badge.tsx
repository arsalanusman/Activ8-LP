import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  className?: string;
  variant?: "default" | "emerald" | "outline";
}

export function Badge({ label, className, variant = "default" }: BadgeProps) {
  const variantStyles = {
    default: "bg-white/10 dark:bg-white/5 light:bg-black/5 text-current/70 border border-current/10",
    emerald: "bg-[#00685B]/15 text-[#00685B] dark:text-[#00897B] border border-[#00685B]/30",
    outline: "bg-transparent text-current/50 border border-current/15",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] font-mono tracking-widest uppercase rounded-full select-none font-semibold",
        variantStyles[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {label}
    </span>
  );
}
