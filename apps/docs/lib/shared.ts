import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Nooxit Design System';

/**
 * Canonical origin. Vercel sets VERCEL_PROJECT_PRODUCTION_URL on every build,
 * so a deploy is correct before a custom domain exists; NEXT_PUBLIC_SITE_URL
 * overrides it once one does.
 */
export const baseUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
);
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'markokojicki98',
  repo: 'nooxit-design-system',
  branch: 'main',
};

// Nooxit Figma UI kit (source of truth for tokens and component styling).
export const figmaFileUrl =
  'https://www.figma.com/design/ugfobk75w4e1lOotqhXHfO/Nooxit-design-system';

export function figmaNodeUrl(nodeId: string) {
  return `${figmaFileUrl}?node-id=${nodeId.replace(':', '-')}`;
}

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
