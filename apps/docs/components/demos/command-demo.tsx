import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from 'nooxit-design-system/components/command';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Calendar01Icon,
  Settings01Icon,
  SmileIcon,
  UserCircleIcon,
} from '@hugeicons/core-free-icons';

export default function CommandDemo() {
  return (
    <Command className="w-full max-w-sm">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <HugeiconsIcon icon={Calendar01Icon} strokeWidth={2} />
            Calendar
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={SmileIcon} strokeWidth={2} />
            Search emoji
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <HugeiconsIcon icon={UserCircleIcon} strokeWidth={2} />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
            Settings
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
