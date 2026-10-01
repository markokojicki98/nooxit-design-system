'use client';

import * as React from 'react';

import { Button } from 'nooxit-design-system/components/button';
import {
  ToggleGroup,
  ToggleGroupItem,
} from 'nooxit-design-system/components/toggle-group';
import { cn } from 'nooxit-design-system/lib/utils';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowUpRight01Icon,
  ComputerIcon,
  SmartPhone01Icon,
  Tablet01Icon,
} from '@hugeicons/core-free-icons';

const WIDTHS = {
  desktop: '100%',
  tablet: '768px',
  mobile: '390px',
} as const;

type Viewport = keyof typeof WIDTHS;

/**
 * Shows a full page in an iframe. App-shell layouts — a sidebar, a dashboard —
 * are `position: fixed` and sized to the viewport, so they cannot be rendered
 * honestly inside a docs column. An iframe gives them a real viewport, and the
 * width toggle then shows how they respond to one.
 */
export function BlockPreview({
  path,
  title,
  height = 640,
  className,
}: {
  /** Route inside this site, e.g. "/preview/dashboard-01". */
  path: string;
  title: string;
  height?: number;
  className?: string;
}) {
  const [viewport, setViewport] = React.useState<Viewport>('desktop');

  return (
    <div className={cn('not-prose my-6 flex flex-col gap-3', className)}>
      <div className="flex items-center justify-between gap-4">
        <ToggleGroup
          type="single"
          value={viewport}
          onValueChange={(value) => value && setViewport(value as Viewport)}
          aria-label="Preview width"
        >
          <ToggleGroupItem value="desktop" size="sm" aria-label="Desktop">
            <HugeiconsIcon icon={ComputerIcon} strokeWidth={2} />
          </ToggleGroupItem>
          <ToggleGroupItem value="tablet" size="sm" aria-label="Tablet">
            <HugeiconsIcon icon={Tablet01Icon} strokeWidth={2} />
          </ToggleGroupItem>
          <ToggleGroupItem value="mobile" size="sm" aria-label="Mobile">
            <HugeiconsIcon icon={SmartPhone01Icon} strokeWidth={2} />
          </ToggleGroupItem>
        </ToggleGroup>

        <Button variant="ghost" size="sm" asChild>
          <a href={path} target="_blank" rel="noreferrer">
            Open
            <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} data-icon="inline-end" />
          </a>
        </Button>
      </div>

      <div className="flex justify-center overflow-hidden rounded-lg border border-border bg-muted-50">
        <iframe
          key={path}
          src={path}
          title={title}
          loading="lazy"
          className="bg-background transition-[width] duration-200 ease-linear"
          style={{ width: WIDTHS[viewport], height }}
        />
      </div>
    </div>
  );
}
