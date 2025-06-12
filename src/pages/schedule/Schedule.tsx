
import { Layout } from "@/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ScheduledPost = {
  id: string;
  title: string;
  date: string;
  time: string;
  platform: "twitter" | "facebook" | "instagram" | "linkedin";
};

// Generate some example data for the schedule
const generateWeekData = () => {
  const platforms = ["twitter", "facebook", "instagram", "linkedin"];
  const titles = [
    "How to Improve Your Social Media Engagement",
    "Top 5 Social Media Trends for Businesses",
    "The Ultimate Guide to Chatbot Design",
    "Behind the Scenes: Our AI Development Process",
    "10 Ways AI is Transforming Customer Service",
    "Case Study: AI Chatbots in Healthcare",
    "The Future of Chatbot Technology in 2026",
  ];
  
  const now = new Date();
  const weekData: Record<string, ScheduledPost[]> = {};
  
  // Create 7 days starting from today
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(now);
    currentDate.setDate(currentDate.getDate() + i);
    const dateKey = currentDate.toISOString().split('T')[0];
    
    const postsCount = Math.floor(Math.random() * 3) + (i === 0 ? 2 : 0); // More posts for today
    const dailyPosts: ScheduledPost[] = [];
    
    for (let j = 0; j < postsCount; j++) {
      const hours = Math.floor(Math.random() * 12) + 9; // 9 AM to 8 PM
      const minutes = Math.random() > 0.5 ? "00" : "30";
      const ampm = hours >= 12 ? "PM" : "AM";
      const hour12 = hours > 12 ? hours - 12 : hours;
      
      dailyPosts.push({
        id: `${dateKey}-${j}`,
        title: titles[Math.floor(Math.random() * titles.length)],
        date: dateKey,
        time: `${hour12}:${minutes} ${ampm}`,
        platform: platforms[Math.floor(Math.random() * platforms.length)] as any,
      });
    }
    
    weekData[dateKey] = dailyPosts;
  }
  
  return weekData;
};

const weekData = generateWeekData();

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

const getDayName = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  if (date.getTime() === today.getTime()) {
    return "Today";
  } else if (date.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  } else {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }
};

const Schedule = () => {
  return (
    <Layout>
      <div className="space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Content Calendar</h1>
            <p className="text-muted-foreground">Schedule and plan your social media posts</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">
              <CalendarIcon className="mr-2 h-4 w-4" />
              Month View
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Schedule Post
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {Object.keys(weekData).map(dateString => (
            <Card key={dateString}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">
                    {getDayName(dateString)}
                    <span className="ml-2 text-sm text-muted-foreground font-normal">
                      {new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {weekData[dateString].length > 0 ? (
                  <div className="space-y-3">
                    {weekData[dateString].map(post => (
                      <div key={post.id} className="flex items-center p-3 rounded-md border bg-white">
                        <div className="flex-1">
                          <h3 className="font-medium">{post.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className={`capitalize ${getPlatformColor(post.platform)}`}>
                              {post.platform}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="mr-1 h-3 w-3" />
                              {post.time}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <span className="sr-only">Edit</span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                          >
                            <path
                              d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-20 items-center justify-center rounded-md border border-dashed">
                    <p className="text-sm text-muted-foreground">No posts scheduled for this day</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
