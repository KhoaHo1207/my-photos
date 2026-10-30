export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh w-full overflow-hidden p-4 sm:p-6 lg:p-10">
      {children}
    </div>
  );
}
