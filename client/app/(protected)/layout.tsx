import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh min-h-0 flex-col">
      <Navbar />
      <div className="flex min-h-0 min-w-0 flex-1">
        <Sidebar />
        <main className="app-main-content min-w-0">{children}</main>
      </div>
    </div>
  );
}
