import { createElement } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Chart01Icon,
  ColorPickerIcon,
  ShapesIcon,
} from '@hugeicons/core-free-icons';
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

// Sidebar icons named in meta.json files, by their Hugeicons export name.
// Listed explicitly so the server does not import the whole set; add new
// names here.
const sidebarIcons = { Chart01Icon, ShapesIcon, ColorPickerIcon };

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  icon(name) {
    if (!name) return;
    const icon = sidebarIcons[name as keyof typeof sidebarIcons];
    if (!icon) {
      console.warn(`Unknown sidebar icon "${name}" in a meta.json file.`);
      return;
    }
    return createElement(HugeiconsIcon, { icon, strokeWidth: 2 });
  },
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});
