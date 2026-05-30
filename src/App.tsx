import { useEffect } from "react";
import sockrtIO from "socket.io-client";

const ws = "http://localhost:8000";

function App() {
  useEffect(() => {
    sockrtIO(ws);
  }, []);

  return <>
  
  <div className="flex justify-center items-center h-screen w-full">
    <button className="bg-blue-500 border-2 hover:bg-blue-700 rounded-2xl px-4 py-2 cursor-pointer text-white font-semibold" >
      Start new meeting
      </button>
  </div>
  
  </>;
}

export default App;
