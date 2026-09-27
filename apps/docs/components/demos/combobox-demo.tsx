'use client';

import * as React from 'react';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from 'nooxit-design-system/components/combobox';

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'];

export default function ComboboxDemo() {
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <Combobox items={frameworks} value={value} onValueChange={setValue}>
      <ComboboxInput placeholder="Select a framework..." className="w-[240px]">
        <ComboboxContent>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxList>
            {(framework: string) => (
              <ComboboxItem key={framework} value={framework}>
                {framework}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </ComboboxInput>
    </Combobox>
  );
}
