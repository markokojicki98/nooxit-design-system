import { Label } from 'nooxit-design-system/components/label';
import { Switch } from 'nooxit-design-system/components/switch';

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="switch-airplane" defaultChecked />
        <Label htmlFor="switch-airplane" className="leading-none">
          Airplane mode
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-small" size="sm" />
        <Label htmlFor="switch-small" className="leading-none">
          Small
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-disabled" disabled />
        <Label htmlFor="switch-disabled" className="leading-none">
          Disabled
        </Label>
      </div>
    </div>
  );
}
