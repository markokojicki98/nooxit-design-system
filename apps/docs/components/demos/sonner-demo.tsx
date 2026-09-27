'use client';

import { Button } from 'nooxit-design-system/components/button';
import { toast } from 'sonner';

export default function SonnerDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been scheduled', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: { label: 'Undo', onClick: () => {} },
          })
        }
      >
        Show toast
      </Button>
      <Button variant="outline" onClick={() => toast.success('Profile updated')}>
        Success
      </Button>
      <Button
        variant="outline"
        destructive
        onClick={() => toast.error('Something went wrong')}
      >
        Error
      </Button>
    </div>
  );
}
