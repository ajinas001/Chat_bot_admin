
import { useState } from "react";
import { Layout } from "@/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  ArrowUpRight,
  UserPlus,
  ChevronRight
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

const Audience = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Audience Insights</h1>
            <p className="text-muted-foreground">Understand and engage with your followers</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-9">Export Data</Button>
            <Button className="h-9">
              <UserPlus className="mr-1 h-4 w-4" />
              Create Segment
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Audience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">12,458</div>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  8.2%
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Increased by 432 since last month</p>
            </CardContent>
          </Card>

          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">8,245</div>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  5.6%
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">66.2% of your total audience</p>
            </CardContent>
          </Card>

          <Card className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">6.8%</div>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  1.2%
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Higher than industry average (4.2%)</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 md:w-auto md:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="segments">Segments</TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="overview" className="space-y-4">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Audience Growth</CardTitle>
                  <CardDescription>Audience growth over the last 3 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-md">
                    <div className="flex flex-col items-center gap-2">
                      <TrendingUp className="h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">Growth chart visualization coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Top Followers</CardTitle>
                    <CardDescription>Your most engaged followers</CardDescription>
                  </div>
                  <Button variant="ghost" className="text-sm">
                    View all
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Engagement</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Joined</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topFollowers.map((follower) => (
                        <TableRow key={follower.id}>
                          <TableCell className="font-medium flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                              {follower.name.charAt(0).toUpperCase()}
                            </div>
                            <span>{follower.name}</span>
                          </TableCell>
                          <TableCell>{follower.engagement}</TableCell>
                          <TableCell>{follower.country}</TableCell>
                          <TableCell>{follower.joined}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-4">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>Detailed breakdown of your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-md">
                    <div className="flex flex-col items-center gap-2">
                      <Users className="h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">Demographics data visualization coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Audience Activity</CardTitle>
                  <CardDescription>When your audience is most active</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-md">
                    <div className="flex flex-col items-center gap-2">
                      <TrendingUp className="h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">Activity heatmap coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="segments" className="space-y-4">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle>Audience Segments</CardTitle>
                  <CardDescription>Manage your audience segments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-50 border rounded-md">
                    <div className="flex flex-col items-center gap-2">
                      <Users className="h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground">Segment management coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

// Sample data for top followers
const topFollowers = [
  { id: 1, name: "Alex Johnson", engagement: "High", country: "United States", joined: "May 12, 2023" },
  { id: 2, name: "Maria Garcia", engagement: "Medium", country: "Spain", joined: "June 3, 2023" },
  { id: 3, name: "John Smith", engagement: "High", country: "United Kingdom", joined: "April 18, 2023" },
  { id: 4, name: "Sasha Lee", engagement: "Medium", country: "Canada", joined: "July 22, 2023" },
  { id: 5, name: "Raj Patel", engagement: "High", country: "India", joined: "March 9, 2023" }
];

export default Audience;
