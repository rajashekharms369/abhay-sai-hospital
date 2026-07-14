import type { Metadata } from "next";
import { HandHeart, HeartPulse, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import {
  CareCommitmentCta,
  PatientValues,
  RightsAndResponsibilities,
  ServicesWithAppointment,
} from "@/components/patient-care/PatientCareSections";
import { CareJourney } from "@/components/home/HomeSections";
import { hospital } from "@/config/hospital";

export const metadata: Metadata = {
  title: "Patient Care",
  description: `Patient care at ${hospital.name} — compassionate, personalised support at every step, appointment requests, patient rights and responsibilities.`,
  alternates: { canonical: "/patient-care" },
  openGraph: {
    title: `Patient Care | ${hospital.name}`,
    description: "You first, always — compassionate care at every step of your health journey.",
    url: "/patient-care",
  },
};

export default function PatientCarePage() {
  return (
    <>
      <PageHero
        breadcrumb="Patient Care"
        title="Patient Care"
        highlight="You First. Always."
        description={`At ${hospital.name}, we are dedicated to providing compassionate, personalised and continuous care at every step of your healthcare journey.`}
        chips={[
          { icon: ShieldCheck, label: "Safe & Secure", sublabel: "Strict hygiene practices" },
          { icon: HeartPulse, label: "Personalised Care", sublabel: "Tailored to you" },
          { icon: HandHeart, label: "Compassionate Support", sublabel: "Empathy always" },
        ]}
        image={{
          src: "/images/patient-care-hero.png",
          alt: "A doctor consulting warmly with a smiling family at the hospital",
          width: 3114,
          height: 1344,
        }}
      />
      <PatientValues />
      <ServicesWithAppointment />
      <CareJourney id="journey" />
      <RightsAndResponsibilities />
      <CareCommitmentCta />
    </>
  );
}
