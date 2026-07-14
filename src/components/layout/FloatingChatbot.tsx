"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, Building2, CalendarPlus, MessageCircle, Phone, PhoneCall, X } from "lucide-react";
import { hospital, telHref } from "@/config/hospital";

/**
 * UI-only assistant widget (no AI backend). Offers quick navigation and the
 * emergency call action; it never gives medical advice.
 */
export function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() =>
      panelRef.current?.querySelector<HTMLElement>("a, button")?.focus(),
    );
    return () => cancelAnimationFrame(frame);
  }, [open]);

  const close = () => {
    setOpen(false);
    launcherRef.current?.focus();
  };

  const quickActions = [
    {
      label: "Book Appointment",
      href: "/patient-care#appointment",
      icon: CalendarPlus,
      external: false,
    },
    { label: "Find a Department", href: "/departments", icon: Building2, external: false },
    { label: "Contact Hospital", href: "/contact-us", icon: Phone, external: false },
  ];

  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open ? (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-label="AbhayBot care assistant"
            onKeyDown={(event) => {
              if (event.key === "Escape") close();
            }}
            className="absolute right-0 bottom-16 flex max-h-[70vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-mist-200 bg-white shadow-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.21, 0.6, 0.35, 1] }}
          >
            <div className="flex items-center gap-3 bg-navy-800 px-5 py-4 text-white">
              <span
                aria-hidden
                className="flex size-10 items-center justify-center rounded-full bg-white/15"
              >
                <Bot className="size-5" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold">AbhayBot</p>
                <p className="text-xs text-blue-200">Care assistant · preview</p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close chat assistant"
                className="flex size-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X aria-hidden className="size-4.5" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              <p className="max-w-[90%] rounded-2xl rounded-tl-md bg-mist-100 px-4 py-3 text-sm text-navy-900">
                Hi! I&apos;m AbhayBot 👋 How can I help you today?
              </p>
              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Quick actions
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={telHref(hospital.phones.emergency)}
                      className="flex min-h-11 items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100"
                    >
                      <PhoneCall aria-hidden className="size-4.5" />
                      Call Emergency ({hospital.phones.emergency})
                    </a>
                  </li>
                  {quickActions.map((action) => (
                    <li key={action.label}>
                      <Link
                        href={action.href}
                        onClick={close}
                        className="flex min-h-11 items-center gap-3 rounded-xl border border-mist-200 px-4 text-sm font-medium text-navy-700 transition-colors hover:border-blue-200 hover:bg-mist-50"
                      >
                        <action.icon aria-hidden className="size-4.5 text-blue-600" />
                        {action.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="border-t border-mist-200 bg-mist-50 px-5 py-3 text-[11px] leading-relaxed text-slate-500">
              AbhayBot helps with navigation only — it does not diagnose conditions and is not a
              substitute for professional medical advice. In an emergency, call{" "}
              <a
                href={telHref(hospital.phones.emergency)}
                className="font-semibold text-red-700 underline-offset-2 hover:underline"
              >
                {hospital.phones.emergency}
              </a>
              .
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        ref={launcherRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="flex size-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 hover:shadow-xl active:scale-95"
      >
        {open ? (
          <X aria-hidden className="size-6" />
        ) : (
          <MessageCircle aria-hidden className="size-6" />
        )}
      </button>
    </div>
  );
}
