import type { Metadata } from "next";
import Image from "next/image";
import { BedDouble, Cpu, Droplets, HandHeart, ShieldCheck, Siren } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { FacilitiesExplorer } from "@/components/facilities/FacilitiesExplorer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { hospital, telHref } from "@/config/hospital";
import type { FeatureItem } from "@/types";

export const metadata: Metadata = {
  title: "Facilities",
  description: `Explore the facilities at ${hospital.name} — advanced ICUs, modern operation theatres, diagnostic imaging, comfortable rooms and more.`,
  alternates: { canonical: "/facilities" },
  openGraph: {
    title: `Facilities | ${hospital.name}`,
    description: "World-class facilities designed for your well-being.",
    url: "/facilities",
  },
};

const commitments: FeatureItem[] = [
  {
    id: "safety",
    title: "Patient Safety First",
    description: "Strict protocols and hygiene standards followed at every step.",
    icon: ShieldCheck,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "technology",
    title: "Advanced Technology",
    description: "Modern medical technology for accurate diagnosis and treatment.",
    icon: Cpu,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    id: "compassion",
    title: "Compassionate Care",
    description: "Our caring staff ensures personalised attention and emotional support.",
    icon: HandHeart,
    accent: "bg-violet-50 text-violet-600",
  },
  {
    id: "hygiene",
    title: "Clean & Hygienic Environment",
    description: "Well-maintained, sanitised and infection-controlled facilities.",
    icon: Droplets,
    accent: "bg-cyan-50 text-cyan-600",
  },
];

function CommitmentSection() {
  return (
    <section aria-labelledby="commitment-title" className="bg-mist-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Our Commitment"
            title="Safety. Comfort. Excellence."
            id="commitment-title"
            description="We continuously maintain our infrastructure and follow strict hygiene practices to keep every visit safe and comfortable."
            tone="green"
          />
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => (
            <StaggerItem key={item.id}>
              <FeatureCard feature={item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function AssistanceCta() {
  return (
    <section aria-labelledby="assistance-title" className="px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-navy-800 to-blue-700 text-white md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col items-start justify-center px-6 py-10 sm:px-10">
            <h2 id="assistance-title" className="text-2xl font-bold sm:text-3xl">
              Need Help or Have Any Questions?
            </h2>
            <p className="mt-2 text-sm text-blue-100">Our care team is here to assist you.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton
                href={telHref(hospital.phones.general)}
                className="bg-white text-navy-800 shadow-none hover:bg-blue-50"
              >
                Call Us: {hospital.phones.general}
              </PrimaryButton>
              <SecondaryButton
                href="/patient-care#appointment"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Book an Appointment
              </SecondaryButton>
            </div>
          </div>
          <div className="relative hidden min-h-64 md:block">
            <Image
              src="/images/facilities-cta.png"
              alt="A doctor talking warmly with an elderly patient during a consultation"
              fill
              sizes="(min-width: 768px) 32rem, 0px"
              className="object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Facilities"
        title="World-Class Facilities"
        highlight="Designed for Your Well-Being"
        description={`At ${hospital.name}, we combine advanced technology, modern infrastructure and patient-centred amenities to deliver safe, efficient and comfortable healthcare.`}
        chips={[
          { icon: Siren, label: "24x7 Emergency", sublabel: "Always ready" },
          { icon: BedDouble, label: "Comfortable Rooms", sublabel: "Restful recovery" },
          { icon: Cpu, label: "Modern Equipment", sublabel: "Advanced technology" },
        ]}
        image={{
          src: "/images/hospital-reception.png",
          alt: "Reception and entrance lobby of Abhay Sai Hospital with a modern front desk and seating",
        }}
      />
      <FacilitiesExplorer />
      <CommitmentSection />
      <AssistanceCta />
    </>
  );
}
