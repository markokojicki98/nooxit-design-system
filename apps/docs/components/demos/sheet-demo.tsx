import { Button } from 'nooxit-design-system/components/button';
import { Input } from 'nooxit-design-system/components/input';
import { Label } from 'nooxit-design-system/components/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'nooxit-design-system/components/sheet';

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-6 pt-2 pb-8">
          <div className="flex flex-col gap-2">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" defaultValue="Marko Kojicki" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button size="lg">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
