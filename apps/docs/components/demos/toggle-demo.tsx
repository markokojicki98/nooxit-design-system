'use client';

import { Toggle } from 'nooxit-design-system/components/toggle';
import { BoldIcon, ItalicIcon } from 'lucide-react';

export default function ToggleDemo() {
  return (
    <div className="flex items-center gap-3">
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" defaultPressed>
        <ItalicIcon />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold" size="sm">
        <BoldIcon />
      </Toggle>
    </div>
  );
}
