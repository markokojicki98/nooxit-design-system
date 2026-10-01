'use client';

import { Toggle } from 'nooxit-design-system/components/toggle';
import { HugeiconsIcon } from '@hugeicons/react';
import { TextBoldIcon, TextItalicIcon } from '@hugeicons/core-free-icons';

export default function ToggleDemo() {
  return (
    <div className="flex items-center gap-3">
      <Toggle aria-label="Toggle bold">
        <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
      </Toggle>
      <Toggle aria-label="Toggle italic" defaultPressed>
        <HugeiconsIcon icon={TextItalicIcon} strokeWidth={2} />
        Italic
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold" size="sm">
        <HugeiconsIcon icon={TextBoldIcon} strokeWidth={2} />
      </Toggle>
    </div>
  );
}
