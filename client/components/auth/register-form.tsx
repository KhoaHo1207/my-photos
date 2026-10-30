"use client";

import { registerSchema, RegisterSchema } from "@/validators/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import AuthButton from "./auth-button";
import AuthInput from "./auth-input";
import AuthPrompt from "./auth-prompt";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };
  return (
    <div className="grid h-full min-h-0 w-full grid-cols-1 overflow-hidden rounded-[30px] bg-white sm:rounded-[38px] lg:grid-cols-12">
      {/* Hero */}
      <div className="relative flex h-full min-h-0 flex-col p-2 sm:p-3 lg:col-span-6">
        <div className="relative flex min-h-0 flex-1 flex-col justify-end overflow-hidden rounded-[26px] bg-black p-8 text-white sm:rounded-4xl sm:p-12">
          <Image
            src="/login_ribbon.png"
            alt="Fluid Neon Art"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black" />

          <div className="relative z-10">
            <h2 className="text-4xl font-medium uppercase sm:text-5xl lg:text-5xl">
              MY PHOTOS
            </h2>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/80 sm:mt-5 sm:text-sm">
              Safely store and organise your HD photos and videos.
            </p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col justify-between bg-white px-8 py-10 sm:px-12 sm:py-14 lg:col-span-6 lg:px-16 lg:py-16">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={100}
          height={100}
          className="h-16 w-auto object-contain xl:mt-10 xl:h-20"
        />

        <div className="mx-auto my-auto w-full max-w-md py-2">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="font-serif text-3xl font-normal tracking-tight text-slate-900 sm:text-4xl">
              Create Account
            </h1>
            <p className="mt-2 text-xs text-slate-500 sm:text-sm">
              Join My Photos to organize your albums
            </p>
          </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <fieldset className="space-y-4" disabled={isSubmitting}>
              <AuthInput
                label="Name"
                name="name"
                placeholder="Enter your name"
                type="text"
                register={register}
                errors={errors}
              />

              <AuthInput
                label="Email"
                name="email"
                placeholder="Enter your email"
                type="email"
                register={register}
                errors={errors}
              />

              <AuthInput
                label="Password"
                name="password"
                placeholder="Enter your password"
                type="password"
                register={register}
                errors={errors}
              />

              <AuthInput
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                register={register}
                errors={errors}
              />
            </fieldset>

            <AuthButton
              label="Register"
              type="submit"
              loading={isSubmitting}
              className="w-full"
            />
          </form>
        </div>

        <AuthPrompt
          label="Already have an account?"
          link="/login"
          linkText="Login"
        />
      </div>
    </div>
  );
}
