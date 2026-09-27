import { Checkbox } from 'nooxit-design-system/components/checkbox';
import { Label } from 'nooxit-design-system/components/label';

export default function LabelDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="label-demo-terms" />
      <Label htmlFor="label-demo-terms">Accept terms and conditions</Label>
    </div>
  );
}
