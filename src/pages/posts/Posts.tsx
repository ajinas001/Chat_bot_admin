
import { useState } from "react";
import { Layout } from "@/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageSquare, MoreHorizontal, Plus } from "lucide-react";
import CreateButton from "@/components/buttons/Createbtn";

type Post = {
  id: string;
  title: string;
  date: string;
  status: "published" | "scheduled" | "draft";
  platform: "twitter" | "facebook" | "instagram" | "linkedin";
  engagement?: number;
};

const posts: Post[] = [
  {
    id: "1",
    title: "10 Ways AI is Transforming Customer Service",
    date: "2025-05-08T10:00:00",
    status: "published",
    platform: "twitter",
    engagement: 158,
  },
  {
    id: "2",
    title: "The Future of Chatbot Technology in 2026",
    date: "2025-05-07T14:30:00",
    status: "published",
    platform: "facebook",
    engagement: 243,
  },
  {
    id: "3",
    title: "How to Improve Your Social Media Engagement",
    date: "2025-05-09T16:00:00",
    status: "scheduled",
    platform: "twitter",
  },
  {
    id: "4",
    title: "Case Study: AI Chatbots in Healthcare",
    date: "2025-05-06T09:15:00",
    status: "published",
    platform: "linkedin",
    engagement: 87,
  },
  {
    id: "5",
    title: "Top 5 Social Media Trends for Businesses",
    date: "2025-05-10T11:45:00",
    status: "draft",
    platform: "instagram",
  },
  {
    id: "6",
    title: "Behind the Scenes: Our AI Development Process",
    date: "2025-05-05T13:20:00",
    status: "published",
    platform: "linkedin",
    engagement: 134,
  },
  {
    id: "7",
    title: "How to Automate Your Social Media Posts",
    date: "2025-05-11T08:45:00",
    status: "scheduled",
    platform: "facebook",
  },
  {
    id: "8",
    title: "Introducing Our New Chatbot Features",
    date: "2025-05-04T15:10:00",
    status: "published",
    platform: "twitter",
    engagement: 312,
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

const getStatusVariant = (status: string) => {
  switch (status) {
    case "published":
      return "default";
    case "scheduled":
      return "outline";
    case "draft":
      return "secondary";
    default:
      return "default";
  }
};

const Posts = () => {
  const [filter, setFilter] = useState("all");

  const filteredPosts = filter === "all"
    ? posts
    : posts.filter(post => post.status === filter);

  return (
    <Layout>
      <div className="space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Posts</h1>
            <p className="text-muted-foreground">Manage your social media content</p>
          </div>
          {/* <Button className="sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Create New Post
          </Button> */}
          <CreateButton text="+ Create New Posts"></CreateButton>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Content Library</CardTitle>
                <CardDescription>
                  View and manage all your social media posts
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={filter === "all" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button 
                  variant={filter === "published" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setFilter("published")}
                >
                  Published
                </Button>
                <Button 
                  variant={filter === "scheduled" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setFilter("scheduled")}
                >
                  Scheduled
                </Button>
                <Button 
                  variant={filter === "draft" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setFilter("draft")}
                >
                  Drafts
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[350px]">Post</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Engagement</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          {post.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`capitalize ${getPlatformColor(post.platform)}`}>
                          {post.platform}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(post.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusVariant(post.status)} className="capitalize">
                          {post.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {post.engagement !== undefined ? post.engagement : "-"}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Post</DropdownMenuItem>
                            {post.status === "scheduled" && (
                              <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">Delete Post</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Posts;
