import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen min-h-160 w-full grid-cols-1 overflow-hidden rounded-[30px] bg-white sm:rounded-[38px] lg:min-h-180 lg:grid-cols-12">
      <div className="relative flex min-h-0 flex-col p-2 sm:p-3 lg:col-span-6">
        <div className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden rounded-[26px] bg-black p-8 text-white sm:rounded-4xl sm:p-12">
          <Image
            src="/login_ribbon.png"
            alt="Fluid Neon Art"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/60 to-black" />
          <div className="relative z-10 mt-auto pt-24 sm:pt-32">
            <h2 className="text-4xl font-medium uppercase sm:text-5xl">
              MY PHOTOS
            </h2>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/80 sm:mt-5 sm:text-sm">
              Safely store and organise your HD photos and videos.
            </p>
          </div>
        </div>
      </div>
      <div className="flex min-h-0 items-center justify-center p-6 sm:p-10 lg:col-span-6">
        {children}
      </div>
    </div>
  );
}
