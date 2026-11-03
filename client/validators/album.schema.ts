import { z } from "zod";

export const photoIdSchema = z.string().min(1);

export const createdAlbumSchema = z.object({
  id: z.string().min(1),
});

export type CreatedAlbum = z.infer<typeof createdAlbumSchema>;
