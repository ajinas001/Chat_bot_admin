
import { Layout } from "@/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Analytics = () => {
  return (
    <Layout>
      <div className="space-y-4 md:space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track and analyze your social media performance</p>
        </div>
        
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>This page will show detailed analytics for your social media accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center p-12 border rounded-md bg-gray-50">
              <p className="text-xl text-muted-foreground">Analytics coming soon...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Analytics;
