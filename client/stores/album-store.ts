import { create } from "zustand";
import { z } from "zod";
import { photoIdSchema } from "@/validators/album.schema";

type CreateAlbumState = {
  isOpen: boolean;
  photoIds: string[];
};

type AlbumState = {
  createAlbum: CreateAlbumState;
  openCreateAlbum: (photoIds?: string[]) => void;
  closeCreateAlbum: () => void;
};

const photoIdsSchema = z.array(photoIdSchema);

const closedAlbum: CreateAlbumState = {
  isOpen: false,
  photoIds: [],
};

export const useAlbumStore = create<AlbumState>((set) => ({
  createAlbum: closedAlbum,
  openCreateAlbum: (photoIds = []) => {
    const parsed = photoIdsSchema.safeParse(photoIds);
    if (!parsed.success) return;
    set({ createAlbum: { isOpen: true, photoIds: parsed.data } });
  },
  closeCreateAlbum: () => set({ createAlbum: closedAlbum }),
}));
