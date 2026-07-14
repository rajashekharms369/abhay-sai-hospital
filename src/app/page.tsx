import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import {
  CareJourney,
  HomeStats,
  SpecialtiesOverview,
  WhyChooseUs,
} from "@/components/home/HomeSections";
import { FeaturedDoctors } from "@/components/home/FeaturedDoctors";
import { EmergencyBanner } from "@/components/shared/EmergencyBanner";
import { hospital } from "@/config/hospital";

export const metadata: Metadata = {
  title: { absolute: `${hospital.name} — ${hospital.tagline}` },
  description:
    "Abhay Sai Hospital is a multispecialty hospital offering 24x7 emergency care, expert doctors and modern facilities with a patient-first approach.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${hospital.name} — ${hospital.tagline}`,
    description:
      "Multispecialty hospital with 24x7 emergency care, expert doctors and modern facilities.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <SpecialtiesOverview />
      <WhyChooseUs />
      <CareJourney />
      <FeaturedDoctors />
      <EmergencyBanner />
    </>
  );
}
