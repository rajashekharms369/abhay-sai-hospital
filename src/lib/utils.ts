import { twMerge } from "tailwind-merge";

/** Join conditional class names, resolving Tailwind conflicts (later wins). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return twMerge(classes.filter(Boolean).join(" "));
}

/** Today's date as yyyy-mm-dd, for the appointment date input `min`. */
export function todayISO(): string {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}
