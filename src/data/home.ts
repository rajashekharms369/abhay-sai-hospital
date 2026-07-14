import {
  Award,
  BedDouble,
  Cpu,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";
import type { FeatureItem, StatItem } from "@/types";
import { departments } from "@/data/departments";

/**
 * KEY STATISTICS — every figure below is an UNVERIFIED placeholder from the
 * design mockups (unverified: true). TODO: Confirm with hospital before
 * publishing. See docs/HOSPITAL_CONTENT_REQUIRED.md.
 */
export const hospitalStats: StatItem[] = [
  {
    id: "patients",
    value: "25,000+",
    label: "Patients Treated",
    icon: Users,
    accent: "bg-blue-50 text-blue-600",
    unverified: true,
  },
  {
    id: "doctors",
    value: "75+",
    label: "Expert Doctors",
    icon: UserRound,
    accent: "bg-emerald-50 text-emerald-600",
    unverified: true,
  },
  {
    id: "beds",
    value: "250+",
    label: "Hospital Beds",
    icon: BedDouble,
    accent: "bg-violet-50 text-violet-600",
    unverified: true,
  },
  {
    id: "specialties",
    value: `${departments.length}+`,
    label: "Specialities",
    icon: Layers,
    accent: "bg-orange-50 text-orange-600",
    unverified: false,
  },
  {
    id: "care",
    value: "24x7",
    label: "Emergency Care",
    icon: Award,
    accent: "bg-red-50 text-red-600",
    unverified: false,
  },
];

export const whyChooseUs: FeatureItem[] = [
  {
    id: "advanced-technology",
    title: "Advanced Technology",
    description: "Modern equipment supporting accurate diagnosis and better outcomes.",
    icon: Cpu,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    id: "patient-first",
    title: "Patient-First Approach",
    description: "Personalised care with compassion at every step of your journey.",
    icon: HeartHandshake,
    accent: "bg-violet-50 text-violet-600",
  },
  {
    id: "expert-team",
    title: "Expert Medical Team",
    description: "Qualified specialists working together across specialities.",
    icon: Stethoscope,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "safe-environment",
    title: "Safe & Hygienic Environment",
    description: "Strict hygiene protocols and infection-control practices for your safety.",
    icon: ShieldCheck,
    accent: "bg-orange-50 text-orange-600",
  },
];

/** Specialities highlighted on the Home page (subset of the full list). */
export const featuredSpecialtyIds = [
  "cardiology",
  "neurology",
  "orthopaedics",
  "gastroenterology",
  "pulmonology",
  "urology",
  "gynaecology",
  "paediatrics",
] as const;

export const featuredSpecialties = featuredSpecialtyIds
  .map((id) => departments.find((d) => d.id === id))
  .filter((d): d is (typeof departments)[number] => d !== undefined);
