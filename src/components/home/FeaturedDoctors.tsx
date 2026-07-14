"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Doctor } from "@/types";
import { featuredDoctors } from "@/data/doctors";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { DoctorProfileModal } from "@/components/doctors/DoctorProfileModal";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";

export function FeaturedDoctors() {
  const [selected, setSelected] = useState<Doctor | null>(null);

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
      <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredDoctors.map((doctor) => (
          <StaggerItem key={doctor.id}>
            <DoctorCard doctor={doctor} onViewProfile={setSelected} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <p className="mt-4 text-xs text-slate-400">
        *Experience figures are indicative placeholders pending hospital confirmation.
      </p>
      <DoctorProfileModal doctor={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
