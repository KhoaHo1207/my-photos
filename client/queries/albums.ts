"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export const albumKeys = {
  all: ["albums"] as const,
  detail: (id: string) => [...albumKeys.all, id] as const,
};

export function useInvalidateAlbums() {
  const queryClient = useQueryClient();

  return useCallback(
    () => queryClient.invalidateQueries({ queryKey: albumKeys.all }),
    [queryClient],
  );
}
