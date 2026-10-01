import { Alert, AlertDescription, AlertTitle } from 'nooxit-design-system/components/alert';
import { HugeiconsIcon } from '@hugeicons/react';
import { AlertCircleIcon } from '@hugeicons/core-free-icons';

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <HugeiconsIcon icon={AlertCircleIcon} strokeWidth={2} />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        Please verify your billing information and try again.
      </AlertDescription>
    </Alert>
  );
}
