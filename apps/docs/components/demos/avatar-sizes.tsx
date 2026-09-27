import { Avatar, AvatarFallback } from 'nooxit-design-system/components/avatar';

const sizes = ['xxs', 'xs', 'sm', 'default', 'lg', 'xl', '2xl'] as const;

export default function AvatarSizes() {
  return (
    <div className="flex flex-wrap items-end gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar size={size}>
            <AvatarFallback>NX</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  );
}
