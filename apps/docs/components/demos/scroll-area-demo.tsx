import { ScrollArea } from 'nooxit-design-system/components/scroll-area';
import { Separator } from 'nooxit-design-system/components/separator';

const tags = Array.from({ length: 30 }, (_, i) => `v1.2.0-beta.${30 - i}`);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-[220px] w-56 rounded-md border border-border">
      <div className="p-4">
        <h4 className="text-sm leading-5 font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="py-2 text-sm leading-5">{tag}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
