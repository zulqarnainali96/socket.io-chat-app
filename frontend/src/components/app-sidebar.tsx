import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "./ui/sidebar";
import userImage from "../assets/images/user-img.jpg";
import type { UserListProps, Users } from "../types/type";
import useSidebar from "../hooks/use-sidebar";

const UserList = ({ openUserChat }: UserListProps) => {
  const { userList, activeUser } = useSidebar();
  return (
    <>
      {userList.map((item) => {
        return (
          <li
            key={item.id}
            className="flex flex-row gap-2.5 relative py-6 px-2 bg-amber-400 rounded-3xl cursor-pointer transition-colors active:bg-amber-300"
            onClick={() => openUserChat(item)}
          >
            <img
              loading="lazy"
              className="rounded-full w-11 h-11 object-cover"
              src={userImage}
            />
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <span className="text-xs pt-2">
                <b>last message :</b>
                <i>{item.lastMessage.substring(0, 14)}</i>
              </span>
              {activeUser ? (
                <span className="absolute right-4 top-4 w-auto h-auto px-2 text-white text-shadow-2xs font-semibold bg-green-400 shadow-3xl rounded-full">
                  Active
                </span>
              ) : (
                <span className="absolute right-4 top-4 w-auto h-auto px-2 text-white text-shadow-2xs font-semibold bg-red-400 shadow-3xl rounded-full">
                  Offline
                </span>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
};

export function AppSidebar({
  openUserChat,
}: {
  openUserChat: (user: Users) => void;
}) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent className="pt-10">
            <SidebarMenu>
              <UserList openUserChat={openUserChat} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

{
  /* {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))} */
}
