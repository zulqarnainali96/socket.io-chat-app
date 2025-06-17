import type React from "react";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import Header from "./Header";

interface props {
  children?: React.ReactNode;
}
const ChatSection = ({ children }: props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-amber-50">
        <Header personName="John Doe" />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default ChatSection;
