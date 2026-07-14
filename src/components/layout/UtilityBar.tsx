import { Ambulance, Clock, Phone, Siren } from "lucide-react";
import { hospital, telHref } from "@/config/hospital";

/** Slim info bar above the main navbar (desktop only). */
export function UtilityBar() {
  return (
    <div className="hidden bg-navy-800 text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs font-medium">
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-2">
            <Siren aria-hidden className="size-3.5 text-red-300" />
            24x7 Emergency Care
          </p>
          <p className="flex items-center gap-2">
            <Clock aria-hidden className="size-3.5 text-emerald-300" />
            Mon – Sun: Open 24 Hours
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={telHref(hospital.phones.emergency)}
            className="flex items-center gap-2 transition-colors hover:text-blue-200"
          >
            <Phone aria-hidden className="size-3.5" />
            Emergency: {hospital.phones.emergency}
          </a>
          <a
            href={telHref(hospital.phones.ambulance)}
            className="flex items-center gap-2 transition-colors hover:text-blue-200"
          >
            <Ambulance aria-hidden className="size-3.5" />
            Ambulance: {hospital.phones.ambulance}
          </a>
        </div>
      </div>
    </div>
  );
}
