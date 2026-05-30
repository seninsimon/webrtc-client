import { createRoot } from "react-dom/client";
import "./index.css";
import { RoomProvider } from "./context/RoomContext.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Room } from "./pages/Room.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RoomProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </RoomProvider>
  </BrowserRouter>,
);
    