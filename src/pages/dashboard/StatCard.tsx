
import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  positive?: boolean;
  className?: string;
}

export function StatCard({ title, value, icon, change, positive, className }: StatCardProps) {
  return (
    <Card className={cn("border shadow-sm", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={cn(
            "text-xs font-medium mt-1",
            positive ? "text-blue-800" : "text-red-500"
          )}>
            {positive ? "+" : "-"}{change} from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}
