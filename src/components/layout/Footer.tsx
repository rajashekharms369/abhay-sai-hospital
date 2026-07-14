import Image from "next/image";
import Link from "next/link";
import { Ambulance, Mail, MapPin, Phone, Siren } from "lucide-react";
import { hospital, formattedAddress, telHref } from "@/config/hospital";
import { legalLinks, mainNavigation, patientCareLinks, serviceLinks } from "@/config/navigation";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { SocialLinks } from "@/components/shared/SocialLinks";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="text-sm font-semibold tracking-wide text-navy-900 uppercase">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-blue-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-mist-200 bg-mist-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Abhay Sai Hospital — Home"
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={56}
                height={56}
                className="size-14 rounded-full object-contain"
              />
              <span>
                <span className="block text-lg font-bold text-navy-900">{hospital.name}</span>
                <span className="block text-xs font-medium text-blue-700">{hospital.tagline}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{hospital.shortDescription}</p>
            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>

          <FooterColumn title="Quick Links" links={mainNavigation} />
          <FooterColumn title="Our Services" links={serviceLinks} />
          <FooterColumn title="Patient Care" links={patientCareLinks} />

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-navy-900 uppercase">
              Stay Connected
            </h3>
            <p className="mt-4 text-sm">Subscribe for health tips and hospital updates.</p>
            <div className="mt-3">
              <NewsletterForm />
            </div>
            <address className="mt-5 space-y-2.5 text-sm not-italic">
              <p className="flex items-start gap-2.5">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-blue-600" />
                {formattedAddress()}
              </p>
              <a
                href={`mailto:${hospital.emails.info}`}
                className="flex items-center gap-2.5 transition-colors hover:text-blue-700"
              >
                <Mail aria-hidden className="size-4 shrink-0 text-blue-600" />
                {hospital.emails.info}
              </a>
              <a
                href={telHref(hospital.phones.emergency)}
                className="flex items-center gap-2.5 font-semibold text-red-700 transition-colors hover:text-red-800"
              >
                <Siren aria-hidden className="size-4 shrink-0" />
                Emergency (24x7): {hospital.phones.emergency}
              </a>
              <a
                href={telHref(hospital.phones.ambulance)}
                className="flex items-center gap-2.5 transition-colors hover:text-blue-700"
              >
                <Ambulance aria-hidden className="size-4 shrink-0 text-blue-600" />
                Ambulance: {hospital.phones.ambulance}
              </a>
              <a
                href={telHref(hospital.phones.general)}
                className="flex items-center gap-2.5 transition-colors hover:text-blue-700"
              >
                <Phone aria-hidden className="size-4 shrink-0 text-blue-600" />
                General: {hospital.phones.general}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-mist-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {hospital.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                {/* Placeholder pages — content pending hospital approval. */}
                <span className="cursor-default text-xs text-slate-400" title="Page coming soon">
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
