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
import { FileTextIcon } from '@phosphor-icons/react/ssr';

export default function ItemDemo() {
  return (
    <ItemGroup className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FileTextIcon />
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
