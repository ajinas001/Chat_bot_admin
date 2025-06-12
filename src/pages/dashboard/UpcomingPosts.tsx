
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ScheduledPost = {
  id: string;
  title: string;
  date: string;
  platform: "twitter" | "facebook" | "instagram" | "linkedin";
};

const scheduledPosts: ScheduledPost[] = [
  {
    id: "1",
    title: "How to Improve Your Social Media Engagement",
    date: "2025-05-09T16:00:00",
    platform: "twitter",
  },
  {
    id: "2",
    title: "Top 5 Social Media Trends for Businesses",
    date: "2025-05-10T11:45:00",
    platform: "facebook",
  },
  {
    id: "3",
    title: "The Ultimate Guide to Chatbot Design",
    date: "2025-05-11T09:30:00",
    platform: "linkedin",
  },
  {
    id: "4",
    title: "Behind the Scenes: Our AI Development Process",
    date: "2025-05-12T14:15:00",
    platform: "instagram",
  },
];

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "twitter":
      return "bg-blue-100 text-blue-800";
    case "facebook":
      return "bg-indigo-100 text-indigo-800";
    case "instagram":
      return "bg-pink-100 text-pink-800";
    case "linkedin":
      return "bg-sky-100 text-sky-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function UpcomingPosts() {
  return (
    <Card className="col-span-3 md:col-span-2 border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Upcoming Posts</CardTitle>
        <Calendar className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scheduledPosts.map((post) => {
            const postDate = new Date(post.date);
            const isToday = new Date().toDateString() === postDate.toDateString();
            const isTomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toDateString() === postDate.toDateString();
            
            let dateLabel = postDate.toLocaleDateString();
            if (isToday) dateLabel = "Today";
            if (isTomorrow) dateLabel = "Tomorrow";
            
            return (
              <div key={post.id} className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{dateLabel}</span>
                  <span className="text-sm text-muted-foreground">
                    {postDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="rounded-md border p-3 bg-white">
                  <div className="font-medium">{post.title}</div>
                  <div className="flex items-center mt-2">
                    <Badge variant="outline" className={`capitalize ${getPlatformColor(post.platform)}`}>
                      {post.platform}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
