import {
  Avatar,
  AvatarFallback,
} from 'nooxit-design-system/components/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'nooxit-design-system/components/card';
import {
  NativeSelect,
  NativeSelectOption,
} from 'nooxit-design-system/components/native-select';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'nooxit-design-system/components/tooltip';

const reviewers = [
  { initials: 'MK', name: 'Marko Kojicki', email: 'marko@example.com', role: 'owner' },
  { initials: 'AS', name: 'Ana Schmidt', email: 'ana@example.com', role: 'approver' },
  { initials: 'TL', name: 'Tomas Lange', email: 'tomas@example.com', role: 'viewer' },
];

export function Reviewers() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle size="sm">Reviewers</CardTitle>
        <CardDescription>Who can release a held run.</CardDescription>
      </CardHeader>
      <CardContent>
        {reviewers.map((reviewer) => (
          <div key={reviewer.email} className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar size="sm">
                  <AvatarFallback>{reviewer.initials}</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>{reviewer.name}</TooltipContent>
            </Tooltip>

            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm leading-5 font-medium">
                {reviewer.name}
              </span>
              <span className="truncate text-sm leading-5 text-muted-foreground">
                {reviewer.email}
              </span>
            </div>

            <NativeSelect
              size="sm"
              defaultValue={reviewer.role}
              aria-label={`Role for ${reviewer.name}`}
            >
              <NativeSelectOption value="owner">Owner</NativeSelectOption>
              <NativeSelectOption value="approver">Approver</NativeSelectOption>
              <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
            </NativeSelect>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
