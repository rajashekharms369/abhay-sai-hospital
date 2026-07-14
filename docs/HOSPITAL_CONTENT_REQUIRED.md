# Content Required from Abhay Sai Hospital

Everything on the site marked with `TODO: Confirm with hospital` (in
`src/config/hospital.ts` and the `src/data/*` files) or labelled "placeholder /
sample / to be confirmed" in the UI must be replaced with hospital-approved
content before launch. The design mockups contained generated names, numbers
and statistics — none of those were treated as facts.

## Identity & branding

- [ ] Official logo files (high-resolution, ideally SVG + transparent PNG) — current file: `assets/Logo.png`
- [ ] Confirmation of the exact hospital name spelling and tagline usage
- [ ] Production website domain (for canonical URLs, Open Graph and JSON-LD — see `siteUrl`)

## Contact details (currently placeholders from the mockups)

- [ ] Emergency number
- [ ] Ambulance number
- [ ] General enquiry number
- [ ] Appointment desk number
- [ ] Official email addresses (info, appointments)
- [ ] Full postal address with PIN code
- [ ] Google Maps location (share link + embed URL → `src/config/hospital.ts` `maps`)
- [ ] Social media links: Facebook, Instagram, YouTube, LinkedIn, X, WhatsApp

## Doctors (all current profiles are illustrative samples)

- [ ] Doctor names
- [ ] Doctor photographs (with consent for web use)
- [ ] Qualifications and registration details
- [ ] Specialities and designations
- [ ] Years of experience
- [ ] Consultation timings / OPD schedule per doctor

## Departments & facilities

- [ ] Final list of departments and any to add/remove (current list from signboard)
- [ ] Department descriptions, key procedures and equipment worth highlighting
- [ ] Facility details (ICU beds, OT count, imaging modalities, lab scope, room categories)
- [ ] Any facility photographs to replace the illustrative images

## About the hospital

- [ ] Founding year and accurate history/timeline milestones
- [ ] Founder / promoter information
- [ ] Approved mission, vision and values statements
- [ ] Leadership team (names, roles, photos, credentials)
- [ ] Accreditations (NABH/NABL etc.) — only if certificates can be verified
- [ ] Insurance / TPA partners and cashless arrangements
- [ ] Verified statistics: patients treated, bed count, doctor count, specialities count

## Operations & policy

- [ ] OPD timings and visiting hours
- [ ] Appointment process (how requests are actually confirmed) and booking backend/contact workflow
- [ ] Privacy policy text
- [ ] Terms & conditions text
- [ ] Approved medical disclaimers (site-wide and chatbot)
- [ ] Emergency / triage guidance wording approved by clinical staff

## Where placeholders live in code

| Content                                            | File                                     |
| -------------------------------------------------- | ---------------------------------------- |
| Contact details, address, hours, socials, maps     | `src/config/hospital.ts`                 |
| Statistics (marked `unverified: true`)             | `src/data/home.ts`                       |
| Doctor sample profiles (marked `unverified: true`) | `src/data/doctors.ts`                    |
| Department copy                                    | `src/data/departments.ts`                |
| Facility copy                                      | `src/data/facilities.ts`                 |
| Timeline & leadership placeholders                 | `src/components/about/AboutSections.tsx` |
| Legal link placeholders                            | `src/config/navigation.ts`               |
