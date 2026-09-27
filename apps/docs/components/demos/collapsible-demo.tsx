'use client';

import * as React from 'react';
import { Button } from 'nooxit-design-system/components/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from 'nooxit-design-system/components/collapsible';
import { ChevronsUpDownIcon } from 'lucide-react';

export default function CollapsibleDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="flex w-full max-w-sm flex-col gap-2"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm leading-5 font-semibold">
          @nooxit starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Toggle">
            <ChevronsUpDownIcon />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-input px-4 py-3 font-mono text-sm leading-5">
        @nooxit/design-system
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border border-input px-4 py-3 font-mono text-sm leading-5">
          @radix-ui/primitives
        </div>
        <div className="rounded-md border border-input px-4 py-3 font-mono text-sm leading-5">
          @tailwindcss/core
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
