import { Button } from 'nooxit-design-system/components/button';
import { PlusIcon } from '@phosphor-icons/react/ssr';

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon-sm" variant="outline" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon-xs" variant="ghost" aria-label="Add">
        <PlusIcon />
      </Button>
    </div>
  );
}
