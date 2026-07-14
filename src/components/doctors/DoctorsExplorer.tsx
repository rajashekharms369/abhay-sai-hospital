"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { Doctor } from "@/types";
import {
  doctorSortOptions,
  doctors,
  doctorSpecialties,
  experienceRanges,
  type DoctorSort,
} from "@/data/doctors";
import { DoctorCard } from "@/components/shared/DoctorCard";
import { DoctorProfileModal } from "@/components/doctors/DoctorProfileModal";
import { EmptyState } from "@/components/shared/EmptyState";
import { SecondaryButton } from "@/components/shared/buttons";
import { StaggerGroup, StaggerItem } from "@/components/shared/motion";

const PAGE_SIZE = 8;

const selectClasses =
  "min-h-11 w-full appearance-none rounded-full border border-mist-200 bg-white py-2.5 pr-9 pl-4 text-sm text-navy-900 focus:border-blue-400 focus:outline-none";

function FilterSelect({
  id,
  label,
  value,
  onChange,
  children,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={selectClasses}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

export function DoctorsExplorer() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("all");
  const [experience, setExperience] = useState("all");
  const [sort, setSort] = useState<DoctorSort>("experience-desc");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<Doctor | null>(null);

  const filtered = useMemo(() => {
    const normalised = query.trim().toLowerCase();
    const range = experienceRanges.find((r) => r.id === experience) ?? experienceRanges[0]!;
    const result = doctors.filter((doctor) => {
      const matchesQuery =
        normalised === "" ||
        doctor.role.toLowerCase().includes(normalised) ||
        doctor.specialty.toLowerCase().includes(normalised);
      const matchesSpecialty = specialty === "all" || doctor.specialty === specialty;
      const matchesExperience =
        doctor.experienceYears >= range.min && doctor.experienceYears < range.max;
      return matchesQuery && matchesSpecialty && matchesExperience;
    });

    return result.sort((a, b) => {
      switch (sort) {
        case "experience-asc":
          return a.experienceYears - b.experienceYears;
        case "specialty-asc":
          return a.specialty.localeCompare(b.specialty);
        default:
          return b.experienceYears - a.experienceYears;
      }
    });
  }, [query, specialty, experience, sort]);

  const visible = filtered.slice(0, visibleCount);

  const resetFilters = () => {
    setQuery("");
    setSpecialty("all");
    setExperience("all");
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section
      aria-labelledby="doctors-explorer-title"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6"
    >
      <h2 id="doctors-explorer-title" className="sr-only">
        Find a doctor
      </h2>

      <div className="rounded-3xl border border-mist-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="relative">
            <Search
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate-400"
            />
            <label htmlFor="doctor-search" className="sr-only">
              Search doctors by role or speciality
            </label>
            <input
              id="doctor-search"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search by role or speciality…"
              className="min-h-11 w-full rounded-full border border-mist-200 bg-white py-2.5 pr-4 pl-10 text-sm text-navy-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
            />
          </div>

          <FilterSelect
            id="doctor-specialty"
            label="Filter by speciality"
            value={specialty}
            onChange={(value) => {
              setSpecialty(value);
              setVisibleCount(PAGE_SIZE);
            }}
          >
            <option value="all">All Specialities</option>
            {doctorSpecialties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </FilterSelect>

          <FilterSelect
            id="doctor-experience"
            label="Filter by experience"
            value={experience}
            onChange={(value) => {
              setExperience(value);
              setVisibleCount(PAGE_SIZE);
            }}
          >
            {experienceRanges.map((range) => (
              <option key={range.id} value={range.id}>
                {range.label}
              </option>
            ))}
          </FilterSelect>

          <FilterSelect
            id="doctor-sort"
            label="Sort doctors"
            value={sort}
            onChange={(value) => setSort(value as DoctorSort)}
          >
            {doctorSortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                Sort: {option.label}
              </option>
            ))}
          </FilterSelect>
        </div>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-slate-500">
        Showing {visible.length} of {filtered.length} matching profiles
      </p>

      {visible.length > 0 ? (
        <>
          <StaggerGroup
            key={`${query}-${specialty}-${experience}-${sort}`}
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visible.map((doctor) => (
              <StaggerItem key={doctor.id}>
                <DoctorCard doctor={doctor} onViewProfile={setSelected} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <p className="mt-4 text-xs text-slate-400">
            *Experience figures are indicative placeholders pending hospital confirmation.
          </p>
          {filtered.length > visibleCount ? (
            <div className="mt-8 text-center">
              <SecondaryButton onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
                Load More Profiles
              </SecondaryButton>
            </div>
          ) : null}
        </>
      ) : (
        <div className="mt-6">
          <EmptyState
            title="No matching profiles"
            description="Try adjusting your search, speciality or experience filters."
            action={<SecondaryButton onClick={resetFilters}>Reset filters</SecondaryButton>}
          />
        </div>
      )}

      <DoctorProfileModal doctor={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
