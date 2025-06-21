/* eslint-disable react-hooks/exhaustive-deps */
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import type { Msg, Users } from "../types/type";
import { useSocket } from "./use-socket";
import { getLocalStorageData } from "../lib/local-storage";

const useChats = () => {
  const userData = getLocalStorageData("user_data");
  const [msg, setMessage] = useState<string | undefined>("");
  const [personName, setPersonName] = useState<string>("");
  const [personData, setPersonData] = useState<Users>();
  const [typing, setTyping] = useState<string | "">("");
  const [loadChats, setLoadChats] = useState<boolean>(false);
  const chat_ref = useRef<HTMLDivElement>(null);
  const {
    sendPrivateMessage,
    socketRef,
    // socketId,
    socketOn,
    joinRoom,
    socketEmit,
    socketOff,
    showTyping,
    getTyping,
  } = useSocket();

  const [chatMessage, setChatMessage] = useState<Msg[]>([]);

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setMessage(e.target?.value);
      showTyping("typing", userData.name);
      debounceTyping();
    } else {
      showTyping("stop-typing", userData.name);
    }
  };

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
    // Stop Indicator
    showTyping("stop-typing",userData.name)

    setMessage("");
  }, [chatMessage, msg]);

  const openUserChat = (item: Users) => {
    setPersonData(item);
    joinRoom("join-room", item.id);
    setPersonName(item.name);
  };

  const debounceTyping = () => {
    setTimeout(() => {
      showTyping("stop-typing", userData.name);
    }, 2000);
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
    socketEmit("welcome", userData);

    socketOn("message", (data) => {
      console.log(data);
      setChatMessage((prev) => [...prev, data]);
    });

    getTyping("typing", (name) => {
      setTyping(`${name} is Typing`);
      console.log(name+" Send Typing");
    });

    getTyping("stop-typing", (name) => {
      setTyping("");
    });

    return () => {
      socketOff("welcome");
      socketOff("message");
    };
  }, [socketRef]);

  return {
    msg,
    typing,
    userData,
    chat_ref,
    personName,
    handleMessage,
    setLoadChats,
    loadChats,
    openUserChat,
    setMessage,
    sendMessage,
    chatMessage,
  };
};

export default useChats;
