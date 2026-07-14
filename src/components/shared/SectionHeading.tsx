import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Tone of the eyebrow chip. */
  tone?: "blue" | "green" | "violet";
  /** id for the h2, so sections can reference it via aria-labelledby. */
  id?: string;
}

const tones = {
  blue: "text-blue-700 bg-blue-50",
  green: "text-emerald-700 bg-emerald-50",
  violet: "text-violet-700 bg-violet-50",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "blue",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            tones[tone],
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-base leading-relaxed">{description}</p> : null}
    </div>
  );
}
