"use client";

import { useSessionStore } from "@/stores/session-store";
import { useUiStore } from "@/stores/ui-store";
import { LogOut, MenuIcon, Search, Sparkle, Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const user = useSessionStore((state) => state.user);
  const searchQuery = useUiStore((state) => state.searchQuery);
  const setSearchQuery = useUiStore((state) => state.setSearchQuery);
  const isMobileMenuOpen = useUiStore((state) => state.isMobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);
  const setUploadOpen = useUiStore((state) => state.setUploadOpen);
  const isUploadOpen = useUiStore((state) => state.isUploadOpen);

  const handleSignOut = () => {
    setDropdownOpen(false);
    router.push("/login");
  };
  return (
    <header className="navbar-header">
      {/* Left brand & mobile hamburger */}
      <div className="navbar-brand">
        <button
          type="button"
          className="navbar-menu-btn"
          title="Toggle menu"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="size-5" />
        </button>

        <Logo className="size-8" />

        <h1 className="navbar-brand-text">MY PHOTOS</h1>
      </div>

      {/* Center Search Bar */}
      <div className="relative max-w-2xl flex-1">
        <div className="navbar-search-wrapper">
          <Search className="mr-2 size-4 shrink-0 text-slate-500 sm:mr-3" />

          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search photos, videos, tags,.."
            className="navbar-search-input"
          />
          {searchQuery.length > 0 ? (
            <button
              onClick={() => setSearchQuery("")}
              type="button"
              className="cursor-pointer rounded-full p-0.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-600"
              title="Clear search"
              aria-label="Clear search"
            >
              <X className="size-3.5 text-slate-800 sm:size-4" />
            </button>
          ) : (
            <div className="navbar-ai-badge">
              AI-Powered Search{" "}
              <Sparkle className="size-3.5 shrink-0 animate-spin text-slate-600" />
            </div>
          )}
        </div>
      </div>

      {/* Right Action Icons: Upload & Profile */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="navbar-upload-btn"
          onClick={() => setUploadOpen(!isUploadOpen)}
          title="Upload photos & videos"
        >
          <Upload className="size-3.5" />
          <span className="hidden sm:inline">Upload</span>
        </button>

        {/* User Profile Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="navbar-avatar-btn"
          >
            {user.name.charAt(0).toUpperCase() || "U"}
          </button>

          {dropdownOpen && (
            <div className="navbar-dropdown">
              <div className="border-b border-slate-100 px-4 py-2">
                <p className="truncate text-sm font-medium text-slate-800">
                  {user?.name || "User"}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {user?.email || "user@example.com"}
                </p>
              </div>
              <div className="p-1">
                <button
                  className="navbar-logout-btn"
                  type="button"
                  onClick={handleSignOut}
                >
                  <LogOut className="size-3.5" /> Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
