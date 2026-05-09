import type { GuideMeta } from './guides';

export function searchGuides(guides: GuideMeta[], query: string): GuideMeta[] {
  const q = query.toLowerCase().trim();
  if (!q) return guides;

  return guides.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}
