import { z } from "zod";

export const loginSchema = z
  .object({
    email: z
      .string({ error: "Email is required" })
      .email({ error: "Invalid email address" }),
    password: z
      .string({ error: "Password is required" })
      .min(8, { error: "Password must be at least 8 characters" }),
  })
  .strict();

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z
      .string({ error: "Name is required" })
      .min(3, { error: "Name must be at least 3 characters" }),
    email: z
      .string({ error: "Email is required" })
      .email({ error: "Invalid email address" }),
    password: z
      .string({ error: "Password is required" })
      .min(8, { error: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string({ error: "Confirm password is required" })
      .min(8, { error: "Confirm password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  })
  .strict();

export type RegisterSchema = z.infer<typeof registerSchema>;
