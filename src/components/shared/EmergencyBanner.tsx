import { Phone, Siren } from "lucide-react";
import { hospital, telHref } from "@/config/hospital";
import { Reveal } from "@/components/shared/motion";

/** Restrained dark-red emergency CTA band used on the Home page. */
export function EmergencyBanner() {
  return (
    <section aria-labelledby="emergency-banner-title" className="px-4 sm:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-r from-red-700 to-red-600 px-6 py-10 text-white sm:px-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <span
              aria-hidden
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/15"
            >
              <Siren className="size-7" />
            </span>
            <div>
              <p className="text-sm font-medium text-red-100">Medical Emergency?</p>
              <h2 id="emergency-banner-title" className="mt-1 text-2xl font-bold sm:text-3xl">
                We&apos;re Here 24x7
              </h2>
              <p className="mt-1 text-sm text-red-100">
                Our emergency team is always ready to help.
              </p>
            </div>
          </div>
          <a
            href={telHref(hospital.phones.emergency)}
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-red-700 shadow-sm transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone aria-hidden className="size-5" />
            <span>
              <span className="block text-xs font-medium text-red-500">Call Emergency</span>
              {hospital.phones.emergency}
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
