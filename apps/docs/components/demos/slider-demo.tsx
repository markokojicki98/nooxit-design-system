'use client';

import { Slider } from 'nooxit-design-system/components/slider';

export default function SliderDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  );
}
