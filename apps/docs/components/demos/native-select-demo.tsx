import { Label } from 'nooxit-design-system/components/label';
import {
  NativeSelect,
  NativeSelectOption,
} from 'nooxit-design-system/components/native-select';

export default function NativeSelectDemo() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="native-select-demo">Framework</Label>
      <NativeSelect id="native-select-demo" defaultValue="next">
        <NativeSelectOption value="next">Next.js</NativeSelectOption>
        <NativeSelectOption value="remix">Remix</NativeSelectOption>
        <NativeSelectOption value="astro">Astro</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
