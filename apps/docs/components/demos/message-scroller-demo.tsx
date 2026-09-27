'use client';

import { Bubble, BubbleContent } from 'nooxit-design-system/components/bubble';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from 'nooxit-design-system/components/message-scroller';

const messages = Array.from({ length: 12 }, (_, i) => ({
  id: `m${i}`,
  text: `Message number ${i + 1}`,
  mine: i % 2 === 1,
}));

export default function MessageScrollerDemo() {
  return (
    <MessageScrollerProvider>
      <MessageScroller className="h-[260px] w-full max-w-md rounded-lg border border-border">
        <MessageScrollerViewport className="p-4">
          <MessageScrollerContent>
            {messages.map((message) => (
              <MessageScrollerItem key={message.id} messageId={message.id}>
                <Bubble
                  align={message.mine ? 'end' : 'start'}
                  variant={message.mine ? 'default' : 'muted'}
                >
                  <BubbleContent>{message.text}</BubbleContent>
                </Bubble>
              </MessageScrollerItem>
            ))}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  );
}
