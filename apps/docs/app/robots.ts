import type { MetadataRoute } from 'next';

import { baseUrl } from '@/lib/shared';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Preview routes exist to be framed on a docs page, not to be indexed
      // as pages of their own.
      disallow: ['/preview/'],
    },
    sitemap: new URL('/sitemap.xml', baseUrl).toString(),
  };
}
