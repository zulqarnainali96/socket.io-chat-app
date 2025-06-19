import type React from "react";

export interface Users {
  id: string;
  email: string;
  name: string;
  lastMessage: string;
}
export interface UserListProps {
  openUserChat: (user: Users) => void;
}
type Msg = {
  id: string;
  name: string;
  receiverID?: string; 
  msg: string | undefined;
  date: string;
};

export interface login {
  handleLogin: () => void;
  email: string;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}
export interface register {
  handleRegister: () => void;
  name: string;
  email: string;
  password: string;
  loading: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export interface userData {
  id: string;
  name: string;
  email: string;
}
