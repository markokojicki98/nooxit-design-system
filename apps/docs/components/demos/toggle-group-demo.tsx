'use client';

import { ToggleGroup, ToggleGroupItem } from 'nooxit-design-system/components/toggle-group';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
