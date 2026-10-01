import { Badge } from 'nooxit-design-system/components/badge';
import { Button } from 'nooxit-design-system/components/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'nooxit-design-system/components/card';
import { Progress } from 'nooxit-design-system/components/progress';
import { Spinner } from 'nooxit-design-system/components/spinner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'nooxit-design-system/components/table';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';

type Status = 'running' | 'done' | 'failed' | 'queued';

const runs: {
  id: string;
  task: string;
  status: Status;
  progress: number;
  duration: string;
}[] = [
  { id: 'RUN-4821', task: 'Reconcile invoices', status: 'running', progress: 62, duration: '4m 12s' },
  { id: 'RUN-4820', task: 'Sync supplier catalog', status: 'done', progress: 100, duration: '1m 38s' },
  { id: 'RUN-4819', task: 'Extract contract terms', status: 'failed', progress: 41, duration: '0m 51s' },
  { id: 'RUN-4818', task: 'Classify support tickets', status: 'queued', progress: 0, duration: '—' },
];

// Status is the one place color is allowed to speak, so each state gets its
// own token pair rather than a shared neutral badge.
const statusStyles: Record<Status, string> = {
  running: 'bg-descriptive-blue text-descriptive-blue-foreground',
  done: 'bg-success-muted text-success-muted-foreground',
  failed: 'bg-destructive-muted text-destructive-muted-foreground',
  queued: '',
};

const statusLabel: Record<Status, string> = {
  running: 'Running',
  done: 'Completed',
  failed: 'Failed',
  queued: 'Queued',
};

export function AgentRuns() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle size="sm">Agent runs</CardTitle>
        <CardDescription>Four active workers across two queues.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            View all
            <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} data-icon="inline-end" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-6">Run</TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[132px]">Progress</TableHead>
              <TableHead className="pr-6 text-right">Elapsed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {runs.map((run) => (
              <TableRow key={run.id}>
                <TableCell className="pl-6 font-medium">
                  {run.id}
                </TableCell>
                <TableCell className="font-medium">{run.task}</TableCell>
                <TableCell>
                  <Badge
                    variant={run.status === 'queued' ? 'secondary' : 'default'}
                    className={statusStyles[run.status]}
                  >
                    {run.status === 'running' ? (
                      <Spinner className="size-3" />
                    ) : null}
                    {statusLabel[run.status]}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Progress
                    value={run.progress}
                    size="xs"
                    className="w-full"
                    aria-label={`${run.task} progress`}
                  />
                </TableCell>
                <TableCell className="pr-6 text-right text-muted-foreground">
                  {run.duration}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
