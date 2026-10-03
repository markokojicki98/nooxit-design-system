import { Avatar, AvatarFallback } from 'nooxit-design-system/components/avatar';
import { Button } from 'nooxit-design-system/components/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'nooxit-design-system/components/hover-card';
import { CalendarDotsIcon } from '@phosphor-icons/react/ssr';

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nooxit</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>NX</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm leading-5 font-semibold">@nooxit</h4>
            <p className="text-sm leading-5">
              The design system behind every Nooxit product.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <CalendarDotsIcon className="size-4 opacity-70" />
              <span className="text-xs leading-4 text-muted-foreground">
                Joined September 2026
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
