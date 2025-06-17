import type React from "react";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider } from "./ui/sidebar";
import Header from "./Header";
import type { Users } from "../types/type";

interface props {
  children?: React.ReactNode;
  openUserChat: (user: Users) => void;
  personName?: string;
}
const ChatSection = ({ children, openUserChat, personName }: props) => {
  return (
    <SidebarProvider>
      <AppSidebar openUserChat={openUserChat} />
      <main className="w-full bg-amber-50 h-[100vh]">
        <Header personName={personName} />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default ChatSection;
