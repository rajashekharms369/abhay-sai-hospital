import type { Metadata } from "next";
import { BadgeInfo, HeartHandshake, Layers, Users } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { DoctorsExplorer } from "@/components/doctors/DoctorsExplorer";
import { Reveal } from "@/components/shared/motion";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons";
import { hospital, telHref } from "@/config/hospital";

export const metadata: Metadata = {
  title: "Our Doctors",
  description: `Meet the medical team of ${hospital.name}. Search and filter specialists by speciality and experience, and request an appointment.`,
  alternates: { canonical: "/doctors" },
  openGraph: {
    title: `Our Doctors | ${hospital.name}`,
    description: "Find the right specialist and request an appointment.",
    url: "/doctors",
  },
};

function DoctorsDisclaimer() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <p className="mt-10 -mb-4 flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-sm leading-relaxed text-amber-800">
        <BadgeInfo aria-hidden className="mt-0.5 size-5 shrink-0" />
        The profiles below are sample placeholders with illustrative portraits — they do not depict
        real hospital employees. Confirmed doctor names, photos, qualifications and timings will be
        published once provided by the hospital.
      </p>
    </div>
  );
}

function DoctorsCta() {
  return (
    <section aria-labelledby="doctors-cta-title" className="px-4 pb-4 sm:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-mist-200 bg-mist-50 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="doctors-cta-title" className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Book an Appointment with Our Experts
            </h2>
            <p className="mt-1.5 text-sm">
              Choose your preferred department and time slot for a seamless appointment experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="/patient-care#appointment">Book Appointment</PrimaryButton>
            <SecondaryButton href={telHref(hospital.phones.appointments)}>
              Call: {hospital.phones.appointments}
            </SecondaryButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Doctors"
        title="Our Doctors"
        description="A team committed to providing exceptional care with compassion, expertise and advanced medical knowledge."
        chips={[
          { icon: Users, label: "Specialist Team", sublabel: "Across departments" },
          { icon: Layers, label: "25+ Specialities", sublabel: "Under one roof" },
          { icon: HeartHandshake, label: "Patient-First", sublabel: "Compassionate care" },
        ]}
        image={{
          src: "/images/doctors-hero.png",
          alt: "Group of doctors in white coats standing together in a hospital corridor",
          width: 1672,
          height: 941,
        }}
      />
      <DoctorsDisclaimer />
      <DoctorsExplorer />
      <DoctorsCta />
    </>
  );
}
