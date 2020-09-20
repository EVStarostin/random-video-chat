import { useEffect, useRef } from "react";
import { WEB_SOCKET_SERVER } from "./App.const";
import { ISocketHandlers } from "./App.types";

export function useSocket(socketHandlers: ISocketHandlers) {
  const { onMessage, onOpen } = socketHandlers;
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(WEB_SOCKET_SERVER);
    socketRef.current.onmessage = onMessage;
    socketRef.current.onopen = onOpen;
  }, [onMessage, onOpen]);

  return [socketRef.current];
}
