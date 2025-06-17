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

const users = [
  { id: 1, name: "Zain", img: userImage, lastMessage: "hi how are you," },
  { id: 2, name: "Ali", img: userImage, lastMessage: "what's up how are you," },
  {
    id: 3,
    name: "Nadia",
    img: userImage,
    lastMessage: "nothing what about you,",
  },
  { id: 4, name: "Sim", img: userImage, lastMessage: "Good Morning," },
  { id: 5, name: "John", img: userImage, lastMessage: "Welcome," },
];

const UserList = ({ openUserChat }: UserListProps) => {
  return (
    <>
      {users.map((item) => {
        return (
          <li
            key={item.id}
            className="flex flex-row gap-2.5 py-6 px-2 bg-amber-400 rounded-3xl cursor-pointer transition-colors active:bg-amber-300"
            onClick={() => openUserChat(item)}
          >
            <img
              loading="lazy"
              className="rounded-full w-11 h-11 object-cover"
              src={item.img}
            />
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <span className="text-xs pt-2">
                <b>last message :</b>
                <i>{item.lastMessage.substring(0, 14)}</i>
              </span>
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
