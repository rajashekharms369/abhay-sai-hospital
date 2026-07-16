"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Doctor } from "@/types";
import { doctors } from "@/data/doctors";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { DoctorProfileModal } from "@/components/doctors/DoctorProfileModal";
import { Reveal } from "@/components/shared/motion";

const AUTO_ADVANCE_MS = 4000;

export function FeaturedDoctors() {
  const [selected, setSelected] = useState<Doctor | null>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const trackRef = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();

  /** Scroll by one card (including the flex gap); wraps back to the start. */
  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.querySelector<HTMLElement>("li");
      if (!card) return;
      const step = card.offsetWidth + 24; // gap-6
      const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";

      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - step / 2;
      const atStart = track.scrollLeft <= step / 2;

      if (direction === 1 && atEnd) {
        track.scrollTo({ left: 0, behavior });
      } else if (direction === -1 && atStart) {
        track.scrollTo({ left: track.scrollWidth, behavior });
      } else {
        track.scrollBy({ left: step * direction, behavior });
      }
    },
    [reduceMotion],
  );

  // Only auto-advance while the carousel is on screen.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry?.isIntersecting ?? false),
      {
        threshold: 0.25,
      },
    );
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || !inView || selected !== null) return;
    const timer = setInterval(() => scrollByCard(1), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [reduceMotion, paused, inView, selected, scrollByCard]);

  const arrowClasses =
    "flex size-11 items-center justify-center rounded-full border border-mist-200 bg-white text-navy-700 shadow-sm transition-colors hover:border-blue-200 hover:bg-mist-100 focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <section
      aria-labelledby="featured-doctors-title"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Our Doctors"
          title="Meet Our Expert Specialists"
          id="featured-doctors-title"
          description="Sample profiles shown with illustrative portraits — final doctor details are pending hospital confirmation."
        />
        <Link
          href="/doctors"
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
        >
          View All Doctors
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Doctor profiles"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
        >
          {/* [contain:layout] keeps the track's scrollable overflow out of the
              document's scroll area — without it, mobile browsers zoom out to
              fit the full width of all slides. */}
          <ul
            ref={trackRef}
            className="-mx-1 scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2 [contain:layout]"
          >
            {doctors.map((doctor) => (
              <li
                key={doctor.id}
                className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[30.5%] xl:w-[23.2%]"
              >
                <DoctorCard doctor={doctor} onViewProfile={setSelected} />
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              *Experience figures are indicative placeholders pending hospital confirmation.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous doctors"
                className={arrowClasses}
              >
                <ChevronLeft aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next doctors"
                className={arrowClasses}
              >
                <ChevronRight aria-hidden className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <DoctorProfileModal doctor={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
