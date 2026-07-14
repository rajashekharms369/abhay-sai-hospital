"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Ambulance, CalendarPlus, Phone, X } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { hospital, telHref } from "@/config/hospital";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Slide-in mobile menu drawer with focus trap and scroll lock. */
export function MobileNavigation({ open, onClose, pathname }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() =>
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus(),
    );
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close when the route changes (link tapped).
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 xl:hidden" onKeyDown={handleKeyDown}>
          <motion.button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            className="absolute inset-0 bg-navy-900/40 backdrop-blur-[2px]"
            onClick={onClose}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
          />
          <motion.div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-white shadow-xl"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: "100%" }}
            transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <div className="flex items-center justify-between border-b border-mist-200 px-5 py-4">
              <p className="text-base font-bold text-navy-900">{hospital.name}</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex size-11 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-mist-100 hover:text-navy-900"
              >
                <X aria-hidden className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 px-3 py-4">
              <ul className="space-y-1">
                {mainNavigation.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-700 hover:bg-mist-100 hover:text-navy-900",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-mist-200 px-5 py-5">
              <Link
                href="/patient-care#appointment"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <CalendarPlus aria-hidden className="size-4" />
                Book Appointment
              </Link>
              <a
                href={telHref(hospital.phones.emergency)}
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100"
              >
                <Phone aria-hidden className="size-4" />
                Emergency: {hospital.phones.emergency}
              </a>
              <a
                href={telHref(hospital.phones.ambulance)}
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-mist-200 px-5 text-sm font-semibold text-navy-700 transition-colors hover:bg-mist-100"
              >
                <Ambulance aria-hidden className="size-4" />
                Ambulance: {hospital.phones.ambulance}
              </a>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
