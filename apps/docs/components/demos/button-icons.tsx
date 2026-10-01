import { Button } from 'nooxit-design-system/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, Mail01Icon } from '@hugeicons/core-free-icons';

export default function ButtonIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} data-icon="inline-start" />
        Email me
      </Button>
      <Button variant="outline">
        Continue
        <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} data-icon="inline-end" />
      </Button>
    </div>
  );
}
