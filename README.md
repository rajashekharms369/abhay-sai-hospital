# Abhay Sai Hospital — Website

Production-quality marketing website for **Abhay Sai Hospital** (“Ensure Cure With Care”),
built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

Seven pages: Home · About Us · Departments · Doctors · Facilities · Patient Care · Contact Us.

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:3000
npm run build     # production build
npm start         # serve the production build
```

Quality tooling:

```bash
npm run typecheck     # strict TypeScript
npm run lint          # ESLint (next/core-web-vitals + next/typescript)
npm run format        # Prettier (with Tailwind class sorting)
npm run format:check
```

## Project structure

```
assets/            Original design assets (source of truth, not served)
references/        Full-page design mockups used as visual reference
public/images/     Web-optimised copies of assets (served via next/image)
docs/              HOSPITAL_CONTENT_REQUIRED.md — content checklist for the hospital
src/
  app/             Routes (App Router). One folder per page + layout + globals.css
  components/
    layout/        UtilityBar, Header, MobileNavigation, Footer, FloatingChatbot
    shared/        PageHero, SectionHeading, buttons, cards, Modal, motion primitives…
    forms/         AppointmentForm, ContactForm, NewsletterForm + field primitives
    home|about|departments|doctors|facilities|patient-care|contact/  page sections
  config/
    hospital.ts    ★ Central hospital data (phones, address, emails, socials, maps)
    navigation.ts  Nav/footer link definitions
  data/            Typed content: departments, doctors, facilities, patient care, home
  lib/             utils (cn, dates) and Zod validation schemas
  types/           Shared TypeScript models
```

## Where to edit hospital data

- **Contact details / address / hours / socials / maps** → `src/config/hospital.ts`.
  Every unverified value carries a `TODO: Confirm with hospital` comment.
- **Departments** → `src/data/departments.ts`
- **Doctors** → `src/data/doctors.ts` (all entries are `unverified: true` sample
  profiles with neutral role titles; the UI labels them "Sample profile")
- **Facilities** → `src/data/facilities.ts`
- **Statistics** → `src/data/home.ts` (placeholder figures are `unverified: true`
  and rendered with an asterisk + footnote)

The full list of content still needed from the hospital is in
[`docs/HOSPITAL_CONTENT_REQUIRED.md`](docs/HOSPITAL_CONTENT_REQUIRED.md).

## Replacing placeholder content

1. Update `src/config/hospital.ts` with confirmed numbers, address, emails.
   Setting `socials.*` URLs turns the footer icons into real links; setting
   `maps.embedUrl` swaps the Contact page map placeholder for a live Google
   Maps embed.
2. Replace the sample doctor entries in `src/data/doctors.ts` with real
   profiles and set `unverified: false` — badges and disclaimers disappear
   automatically.
3. Replace images in `public/images/**` keeping the same file names (or update
   the paths in data files).
4. Replace the placeholder timeline and leadership entries in
   `src/components/about/AboutSections.tsx`.

## How the forms behave today

There is **no backend**. The appointment, contact and newsletter forms:

- validate input client-side with Zod (`src/lib/validation.ts`) via
  react-hook-form, with accessible, aria-described error messages;
- on success show a **“request recorded for follow-up”** state that explicitly
  does _not_ claim a confirmed booking or sent message.

### Future backend integration points

- `AppointmentForm` / `ContactForm` / `NewsletterForm` submit handlers
  (`handleSubmit(() => …)`) are the single place to POST to an API route or CRM.
- Suggested approach: add `src/app/api/*` route handlers or a server action per
  form, then update the success copy once real delivery exists.
- The floating chatbot (`src/components/layout/FloatingChatbot.tsx`) is UI-only
  and ready to be wired to a support/AI backend later.

## Accessibility & performance notes

- Semantic landmarks, one `h1` per page, skip-to-content link, focus-visible
  styles, focus-trapped modals/drawer, `aria-live` feedback on filters/forms.
- `prefers-reduced-motion` disables all non-essential animation.
- Server components by default; client components only for header state,
  filters, forms, modals and the chatbot. Only each page's hero image loads
  with priority; everything below the fold lazy-loads through `next/image`
  (AVIF/WebP).

## Content integrity

Names, numbers, statistics and dates in `references/` mockups are treated as
visual placeholders only. Nothing unverified is presented as fact: placeholder
stats carry footnotes, doctor cards are labelled as samples, the About timeline
is explicitly marked as a placeholder outline, and JSON-LD only uses values
from the central config.
