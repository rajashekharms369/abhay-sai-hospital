import Image from "next/image";
import { Check, Headset, HeartHandshake } from "lucide-react";
import {
  patientResponsibilities,
  patientRights,
  patientValues,
  careServices,
} from "@/data/patientCare";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { hospital, telHref } from "@/config/hospital";
import { cn } from "@/lib/utils";

export function PatientValues() {
  return (
    <section aria-label="Our patient-first values" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {patientValues.map((value) => (
          <StaggerItem key={value.id}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-mist-200 bg-white p-5 shadow-sm">
              <span
                aria-hidden
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-xl",
                  value.accent,
                )}
              >
                <value.icon className="size-6" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-navy-900">{value.title}</h2>
                <p className="mt-1 text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

export function ServicesWithAppointment() {
  return (
    <section
      id="services"
      aria-labelledby="care-services-title"
      className="scroll-mt-28 bg-mist-50 py-16"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Our Patient Care Services"
              title="Comprehensive Support for Your Well-Being"
              id="care-services-title"
              description="Care designed around your health at every stage — from prevention to recovery."
            />
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2">
            {careServices.map((service) => (
              <StaggerItem key={service.id}>
                <div className="h-full rounded-2xl border border-mist-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                  <span
                    aria-hidden
                    className={cn(
                      "flex size-12 items-center justify-center rounded-xl",
                      service.accent,
                    )}
                  >
                    <service.icon className="size-6" />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-navy-900">{service.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal direction="left" delay={0.1} className="lg:sticky lg:top-28">
          <div
            id="appointment"
            className="scroll-mt-28 rounded-3xl border border-mist-200 bg-white p-6 shadow-lg shadow-navy-900/5 sm:p-7"
          >
            <h2 className="text-xl font-bold text-navy-900">Book an Appointment</h2>
            <p className="mt-1 mb-6 text-sm">We&apos;re here to care for you.</p>
            <AppointmentForm />
            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-mist-50 p-4">
              <Headset aria-hidden className="mt-0.5 size-5 shrink-0 text-blue-600" />
              <p className="text-sm">
                Need help? Our care team is available 24x7.{" "}
                <a
                  href={telHref(hospital.phones.general)}
                  className="font-semibold text-blue-700 underline-offset-2 hover:underline"
                >
                  Call {hospital.phones.general}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function RightsAndResponsibilities() {
  return (
    <section
      id="rights"
      aria-label="How we care for you, your rights and responsibilities"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6"
    >
      <StaggerGroup className="grid gap-5 lg:grid-cols-3">
        <StaggerItem>
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-mist-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10] bg-mist-100">
              <Image
                src="/images/patient-care-team.png"
                alt="A nurse supporting an elderly patient with a warm smile"
                fill
                sizes="(min-width: 1024px) 26rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-lg font-bold text-navy-900">We Care For You At Every Step</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed">
                From the moment you walk in to your complete recovery, our team is with you —
                providing guidance, care and support.
              </p>
            </div>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="h-full rounded-3xl border border-blue-100 bg-blue-50/60 p-6">
            <h2 className="text-lg font-bold text-navy-900">Patient Rights</h2>
            <ul className="mt-4 space-y-2.5">
              {patientRights.map((right) => (
                <li key={right} className="flex items-start gap-2.5 text-sm">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-blue-600" />
                  {right}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="h-full rounded-3xl border border-amber-100 bg-amber-50/60 p-6">
            <h2 className="text-lg font-bold text-navy-900">Patient Responsibilities</h2>
            <ul className="mt-4 space-y-2.5">
              {patientResponsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-amber-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </StaggerGroup>
    </section>
  );
}

export function CareCommitmentCta() {
  return (
    <section aria-labelledby="care-cta-title" className="px-4 pb-4 sm:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-navy-800 to-blue-700 text-white md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col items-start justify-center px-6 py-10 sm:px-10">
            <span
              aria-hidden
              className="flex size-12 items-center justify-center rounded-2xl bg-white/15"
            >
              <HeartHandshake className="size-6" />
            </span>
            <h2 id="care-cta-title" className="mt-4 text-2xl font-bold sm:text-3xl">
              Your Health, Our Commitment
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              We are committed to delivering exceptional care with compassion and excellence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton
                href="/departments"
                className="bg-white text-navy-800 shadow-none hover:bg-blue-50"
              >
                Explore Our Departments
              </PrimaryButton>
              <SecondaryButton
                href="/contact-us"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Contact Us
              </SecondaryButton>
            </div>
          </div>
          <div className="relative hidden min-h-64 md:block">
            <Image
              src="/images/patient-care-cta.png"
              alt="Exterior view of the Abhay Sai Hospital building with an ambulance outside"
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
