"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { newsletterSchema, type NewsletterInput } from "@/lib/validation";

/**
 * Newsletter signup (UI only — no backend yet). Shows a "request recorded"
 * confirmation; no subscription is actually created.
 */
export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });

  if (submitted) {
    return (
      <p
        role="status"
        className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs text-emerald-800"
      >
        <CheckCircle2 aria-hidden className="mt-0.5 size-4 shrink-0" />
        Thanks! Your email has been noted — the newsletter launches once the hospital goes live.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(() => setSubmitted(true))} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address for newsletter
      </label>
      <div className="flex overflow-hidden rounded-full border border-mist-200 bg-white focus-within:border-blue-300">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          className="min-h-11 w-full min-w-0 bg-transparent px-4 text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none"
          {...register("email")}
        />
        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="flex min-h-11 items-center justify-center bg-blue-600 px-4 text-white transition-colors hover:bg-blue-700"
        >
          <Send aria-hidden className="size-4" />
        </button>
      </div>
      <p id="newsletter-email-error" role="alert" className="mt-1.5 text-xs text-red-600">
        {errors.email?.message}
      </p>
    </form>
  );
}
