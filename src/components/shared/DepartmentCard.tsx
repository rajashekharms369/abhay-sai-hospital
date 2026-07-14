import { ArrowRight } from "lucide-react";
import type { Department } from "@/types";
import { cn } from "@/lib/utils";

interface DepartmentCardProps {
  department: Department;
  onLearnMore: (department: Department) => void;
}

export function DepartmentCard({ department, onLearnMore }: DepartmentCardProps) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl border border-mist-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <span
        aria-hidden
        className={cn("flex size-16 items-center justify-center rounded-full", department.accent)}
      >
        <department.icon className="size-8" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{department.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed">{department.description}</p>
      <button
        type="button"
        onClick={() => onLearnMore(department)}
        className="mt-4 inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
      >
        Learn More
        <ArrowRight aria-hidden className="size-4" />
        <span className="sr-only">about {department.name}</span>
      </button>
    </article>
  );
}
