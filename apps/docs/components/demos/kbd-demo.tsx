import { Kbd, KbdGroup } from 'nooxit-design-system/components/kbd';

export default function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <p className="text-sm text-muted-foreground">
        Press <Kbd>⇧</Kbd> <Kbd>⌘</Kbd> <Kbd>P</Kbd> to open the command palette.
      </p>
    </div>
  );
}
