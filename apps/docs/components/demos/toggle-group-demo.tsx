'use client';

import { ToggleGroup, ToggleGroupItem } from 'nooxit-design-system/components/toggle-group';
import {
  TextBIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from '@phosphor-icons/react/ssr';

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <TextBIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        <TextItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        <TextUnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
