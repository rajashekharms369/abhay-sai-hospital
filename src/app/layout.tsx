import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { hospital } from "@/config/hospital";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingChatbot } from "@/components/layout/FloatingChatbot";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(hospital.siteUrl),
  title: {
    default: `${hospital.name} — ${hospital.tagline}`,
    template: `%s | ${hospital.name}`,
  },
  description: hospital.shortDescription,
  openGraph: {
    type: "website",
    siteName: hospital.name,
    title: `${hospital.name} — ${hospital.tagline}`,
    description: hospital.shortDescription,
    images: [{ url: "/images/home-hero.png", width: 2578, height: 1632, alt: hospital.name }],
  },
};

/**
 * JSON-LD for the hospital. Uses only values from the central config —
 * unverified placeholders there are flagged with TODOs. No ratings/reviews.
 */
function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospital.name,
    slogan: hospital.tagline,
    description: hospital.shortDescription,
    url: hospital.siteUrl,
    logo: `${hospital.siteUrl}/images/logo.png`,
    telephone: hospital.phones.general,
    email: hospital.emails.info,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${hospital.address.line1}, ${hospital.address.line2}`,
      addressLocality: hospital.address.city,
      addressRegion: hospital.address.state,
      postalCode: hospital.address.postalCode,
      addressCountry: hospital.address.country,
    },
    openingHours: "Mo-Su 00:00-24:00",
    availableService: { "@type": "MedicalProcedure", name: "Emergency care (24x7)" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-blue-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <UtilityBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingChatbot />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </body>
    </html>
  );
}
