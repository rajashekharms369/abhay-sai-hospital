import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Facilities", href: "/facilities" },
  { label: "Patient Care", href: "/patient-care" },
  { label: "Contact Us", href: "/contact-us" },
];

/** Footer "Services" column — anchors into existing pages only. */
export const serviceLinks: NavItem[] = [
  { label: "Emergency & Trauma Care", href: "/departments" },
  { label: "ICU & Critical Care", href: "/departments" },
  { label: "Diagnostic Imaging", href: "/facilities" },
  { label: "In-House Pharmacy", href: "/facilities" },
  { label: "Physiotherapy & Rehab", href: "/facilities" },
  { label: "Dialysis", href: "/departments" },
];

/** Footer "Patient Care" column. */
export const patientCareLinks: NavItem[] = [
  { label: "Book Appointment", href: "/patient-care#appointment" },
  { label: "Patient Care Services", href: "/patient-care#services" },
  { label: "Your Care Journey", href: "/patient-care#journey" },
  { label: "Patient Rights", href: "/patient-care#rights" },
  { label: "Find a Doctor", href: "/doctors" },
  { label: "Contact & Directions", href: "/contact-us" },
];

/** Placeholder legal links — pages intentionally not created yet. */
export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Sitemap", href: "#" },
];
