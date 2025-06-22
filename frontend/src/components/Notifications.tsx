// components/NotificationsDropdown.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Bell } from "lucide-react";

export default function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 rounded hover:bg-gray-200">
          <Bell className="w-5 h-5" />
          {/* Optional: notification dot */}
          <span className="absolute top-1 right-1 inline-block w-2 h-2 bg-red-500 rounded-full" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>👤 Friend Request Invite</DropdownMenuItem>
        <DropdownMenuItem>💬 You received a new message</DropdownMenuItem>
        <DropdownMenuItem>📢 System update available</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
