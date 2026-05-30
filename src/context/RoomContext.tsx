import { createContext, useEffect } from "react";
import socketIOClient from "socket.io-client";
const WS = "http://localhost:8000";
import { useNavigate } from "react-router-dom";

export const RoomContext = createContext<null | any>(null);

export const RoomProvider = ({ children }) => {
  const ws = socketIOClient(WS);
  const navigate = useNavigate()

  const enterRoom = ({ roomId }) => { 
    console.log("room is created : ", roomId);
    navigate(`/room/${roomId}`)
  };

  useEffect(() => {
    ws.on("room-created", enterRoom);
  }, []);

  return <RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>;
};

export default RoomContext;
