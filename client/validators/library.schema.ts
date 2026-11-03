import { z } from "zod";

export const librarySearchSchema = z.object({
  search: z.string().max(200),
});

export type LibrarySearch = z.infer<typeof librarySearchSchema>;

export function parseLibrarySearch(search: string): LibrarySearch {
  const parsed = librarySearchSchema.safeParse({ search });

  if (!parsed.success) {
    return { search: "" };
  }

  return { search: parsed.data.search.trim() };
}
