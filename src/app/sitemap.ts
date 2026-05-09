import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/guides';

export const dynamic = 'force-static';

const BASE_URL = 'https://cybersec.mouctar.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...slugs.map((slug) => ({
      url: `${BASE_URL}/guides/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
