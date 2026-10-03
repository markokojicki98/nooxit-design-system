import { createElement } from 'react';
import { ChartLineIcon, PaletteIcon, ShapesIcon } from '@phosphor-icons/react/ssr';
import { llms, loader } from 'fumadocs-core/source';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Sidebar icons named in meta.json files, by their Phosphor export name.
// Listed explicitly so the server does not import the whole set; add new
// names here.
const sidebarIcons = { ChartLineIcon, PaletteIcon, ShapesIcon };

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  icon(name) {
    if (!name) return;
    const Icon = sidebarIcons[name as keyof typeof sidebarIcons];
    if (!Icon) {
      console.warn(`Unknown sidebar icon "${name}" in a meta.json file.`);
      return;
    }
    return createElement(Icon);
  },
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});
