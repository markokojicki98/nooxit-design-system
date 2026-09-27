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
  return (
    <Command className="h-full shadow-none">
      <CommandInput placeholder="Search runs and actions…" />
      <CommandList className="max-h-none">
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
