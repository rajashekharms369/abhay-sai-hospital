import type { Metadata } from "next";
import { Cpu, ShieldCheck, Users } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import {
  AboutCta,
  AboutStats,
  Leadership,
  MissionVisionValues,
  OurStory,
} from "@/components/about/AboutSections";
import { hospital } from "@/config/hospital";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${hospital.name} — a multispecialty hospital committed to compassionate, patient-first care with modern infrastructure.`,
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: `About Us | ${hospital.name}`,
    description: "Our mission, values and commitment to compassionate multispecialty care.",
    url: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        title="Compassionate Care."
        highlight="Trusted Excellence."
        description={`${hospital.name} is a multispecialty healthcare institution committed to delivering quality medical care with compassion, innovation and integrity.`}
        chips={[
          { icon: ShieldCheck, label: "Patient First" },
          { icon: Users, label: "Expert Doctors" },
          { icon: Cpu, label: "Advanced Technology" },
        ]}
        image={{
          src: "/images/home-hero.png",
          alt: "Illustrated view of the Abhay Sai Hospital building with an ambulance at the emergency entrance",
          width: 2578,
          height: 1632,
        }}
      />
      <MissionVisionValues />
      <AboutStats />
      <OurStory />
      <Leadership />
      <AboutCta />
    </>
  );
}
