import type { FeatureItem } from "@/types";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "h-full rounded-2xl border border-mist-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("flex size-12 items-center justify-center rounded-xl", feature.accent)}
      >
        <feature.icon className="size-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}
