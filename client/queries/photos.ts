"use client";

import { useQuery } from "@tanstack/react-query";
import { useUiStore } from "@/stores/ui-store";
import {
  parseLibrarySearch,
  type LibrarySearch,
} from "@/validators/library.schema";

export const photoKeys = {
  all: ["photos"] as const,
  list: (filters: LibrarySearch) => [...photoKeys.all, filters] as const,
};

async function fetchPhotos(filters: LibrarySearch) {
  const params = new URLSearchParams();
  if (filters.search) params.set("search", filters.search);

  const response = await fetch(`/api/photos?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Could not load photos");
  }

  return response.json() as Promise<unknown>;
}

export function usePhotosQuery() {
  const searchQuery = useUiStore((state) => state.searchQuery);
  const filters = parseLibrarySearch(searchQuery);

  return useQuery({
    queryKey: photoKeys.list(filters),
    queryFn: () => fetchPhotos(filters),
  });
}
