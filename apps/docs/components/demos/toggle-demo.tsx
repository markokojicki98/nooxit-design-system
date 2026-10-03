'use client';

import { Toggle } from 'nooxit-design-system/components/toggle';
import { TextBIcon, TextItalicIcon } from '@phosphor-icons/react/ssr';

export default function ToggleDemo() {
  return (
    <div className="flex items-center gap-3">
      <Toggle aria-label="Toggle bold">
        <TextBIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" defaultPressed>
        <TextItalicIcon />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold" size="sm">
        <TextBIcon />
      </Toggle>
    </div>
  );
}
