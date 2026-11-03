"use client";

import { useUiStore } from "@/stores/ui-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function useCloseMobileMenuOnNavigate() {
  const pathname = usePathname();
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);
}
