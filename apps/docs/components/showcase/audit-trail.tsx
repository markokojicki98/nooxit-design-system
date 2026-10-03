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
import {
  CheckCircleIcon,
  RecordIcon,
  UserIcon,
  XCircleIcon,
} from '@phosphor-icons/react/ssr';

const events = [
  { icon: RecordIcon, text: 'Run started by schedule', time: '09:14' },
  { icon: CheckCircleIcon, text: '38 invoices matched', time: '09:16' },
  { icon: XCircleIcon, text: 'Held on unverified supplier', time: '09:18' },
  { icon: UserIcon, text: 'Escalated to Marko', time: '09:18' },
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
                <event.icon className="size-3.5" />
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
