import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-dashed border-mist-200 bg-mist-50 px-6 py-14 text-center">
      <span
        aria-hidden
        className="flex size-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm"
      >
        <SearchX className="size-7" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-1 max-w-sm text-sm">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
