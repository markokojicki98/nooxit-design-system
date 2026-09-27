import { Avatar, AvatarFallback } from 'nooxit-design-system/components/avatar';
import { Bubble, BubbleContent } from 'nooxit-design-system/components/bubble';
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from 'nooxit-design-system/components/message';

export default function MessageDemo() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message>
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>NX</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>Which token should a hover state use?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble align="end">
            <BubbleContent>
              Use hover-primary, hover-secondary or hover-destructive.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  );
}
