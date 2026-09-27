import { Marker, MarkerContent, MarkerIcon } from 'nooxit-design-system/components/marker';
import { CheckIcon } from 'lucide-react';

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <CheckIcon />
        </MarkerIcon>
        <MarkerContent>Saved to your library</MarkerContent>
      </Marker>
    </div>
  );
}
