import type { Doctor } from "@/types";

/**
 * PLACEHOLDER DOCTOR PROFILES — every entry is unverified.
 *
 * The portraits in /public/images/doctors are illustrative images supplied
 * with the design assets; they do not depict real hospital employees.
 * Neutral role titles are used instead of invented names. Replace with
 * hospital-confirmed profiles (see docs/HOSPITAL_CONTENT_REQUIRED.md).
 */
export const doctors: Doctor[] = [
  {
    id: "doc-cardiology",
    role: "Senior Consultant",
    specialty: "Cardiology",
    departmentId: "cardiology",
    experienceYears: 22,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-1.png",
    bio: "Leads preventive and diagnostic heart care with a patient-first approach.",
    unverified: true,
  },
  {
    id: "doc-neurology",
    role: "Senior Consultant",
    specialty: "Neurology",
    departmentId: "neurology",
    experienceYears: 18,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-2.png",
    bio: "Focuses on stroke care and disorders of the brain and nervous system.",
    unverified: true,
  },
  {
    id: "doc-orthopaedics",
    role: "Consultant",
    specialty: "Orthopaedics",
    departmentId: "orthopaedics",
    experienceYears: 16,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-3.png",
    bio: "Cares for bone and joint conditions, from fractures to joint replacement.",
    unverified: true,
  },
  {
    id: "doc-gastroenterology",
    role: "Consultant",
    specialty: "Gastroenterology",
    departmentId: "gastroenterology",
    experienceYears: 15,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-4.png",
    bio: "Manages digestive, liver and pancreatic conditions with endoscopic support.",
    unverified: true,
  },
  {
    id: "doc-paediatrics",
    role: "Consultant",
    specialty: "Paediatrics",
    departmentId: "paediatrics",
    experienceYears: 14,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-5.png",
    bio: "Provides compassionate healthcare for infants, children and adolescents.",
    unverified: true,
  },
  {
    id: "doc-gynaecology",
    role: "Senior Consultant",
    specialty: "Obstetrics & Gynaecology",
    departmentId: "gynaecology",
    experienceYears: 17,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-6.png",
    bio: "Supports women's health across pregnancy, delivery and beyond.",
    unverified: true,
  },
  {
    id: "doc-pulmonology",
    role: "Consultant",
    specialty: "Pulmonology",
    departmentId: "pulmonology",
    experienceYears: 13,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-7.png",
    bio: "Treats asthma, COPD and other respiratory conditions.",
    unverified: true,
  },
  {
    id: "doc-nephrology",
    role: "Consultant",
    specialty: "Nephrology",
    departmentId: "nephrology",
    experienceYears: 12,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-8.png",
    bio: "Manages kidney health, chronic kidney disease and dialysis planning.",
    unverified: true,
  },
  {
    id: "doc-general-surgery",
    role: "Consultant",
    specialty: "General Surgery",
    departmentId: "general-surgery",
    experienceYears: 11,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-9.png",
    bio: "Performs a broad range of elective and emergency surgical procedures.",
    unverified: true,
  },
  {
    id: "doc-pathology",
    role: "Consultant",
    specialty: "Pathology & Laboratory",
    departmentId: "pathology-laboratory",
    experienceYears: 10,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-10.png",
    bio: "Oversees diagnostic testing with a focus on accuracy and quality.",
    unverified: true,
  },
  {
    id: "doc-radiology",
    role: "Consultant",
    specialty: "Radiology & Imaging",
    departmentId: "radiology-imaging",
    experienceYears: 9,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-11.png",
    bio: "Delivers imaging-led diagnosis in coordination with treating teams.",
    unverified: true,
  },
  {
    id: "doc-emergency",
    role: "Consultant",
    specialty: "Emergency Medicine",
    departmentId: "emergency-trauma",
    experienceYears: 8,
    qualifications: "Qualifications to be confirmed",
    image: "/images/doctors/doctor-12.png",
    bio: "Leads rapid response and stabilisation in the 24x7 emergency unit.",
    unverified: true,
  },
];

export const doctorSpecialties: string[] = [...new Set(doctors.map((d) => d.specialty))];

export interface ExperienceRange {
  id: string;
  label: string;
  min: number;
  max: number;
}

export const experienceRanges: ExperienceRange[] = [
  { id: "all", label: "All Experience", min: 0, max: Infinity },
  { id: "0-10", label: "Up to 10 Years", min: 0, max: 10 },
  { id: "10-15", label: "10 – 15 Years", min: 10, max: 15 },
  { id: "15-plus", label: "15+ Years", min: 15, max: Infinity },
];

export type DoctorSort = "experience-desc" | "experience-asc" | "specialty-asc";

export const doctorSortOptions: { id: DoctorSort; label: string }[] = [
  { id: "experience-desc", label: "Most Experienced" },
  { id: "experience-asc", label: "Recently Qualified" },
  { id: "specialty-asc", label: "Speciality (A–Z)" },
];

export const featuredDoctors = doctors.slice(0, 4);
