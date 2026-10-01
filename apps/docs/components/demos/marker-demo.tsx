import { Marker, MarkerContent, MarkerIcon } from 'nooxit-design-system/components/marker';
import { HugeiconsIcon } from '@hugeicons/react';
import { Tick01Icon } from '@hugeicons/core-free-icons';

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={Tick01Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>Saved to your library</MarkerContent>
      </Marker>
    </div>
  );
}
