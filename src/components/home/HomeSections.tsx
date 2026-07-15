import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hospitalStats, whyChooseUs, featuredSpecialties } from "@/data/home";
import { careJourney } from "@/data/patientCare";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCard, StatsFootnote } from "@/components/shared/StatCard";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

export function HomeStats() {
  return (
    <section aria-label="Hospital key figures" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {hospitalStats.map((stat) => (
          <StaggerItem key={stat.id}>
            <StatCard stat={stat} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <StatsFootnote stats={hospitalStats} />
    </section>
  );
}

export function SpecialtiesOverview() {
  return (
    <section aria-labelledby="specialties-title" className="bg-mist-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our Specialities"
            title="Comprehensive Care Across Specialities"
            id="specialties-title"
            description="From heart health to child care — expert teams under one roof."
          />
          <Link
            href="/departments"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          >
            View All Specialities
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </Reveal>
        <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {featuredSpecialties.map((department) => (
            <StaggerItem key={department.id}>
              <Link
                href="/departments"
                className="flex h-full flex-col items-center rounded-2xl border border-mist-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <span
                  aria-hidden
                  className={cn(
                    "flex size-14 items-center justify-center rounded-full",
                    department.accent,
                  )}
                >
                  <department.icon className="size-7" />
                </span>
                <span className="mt-3 text-sm font-semibold text-navy-900">{department.name}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Why Choose Abhay Sai Hospital?"
          title="Experience. Empathy. Excellence."
          tone="violet"
          id="why-title"
        />
      </Reveal>
      <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
        {whyChooseUs.map((feature) => (
          <StaggerItem key={feature.id}>
            <FeatureCard feature={feature} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

export function CareJourney({ id = "journey" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby="journey-title" className="bg-mist-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Your Care Journey With Us"
            title="Five Simple Steps to Better Health"
            align="center"
            tone="green"
            id="journey-title"
          />
        </Reveal>
        <StaggerGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {careJourney.map((step, index) => (
            <StaggerItem key={step.step} className="relative">
              <div className="flex h-full flex-col items-center text-center">
                <span
                  aria-hidden
                  className="flex size-14 items-center justify-center rounded-2xl border border-mist-200 bg-white text-blue-600 shadow-sm"
                >
                  <step.icon className="size-7" />
                </span>
                <p className="mt-4 text-xs font-bold tracking-wide text-blue-600">
                  STEP {String(step.step).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-base font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < careJourney.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute top-7 left-[calc(50%+2.5rem)] hidden w-[calc(100%-5rem)] border-t-2 border-dashed border-blue-200 lg:block"
                />
              ) : null}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
