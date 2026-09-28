import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { ChartGalleryItem } from '@/components/chart-gallery-item';
import { charts, type ChartType } from '@/components/charts';

const chartsDir = path.join(process.cwd(), 'components', 'charts');

export async function ChartGallery({ type }: { type: ChartType }) {
  const items = await Promise.all(
    charts[type].map(async ({ name, component: Chart }) => ({
      name,
      Chart,
      code: (await readFile(path.join(chartsDir, `${name}.tsx`), 'utf8')).trimEnd(),
    })),
  );

  return (
    <div className="not-prose my-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map(({ name, Chart, code }) => (
        <ChartGalleryItem
          key={name}
          name={name}
          code={code}
          wide={name.endsWith('-interactive')}
        >
          <Chart />
        </ChartGalleryItem>
      ))}
    </div>
  );
}
