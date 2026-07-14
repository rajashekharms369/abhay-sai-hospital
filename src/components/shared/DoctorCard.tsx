import Image from "next/image";
import { ArrowRight, BadgeInfo } from "lucide-react";
import type { Doctor } from "@/types";

interface DoctorCardProps {
  doctor: Doctor;
  onViewProfile: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onViewProfile }: DoctorCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/4.4] overflow-hidden bg-mist-100">
        <Image
          src={doctor.image}
          alt={`Illustrative portrait representing the ${doctor.specialty} team`}
          fill
          sizes="(min-width: 1024px) 18rem, (min-width: 640px) 45vw, 90vw"
          className="object-cover object-top"
        />
        {doctor.unverified ? (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <BadgeInfo aria-hidden className="size-3.5" />
            Sample profile
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 text-center">
        <h3 className="text-lg font-semibold text-navy-900">{doctor.role}</h3>
        <p className="mt-1 text-sm font-medium text-blue-700">{doctor.specialty}</p>
        <p className="mt-1 text-xs text-slate-500">{doctor.experienceYears}+ years experience*</p>
        <button
          type="button"
          onClick={() => onViewProfile(doctor)}
          className="mt-4 inline-flex min-h-11 items-center justify-center gap-1.5 self-center rounded-full border border-mist-200 px-5 text-sm font-semibold text-navy-700 transition-colors hover:border-blue-200 hover:bg-mist-100"
        >
          View Profile
          <ArrowRight aria-hidden className="size-4" />
          <span className="sr-only">
            — {doctor.role}, {doctor.specialty}
          </span>
        </button>
      </div>
    </article>
  );
}
