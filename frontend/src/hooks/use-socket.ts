import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import type { msg } from "../types/type";

type UseSocketReturn = {
  socketId: string | null;
  disconnect: () => void;
  sendPrivateMessage: (user_message: msg) => void;
  socketRef: {
    current: {
      emit: (event: string, arg: object | string | [] | null) => void;
      on: (event: string, callback: (msg? : object | string | [] | null) => void) => void;
    } | null;
  };
};

export const useSocket = (): UseSocketReturn => {
  const [socketId, setSocketId] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  const sendPrivateMessage = (user_message: msg) => {
    socketRef.current?.emit("message", user_message);
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
      console.log("Manually disconnecting socket:", socketRef.current.id);
      socketRef.current.emit("manual_disconnect");
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

  return { socketId, disconnect, sendPrivateMessage, socketRef };
};
