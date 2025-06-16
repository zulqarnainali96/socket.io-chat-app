import type React from "react";
import { AppSidebar } from "./appi-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

interface props {
  children?: React.ReactNode;
}
const ChatSection = ({ children }: props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-amber-50">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default ChatSection;
