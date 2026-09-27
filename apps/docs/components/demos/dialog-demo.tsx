import { Button } from 'nooxit-design-system/components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'nooxit-design-system/components/dialog';
import { Input } from 'nooxit-design-system/components/input';
import { Label } from 'nooxit-design-system/components/label';

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="dialog-name">Name</Label>
            <Input id="dialog-name" defaultValue="Marko Kojicki" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="dialog-username">Username</Label>
            <Input id="dialog-username" defaultValue="@nooxit" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" size="lg">
              Cancel
            </Button>
          </DialogClose>
          <Button size="lg">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
