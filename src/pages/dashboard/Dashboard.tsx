
import { Layout } from "@/layout/Layout";
import { StatCard } from "@/pages/dashboard/StatCard";
import { RecentPosts } from "@/pages/dashboard/RecentPosts";
import { EngagementChart } from "@/pages/dashboard/EngagementChart";
import { UpcomingPosts } from "@/pages/dashboard/UpcomingPosts";
import { MessageSquare, Users, TrendingUp, Calendar } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-4 md:space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Your social media chatbot overview</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Total Posts"
            value="128"
            icon={<MessageSquare className="h-4 w-4" />}
            change="12%"
            positive={true}
          />
          <StatCard 
            title="Audience Growth"
            value="2,945"
            icon={<Users className="h-4 w-4" />}
            change="8.5%"
            positive={true}
          />
          <StatCard 
            title="Engagement Rate"
            value="5.8%"
            icon={<TrendingUp className="h-4 w-4" />}
            change="2.1%"
            positive={true}
          />
          <StatCard 
            title="Scheduled Posts"
            value="14"
            icon={<Calendar className="h-4 w-4" />}
            change="3"
            positive={true}
          />
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          <EngagementChart />
          <RecentPosts />
          <UpcomingPosts />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
