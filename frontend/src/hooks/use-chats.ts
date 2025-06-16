import { useCallback, useEffect, useRef, useState } from "react";

type msg = {
  id: string | number;
  senderID: string;
  msg: string | undefined;
  date: string;
};

const useChats = () => {
  const [msg, setMessage] = useState<string | undefined>("");
  const chat_ref = useRef<HTMLDivElement>(null);
  const [chatMessage, setChatMessage] = useState<msg[]>([
    {
      id: 1,
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
      msg: "how are you",
      senderID: "123",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    },
    {
      id: 3,
      msg: "I am good",
      senderID: "321",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    },
    {
      id: 4,
      msg: "nice",
      senderID: "123",
      date: new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      }).format(new Date()),
    },
    {
      id: 5,
      msg: "ok great",
      senderID: "321",
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
    setMessage,
    sendMessage,
    chatMessage,
  };
};

export default useChats;
