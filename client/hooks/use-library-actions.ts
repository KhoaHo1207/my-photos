"use client";

import { useInvalidateAlbums } from "@/queries/albums";
import { useInvalidatePhotos } from "@/queries/photos";
import { useAlbumStore } from "@/stores/album-store";
import {
  createdAlbumSchema,
  type CreatedAlbum,
} from "@/validators/album.schema";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useUploadSuccess() {
  const invalidatePhotos = useInvalidatePhotos();

  return useCallback(() => {
    void invalidatePhotos();
  }, [invalidatePhotos]);
}

export function useAlbumCreated() {
  const router = useRouter();
  const closeCreateAlbum = useAlbumStore((state) => state.closeCreateAlbum);
  const invalidateAlbums = useInvalidateAlbums();

  return useCallback(
    (album: CreatedAlbum) => {
      const parsed = createdAlbumSchema.safeParse(album);
      if (!parsed.success) return;

      closeCreateAlbum();
      void invalidateAlbums();
      router.push(`/albums/${parsed.data.id}`);
    },
    [closeCreateAlbum, invalidateAlbums, router],
  );
}
