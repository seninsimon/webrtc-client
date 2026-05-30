import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";

export const CreateButton = () => {
  const { ws } = useContext(RoomContext);

  const createRoom = () => {
    ws.emit("create-room");
  };

  return (
    <button
      onClick={createRoom}
      className="bg-blue-500 border-2 hover:bg-blue-700 rounded-2xl px-4 py-2 cursor-pointer text-white font-semibold"
    >
      join new meeting
    </button>
  );
};
