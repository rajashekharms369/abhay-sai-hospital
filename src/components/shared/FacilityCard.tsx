import Image from "next/image";
import type { Facility } from "@/types";

interface FacilityCardProps {
  facility: Facility;
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] bg-mist-100">
        <Image
          src={facility.image}
          alt={facility.imageAlt}
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-navy-900">{facility.name}</h3>
        <p className="mt-2 text-sm leading-relaxed">{facility.description}</p>
      </div>
    </article>
  );
}
