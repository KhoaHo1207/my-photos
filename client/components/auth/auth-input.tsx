"use client";

import { Eye, EyeOff, Lock, Mail, User, type LucideIcon } from "lucide-react";
import { useState } from "react";
import {
  FieldError,
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
  get,
} from "react-hook-form";

type AuthInputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  type?: "text" | "password" | "email";
  required?: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

function readFieldError(error: unknown): FieldError | undefined {
  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    (typeof error.message === "string" || error.message === undefined)
  ) {
    return error as FieldError;
  }

  return undefined;
}

export default function AuthInput<T extends FieldValues>({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
  register,
  errors,
}: AuthInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const fieldError = readFieldError(get(errors, name));
  const isPassword = type === "password";
  const FieldIcon: LucideIcon =
    type === "email" ? Mail : type === "password" ? Lock : User;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-slate-700 sm:text-sm"
      >
        {label}
      </label>
      <div className="relative">
        <FieldIcon
          className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
        <input
          id={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          className={`auth-input pl-11 ${isPassword ? "pr-11" : ""} ${fieldError ? "border-red-500" : ""}`}
          required={required}
          {...register(name)}
          aria-invalid={fieldError ? "true" : "false"}
        />
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOff className="size-4" aria-hidden="true" />
            ) : (
              <Eye className="size-4" aria-hidden="true" />
            )}
          </button>
        ) : null}
      </div>
      {fieldError?.message ? (
        <p className="mt-1 text-xs text-red-500">{fieldError.message}</p>
      ) : null}
    </div>
  );
}
