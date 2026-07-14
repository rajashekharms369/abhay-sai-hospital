import Image from "next/image";
import { BadgeInfo, Compass, Eye, Gem, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatCard, StatsFootnote } from "@/components/shared/StatCard";
import { PrimaryButton, SecondaryButton } from "@/components/shared/buttons";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/motion";
import { hospitalStats } from "@/data/home";
import { hospital } from "@/config/hospital";

const missionVisionValues = [
  {
    id: "mission",
    title: "Our Mission",
    icon: Compass,
    accent: "bg-emerald-50 text-emerald-600",
    body: "To provide exceptional, affordable and ethical healthcare services with empathy and advanced medical technology.",
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: Eye,
    accent: "bg-blue-50 text-blue-600",
    body: "To be a trusted healthcare provider recognised for clinical excellence and patient satisfaction.",
  },
  {
    id: "values",
    title: "Our Values",
    icon: Gem,
    accent: "bg-violet-50 text-violet-600",
    body: "Compassion · Integrity · Excellence · Innovation · Teamwork",
  },
];

/**
 * PLACEHOLDER timeline — milestones and dates are illustrative only and
 * clearly labelled in the UI. TODO: Confirm with hospital.
 */
const placeholderTimeline = [
  {
    year: "Foundation",
    title: "The beginning",
    body: "Established with a mission to provide quality healthcare to the community.",
    dot: "bg-emerald-500",
  },
  {
    year: "Growth",
    title: "Expansion",
    body: "New specialities and advanced diagnostic facilities added to serve more patients.",
    dot: "bg-blue-500",
  },
  {
    year: "Modernisation",
    title: "Upgraded infrastructure",
    body: "Advanced ICUs, modern operation theatres and digital patient systems.",
    dot: "bg-violet-500",
  },
  {
    year: "Today",
    title: "Towards the future",
    body: "A continuing commitment to excellence with innovation, compassion and world-class care.",
    dot: "bg-orange-500",
  },
];

/** Neutral leadership roles — names/photos pending hospital confirmation. */
const leadershipRoles = [
  { role: "Chief Medical Director", focus: "Clinical governance & quality of care" },
  { role: "Medical Superintendent", focus: "Day-to-day medical operations" },
  { role: "Director — Operations", focus: "Infrastructure & patient services" },
  { role: "Chief Administrative Officer", focus: "Administration & patient experience" },
];

export function MissionVisionValues() {
  return (
    <section
      aria-label="Mission, vision and values"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
    >
      <StaggerGroup className="grid gap-4 md:grid-cols-3">
        {missionVisionValues.map((item) => (
          <StaggerItem key={item.id}>
            <div className="h-full rounded-2xl border border-mist-200 bg-white p-6 shadow-sm">
              <span
                aria-hidden
                className={`flex size-12 items-center justify-center rounded-xl ${item.accent}`}
              >
                <item.icon className="size-6" />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-navy-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed">{item.body}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}

export function AboutStats() {
  return (
    <section aria-label="Hospital key figures" className="bg-mist-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {hospitalStats.map((stat) => (
            <StaggerItem key={stat.id}>
              <StatCard stat={stat} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <StatsFootnote stats={hospitalStats} />
      </div>
    </section>
  );
}

export function OurStory() {
  return (
    <section aria-labelledby="story-title" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow="Our Story"
            title="A Commitment to Healing and Trust"
            id="story-title"
            description={`${hospital.name} was founded with a vision to deliver quality, affordable and accessible healthcare, and has grown into a trusted name in multispecialty medical services.`}
            tone="green"
          />
          <p className="mt-6 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
            <BadgeInfo aria-hidden className="mt-0.5 size-4 shrink-0" />
            The milestones below are a placeholder outline — exact history and dates will be added
            once confirmed by the hospital.
          </p>
          <ol className="mt-8 space-y-7 border-l-2 border-mist-200 pl-6">
            {placeholderTimeline.map((item) => (
              <li key={item.year} className="relative">
                <span
                  aria-hidden
                  className={`absolute top-1.5 -left-[1.95rem] size-3 rounded-full ${item.dot}`}
                />
                <p className="text-sm font-bold tracking-wide text-blue-700 uppercase">
                  {item.year}
                </p>
                <h3 className="mt-0.5 text-base font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal direction="left" delay={0.1} className="lg:sticky lg:top-28">
          <figure>
            <div className="overflow-hidden rounded-3xl border border-mist-200 shadow-lg shadow-navy-900/5">
              <Image
                src="/images/hospital-reception.png"
                alt="Reception and entrance lobby of Abhay Sai Hospital with a modern front desk and seating"
                width={1448}
                height={1086}
                sizes="(min-width: 1024px) 44rem, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-slate-500">
              The reception and welcome area at {hospital.name}.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section aria-labelledby="leadership-title" className="bg-mist-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Our Leadership"
            title="Guided by Experience. Driven by Compassion."
            id="leadership-title"
            description="Leadership profiles will be published once names, photographs and credentials are confirmed by the hospital."
            tone="violet"
          />
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leadershipRoles.map((leader) => (
            <StaggerItem key={leader.role}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-mist-200 bg-white p-6 text-center shadow-sm">
                <span
                  aria-hidden
                  className="flex size-16 items-center justify-center rounded-full bg-mist-100 text-slate-400"
                >
                  <UserRound className="size-8" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-900">{leader.role}</h3>
                <p className="mt-1 text-sm">{leader.focus}</p>
                <p className="mt-3 rounded-full bg-mist-100 px-3 py-1 text-xs text-slate-500">
                  Profile to be confirmed
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function AboutCta() {
  return (
    <section aria-labelledby="about-cta-title" className="px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-gradient-to-r from-navy-800 to-blue-700 px-6 py-12 text-center text-white sm:px-10">
          <h2 id="about-cta-title" className="text-2xl font-bold sm:text-3xl">
            Your Health, Our Commitment
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-100">
            Experience compassionate, patient-first care. Book a consultation or explore our
            departments to find the right specialist.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton
              href="/patient-care#appointment"
              className="bg-white text-navy-800 shadow-none hover:bg-blue-50"
            >
              Book Appointment
            </PrimaryButton>
            <SecondaryButton
              href="/departments"
              className="border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              Explore Departments
            </SecondaryButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
