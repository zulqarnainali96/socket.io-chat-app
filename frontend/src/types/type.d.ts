export interface Users {
  id: number;
  name: string;
  img: string;
  lastMessage: string;
}
export interface UserListProps {
  openUserChat: (user: Users) => void;
}
type msg = {
  id: string | number;
  name: string;
  senderID: string;
  msg: string | undefined;
  date: string;
};
