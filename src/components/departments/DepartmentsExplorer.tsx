"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BadgeInfo, CalendarPlus, Check, Phone, Search } from "lucide-react";
import type { Department, DepartmentCategory } from "@/types";
import { departmentCategories, departments } from "@/data/departments";
import { DepartmentCard } from "@/components/shared/DepartmentCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Modal } from "@/components/shared/Modal";
import { SecondaryButton } from "@/components/shared/buttons";
import { StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { hospital, telHref } from "@/config/hospital";
import { cn } from "@/lib/utils";

type CategoryFilter = DepartmentCategory | "all";

export function DepartmentsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [selected, setSelected] = useState<Department | null>(null);

  const filtered = useMemo(() => {
    const normalised = query.trim().toLowerCase();
    return departments.filter((department) => {
      const matchesCategory = category === "all" || department.category === category;
      const matchesQuery =
        normalised === "" ||
        department.name.toLowerCase().includes(normalised) ||
        department.description.toLowerCase().includes(normalised);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section
      aria-labelledby="departments-explorer-title"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2
          id="departments-explorer-title"
          className="text-2xl font-bold text-navy-900 sm:text-3xl"
        >
          Explore Our Specialities
        </h2>
        <div className="relative w-full max-w-sm">
          <Search
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate-400"
          />
          <label htmlFor="department-search" className="sr-only">
            Search departments
          </label>
          <input
            id="department-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search departments…"
            className="min-h-11 w-full rounded-full border border-mist-200 bg-white py-2.5 pr-4 pl-10 text-sm text-navy-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none"
          />
        </div>
      </div>

      <div
        role="group"
        aria-label="Filter departments by category"
        className="mt-6 flex flex-wrap gap-2"
      >
        {departmentCategories.map((item) => {
          const active = category === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              aria-pressed={active}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
                active
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-mist-200 bg-white text-slate-600 hover:border-blue-200 hover:text-navy-900",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-5 text-sm text-slate-500">
        Showing {filtered.length} of {departments.length} departments
      </p>

      {filtered.length > 0 ? (
        <StaggerGroup
          key={`${category}-${query}`}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((department) => (
            <StaggerItem key={department.id}>
              <DepartmentCard department={department} onLearnMore={setSelected} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      ) : (
        <div className="mt-6">
          <EmptyState
            title="No departments found"
            description="Try a different search term or category."
            action={
              <SecondaryButton
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                }}
              >
                Clear filters
              </SecondaryButton>
            }
          />
        </div>
      )}

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        labelledBy="department-modal-title"
      >
        {selected ? (
          <div>
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className={cn(
                  "flex size-14 shrink-0 items-center justify-center rounded-2xl",
                  selected.accent,
                )}
              >
                <selected.icon className="size-7" />
              </span>
              <div>
                <h2 id="department-modal-title" className="text-xl font-bold text-navy-900">
                  {selected.name}
                </h2>
                <p className="text-xs font-medium tracking-wide text-blue-700 uppercase">
                  {departmentCategories.find((c) => c.id === selected.category)?.label}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{selected.description}</p>
            <ul className="mt-4 space-y-2">
              {selected.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-xs leading-relaxed text-amber-800">
              <BadgeInfo aria-hidden className="mt-0.5 size-4 shrink-0" />
              Detailed department information (doctors, timings and procedures) will be published
              once confirmed by the hospital.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/patient-care#appointment"
                onClick={() => setSelected(null)}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <CalendarPlus aria-hidden className="size-4" />
                Book Appointment
              </Link>
              <a
                href={telHref(hospital.phones.general)}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-mist-200 px-5 text-sm font-semibold text-navy-700 transition-colors hover:bg-mist-100"
              >
                <Phone aria-hidden className="size-4" />
                Call {hospital.phones.general}
              </a>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
