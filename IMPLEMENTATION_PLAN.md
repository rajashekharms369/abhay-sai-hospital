# Abhay Sai Hospital — Implementation Plan

## 1. Findings from reference & asset review

### References (`/references`) — full-page mockups

| Reference          | Page          | Key sections observed                                                                                                                                                                        |
| ------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Home_Page.png`    | Home          | Isometric hospital hero with floating chips, stats strip, specialities grid, "Why Choose Us" bento, 5-step care journey, featured doctors, red emergency banner, footer, chatbot             |
| `About_Us.png`     | About Us      | Utility bar + navbar pattern, hero with hospital render, mission/vision/values cards, stats, story + timeline (2012/2016/2020/2024 — placeholder), leadership cards, reception image, footer |
| `Departments.png`  | Departments   | Breadcrumb hero, category filter pills, icon department cards with "Learn More", help CTA band, footer                                                                                       |
| `Doctors.png`      | Doctors       | Hero with group photo, search + dropdown filters, sidebar speciality/experience filters, doctor card grid, sort control, pagination CTA, appointment band                                    |
| `Facilities.png`   | Facilities    | Hero with reception image + stat chips, category pills, image-topped facility cards, "Safety. Comfort. Excellence." commitment strip, help CTA                                               |
| `Patient_Care.png` | Patient Care  | Hero with family photo, patient-first value strip, services grid + sticky appointment form, care journey, We-Care/Rights/Responsibilities trio, commitment CTA                               |
| `Contact_Us.png`   | Contact Us    | Hero with reception image, emergency/ambulance/enquiry cards, contact form + info sidebar, map + directions, "How can we help" category cards, final CTA                                     |
| `Footer.png`       | Shared footer | Logo + description, quick links, services, patient care, newsletter, socials, emergency numbers, legal links                                                                                 |

All names, numbers, statistics and dates in mockups are **visual placeholders**, not facts.

### Assets (`/assets`) → page mapping

| Asset                                                                                                                                                                                                                                                                                                                        | Used on                                  | Section                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| `Logo.png` (1254×1254)                                                                                                                                                                                                                                                                                                       | All                                      | Navbar, footer, JSON-LD logo                         |
| `Home_Page_Hero_img.png` (2578×1632)                                                                                                                                                                                                                                                                                         | Home                                     | Hero (priority image, subtle float/parallax)         |
| `Hospital_Reception_entrance.png`                                                                                                                                                                                                                                                                                            | About Us, Contact hero                   | Interior section                                     |
| `Doctors_Hero_img.png` (1672×941)                                                                                                                                                                                                                                                                                            | Doctors                                  | Hero                                                 |
| `Doc_1..12.png` (portrait)                                                                                                                                                                                                                                                                                                   | Doctors, Home featured, About leadership | Doctor cards (labelled as illustrative placeholders) |
| `Advanced_ICU_img.png`, `Modern_Operation_Theatres_img.png`, `Diagnostic_Imaging_img.png`, `Advanced_Laboratory_img.png`, `24x7_Emergency_Care.png`, `Comfortable_Rooms_img.png`, `In-House_Pharmacy_img.png`, `Physiotherapy_&_Rehab_img.png`, `Cafeteria_&_Food_Services_img.png`, `Ample_Parking_img.png` (all 1448×1086) | Facilities                               | Facility cards                                       |
| `Facilities_Bottom_strip_img.png` (1916×821)                                                                                                                                                                                                                                                                                 | Facilities                               | Assistance CTA band                                  |
| `Patient_Care_Hero_img.png` (3114×1344)                                                                                                                                                                                                                                                                                      | Patient Care                             | Hero                                                 |
| `Patient_Care_img.png` (1984×2164)                                                                                                                                                                                                                                                                                           | Patient Care                             | "We care for you" section                            |
| `Patient_Care_Your_Bottom_Strip_img.png` (1881×836)                                                                                                                                                                                                                                                                          | Patient Care                             | Commitment CTA band                                  |

Assets are copied to `public/images/**` with web-safe kebab-case names (no `&`, no spaces).

## 2. Current state of repo

Empty apart from `assets/` and `references/`. No package.json — the app is scaffolded
manually (directory name contains a trailing space, which breaks `create-next-app`
package naming), with npm as the package manager.

## 3. Stack

Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 · framer-motion ·
lucide-react · react-hook-form + zod + @hookform/resolvers · ESLint (next config) ·
Prettier (+ tailwind plugin). No Three.js / GSAP / WebGL / video.

## 4. Design tokens

- Background: white / soft blue (`#F4F8FD`-family), light theme only
- Navy headings (`#0B2A5B`-family), slate body text
- Primary blue `#2563EB`; green healthcare accent `#16A34A`
- Restrained purple `#7C3AED` and orange `#F59E0B` accents (from logo)
- Rounded 2xl cards, 1px soft borders, soft shadows, gentle gradients
- Red reserved for emergency UI only

## 5. Architecture

```
src/
  app/                    # 7 routes, layout, globals, sitemap-ready metadata
  components/
    layout/               # UtilityBar, Header, MobileNavigation, Footer, FloatingChatbot
    shared/               # PageHero, SectionHeading, buttons, cards, Modal, Reveal (motion), etc.
    forms/                # AppointmentForm, ContactForm, NewsletterForm
    home/ about/ departments/ doctors/ facilities/ patient-care/ contact/
  config/hospital.ts      # single source of contact/brand data, TODO-marked placeholders
  config/navigation.ts
  data/                   # departments, doctors, facilities, patientCare (typed, unverified-flagged)
  lib/utils.ts, validation.ts
  types/index.ts
```

- Server components by default; `"use client"` only for header scroll state, mobile nav,
  filters, forms, modals, chatbot, and motion wrappers.
- Framer Motion wrapped in small client primitives (`Reveal`, `StaggerGroup`) that honour
  `prefers-reduced-motion`.
- Accessible `Modal` (focus trap, Esc, aria) reused by departments, doctor profiles.
- All placeholder data flagged `unverified` in data files + `docs/HOSPITAL_CONTENT_REQUIRED.md`.

## 6. Build order

1. Scaffold + deps + assets copy
2. Types, config, data, validation
3. Layout shell (utility bar, header, mobile nav, footer, chatbot) + shared components
4. Pages: Home → About → Departments → Doctors → Facilities → Patient Care → Contact
5. SEO metadata + JSON-LD (MedicalOrganization/Hospital, configurable values only)
6. Validation: prettier, eslint, tsc, production build, route smoke tests
7. README + HOSPITAL_CONTENT_REQUIRED docs

## 7. Non-goals

No extra pages (login/blog/portal/etc.), no backend, no AI chatbot API, no invented
facts (accreditations, counts, awards, qualifications). Forms validate and show a
"request recorded for follow-up" success state only.
