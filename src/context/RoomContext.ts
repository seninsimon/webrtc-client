import sockrtIO from "socket.io-client";
import { createContext } from 'react'
const WS = "http://localhost:8000";


const RoomContext = createContext<null | any>(null)

const ws = sockrtIO(WS)


