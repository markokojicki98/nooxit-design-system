import { DirectionProvider } from 'nooxit-design-system/components/direction';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'nooxit-design-system/components/dropdown-menu';
import { Button } from 'nooxit-design-system/components/button';

export default function DirectionDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div dir="rtl" className="flex flex-col items-end gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">القائمة</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
            <DropdownMenuItem>الإعدادات</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DirectionProvider>
  );
}
