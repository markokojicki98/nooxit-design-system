import { primitives, semanticTokens } from 'nooxit-design-system/tokens';
import { cn } from 'nooxit-design-system/lib/utils';

/** One primitive family (gray, orange, …) as a row of swatches. */
export function ColorScale({ family }: { family: string }) {
  const steps = primitives.filter((primitive) => primitive.family === family);

  if (steps.length === 0) {
    return null;
  }

  return (
    <div className="not-prose my-6 grid grid-cols-[repeat(auto-fill,minmax(88px,1fr))] gap-2">
      {steps.map((step) => (
        <div key={step.name} className="flex flex-col gap-1.5">
          <div
            className="h-14 rounded-md border border-border"
            style={{ background: step.hex }}
          />
          <div className="flex flex-col">
            <span className="text-xs leading-4 font-medium">{step.step}</span>
            <span className="font-mono text-xs leading-4 text-muted-foreground">
              {step.hex}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Swatch({ hex, label }: { hex: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="inline-block size-4 shrink-0 rounded-sm border border-border"
        style={{ background: hex }}
      />
      <span className="font-mono text-xs leading-4 text-muted-foreground">
        {label}
      </span>
    </span>
  );
}

/** A single semantic token, for referencing one inline. */
export function TokenSwatch({ name }: { name: string }) {
  const token = semanticTokens.find((entry) => entry.name === name);

  if (!token) {
    return <code>{name}</code>;
  }

  return <Swatch hex={token.light.hex} label={token.cssVar} />;
}

/**
 * Every semantic token in a group, with both modes resolved and the Figma
 * variable it comes from. `origin` marks the tokens that are not in Figma.
 */
export function SemanticTokens({ group }: { group?: string }) {
  const tokens = group
    ? semanticTokens.filter((token) => token.group === group)
    : semanticTokens;

  return (
    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="py-3 pr-4 font-medium text-muted-foreground">Token</th>
            <th className="py-3 pr-4 font-medium text-muted-foreground">Light</th>
            <th className="py-3 pr-4 font-medium text-muted-foreground">Dark</th>
            <th className="py-3 font-medium text-muted-foreground">Figma</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.name} className="border-b border-border align-top">
              <td className="py-3 pr-4">
                <code className="font-mono text-xs">{token.cssVar}</code>
                {token.origin ? (
                  <span
                    className={cn(
                      'ml-2 inline-flex h-5 items-center rounded-full px-2 text-xs leading-4 font-semibold',
                      token.origin === 'proposed'
                        ? 'bg-warning-muted text-warning-muted-foreground'
                        : 'bg-secondary text-secondary-foreground',
                    )}
                  >
                    {token.origin}
                  </span>
                ) : null}
                <div className="mt-1 text-xs leading-4 text-muted-foreground">
                  {token.description}
                </div>
              </td>
              <td className="py-3 pr-4">
                <Swatch
                  hex={token.light.hex}
                  label={
                    token.light.alpha
                      ? `${token.light.ref} ${token.light.alpha}%`
                      : token.light.ref
                  }
                />
              </td>
              <td className="py-3 pr-4">
                <Swatch
                  hex={token.dark.hex}
                  label={
                    token.dark.alpha
                      ? `${token.dark.ref} ${token.dark.alpha}%`
                      : token.dark.ref
                  }
                />
              </td>
              <td className="py-3 font-mono text-xs leading-4 text-muted-foreground">
                {token.figma ?? '—'}
                {token.figmaValue ? (
                  <div className="mt-1">
                    kit: {token.figmaValue.light} / {token.figmaValue.dark}
                  </div>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
