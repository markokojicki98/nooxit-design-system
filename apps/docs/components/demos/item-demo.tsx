import { Button } from 'nooxit-design-system/components/button';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from 'nooxit-design-system/components/item';
import { HugeiconsIcon } from '@hugeicons/react';
import { File02Icon } from '@hugeicons/core-free-icons';

export default function ItemDemo() {
  return (
    <ItemGroup className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <HugeiconsIcon icon={File02Icon} strokeWidth={2} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Design tokens</ItemTitle>
          <ItemDescription>Colors, typography, spacing and radii.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  );
}
