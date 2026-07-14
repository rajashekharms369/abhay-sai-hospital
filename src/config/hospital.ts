/**
 * Central hospital configuration.
 *
 * IMPORTANT: Every value marked "TODO: Confirm with hospital" is an
 * UNVERIFIED placeholder taken from the design mockups. Replace it with the
 * official value before going live. See docs/HOSPITAL_CONTENT_REQUIRED.md.
 */

export const hospital = {
  name: "Abhay Sai Hospital",
  tagline: "Ensure Cure With Care",
  shortDescription:
    "A multispecialty hospital dedicated to compassionate, patient-first healthcare with modern infrastructure and a committed care team.",
  /** TODO: Confirm with hospital — production domain for canonical URLs / OG tags. */
  siteUrl: "https://www.abhaysaihospital.example",

  phones: {
    /** TODO: Confirm with hospital — emergency helpline. */
    emergency: "+91 90195 28484",
    /** TODO: Confirm with hospital — ambulance line. */
    ambulance: "+91 90195 28485",
    /** TODO: Confirm with hospital — general enquiry line. */
    general: "+91 90195 28486",
    /** TODO: Confirm with hospital — appointment desk. */
    appointments: "+91 90195 28487",
  },

  emails: {
    /** TODO: Confirm with hospital. */
    info: "info@abhaysaihospital.com",
    /** TODO: Confirm with hospital. */
    appointments: "appointments@abhaysaihospital.com",
  },

  address: {
    /** TODO: Confirm with hospital — full postal address. */
    line1: "Plot No. 12, Health City Road",
    line2: "Near City Center, Vijay Nagar",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "452010",
    country: "India",
  },

  hours: {
    hospital: "Open 24 hours, 7 days a week",
    emergency: "24x7 emergency & trauma care",
    /** TODO: Confirm with hospital — OPD consultation timings. */
    opd: "OPD timings to be confirmed",
  },

  /**
   * TODO: Confirm with hospital — official social profiles. Links are kept
   * null until verified so the UI can label them as "coming soon".
   */
  socials: {
    facebook: null,
    instagram: null,
    youtube: null,
    linkedin: null,
    x: null,
    whatsapp: null,
  } as Record<SocialPlatform, string | null>,

  maps: {
    /** TODO: Confirm with hospital — Google Maps share link. */
    link: null as string | null,
    /** TODO: Confirm with hospital — Google Maps embed URL to activate the live map. */
    embedUrl: null as string | null,
  },
} as const;

export type SocialPlatform = "facebook" | "instagram" | "youtube" | "linkedin" | "x" | "whatsapp";

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function formattedAddress(): string {
  const a = hospital.address;
  return `${a.line1}, ${a.line2}, ${a.city} - ${a.postalCode}, ${a.state}, ${a.country}`;
}
