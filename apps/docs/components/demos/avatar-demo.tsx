import { Avatar, AvatarFallback, AvatarImage } from 'nooxit-design-system/components/avatar';

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <Avatar shape="rounded">
        <AvatarFallback>NX</AvatarFallback>
      </Avatar>
    </div>
  );
}
