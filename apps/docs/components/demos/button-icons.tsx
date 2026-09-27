import { Button } from 'nooxit-design-system/components/button';
import { ArrowRightIcon, MailIcon } from 'lucide-react';

export default function ButtonIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <MailIcon data-icon="inline-start" />
        Email me
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  );
}
