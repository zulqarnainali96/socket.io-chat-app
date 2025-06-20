/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import type { Msg, Users } from "../types/type";
import { useSocket } from "./use-socket";
import { getLocalStorageData } from "../lib/local-storage";

const useChats = () => {
  const userData = getLocalStorageData("user_data");
  const [msg, setMessage] = useState<string | undefined>("");
  const [personName, setPersonName] = useState<string>("No Open Chats");
  const [personData, setPersonData] = useState<Users>();
  const [loadChats, setLoadChats] = useState<boolean>(false);
  const chat_ref = useRef<HTMLDivElement>(null);
  const {
    sendPrivateMessage,
    socketRef,
    // socketId,
    socketOn,
    joinRoom,
    // socketEmit,
    socketOff,
  } = useSocket();

  const [chatMessage, setChatMessage] = useState<Msg[]>([
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
    const user_message: Msg = {
      id: userData.id,
      name: "Zain",
      msg,
      receiverID: personData?.id,
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
    setPersonData(item);
    joinRoom("join-room", item.id);
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    socketOn("welcome", (data) => {
      console.log(data);
    });

    socketOn("message", (data) => {
      console.log(data);
      chatMessage.push(data);
    });

    return () => {
      socketOff("welcome");
      socketOff("message");
    };
  }, [socketRef,chatMessage]);

  return {
    msg,
    userData,
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
