import { Button } from 'nooxit-design-system/components/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'nooxit-design-system/components/card';
import { Input } from 'nooxit-design-system/components/input';
import { Label } from 'nooxit-design-system/components/label';

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle size="md">Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
        <CardAction>
          <Button variant="link" size="sm">
            Import
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Label htmlFor="card-demo-name">Name</Label>
          <Input id="card-demo-name" placeholder="Name of your project" />
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" size="lg">
          Cancel
        </Button>
        <Button size="lg">Deploy</Button>
      </CardFooter>
    </Card>
  );
}
