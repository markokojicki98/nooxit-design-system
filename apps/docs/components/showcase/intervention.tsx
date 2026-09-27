import {
  Avatar,
  AvatarFallback,
} from 'nooxit-design-system/components/avatar';
import {
  Alert,
  AlertDescription,
} from 'nooxit-design-system/components/alert';
import { Button } from 'nooxit-design-system/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'nooxit-design-system/components/card';
import { Separator } from 'nooxit-design-system/components/separator';
import { TriangleAlertIcon } from 'lucide-react';

export function Intervention() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle size="sm">Approval required</CardTitle>
        <CardDescription>
          RUN-4819 stopped before a payment it could not verify.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert
          variant="destructive"
          className="border-transparent bg-destructive-muted [&>svg]:text-destructive"
        >
          <TriangleAlertIcon />
          <AlertDescription className="font-mono text-xs leading-4 font-medium uppercase">
            Invoice #INV-2291 for €14,280 names a supplier who is not on the
            approved list.
          </AlertDescription>
        </Alert>

        <Separator />

        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm leading-5 font-medium">
              Assigned to you
            </span>
            <span className="truncate text-sm leading-5 text-muted-foreground">
              Escalated 11 minutes ago
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline" destructive>
          Reject
        </Button>
        <Button>Approve payment</Button>
      </CardFooter>
    </Card>
  );
}
