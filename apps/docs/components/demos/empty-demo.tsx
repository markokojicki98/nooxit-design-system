import { Button } from 'nooxit-design-system/components/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from 'nooxit-design-system/components/empty';
import { FolderIcon } from 'lucide-react';

export default function EmptyDemo() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Create your first project to get started.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create project</Button>
      </EmptyContent>
    </Empty>
  );
}
