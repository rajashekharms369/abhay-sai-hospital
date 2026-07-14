import type { StatItem } from "@/types";
import { cn } from "@/lib/utils";

interface StatCardProps {
  stat: StatItem;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-mist-200 bg-white p-5 shadow-sm">
      <span
        aria-hidden
        className={cn("flex size-12 shrink-0 items-center justify-center rounded-xl", stat.accent)}
      >
        <stat.icon className="size-6" />
      </span>
      <div>
        <p className="text-2xl font-bold text-navy-900">
          {stat.value}
          {stat.unverified ? <span aria-hidden>*</span> : null}
          {stat.unverified ? <span className="sr-only">(indicative figure)</span> : null}
        </p>
        <p className="text-sm text-slate-500">{stat.label}</p>
      </div>
    </div>
  );
}

/** Footnote shown once per stats section when any figure is a placeholder. */
export function StatsFootnote({ stats }: { stats: StatItem[] }) {
  if (!stats.some((s) => s.unverified)) return null;
  return (
    <p className="mt-4 text-xs text-slate-400">
      *Indicative figures shown for layout preview — final statistics pending hospital confirmation.
    </p>
  );
}
