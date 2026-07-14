import type { Metadata } from "next";
import { Clock, Headset, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import {
  ContactFinalCta,
  ContactFormAndInfo,
  ContactHotlines,
  HelpCategories,
  MapAndDirections,
} from "@/components/contact/ContactSections";
import { hospital } from "@/config/hospital";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${hospital.name} — emergency and ambulance numbers, enquiry form, address, email, opening hours and directions.`,
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: `Contact Us | ${hospital.name}`,
    description: "We're here to help you, anytime — 24x7.",
    url: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact Us"
        title="Contact Us"
        highlight="We're Here to Help You, Anytime."
        description="Have a question, need assistance, or want to book an appointment? Our team is ready to assist you with compassion and care."
        chips={[
          { icon: Headset, label: "24x7 Support", sublabel: "Always reachable" },
          { icon: Clock, label: "Open 24 Hours", sublabel: "All week" },
          { icon: MapPin, label: "Easy to Reach", sublabel: "Central location" },
        ]}
        image={{
          src: "/images/hospital-reception.png",
          alt: "Reception and entrance lobby of Abhay Sai Hospital with a modern front desk and seating",
        }}
      />
      <ContactHotlines />
      <ContactFormAndInfo />
      <MapAndDirections />
      <HelpCategories />
      <ContactFinalCta />
    </>
  );
}
