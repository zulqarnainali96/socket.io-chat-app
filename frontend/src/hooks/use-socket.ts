import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import type { Msg } from "../types/type";

type EmitEvents = {
  data: object | string | boolean | [];
};
// type onEvents = {
//   callback: (data: EmitEvents) => void;
// };
type UseSocketReturn = {
  socketId: string | null;
  disconnect: () => void;
  // events
  socketEmit: (event: string, data: EmitEvents) => void;
  socketOn: (event: string, callback: (data: Msg) => void) => void;
  socketOff: (event: string) => void;
  joinRoom: (room: string, id: string) => void;
  showTyping: (event: string, name: string) => void;
  getTyping: (event: string, callback: (name: string) => void) => void;
  //
  sendPrivateMessage: (user_message: Msg) => void;
  socketRef: object;
};

export const useSocket = (): UseSocketReturn => {
  const [socketId, setSocketId] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  const sendPrivateMessage = (user_message: Msg) => {
    socketRef.current?.emit("message", user_message);
  };
  const socketEmit = (event: string, data: EmitEvents) => {
    socketRef.current?.emit(event, data);
  };
  const socketOn = (event: string, callback: (data: Msg) => void) => {
    socketRef.current?.on(event, callback);
  };
  const socketOff = (event: string) => {
    socketRef.current?.off(event);
  };
  const joinRoom = (room: string, id: string) => {
    socketRef.current?.emit(room, id);
  };
  const showTyping = (event: string, name: string) => {
    socketRef.current?.emit(event, name);
  };
  const getTyping = (event: string, callback: (name: string) => void) => {
    socketRef.current?.on(event, callback);
  };
  const connect = () => {
    socketRef.current = io(import.meta.env.VITE_wsURL, {
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      console.log("Connected with ID:", socketRef.current?.id);
      setSocketId(socketRef.current?.id || null);
    });

    socketRef.current.on("disconnect", () => {
      console.log("Disconnected");
      setSocketId(null);
    });
  };

  const disconnect = () => {
    if (socketRef.current) {
      // console.log("Manually disconnecting socket:", socketRef.current.id);
      socketRef.current.disconnect();
      socketRef.current = null;
      setSocketId(null);
    }
  };

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  return {
    socketId,
    disconnect,
    sendPrivateMessage,
    socketRef,
    socketEmit,
    socketOn,
    socketOff,
    joinRoom,
    showTyping,
    getTyping,
  };
};
