import {
  Accessibility,
  Apple,
  CalendarCheck,
  ClipboardList,
  FileSearch,
  HandHeart,
  HeartPulse,
  Home,
  Pill,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
} from "lucide-react";
import type { CareService, FeatureItem, JourneyStep } from "@/types";

export const patientValues: FeatureItem[] = [
  {
    id: "patient-first",
    title: "Patient First",
    description: "Your health, comfort and dignity guide every decision we make.",
    icon: Users,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "safe-secure",
    title: "Safe & Secure",
    description: "Strict hygiene and infection-control practices at every step.",
    icon: ShieldCheck,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    id: "personalised",
    title: "Personalised Care",
    description: "Care plans tailored to your unique needs and preferences.",
    icon: HeartPulse,
    accent: "bg-violet-50 text-violet-600",
  },
  {
    id: "compassionate",
    title: "Compassionate Support",
    description: "We treat you with empathy, respect and kindness — always.",
    icon: HandHeart,
    accent: "bg-orange-50 text-orange-600",
  },
];

export const careServices: CareService[] = [
  {
    id: "preventive-care",
    name: "Preventive Care",
    description: "Regular health check-ups, screenings and vaccinations to keep you healthy.",
    icon: ShieldCheck,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "consultation",
    name: "Consultation & Diagnosis",
    description: "Expert consultations and accurate diagnosis for effective treatment.",
    icon: Stethoscope,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    id: "treatment-recovery",
    name: "Treatment & Recovery",
    description: "Advanced treatments and personalised care for faster recovery.",
    icon: HeartPulse,
    accent: "bg-violet-50 text-violet-600",
  },
  {
    id: "chronic-care",
    name: "Chronic Disease Management",
    description: "Ongoing care and monitoring for chronic conditions to improve quality of life.",
    icon: ClipboardList,
    accent: "bg-orange-50 text-orange-600",
  },
  {
    id: "pharmacy",
    name: "Pharmacy Services",
    description: "In-house pharmacy with genuine medicines and expert guidance.",
    icon: Pill,
    accent: "bg-sky-50 text-sky-600",
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation Care",
    description: "Physiotherapy and rehab programmes to help you regain strength and mobility.",
    icon: Accessibility,
    accent: "bg-teal-50 text-teal-600",
  },
  {
    id: "nutrition",
    name: "Nutrition & Wellness",
    description: "Personalised diet and wellness guidance for a healthier you.",
    icon: Apple,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "home-care",
    name: "Home Care Support",
    description: "Professional medical care and support in the comfort of your home.",
    icon: Home,
    accent: "bg-rose-50 text-rose-600",
  },
];

export const careJourney: JourneyStep[] = [
  {
    step: 1,
    title: "Book Appointment",
    description: "Schedule your visit online or by calling us.",
    icon: CalendarCheck,
  },
  {
    step: 2,
    title: "Consultation",
    description: "Meet our experts and discuss your health concerns.",
    icon: Stethoscope,
  },
  {
    step: 3,
    title: "Diagnosis & Plan",
    description: "Accurate diagnosis and a personalised treatment plan.",
    icon: FileSearch,
  },
  {
    step: 4,
    title: "Treatment",
    description: "Receive advanced treatment with compassionate care.",
    icon: HeartPulse,
  },
  {
    step: 5,
    title: "Recovery & Follow-up",
    description: "Continuous support and follow-up for a healthy tomorrow.",
    icon: UserCheck,
  },
];

export const patientRights: string[] = [
  "Right to quality care",
  "Right to information about your condition and treatment",
  "Right to privacy and confidentiality",
  "Right to informed consent",
  "Right to choose and refuse treatment",
  "Right to seek a second opinion",
];

export const patientResponsibilities: string[] = [
  "Provide accurate and complete health information",
  "Follow the agreed treatment plan",
  "Respect hospital policies, staff and other patients",
  "Keep appointments or inform us in advance",
  "Communicate openly with your care team",
];
