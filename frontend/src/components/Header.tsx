import { Bell } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { SidebarTrigger } from "./ui/sidebar";
import { Badge } from "./ui/badge";
import { Popover } from "./ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Notifications from "./Notifications";

const Header = ({ personName }: { personName?: string }) => {
  return (
    <Card className="w-full rounded-none flex flex-row justify-baseline items-centers p-[7px]">
      <SidebarTrigger />
      <CardContent className="relative w-full flex flex-row justify-center items-center">
        <h3 className="text-center text-xl">{personName ? (personName?.charAt(0).toUpperCase() + personName.slice(1)) : "No Open Chats"}</h3>
        <div className="absolute z-10 cursor-pointer right-0 top-[-19px]">
        <Popover>
          <PopoverTrigger>
            <div className="absolute right-8 z-23">
              <Badge
                className="absolute left-5 top-[-3px] h-5 min-w-4 rounded-full px-1 font-mono tabular-nums"
                variant="destructive"
              >
                99
              </Badge>
              <Bell size={32} className="cursor-pointer" color="gray" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-yellow-100 shadow-2xl mt-12 mr-10 rounded-2xl">
            <div className="grid gap-4">
              {/* <div className="space-y-2">
              </div> */}
              <div className="grid px-2 gap-2">
                <Notifications />
              </div>
            </div>
          </PopoverContent>
        </Popover>
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
