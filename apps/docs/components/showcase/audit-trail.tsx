import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'nooxit-design-system/components/card';
import { Kbd } from 'nooxit-design-system/components/kbd';
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from 'nooxit-design-system/components/marker';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  CheckmarkCircle01Icon,
  CircleIcon,
  OctagonXIcon,
  UserCircleIcon,
} from '@hugeicons/core-free-icons';

const events = [
  { icon: CircleIcon, text: 'Run started by schedule', time: '09:14' },
  { icon: CheckmarkCircle01Icon, text: '38 invoices matched', time: '09:16' },
  { icon: OctagonXIcon, text: 'Held on unverified supplier', time: '09:18' },
  { icon: UserCircleIcon, text: 'Escalated to Marko', time: '09:18' },
];

export function AuditTrail() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle size="sm">Audit trail</CardTitle>
        <CardDescription>Every decision, attributable.</CardDescription>
      </CardHeader>
      <CardContent>
        <Marker variant="separator">
          <MarkerContent>Today</MarkerContent>
        </Marker>

        <ul className="flex flex-col gap-3">
          {events.map((event) => (
            <li key={event.text} className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-muted text-foreground">
                <HugeiconsIcon icon={event.icon} strokeWidth={2} className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1 truncate text-sm leading-5">
                {event.text}
              </span>
              <span className="text-xs leading-4 text-muted-foreground">
                {event.time}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-sm leading-5 text-muted-foreground">
          <Kbd>⌘</Kbd>
          <Kbd>L</Kbd>
          <span>opens the full log</span>
        </div>
      </CardContent>
    </Card>
  );
}
