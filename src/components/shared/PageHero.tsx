import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

interface HeroChip {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
}

interface PageHeroProps {
  breadcrumb: string;
  title: string;
  highlight?: string;
  description: string;
  chips?: HeroChip[];
  image?: { src: string; alt: string; width?: number; height?: number };
  children?: React.ReactNode;
}

/** Shared page hero: breadcrumb, H1 with green highlight line, chips, optional image. */
export function PageHero({
  breadcrumb,
  title,
  highlight,
  description,
  chips,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-mist-200 bg-gradient-to-b from-mist-100 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-16 lg:pt-14">
        <Reveal>
          <Breadcrumbs items={[{ label: breadcrumb }]} />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="block text-emerald-600">{highlight}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg">{description}</p>
          {chips && chips.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="flex items-center gap-3 rounded-2xl border border-mist-200 bg-white px-4 py-3 shadow-sm"
                >
                  <chip.icon aria-hidden className="size-5 text-blue-600" />
                  <span>
                    <span className="block text-sm font-semibold text-navy-900">{chip.label}</span>
                    {chip.sublabel ? (
                      <span className="block text-xs text-slate-500">{chip.sublabel}</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          {children}
        </Reveal>
        {image ? (
          <Reveal direction="left" delay={0.1} className="relative">
            <div
              className={cn(
                "relative overflow-hidden rounded-3xl border border-mist-200 shadow-lg shadow-navy-900/5",
              )}
            >
              {/* Each page's own above-the-fold hero image loads with priority. */}
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? 1448}
                height={image.height ?? 1086}
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
