import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  /** Number of placeholder cards. */
  count?: number;
  className?: string;
}

/** Pulsing card placeholders shown while client-side lists hydrate. */
export function LoadingSkeleton({ count = 6, className }: LoadingSkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Loading content"
      className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border border-mist-200 bg-white p-6 shadow-sm"
        >
          <div className="size-12 rounded-xl bg-mist-200" />
          <div className="mt-4 h-4 w-2/3 rounded bg-mist-200" />
          <div className="mt-3 h-3 w-full rounded bg-mist-100" />
          <div className="mt-2 h-3 w-5/6 rounded bg-mist-100" />
        </div>
      ))}
      <span className="sr-only">Loading…</span>
    </div>
  );
}
