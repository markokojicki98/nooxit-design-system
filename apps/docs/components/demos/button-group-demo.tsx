import { Button } from 'nooxit-design-system/components/button';
import { ButtonGroup } from 'nooxit-design-system/components/button-group';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@hugeicons/core-free-icons';

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup>
      <Button variant="outline" aria-label="Align left">
        <HugeiconsIcon icon={TextAlignLeftIcon} strokeWidth={2} />
      </Button>
      <Button variant="outline" aria-label="Align center">
        <HugeiconsIcon icon={TextAlignCenterIcon} strokeWidth={2} />
      </Button>
      <Button variant="outline" aria-label="Align right">
        <HugeiconsIcon icon={TextAlignRightIcon} strokeWidth={2} />
      </Button>
    </ButtonGroup>
  );
}
