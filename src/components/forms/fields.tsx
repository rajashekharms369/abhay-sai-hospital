import type {
  ReactNode,
  SelectHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const inputClasses =
  "min-h-11 w-full rounded-xl border border-mist-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:border-blue-400 focus:outline-none aria-[invalid]:border-red-400";

interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function FieldWrapper({
  id,
  label,
  required,
  error,
  children,
  className,
}: FieldWrapperProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
        {required ? (
          <span aria-hidden className="text-red-500">
            {" "}
            *
          </span>
        ) : (
          <span className="text-xs font-normal text-slate-400"> (optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & { id: string; error?: string };

export function TextInput({ id, error, className, ...props }: InputFieldProps) {
  return (
    <input
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(inputClasses, className)}
      {...props}
    />
  );
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & { id: string; error?: string };

export function SelectInput({ id, error, className, children, ...props }: SelectFieldProps) {
  return (
    <select
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(inputClasses, "appearance-none", className)}
      {...props}
    >
      {children}
    </select>
  );
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  id: string;
  error?: string;
};

export function TextareaInput({ id, error, className, ...props }: TextareaFieldProps) {
  return (
    <textarea
      id={id}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={cn(inputClasses, "min-h-32 resize-y", className)}
      {...props}
    />
  );
}
