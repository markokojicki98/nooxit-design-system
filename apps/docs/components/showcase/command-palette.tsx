'use client';

import * as React from 'react';

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from 'nooxit-design-system/components/command';
import {
  PlayIcon,
  RotateCcwIcon,
  ScrollTextIcon,
  SquareIcon,
  UserRoundPlusIcon,
} from 'lucide-react';

export function CommandPalette() {
  /*
   * cmdk highlights its first item on mount and scrolls it into view. That is
   * right inside a dialog and wrong in a card below the fold: the browser
   * scrolls the whole document to reach it, so the landing page opened
   * mid-scroll. Controlling the value with an empty initial state means
   * nothing is selected until the visitor actually interacts.
   */
  const [value, setValue] = React.useState('');

  return (
    <Command
      value={value}
      onValueChange={setValue}
      className="h-full shadow-none"
    >
      <CommandInput placeholder="Search runs and actions…" />
      <CommandList>
        <CommandGroup heading="Run actions">
          <CommandItem>
            <PlayIcon />
            Resume run
            <CommandShortcut>⌘R</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <SquareIcon />
            Stop run
          </CommandItem>
          <CommandItem>
            <RotateCcwIcon />
            Retry from step 3
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Queue">
          <CommandItem>
            <UserRoundPlusIcon />
            Assign reviewer
          </CommandItem>
          <CommandItem>
            <ScrollTextIcon />
            Open audit log
            <CommandShortcut>⌘L</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
