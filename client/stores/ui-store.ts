import { create } from "zustand";
import { librarySearchSchema } from "@/validators/library.schema";

type UiState = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  isUploadOpen: boolean;
  setUploadOpen: (open: boolean) => void;
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  searchQuery: "",
  setSearchQuery: (value) => {
    const parsed = librarySearchSchema.shape.search.safeParse(value);
    if (!parsed.success) return;
    set({ searchQuery: parsed.data });
  },
  isUploadOpen: false,
  setUploadOpen: (open) => set({ isUploadOpen: open }),
  isMobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}));
