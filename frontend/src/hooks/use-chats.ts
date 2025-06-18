import { useCallback, useEffect, useRef, useState } from "react";
import type { msg, Users } from "../types/type";
import { useSocket } from "./use-socket";
import { getLocalStorageData } from "../lib/local-storage";

const useChats = () => {
  const [msg, setMessage] = useState<string | undefined>("");
  const [personName, setPersonName] = useState<string>("No Open Chats");
  const [personData, setPersoneData] = useState({})
  const [loadChats, setLoadChats] = useState<boolean>(false);
  const chat_ref = useRef<HTMLDivElement>(null);
  const { sendPrivateMessage, socketRef, socketId } = useSocket();

  const [chatMessage, setChatMessage] = useState<msg[]>([
    // {
    //   id: 1,
    //   name: "Zain",
    //   msg: "hi",
    //   senderID: "123",
    //   date: new Intl.DateTimeFormat("default", {
    //     hour: "2-digit",
    //     hour12: true,
    //     minute: "2-digit",
    //   }).format(new Date()),
    // },
    // {
    //   id: 2,
    //   name: "Ali",
    //   msg: "hi",
    //   senderID: "321",
    //   date: new Intl.DateTimeFormat("default", {
    //     hour: "2-digit",
    //     hour12: true,
    //     minute: "2-digit",
    //   }).format(new Date()),
    // },
    // {
    //   id: 3,
    //   name: "Nadia",
    //   msg: "how are you",
    //   senderID: "123",
    //   date: new Intl.DateTimeFormat("default", {
    //     hour: "2-digit",
    //     hour12: true,
    //     minute: "2-digit",
    //   }).format(new Date()),
    // },
    // {
    //   id: 4,
    //   name: "Sim",
    //   msg: "I am good",
    //   senderID: "321",
    //   date: new Intl.DateTimeFormat("default", {
    //     hour: "2-digit",
    //     hour12: true,
    //     minute: "2-digit",
    //   }).format(new Date()),
    // },
    // {
    //   id: 5,
    //   name: "John",
    //   msg: "nice",
    //   senderID: "123",
    //   date: new Intl.DateTimeFormat("default", {
    //     hour: "2-digit",
    //     hour12: true,
    //     minute: "2-digit",
    //   }).format(new Date()),
    // },
  ]);

  const sendMessage = useCallback(() => {
    const userData = getLocalStorageData("user_data");
    const user_message = {
      id: userData.id,
      socketID: socketId,
      name: "Zain",
      msg,
      senderID: "321",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    };
    chatMessage.push(user_message);
    sendPrivateMessage(user_message);
    setMessage("");
  }, [chatMessage, msg]);

  const openUserChat = (item: Users) => {
    setPersoneData(item)
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

  useEffect(() => {
    socketRef.current?.on("welcome", (msg) => {
      console.log(msg);
    // socketRef.current?.emit("welcome", {socketId,...personData});

    });
  }, [socketRef]);

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
