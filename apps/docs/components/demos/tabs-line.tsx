import { Tabs, TabsContent, TabsList, TabsTrigger } from 'nooxit-design-system/components/tabs';

export default function TabsLine() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-4 text-sm leading-5 text-muted-foreground">
        Your dashboard at a glance.
      </TabsContent>
      <TabsContent value="analytics" className="pt-4 text-sm leading-5 text-muted-foreground">
        Traffic and conversion.
      </TabsContent>
      <TabsContent value="reports" className="pt-4 text-sm leading-5 text-muted-foreground">
        Scheduled reports.
      </TabsContent>
    </Tabs>
  );
}
