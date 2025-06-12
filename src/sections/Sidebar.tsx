import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  MessageSquare,
  Calendar,
  Settings,
  Users,
  TrendingUp,
  Menu,
  ChevronLeft
} from "lucide-react";
import { useSidebar } from "@/UseContext/SidebarContext";

const sidebarItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "Posts", icon: MessageSquare, path: "/posts" },
  { title: "Schedule", icon: Calendar, path: "/schedule" },
  { title: "Analytics", icon: TrendingUp, path: "/analytics" },
  { title: "Audience", icon: Users, path: "/audience" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export function Sidebar() {
  const location = useLocation();
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        "h-screen bg-gradient-to-b from-[#0e427d] to-[#196cd8] fixed left-0 top-0 z-40 flex flex-col transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between px-4 py-5">
        {!collapsed && (
          <div className="text-white font-bold text-xl ps-4">ChatBot Admin</div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-white hover:bg-white/30"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>

      <div className="flex flex-col gap-2 px-2 py-4 flex-grow">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2  rounded-md transition-colors" , !collapsed && "ps-6",
                isActive
                  ? "text-base-dark bg-base-light"
                  : "text-sidebar-foreground hover:bg-white/30 hover:backdrop-blur-sm hover:text-base-dark transition",
                !collapsed && "me-4 rounded-e-full"
              )}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.title}</span>}
            </Link>

          );
        })}
      </div>

      <div className="p-4">
        {!collapsed && (
          <div className="text-white/80 text-xs">
            ChatBot Admin v1.0
          </div>
        )}
      </div>
    </div>
  );
}
