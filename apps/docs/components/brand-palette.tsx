import { primitives } from 'nooxit-design-system/tokens';
import { cn } from 'nooxit-design-system/lib/utils';

const hex = (name: string) =>
  primitives.find((primitive) => primitive.name === name)?.hex ?? '#000000';

type Swatch = {
  token: string;
  name: string;
  role?: string;
  /** Text sits on the swatch, so it has to be readable against it. */
  ink: 'light' | 'dark';
  className: string;
};

// Laid out to echo the brand sheet: white and black stacked on the left,
// Blaze orange across the top, Silver and Dark spruce beneath it.
const sheet: Swatch[] = [
  {
    token: 'base-white',
    name: 'White',
    ink: 'dark',
    className: 'md:col-span-4 md:row-span-2',
  },
  {
    token: 'orange-500',
    name: 'Blaze orange',
    role: 'Primary',
    ink: 'light',
    className: 'md:col-span-8',
  },
  {
    token: 'gray-400',
    name: 'Silver',
    role: 'Tertiary',
    ink: 'dark',
    className: 'md:col-span-4',
  },
  {
    token: 'green-900',
    name: 'Dark spruce',
    role: 'Secondary',
    ink: 'light',
    className: 'md:col-span-4',
  },
  {
    token: 'base-black',
    name: 'Black',
    ink: 'light',
    className: 'md:col-span-4',
  },
  {
    token: 'lime-100',
    name: 'Lime',
    role: 'Brand',
    ink: 'dark',
    className: 'md:col-span-4',
  },
  {
    token: 'blue-800',
    name: 'Blue',
    role: 'Brand',
    ink: 'light',
    className: 'md:col-span-4',
  },
];

export function BrandPalette({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-12',
        className,
      )}
    >
      {sheet.map((swatch) => {
        const value = hex(swatch.token);

        return (
          <div
            key={swatch.token}
            className={cn(
              // Every tile carries the border: white needs one in light mode
              // and black needs one in dark, so applying it to all of them is
              // both simpler and more even than special-casing two.
              'flex min-h-[140px] flex-col justify-end gap-1 rounded-lg border border-border p-4',
              swatch.className,
            )}
            style={{ background: value }}
          >
            <span
              className={cn(
                'font-mono text-xs leading-4 uppercase',
                swatch.ink === 'light'
                  ? 'text-base-white/80'
                  : 'text-base-black/70',
              )}
            >
              {value} {swatch.role ? `· ${swatch.role}` : null}
            </span>
            <span
              className={cn(
                'text-2xl leading-8 font-medium tracking-tight',
                swatch.ink === 'light' ? 'text-base-white' : 'text-base-black',
              )}
            >
              {swatch.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
