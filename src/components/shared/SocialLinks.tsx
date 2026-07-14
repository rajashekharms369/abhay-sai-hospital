import type { SVGProps } from "react";
import { MessageCircle } from "lucide-react";
import { hospital, type SocialPlatform } from "@/config/hospital";

type BrandIcon = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

/*
 * lucide-react v1 removed brand icons, so the social glyphs below are small
 * local SVGs drawn in the same 24px / 2px-stroke style.
 */
function brandIcon(children: React.ReactNode): BrandIcon {
  const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      {...props}
    >
      {children}
    </svg>
  );
  return Icon;
}

const FacebookIcon = brandIcon(
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
);

const InstagramIcon = brandIcon(
  <>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </>,
);

const YoutubeIcon = brandIcon(
  <>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </>,
);

const LinkedinIcon = brandIcon(
  <>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </>,
);

const XIcon = brandIcon(
  <>
    <path d="m4 4 16 16" />
    <path d="M20 4 4 20" />
  </>,
);

const WhatsAppIcon: BrandIcon = (props) => (
  <MessageCircle aria-hidden={props["aria-hidden"]} className="size-5" />
);

const platforms: { id: SocialPlatform; label: string; icon: BrandIcon }[] = [
  { id: "facebook", label: "Facebook", icon: FacebookIcon },
  { id: "instagram", label: "Instagram", icon: InstagramIcon },
  { id: "youtube", label: "YouTube", icon: YoutubeIcon },
  { id: "linkedin", label: "LinkedIn", icon: LinkedinIcon },
  { id: "x", label: "X (Twitter)", icon: XIcon },
  { id: "whatsapp", label: "WhatsApp", icon: WhatsAppIcon },
];

/**
 * Social icons. Profiles without a confirmed URL (see config) render as
 * inert placeholders labelled "coming soon" instead of fake links.
 */
export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-2">
      {platforms.map(({ id, label, icon: Icon }) => {
        const url = hospital.socials[id];
        const classes =
          "flex size-11 items-center justify-center rounded-full border border-mist-200 bg-white text-slate-500 transition-colors hover:border-blue-200 hover:text-blue-700";
        return (
          <li key={id}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${hospital.name} on ${label}`}
                className={classes}
              >
                <Icon aria-hidden />
              </a>
            ) : (
              <span
                className={`${classes} cursor-default opacity-60`}
                title={`${label} — link coming soon`}
              >
                <Icon aria-hidden />
                <span className="sr-only">{label} — official link coming soon</span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
