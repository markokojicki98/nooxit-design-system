import { Separator } from 'nooxit-design-system/components/separator';

export default function SeparatorDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="text-sm leading-5 font-medium">Nooxit Design System</h4>
        <p className="text-sm leading-5 text-muted-foreground">
          An open-source design system.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm leading-5">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  );
}
