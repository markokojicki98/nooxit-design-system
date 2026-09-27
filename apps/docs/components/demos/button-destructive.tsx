import { Button } from 'nooxit-design-system/components/button';

export default function ButtonDestructive() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button destructive>Delete</Button>
      <Button variant="secondary" destructive>
        Delete
      </Button>
      <Button variant="outline" destructive>
        Delete
      </Button>
      <Button variant="ghost" destructive>
        Delete
      </Button>
      <Button variant="link" destructive>
        Delete
      </Button>
    </div>
  );
}
