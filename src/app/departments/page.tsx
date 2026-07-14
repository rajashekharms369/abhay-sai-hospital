import type { Metadata } from "next";
import { Cpu, HeartHandshake, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { DepartmentsExplorer } from "@/components/departments/DepartmentsExplorer";
import { Reveal } from "@/components/shared/motion";
import { hospital, telHref } from "@/config/hospital";

export const metadata: Metadata = {
  title: "Departments",
  description: `Explore 25 medical departments at ${hospital.name} — from emergency and critical care to cardiology, neurology, orthopaedics and more.`,
  alternates: { canonical: "/departments" },
  openGraph: {
    title: `Departments | ${hospital.name}`,
    description: "Comprehensive healthcare services across a wide range of specialities.",
    url: "/departments",
  },
};

function DepartmentsHelpCta() {
  return (
    <section aria-labelledby="departments-help-title" className="px-4 pb-4 sm:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-r from-navy-800 to-blue-700 px-6 py-10 text-white sm:px-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <span
              aria-hidden
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15"
            >
              <Phone className="size-7" />
            </span>
            <div>
              <h2 id="departments-help-title" className="text-2xl font-bold sm:text-3xl">
                Need Help Finding the Right Department?
              </h2>
              <p className="mt-1 text-sm text-blue-100">
                Our care team is here to guide you to the right specialist.
              </p>
            </div>
          </div>
          <a
            href={telHref(hospital.phones.general)}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy-800 shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Call Us Now · {hospital.phones.general}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default function DepartmentsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Departments"
        title="Our Departments"
        description="Comprehensive healthcare services across a wide range of specialities — expert care, advanced technology and compassion under one roof."
        chips={[
          { icon: Users, label: "Expert Specialists", sublabel: "Qualified teams" },
          { icon: Cpu, label: "Advanced Technology", sublabel: "Modern equipment" },
          { icon: HeartHandshake, label: "Patient-Centred Care", sublabel: "Your health first" },
        ]}
        image={{
          src: "/images/home-hero.png",
          alt: "Illustrated view of the Abhay Sai Hospital building with an ambulance at the emergency entrance",
          width: 2578,
          height: 1632,
        }}
      />
      <DepartmentsExplorer />
      <DepartmentsHelpCta />
    </>
  );
}
