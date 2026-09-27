'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from 'nooxit-design-system/components/resizable';

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-w-md rounded-lg border border-border"
      style={{ height: 200 }}
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 text-base leading-6 font-medium">
          One
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 text-base leading-6 font-medium">
          Two
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
