"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { appointmentSchema, type AppointmentInput } from "@/lib/validation";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { hospital, telHref } from "@/config/hospital";
import { FieldWrapper, SelectInput, TextInput } from "@/components/forms/fields";
import { todayISO } from "@/lib/utils";

const timeSlots = [
  "09:00 – 10:00 AM",
  "10:00 – 11:00 AM",
  "11:00 – 12:00 PM",
  "12:00 – 01:00 PM",
  "02:00 – 03:00 PM",
  "03:00 – 04:00 PM",
  "04:00 – 05:00 PM",
  "05:00 – 06:00 PM",
];

/**
 * Appointment request form (UI only — no booking backend yet). On valid
 * submission it shows a "request recorded" state and clearly avoids claiming
 * a confirmed booking.
 */
export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentInput>({ resolver: zodResolver(appointmentSchema) });

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center"
      >
        <span
          aria-hidden
          className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
        >
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy-900">Request recorded</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          Thank you — your appointment request has been noted for follow-up. This is not a confirmed
          booking yet; our team will contact you to finalise the date and time. For urgent needs,
          please call{" "}
          <a
            href={telHref(hospital.phones.appointments)}
            className="font-semibold text-blue-700 underline-offset-2 hover:underline"
          >
            {hospital.phones.appointments}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitted(false);
          }}
          className="mt-6 inline-flex min-h-11 items-center rounded-full border border-emerald-300 bg-white px-6 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100"
        >
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(() => setSubmitted(true))}
      noValidate
      className="grid gap-4 sm:grid-cols-2"
      aria-label="Appointment request"
    >
      <FieldWrapper
        id="appointment-department"
        label="Department"
        required
        error={errors.department?.message}
        className="sm:col-span-2"
      >
        <SelectInput
          id="appointment-department"
          error={errors.department?.message}
          defaultValue=""
          {...register("department")}
        >
          <option value="" disabled>
            Select department
          </option>
          {departments.map((department) => (
            <option key={department.id} value={department.name}>
              {department.name}
            </option>
          ))}
        </SelectInput>
      </FieldWrapper>

      <FieldWrapper
        id="appointment-doctor"
        label="Doctor"
        error={errors.doctor?.message}
        className="sm:col-span-2"
      >
        <SelectInput id="appointment-doctor" defaultValue="" {...register("doctor")}>
          <option value="">No preference</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={`${doctor.role} — ${doctor.specialty}`}>
              {doctor.role} — {doctor.specialty}
            </option>
          ))}
        </SelectInput>
      </FieldWrapper>

      <FieldWrapper
        id="appointment-date"
        label="Preferred Date"
        required
        error={errors.preferredDate?.message}
      >
        <TextInput
          id="appointment-date"
          type="date"
          min={todayISO()}
          error={errors.preferredDate?.message}
          {...register("preferredDate")}
        />
      </FieldWrapper>

      <FieldWrapper
        id="appointment-time"
        label="Preferred Time"
        required
        error={errors.preferredTime?.message}
      >
        <SelectInput
          id="appointment-time"
          error={errors.preferredTime?.message}
          defaultValue=""
          {...register("preferredTime")}
        >
          <option value="" disabled>
            Select time slot
          </option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </SelectInput>
      </FieldWrapper>

      <FieldWrapper
        id="appointment-name"
        label="Full Name"
        required
        error={errors.fullName?.message}
      >
        <TextInput
          id="appointment-name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
      </FieldWrapper>

      <FieldWrapper
        id="appointment-phone"
        label="Phone Number"
        required
        error={errors.phone?.message}
      >
        <TextInput
          id="appointment-phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 XXXXX XXXXX"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </FieldWrapper>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.99]"
        >
          <CalendarCheck aria-hidden className="size-4.5" />
          Request Appointment
        </button>
        <p className="mt-3 text-center text-xs text-slate-500">
          Submitting sends a call-back request — it does not create a confirmed booking.
        </p>
      </div>
    </form>
  );
}
