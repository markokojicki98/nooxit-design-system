import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'nooxit-design-system/components/navigation-menu';

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-2 md:grid-cols-2">
              <li>
                <NavigationMenuLink href="#">
                  <div className="text-sm leading-none font-medium">Introduction</div>
                  <p className="text-sm leading-5 text-muted-foreground">
                    What Nooxit is and how it is built.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <div className="text-sm leading-none font-medium">Installation</div>
                  <p className="text-sm leading-5 text-muted-foreground">
                    Add the package to a Next.js app.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className="px-5 py-2">
            Components
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
