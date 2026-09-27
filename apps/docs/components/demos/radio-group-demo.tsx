import { Label } from 'nooxit-design-system/components/label';
import { RadioGroup, RadioGroupItem } from 'nooxit-design-system/components/radio-group';

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="max-w-xs">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="radio-default" />
        <Label htmlFor="radio-default" className="font-normal">
          Default
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="radio-comfortable" />
        <Label htmlFor="radio-comfortable" className="font-normal">
          Comfortable
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="radio-compact" />
        <Label htmlFor="radio-compact" className="font-normal">
          Compact
        </Label>
      </div>
    </RadioGroup>
  );
}
