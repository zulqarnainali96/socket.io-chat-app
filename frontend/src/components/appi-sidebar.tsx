import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../components/ui/sidebar";

const users = [
  { id: 1, name: "Zain", lastMessage: "hi how are you," },
  { id: 2, name: "Ali", lastMessage: "what's up how are you," },
  { id: 3, name: "Nadia", lastMessage: "nothing what about you," },
  { id: 4, name: "Sim", lastMessage: "Good Morning," },
  { id: 5, name: "John", lastMessage: "Welcome," },
];

const UserList = () => {
  return (
    <>
      {users.map((item) => {
        return (
          <li
            key={item.id}
            className="py-6 px-2 bg-amber-400 rounded cursor-pointer transition-colors active:bg-amber-300"
          >
            <h2 className="text-xl">{item.name}</h2>
            <span className="text-sm">
              last message :<i>{item.lastMessage.substring(0,14)}</i>
            </span>
          </li>
        );
      })}
    </>
  );
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent className="pt-10">
            <SidebarMenu className="">
              <UserList />
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
