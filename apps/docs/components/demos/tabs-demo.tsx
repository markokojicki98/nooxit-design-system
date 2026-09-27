import { Tabs, TabsContent, TabsList, TabsTrigger } from 'nooxit-design-system/components/tabs';

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="pt-2 text-sm leading-5 text-muted-foreground">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password" className="pt-2 text-sm leading-5 text-muted-foreground">
        Change your password here.
      </TabsContent>
      <TabsContent value="team" className="pt-2 text-sm leading-5 text-muted-foreground">
        Invite your team members.
      </TabsContent>
    </Tabs>
  );
}
