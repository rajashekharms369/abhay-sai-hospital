import { z } from "zod";
import { todayISO } from "@/lib/utils";

const fullName = z
  .string()
  .trim()
  .min(2, "Please enter your full name.")
  .max(80, "Name looks too long — please shorten it.");

const phone = z
  .string()
  .trim()
  .regex(/^\+?[0-9][0-9\s-]{8,14}$/, "Please enter a valid phone number.");

const department = z.string().min(1, "Please select a department.");

export const appointmentSchema = z.object({
  department,
  doctor: z.string().optional(),
  preferredDate: z
    .string()
    .min(1, "Please choose a preferred date.")
    .refine((value) => value >= todayISO(), "Please choose today or a future date."),
  preferredTime: z.string().min(1, "Please choose a preferred time."),
  fullName,
  phone,
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  fullName,
  phone,
  email: z.email("Please enter a valid email address."),
  department,
  subject: z.string().min(1, "Please select a subject."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(1000, "Message is too long (1000 characters max)."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
