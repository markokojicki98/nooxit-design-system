import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

import { demos } from '@/components/demos';
import { cn } from 'nooxit-design-system/lib/utils';

const demosDir = path.join(process.cwd(), 'components', 'demos');

/**
 * Renders a live demo next to its source. The source is read from disk while
 * the page is rendered, so the file itself stays the single copy of the code.
 */
export async function ComponentPreview({
  name,
  className,
  align = 'center',
}: {
  name: keyof typeof demos;
  className?: string;
  /** Vertical layouts read better left-aligned; the default centers the demo. */
  align?: 'center' | 'start';
}) {
  const Demo = demos[name];

  if (!Demo) {
    return (
      <div className="rounded-lg border border-destructive-50 bg-destructive-10 p-4 text-sm text-destructive-muted-foreground">
        Unknown demo: <code className="font-mono">{name}</code>
      </div>
    );
  }

  const code = await readFile(path.join(demosDir, `${name}.tsx`), 'utf8');

  return (
    <Tabs items={['Preview', 'Code']} className="not-prose">
      <Tab value="Preview">
        <div
          className={cn(
            'flex min-h-[220px] w-full flex-col gap-4 p-8',
            align === 'center' ? 'items-center justify-center' : 'items-start',
            className,
          )}
        >
          <Demo />
        </div>
      </Tab>
      <Tab value="Code" className="p-0 [&_figure]:my-0 [&_figure]:rounded-none [&_figure]:border-0">
        <DynamicCodeBlock lang="tsx" code={code.trimEnd()} />
      </Tab>
    </Tabs>
  );
}
