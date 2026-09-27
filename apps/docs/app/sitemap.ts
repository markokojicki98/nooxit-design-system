import type { MetadataRoute } from 'next';

import { source } from '@/lib/source';
import { baseUrl } from '@/lib/shared';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, baseUrl).toString();

  return [
    { url: url('/'), changeFrequency: 'monthly', priority: 1 },
    { url: url('/docs'), changeFrequency: 'weekly', priority: 0.8 },
    ...source.getPages().map((page) => ({
      url: url(page.url),
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ];
}
