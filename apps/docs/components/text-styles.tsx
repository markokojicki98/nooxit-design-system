import { textStyles } from 'nooxit-design-system/tokens';

const SAMPLE = 'Sustainable homes, built to last';

/**
 * The Figma text styles with a live sample of each. `size` narrows the list to
 * one step (e.g. "text-sm").
 */
export function TextStyles({
  size,
  sample = SAMPLE,
}: {
  size?: string;
  sample?: string;
}) {
  const styles = textStyles.filter(
    (style) => !size || style.name.startsWith(`${size}/`),
  );

  if (styles.length === 0) {
    return null;
  }

  return (
    <div className="not-prose my-6 flex flex-col divide-y divide-border border-y border-border">
      {styles.map((style) => (
        <div
          key={style.name}
          className="flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:gap-6"
        >
          <div className="flex shrink-0 flex-col gap-0.5 md:w-72">
            <code className="font-mono text-xs leading-4">{style.name}</code>
            <span className="text-xs leading-4 text-muted-foreground">
              {style.size}px /{' '}
              {style.lineHeight === '100%' ? 'leading-none' : `${style.lineHeight}px`} /{' '}
              {style.weight}
              {style.letterSpacing === '0' ? '' : ` / ${style.letterSpacing}`}
            </span>
            <code className="font-mono text-xs leading-4 text-muted-foreground">
              {style.classes}
            </code>
          </div>
          <p className={`${style.classes} min-w-0 text-foreground`}>{sample}</p>
        </div>
      ))}
    </div>
  );
}
