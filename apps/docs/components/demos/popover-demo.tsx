import { Button } from 'nooxit-design-system/components/button';
import { Input } from 'nooxit-design-system/components/input';
import { Label } from 'nooxit-design-system/components/label';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from 'nooxit-design-system/components/popover';

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="popover-width">Width</Label>
            <Input id="popover-width" size="sm" defaultValue="100%" className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="popover-height">Height</Label>
            <Input id="popover-height" size="sm" defaultValue="25px" className="col-span-2" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
