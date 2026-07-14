"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarPlus, Menu, Phone } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { hospital, telHref } from "@/config/hospital";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { cn } from "@/lib/utils";

/** Sticky main navbar with scroll backdrop, active states and mobile menu. */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "border-mist-200 bg-white/85 shadow-sm shadow-navy-900/5 backdrop-blur-md"
          : "border-transparent bg-white",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Abhay Sai Hospital — Home"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={48}
            height={48}
            className="size-11 rounded-full object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-navy-900">
              {hospital.name}
            </span>
            <span className="block text-[11px] font-medium text-blue-700">{hospital.tagline}</span>
          </span>
        </Link>

        <ul className="mx-auto hidden items-center gap-1 xl:flex">
          {mainNavigation.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-blue-700 after:absolute after:right-3.5 after:-bottom-0.5 after:left-3.5 after:h-0.5 after:rounded-full after:bg-blue-600"
                      : "text-slate-600 hover:bg-mist-100 hover:text-navy-900",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <a
            href={telHref(hospital.phones.emergency)}
            className="flex size-11 items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-600 transition-colors hover:bg-red-100"
            aria-label={`Call emergency: ${hospital.phones.emergency}`}
            title={`Emergency: ${hospital.phones.emergency}`}
          >
            <Phone aria-hidden className="size-4.5" />
          </a>
          <Link
            href="/patient-care#appointment"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-md sm:inline-flex"
          >
            <CalendarPlus aria-hidden className="size-4" />
            Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open menu"
            className="flex size-11 items-center justify-center rounded-full border border-mist-200 text-navy-900 transition-colors hover:bg-mist-100 xl:hidden"
          >
            <Menu aria-hidden className="size-5" />
          </button>
        </div>
      </nav>

      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </header>
  );
}
