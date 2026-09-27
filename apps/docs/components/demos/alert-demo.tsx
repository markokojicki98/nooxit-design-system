import { Alert, AlertDescription, AlertTitle } from 'nooxit-design-system/components/alert';
import { RocketIcon } from 'lucide-react';

export default function AlertDemo() {
  return (
    <Alert className="max-w-md">
      <RocketIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  );
}
