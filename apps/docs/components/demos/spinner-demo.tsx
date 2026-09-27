import { Button } from 'nooxit-design-system/components/button';
import { Spinner } from 'nooxit-design-system/components/spinner';

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner />
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Saving
      </Button>
    </div>
  );
}
