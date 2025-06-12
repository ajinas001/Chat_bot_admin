import { ReactNode } from "react";
import { Sidebar } from "../sections/Sidebar";
import { Navbar } from "../sections/Navbar";
import { useSidebar } from "@/UseContext/SidebarContext";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { collapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className={`flex flex-col flex-1 transition-all duration-300  ease-in-out ${collapsed ? "ml-16" : "ml-64"}`}>
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
