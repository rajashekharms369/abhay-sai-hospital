import type { Facility, FacilityCategory } from "@/types";

export const facilityCategories: { id: FacilityCategory | "all"; label: string }[] = [
  { id: "all", label: "All Facilities" },
  { id: "clinical", label: "Clinical Facilities" },
  { id: "amenities", label: "Patient Amenities" },
  { id: "technology", label: "Advanced Technology" },
  { id: "support", label: "Support Services" },
];

/**
 * Facility descriptions are general service summaries pending
 * hospital-approved copy. Images are design assets supplied with the project.
 */
export const facilities: Facility[] = [
  {
    id: "advanced-icu",
    name: "Advanced ICU",
    category: "clinical",
    image: "/images/facilities/advanced-icu.png",
    imageAlt: "Intensive care unit bed with monitoring equipment and life-support systems",
    description: "Intensive care units with life-support systems and round-the-clock monitoring.",
  },
  {
    id: "operation-theatres",
    name: "Modern Operation Theatres",
    category: "clinical",
    image: "/images/facilities/operation-theatres.png",
    imageAlt: "Operation theatre with surgical lights and modern surgical equipment",
    description: "Well-equipped operation theatres designed for safe surgical care.",
  },
  {
    id: "emergency-care",
    name: "24x7 Emergency Care",
    category: "clinical",
    image: "/images/facilities/emergency-care.png",
    imageAlt: "Emergency ward bay with a stretcher bed under an emergency signboard",
    description: "Round-the-clock emergency services with trauma care and critical support.",
  },
  {
    id: "diagnostic-imaging",
    name: "Diagnostic Imaging",
    category: "technology",
    image: "/images/facilities/diagnostic-imaging.png",
    imageAlt: "CT/MRI scanner in a modern diagnostic imaging room",
    description: "Imaging services supporting accurate and timely diagnosis.",
  },
  {
    id: "advanced-laboratory",
    name: "Advanced Laboratory",
    category: "technology",
    image: "/images/facilities/advanced-laboratory.png",
    imageAlt: "Hospital laboratory bench with microscope and testing equipment",
    description: "Quality-controlled laboratory testing with quick turnaround times.",
  },
  {
    id: "comfortable-rooms",
    name: "Comfortable Rooms",
    category: "amenities",
    image: "/images/facilities/comfortable-rooms.png",
    imageAlt: "Bright private patient room with a bed, seating and natural light",
    description: "Clean, comfortable in-patient rooms designed for restful recovery.",
  },
  {
    id: "in-house-pharmacy",
    name: "In-House Pharmacy",
    category: "support",
    image: "/images/facilities/in-house-pharmacy.png",
    imageAlt: "Hospital pharmacy shelves stocked with medicines",
    description: "On-site pharmacy providing medicines with professional guidance.",
  },
  {
    id: "physiotherapy-rehab",
    name: "Physiotherapy & Rehab",
    category: "support",
    image: "/images/facilities/physiotherapy-rehab.png",
    imageAlt: "Physiotherapy and rehabilitation room with therapy beds and equipment",
    description: "Rehabilitation services that help patients recover strength and mobility.",
  },
  {
    id: "cafeteria",
    name: "Cafeteria & Food Services",
    category: "amenities",
    image: "/images/facilities/cafeteria-food-services.png",
    imageAlt: "Hospital cafeteria seating area with tables and warm lighting",
    description: "Hygienic, nutritious meals and a comfortable space for visitors.",
  },
  {
    id: "ample-parking",
    name: "Ample Parking",
    category: "amenities",
    image: "/images/facilities/ample-parking.png",
    imageAlt: "Well-lit hospital parking area with marked bays",
    description: "Spacious and secure parking for patients and visitors.",
  },
];
