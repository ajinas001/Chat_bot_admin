
import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Post = {
  id: string;
  title: string;
  date: string;
  status: "published" | "scheduled" | "draft";
  engagement: number;
};

const recentPosts: Post[] = [
  {
    id: "1",
    title: "10 Ways AI is Transforming Customer Service",
    date: "2025-05-08T10:00:00",
    status: "published",
    engagement: 158,
  },
  {
    id: "2",
    title: "The Future of Chatbot Technology in 2026",
    date: "2025-05-07T14:30:00",
    status: "published",
    engagement: 243,
  },
  {
    id: "3",
    title: "How to Improve Your Social Media Engagement",
    date: "2025-05-09T16:00:00",
    status: "scheduled",
    engagement: 0,
  },
  {
    id: "4",
    title: "Case Study: AI Chatbots in Healthcare",
    date: "2025-05-06T09:15:00",
    status: "published",
    engagement: 87,
  },
  {
    id: "5",
    title: "Top 5 Social Media Trends for Businesses",
    date: "2025-05-10T11:45:00",
    status: "draft",
    engagement: 0,
  },
];

export function RecentPosts() {
  return (
    <Card className="col-span-3 border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Posts</CardTitle>
        <MessageSquare className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b last:border-0 last:pb-0">
              <div className="space-y-1">
                <h3 className="font-medium">{post.title}</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                  <Badge variant={
                    post.status === "published" ? "default" : 
                    post.status === "scheduled" ? "outline" : 
                    "secondary"
                  } className="capitalize">
                    {post.status}
                  </Badge>
                </div>
              </div>
              
              {post.status === "published" && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">{post.engagement}</span>
                  <span className="text-muted-foreground">Engagements</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
