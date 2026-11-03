"use client";

import { useUiStore } from "@/stores/ui-store";

export default function Sidebar() {
  const isMobileMenuOpen = useUiStore((state) => state.isMobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);

  return (
    <>
      {isMobileMenuOpen ? (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}
      <aside
        className={`sidebar-container ${
          isMobileMenuOpen ? "sidebar-mobile-open" : "sidebar-mobile-closed"
        }`}
      >
        Sidebar
      </aside>
    </>
  );
}
