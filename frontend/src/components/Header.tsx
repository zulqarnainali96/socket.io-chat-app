import { Card, CardContent } from "./ui/card";
import { SidebarTrigger } from "./ui/sidebar";

const Header = ({ personName }: { personName: string }) => {
  return (
    <Card className="w-full rounded-none flex flex-row justify-baseline items-centers p-[7px]">
      <SidebarTrigger />
      <CardContent className="w-full">
        <h4 className="text-center">{personName}</h4>
      </CardContent>
    </Card>
  );
};

export default Header;
