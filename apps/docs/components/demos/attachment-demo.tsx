import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from 'nooxit-design-system/components/attachment';
import { FileTextIcon, ImageIcon } from 'lucide-react';

export default function AttachmentDemo() {
  return (
    <AttachmentGroup className="w-full max-w-md">
      <Attachment>
        <AttachmentMedia>
          <FileTextIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>tokens.json</AttachmentTitle>
          <AttachmentDescription>12 KB</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
      <Attachment state="error">
        <AttachmentMedia>
          <ImageIcon />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>cover.png</AttachmentTitle>
          <AttachmentDescription>Upload failed</AttachmentDescription>
        </AttachmentContent>
      </Attachment>
    </AttachmentGroup>
  );
}
