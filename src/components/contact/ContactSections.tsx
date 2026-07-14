import {
  Ambulance,
  Bus,
  CalendarCheck,
  Car,
  CircleParking,
  Clock,
  ExternalLink,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  ShieldQuestion,
  Siren,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { hospital, formattedAddress, telHref } from "@/config/hospital";
import { cn } from "@/lib/utils";

interface HotlineCard {
  icon: LucideIcon;
  accent: string;
  title: string;
  phone: string;
  note: string;
}

const hotlines: HotlineCard[] = [
  {
    icon: Siren,
    accent: "bg-red-50 text-red-600",
    title: "Emergency (24x7)",
    phone: hospital.phones.emergency,
    note: "Immediate medical care",
  },
  {
    icon: Ambulance,
    accent: "bg-blue-50 text-blue-600",
    title: "Ambulance (24x7)",
    phone: hospital.phones.ambulance,
    note: "Quick ambulance service",
  },
  {
    icon: PhoneCall,
    accent: "bg-emerald-50 text-emerald-600",
    title: "General Enquiry",
    phone: hospital.phones.general,
    note: "We're here to help",
  },
];

export function ContactHotlines() {
  return (
    <section aria-label="Hotline numbers" className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <StaggerGroup className="grid gap-4 md:grid-cols-3">
        {hotlines.map((card) => (
          <StaggerItem key={card.title}>
            <a
              href={telHref(card.phone)}
              className="flex h-full items-center gap-4 rounded-2xl border border-mist-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                aria-hidden
                className={cn(
                  "flex size-13 shrink-0 items-center justify-center rounded-full",
                  card.accent,
                )}
              >
                <card.icon className="size-6" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">{card.title}</span>
                <span className="block text-lg font-bold text-blue-700">{card.phone}</span>
                <span className="block text-xs text-slate-500">{card.note}</span>
              </span>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  accent,
  title,
  children,
}: {
  icon: LucideIcon;
  accent: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-mist-200 bg-white p-5 shadow-sm">
      <span
        aria-hidden
        className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", accent)}
      >
        <Icon className="size-5" />
      </span>
      <div className="min-w-0 text-sm">
        <h3 className="font-semibold text-navy-900">{title}</h3>
        <div className="mt-1 space-y-1 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function ContactFormAndInfo() {
  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-title"
      className="scroll-mt-28 bg-mist-50 py-16"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-3xl border border-mist-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 id="contact-form-title" className="text-2xl font-bold text-navy-900">
              Send Us a Message
            </h2>
            <p className="mt-1 mb-6 text-sm">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1} className="space-y-4">
          <InfoRow icon={MapPin} accent="bg-blue-50 text-blue-600" title="Our Address">
            <p>{formattedAddress()}</p>
            <p className="text-xs text-amber-700">Address pending final confirmation.</p>
          </InfoRow>
          <InfoRow icon={Phone} accent="bg-emerald-50 text-emerald-600" title="Phone Numbers">
            <p>
              General:{" "}
              <a
                href={telHref(hospital.phones.general)}
                className="font-medium text-blue-700 hover:underline"
              >
                {hospital.phones.general}
              </a>
            </p>
            <p>
              Appointments:{" "}
              <a
                href={telHref(hospital.phones.appointments)}
                className="font-medium text-blue-700 hover:underline"
              >
                {hospital.phones.appointments}
              </a>
            </p>
          </InfoRow>
          <InfoRow icon={Mail} accent="bg-violet-50 text-violet-600" title="Email Us">
            <p>
              <a
                href={`mailto:${hospital.emails.info}`}
                className="font-medium break-all text-blue-700 hover:underline"
              >
                {hospital.emails.info}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${hospital.emails.appointments}`}
                className="font-medium break-all text-blue-700 hover:underline"
              >
                {hospital.emails.appointments}
              </a>
            </p>
          </InfoRow>
          <InfoRow icon={Clock} accent="bg-orange-50 text-orange-600" title="Working Hours">
            <p>{hospital.hours.hospital}</p>
            <p>Including Sundays &amp; public holidays</p>
          </InfoRow>
          <InfoRow icon={Siren} accent="bg-red-50 text-red-600" title="Emergency Support (24x7)">
            <p>
              <a
                href={telHref(hospital.phones.emergency)}
                className="text-base font-bold text-red-700 hover:underline"
              >
                {hospital.phones.emergency}
              </a>
            </p>
            <p>Critical care available round the clock</p>
          </InfoRow>
        </Reveal>
      </div>
    </section>
  );
}

export function MapAndDirections() {
  return (
    <section aria-labelledby="map-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Find Us Easily"
          title="Location & Directions"
          id="map-title"
          description="We're easy to reach by road and public transport."
          tone="green"
        />
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          {hospital.maps.embedUrl ? (
            <div className="overflow-hidden rounded-3xl border border-mist-200 shadow-sm">
              <iframe
                src={hospital.maps.embedUrl}
                title={`Map showing the location of ${hospital.name}`}
                className="h-96 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-mist-200 bg-mist-50 p-8 text-center">
              <span
                aria-hidden
                className="flex size-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm"
              >
                <MapPin className="size-7" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                Interactive map coming soon
              </h3>
              <p className="mt-1 max-w-sm text-sm">
                The Google Maps embed will appear here once the hospital confirms its official map
                location.
              </p>
              {hospital.maps.link ? (
                <a
                  href={hospital.maps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-mist-200 bg-white px-5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                >
                  View on Google Maps
                  <ExternalLink aria-hidden className="size-4" />
                </a>
              ) : null}
            </div>
          )}
        </Reveal>
        <Reveal direction="left" delay={0.1}>
          <div className="h-full rounded-3xl border border-mist-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-navy-900">Getting Here</h3>
            <ul className="mt-5 space-y-5">
              <li className="flex items-start gap-3.5">
                <span
                  aria-hidden
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
                >
                  <Car className="size-5" />
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-navy-900">By Car</p>
                  <p className="mt-0.5">Use your maps app for the best route to the hospital.</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span
                  aria-hidden
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
                >
                  <Bus className="size-5" />
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-navy-900">By Public Transport</p>
                  <p className="mt-0.5">
                    City buses and auto rickshaws are available from major hubs nearby.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span
                  aria-hidden
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600"
                >
                  <CircleParking className="size-5" />
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-navy-900">Parking</p>
                  <p className="mt-0.5">Secure on-site parking for patients and visitors.</p>
                </div>
              </li>
            </ul>
            <p className="mt-6 rounded-xl bg-amber-50 px-3.5 py-2.5 text-xs leading-relaxed text-amber-800">
              Detailed travel directions will be added once the hospital confirms its exact location
              details.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const helpCategories = [
  {
    icon: UserRound,
    accent: "bg-emerald-50 text-emerald-600",
    title: "Reception",
    body: "General enquiries and information assistance.",
  },
  {
    icon: CalendarCheck,
    accent: "bg-blue-50 text-blue-600",
    title: "Appointments",
    body: "Book, reschedule or manage appointments.",
  },
  {
    icon: Siren,
    accent: "bg-red-50 text-red-600",
    title: "Emergency",
    body: "24x7 emergency care and critical support.",
  },
  {
    icon: ShieldQuestion,
    accent: "bg-violet-50 text-violet-600",
    title: "Billing & Insurance Desk",
    body: "Help with billing questions and insurance assistance.",
  },
  {
    icon: HeartHandshake,
    accent: "bg-orange-50 text-orange-600",
    title: "Patient Support",
    body: "Guidance and support services for patients.",
  },
  {
    icon: Ambulance,
    accent: "bg-cyan-50 text-cyan-600",
    title: "Ambulance Service",
    body: "Quick and reliable ambulance assistance.",
  },
];

export function HelpCategories() {
  return (
    <section aria-labelledby="help-categories-title" className="bg-mist-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            title="How Can We Help You?"
            id="help-categories-title"
            align="center"
            description="Reach the right desk faster — every team is available through our general enquiry line."
          />
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {helpCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-mist-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <span
                  aria-hidden
                  className={cn(
                    "flex size-13 items-center justify-center rounded-full",
                    category.accent,
                  )}
                >
                  <category.icon className="size-6" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-navy-900">{category.title}</h3>
                <p className="mt-1.5 flex-1 text-sm">{category.body}</p>
                <a
                  href={telHref(hospital.phones.general)}
                  className="mt-4 inline-flex min-h-11 items-center rounded-full border border-mist-200 px-5 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-50"
                >
                  Contact Us<span className="sr-only"> — {category.title}</span>
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function ContactFinalCta() {
  return (
    <section aria-labelledby="contact-cta-title" className="px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-r from-navy-800 to-blue-700 px-6 py-10 text-white sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="contact-cta-title" className="text-2xl font-bold sm:text-3xl">
              Still Have Questions? We&apos;re Here to Help!
            </h2>
            <p className="mt-1.5 text-sm text-blue-100">
              Call us now or book an appointment online for quick assistance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton
              href={telHref(hospital.phones.general)}
              className="bg-white text-navy-800 shadow-none hover:bg-blue-50"
            >
              Call Now: {hospital.phones.general}
            </PrimaryButton>
            <SecondaryButton
              href="/patient-care#appointment"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              Book an Appointment
            </SecondaryButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
