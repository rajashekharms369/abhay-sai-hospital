"use client";

import { useMemo, useState } from "react";
import type { FacilityCategory } from "@/types";
import { facilities, facilityCategories } from "@/data/facilities";
import { FacilityCard } from "@/components/shared/FacilityCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { SecondaryButton } from "@/components/shared/buttons";
import { StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

type CategoryFilter = FacilityCategory | "all";

export function FacilitiesExplorer() {
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filtered = useMemo(
    () =>
      category === "all"
        ? facilities
        : facilities.filter((facility) => facility.category === category),
    [category],
  );

  return (
    <section
      aria-labelledby="facilities-explorer-title"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6"
    >
      <h2
        id="facilities-explorer-title"
        className="text-center text-2xl font-bold text-navy-900 sm:text-3xl"
      >
        Our Facilities
      </h2>

      <div
        role="group"
        aria-label="Filter facilities by category"
        className="mt-7 flex flex-wrap justify-center gap-2"
      >
        {facilityCategories.map((item) => {
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

      <p aria-live="polite" className="mt-6 text-center text-sm text-slate-500">
        Showing {filtered.length} of {facilities.length} facilities
      </p>

      {filtered.length > 0 ? (
        <StaggerGroup key={category} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((facility) => (
            <StaggerItem key={facility.id}>
              <FacilityCard facility={facility} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      ) : (
        <div className="mt-8">
          <EmptyState
            title="No facilities in this category"
            description="Try another category to explore more of the hospital."
            action={
              <SecondaryButton onClick={() => setCategory("all")}>
                Show all facilities
              </SecondaryButton>
            }
          />
        </div>
      )}
    </section>
  );
}
