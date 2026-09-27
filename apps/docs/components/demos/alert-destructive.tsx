import { Alert, AlertDescription, AlertTitle } from 'nooxit-design-system/components/alert';
import { CircleAlertIcon } from 'lucide-react';

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <CircleAlertIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        Please verify your billing information and try again.
      </AlertDescription>
    </Alert>
  );
}
