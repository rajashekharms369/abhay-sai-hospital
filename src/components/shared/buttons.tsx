import Link from "next/link";
import { Phone } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { hospital, telHref } from "@/config/hospital";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]";

type ButtonOwnProps = {
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
  | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className">)
);

function BaseButton({ children, className, ...props }: ButtonOwnProps) {
  if (props.href !== undefined) {
    return (
      <Link {...props} className={className}>
        {children}
      </Link>
    );
  }
  const { type, ...rest } = props;
  return (
    <button type={type ?? "button"} {...rest} className={className}>
      {children}
    </button>
  );
}

export function PrimaryButton({ className, ...props }: ButtonOwnProps) {
  return (
    <BaseButton
      {...props}
      className={cn(
        base,
        "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 hover:shadow-md",
        className,
      )}
    />
  );
}

export function SecondaryButton({ className, ...props }: ButtonOwnProps) {
  return (
    <BaseButton
      {...props}
      className={cn(
        base,
        "border border-navy-100 bg-white text-navy-700 hover:border-blue-200 hover:bg-mist-100",
        className,
      )}
    />
  );
}

interface EmergencyButtonProps {
  className?: string;
  label?: string;
}

/** Red emergency call-to-action that dials the emergency line. */
export function EmergencyButton({ className, label = "Emergency 24x7" }: EmergencyButtonProps) {
  return (
    <a
      href={telHref(hospital.phones.emergency)}
      className={cn(
        base,
        "border border-red-200 bg-red-50 text-red-700 hover:border-red-300 hover:bg-red-100",
        className,
      )}
    >
      <Phone aria-hidden className="size-4" />
      <span>
        {label} <span className="sr-only">— call {hospital.phones.emergency}</span>
      </span>
    </a>
  );
}
