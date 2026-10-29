import React from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <p>Navbar</p>
        <p>Sidebar</p>
      </div>
      <main className="app-main-content">{children}</main>
    </div>
  );
}
