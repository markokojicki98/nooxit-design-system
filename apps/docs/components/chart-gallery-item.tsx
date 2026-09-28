'use client';

import * as React from 'react';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { CodeIcon } from 'lucide-react';

import { Button } from 'nooxit-design-system/components/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'nooxit-design-system/components/sheet';
import { cn } from 'nooxit-design-system/lib/utils';

export function ChartGalleryItem({
  name,
  code,
  wide,
  children,
}: {
  name: string;
  code: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      id={name}
      className={cn(
        'flex scroll-mt-24 flex-col gap-2 [&>[data-slot=card]]:flex-1',
        wide && 'md:col-span-2 xl:col-span-3',
      )}
    >
      {children}
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-xs leading-4 font-medium text-muted-foreground">
          {name}
        </span>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="xs">
              <CodeIcon data-icon="inline-start" />
              View code
            </Button>
          </SheetTrigger>
          <SheetContent className="data-[side=right]:w-full data-[side=right]:sm:max-w-2xl">
            <SheetHeader>
              <SheetTitle className="font-mono">{name}.tsx</SheetTitle>
              <SheetDescription>
                Imports point at <code>nooxit-design-system</code>, so this file
                runs as-is in a project that has the package installed.
              </SheetDescription>
            </SheetHeader>
            <div className="min-h-0 flex-1 overflow-hidden px-6 pb-6 [&_figure]:my-0 [&_figure]:flex [&_figure]:max-h-full [&_figure]:flex-col">
              <DynamicCodeBlock
                lang="tsx"
                code={code}
                codeblock={{ viewportProps: { className: 'max-h-none' } }}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
