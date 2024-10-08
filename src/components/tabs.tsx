import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function JobDescriptionTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="bg-transparent h-min border-gray-300 !p-0 border-b rounded-none">
        <TabsTrigger
          value="tab1"
          className="text-sm font-medium text-gray-500 px-4 py-1 transition-all hover:text-gray-700 focus:outline-none focus:text-gray-700 data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:border-gray-700 rounded-none data-[state=active]:text-gray-700"
        >
          Job description
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="text-sm font-medium text-gray-500 px-4 py-1 transition-all hover:text-gray-700 focus:outline-none focus:text-gray-700 data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:border-gray-700 rounded-none data-[state=active]:text-gray-700"
        >
          About company
        </TabsTrigger>
        <TabsTrigger
          value="tab3"
          className="text-sm font-medium text-gray-500 px-4 py-1 transition-all hover:text-gray-700 focus:outline-none focus:text-gray-700 data-[state=active]:border-b-2 data-[state=active]:font-semibold data-[state=active]:border-gray-700 rounded-none data-[state=active]:text-gray-600"
        >
          Other vacancies
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  );
}
