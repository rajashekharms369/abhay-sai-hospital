"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { departments } from "@/data/departments";
import { FieldWrapper, SelectInput, TextInput, TextareaInput } from "@/components/forms/fields";

const subjects = [
  "General Enquiry",
  "Appointment Help",
  "Billing & Insurance",
  "Feedback",
  "Other",
];

/**
 * Contact form (UI only — no backend yet). Valid submissions show a
 * "message recorded" state; nothing is actually sent.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-14 text-center"
      >
        <span
          aria-hidden
          className="flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
        >
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-navy-900">Message recorded</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
          Thank you for reaching out. Your message has been recorded for follow-up and our team will
          get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitted(false);
          }}
          className="mt-6 inline-flex min-h-11 items-center rounded-full border border-emerald-300 bg-white px-6 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(() => setSubmitted(true))}
      noValidate
      className="grid gap-4 sm:grid-cols-2"
      aria-label="Contact form"
    >
      <FieldWrapper id="contact-name" label="Full Name" required error={errors.fullName?.message}>
        <TextInput
          id="contact-name"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
      </FieldWrapper>

      <FieldWrapper id="contact-phone" label="Phone Number" required error={errors.phone?.message}>
        <TextInput
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 XXXXX XXXXX"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </FieldWrapper>

      <FieldWrapper
        id="contact-email"
        label="Email Address"
        required
        error={errors.email?.message}
        className="sm:col-span-2"
      >
        <TextInput
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </FieldWrapper>

      <FieldWrapper
        id="contact-department"
        label="Department"
        required
        error={errors.department?.message}
      >
        <SelectInput
          id="contact-department"
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

      <FieldWrapper id="contact-subject" label="Subject" required error={errors.subject?.message}>
        <SelectInput
          id="contact-subject"
          error={errors.subject?.message}
          defaultValue=""
          {...register("subject")}
        >
          <option value="" disabled>
            Select subject
          </option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </SelectInput>
      </FieldWrapper>

      <FieldWrapper
        id="contact-message"
        label="Message"
        required
        error={errors.message?.message}
        className="sm:col-span-2"
      >
        <TextareaInput
          id="contact-message"
          placeholder="Type your message here…"
          error={errors.message?.message}
          {...register("message")}
        />
      </FieldWrapper>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.99]"
        >
          <Send aria-hidden className="size-4.5" />
          Send Message
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <ShieldCheck aria-hidden className="size-3.5 text-emerald-600" />
          Your information is secure and only used to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}
