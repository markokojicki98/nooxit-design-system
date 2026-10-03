import { Button } from 'nooxit-design-system/components/button';
import { ButtonGroup } from 'nooxit-design-system/components/button-group';
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@phosphor-icons/react/ssr';

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline" aria-label="Align left">
        <TextAlignLeftIcon />
      </Button>
      <Button variant="outline" aria-label="Align center">
        <TextAlignCenterIcon />
      </Button>
      <Button variant="outline" aria-label="Align right">
        <TextAlignRightIcon />
      </Button>
    </ButtonGroup>
  );
}
