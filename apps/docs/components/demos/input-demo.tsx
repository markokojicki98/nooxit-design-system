import { Input } from 'nooxit-design-system/components/input';
import { Label } from 'nooxit-design-system/components/label';

export default function InputDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="input-email">Email</Label>
        <Input id="input-email" type="email" placeholder="you@example.com" />
      </div>
      <Input size="sm" placeholder="Small" />
      <Input placeholder="Disabled" disabled />
      <Input aria-invalid defaultValue="Invalid value" />
    </div>
  );
}
