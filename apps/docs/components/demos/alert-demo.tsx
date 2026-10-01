import { Alert, AlertDescription, AlertTitle } from 'nooxit-design-system/components/alert';
import { HugeiconsIcon } from '@hugeicons/react';
import { RocketIcon } from '@hugeicons/core-free-icons';

export default function AlertDemo() {
  return (
    <Alert className="max-w-md">
      <HugeiconsIcon icon={RocketIcon} strokeWidth={2} />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  );
}
