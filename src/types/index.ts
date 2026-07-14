import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export type DepartmentCategory = "clinical" | "surgical" | "support";

export interface Department {
  id: string;
  name: string;
  category: DepartmentCategory;
  icon: LucideIcon;
  /** Tailwind classes for the icon tile (bg + text colour). */
  accent: string;
  description: string;
  highlights: string[];
}

export interface Doctor {
  id: string;
  /**
   * Neutral placeholder title (e.g. "Senior Consultant"). Real doctor names
   * are intentionally not used until confirmed by the hospital.
   */
  role: string;
  specialty: string;
  departmentId: string;
  /** Indicative placeholder value — TODO: Confirm with hospital. */
  experienceYears: number;
  /** Placeholder qualification line — TODO: Confirm with hospital. */
  qualifications: string;
  image: string;
  bio: string;
  /** True while profile content is awaiting hospital confirmation. */
  unverified: boolean;
}

export type FacilityCategory = "clinical" | "amenities" | "technology" | "support";

export interface Facility {
  id: string;
  name: string;
  category: FacilityCategory;
  image: string;
  imageAlt: string;
  description: string;
}

export interface CareService {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
  accent: string;
  /** True while the figure is a placeholder awaiting hospital confirmation. */
  unverified: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}
