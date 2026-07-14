"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeInfo, CalendarPlus, Phone } from "lucide-react";
import type { Doctor } from "@/types";
import { Modal } from "@/components/shared/Modal";
import { hospital, telHref } from "@/config/hospital";

interface DoctorProfileModalProps {
  doctor: Doctor | null;
  onClose: () => void;
}

/** Accessible profile dialog shared by the Doctors page and Home featured grid. */
export function DoctorProfileModal({ doctor, onClose }: DoctorProfileModalProps) {
  return (
    <Modal open={doctor !== null} onClose={onClose} labelledBy="doctor-modal-title">
      {doctor ? (
        <div>
          <div className="flex items-start gap-5">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-mist-100">
              <Image
                src={doctor.image}
                alt={`Illustrative portrait representing the ${doctor.specialty} team`}
                fill
                sizes="6rem"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 id="doctor-modal-title" className="text-xl font-bold text-navy-900">
                {doctor.role}
              </h2>
              <p className="mt-0.5 text-sm font-medium text-blue-700">{doctor.specialty}</p>
              <p className="mt-1 text-xs text-slate-500">
                {doctor.experienceYears}+ years experience*
              </p>
            </div>
          </div>

          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="font-semibold text-navy-900">Qualifications</dt>
              <dd className="mt-0.5 text-slate-600">{doctor.qualifications}</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy-900">About</dt>
              <dd className="mt-0.5 leading-relaxed text-slate-600">{doctor.bio}</dd>
            </div>
          </dl>

          {doctor.unverified ? (
            <p className="mt-5 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2.5 text-xs leading-relaxed text-amber-800">
              <BadgeInfo aria-hidden className="mt-0.5 size-4 shrink-0" />
              Sample profile with an illustrative portrait — details and experience shown are
              placeholders until confirmed by the hospital.
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/patient-care#appointment"
              onClick={onClose}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <CalendarPlus aria-hidden className="size-4" />
              Book Appointment
            </Link>
            <a
              href={telHref(hospital.phones.appointments)}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-mist-200 px-5 text-sm font-semibold text-navy-700 transition-colors hover:bg-mist-100"
            >
              <Phone aria-hidden className="size-4" />
              Call {hospital.phones.appointments}
            </a>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
