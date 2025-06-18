import { useCallback, useEffect, useRef, useState } from "react";
import type { msg, Users } from "../types/type";
import { useSocket } from "./use-socket";

const useChats = () => {
  const [msg, setMessage] = useState<string | undefined>("");
  const [personName, setPersonName] = useState<string>("No Open Chats");
  const [loadChats, setLoadChats] = useState<boolean>(false);
  const chat_ref = useRef<HTMLDivElement>(null);
  const { sendPrivateMessage } = useSocket();

  const [chatMessage, setChatMessage] = useState<msg[]>([
    {
      id: 1,
      name: "Zain",
      msg: "hi",
      senderID: "123",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    },
    {
      id: 2,
      name: "Ali",
      msg: "hi",
      senderID: "321",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    },
    {
      id: 3,
      name: "Nadia",
      msg: "how are you",
      senderID: "123",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    },
    {
      id: 4,
      name: "Sim",
      msg: "I am good",
      senderID: "321",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    },
    {
      id: 5,
      name: "John",
      msg: "nice",
      senderID: "123",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    },
  ]);

  const sendMessage = useCallback(() => {
    chatMessage.push({
      id: "6",
      name: "Zain",
      msg,
      senderID: "321",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    });
    setMessage("");
  }, [chatMessage, msg]);

  const openUserChat = (item: Users) => {
    setPersonName(item.name);
  };

  useEffect(() => {
    if (chat_ref.current) {
      chat_ref.current?.scrollTo({
        top: chat_ref.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatMessage, msg]);

  return {
    msg,
    chat_ref,
    personName,
    loadChats,
    openUserChat,
    setMessage,
    sendMessage,
    chatMessage,
  };
};

export default useChats;
