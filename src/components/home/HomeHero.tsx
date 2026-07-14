import Image from "next/image";
import { Cpu, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { PrimaryButton, EmergencyButton } from "@/components/shared/buttons";
import { Float, Reveal } from "@/components/shared/motion";
import { hospital } from "@/config/hospital";

const trustIndicators = [
  { icon: ShieldCheck, label: "24x7 Emergency" },
  { icon: Users, label: "Expert Specialists" },
  { icon: Cpu, label: "Advanced Technology" },
  { icon: HeartHandshake, label: "Patient-First Care" },
];

export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative overflow-hidden border-b border-mist-200 bg-gradient-to-b from-mist-100 via-mist-50 to-white"
    >
      {/* Soft decorative glows — purely presentational. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-blue-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 size-80 rounded-full bg-emerald-100/50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
            <HeartHandshake aria-hidden className="size-3.5" />
            Care that puts you first
          </p>
          <h1
            id="home-hero-title"
            className="mt-5 text-4xl leading-tight font-bold tracking-tight text-navy-900 sm:text-5xl xl:text-6xl"
          >
            Trusted Care.
            <span className="block text-blue-700">Advanced Facilities.</span>
            <span className="block text-emerald-600">Better Recovery.</span>
          </h1>
          <div aria-hidden className="mt-5 h-1 w-16 rounded-full bg-emerald-500" />
          <p className="mt-5 max-w-lg text-base leading-relaxed sm:text-lg">
            {hospital.name} delivers compassionate, advanced and patient-first healthcare with
            modern infrastructure and a dedicated team.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PrimaryButton href="/patient-care#appointment">Book Appointment</PrimaryButton>
            <EmergencyButton />
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {trustIndicators.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-mist-200 bg-white px-3.5 py-2.5 text-sm font-medium text-navy-700 shadow-sm"
              >
                <item.icon aria-hidden className="size-4 text-blue-600" />
                {item.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="left" delay={0.15}>
          <Float>
            {/* The artwork has a white background, so present it as a framed card. */}
            <Image
              src="/images/home-hero.png"
              alt="Illustrated view of the Abhay Sai Hospital building with an ambulance at the emergency entrance"
              width={2578}
              height={1632}
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="h-auto w-full rounded-3xl border border-mist-200 shadow-xl shadow-navy-900/10"
              priority
            />
          </Float>
        </Reveal>
      </div>
    </section>
  );
}
