import { Checkbox } from 'nooxit-design-system/components/checkbox';
import { Label } from 'nooxit-design-system/components/label';

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" defaultChecked />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="newsletter" className="mt-px" />
        <div className="flex flex-col gap-1">
          <Label htmlFor="newsletter" className="leading-none">
            Send me product updates
          </Label>
          <p className="text-sm leading-5 text-muted-foreground">
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    </div>
  );
}
