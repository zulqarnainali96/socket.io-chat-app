import { Card, CardContent } from "./ui/card";
import { SidebarTrigger } from "./ui/sidebar";
import NotificationsDropdown from "./Notifications";
import { ProfileDropdown } from "./profile-dropdown";

const Header = ({ personName }: { personName?: string }) => {
  return (
    <Card className="w-full rounded-none flex flex-row justify-baseline items-centers p-[7px]">
      <SidebarTrigger />
      <CardContent className="relative w-full flex flex-row justify-center items-center">
        <h3 className="text-center text-xl">
          {personName
            ? personName?.charAt(0).toUpperCase() + personName.slice(1)
            : "No Open Chats"}
        </h3>
        <div className="absolute z-10 cursor-pointer right-14 top-[-2px]">
          <NotificationsDropdown />
        </div>
        <div className="absolute z-10 cursor-pointer right-3 top-[0px]">
          <ProfileDropdown />
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
