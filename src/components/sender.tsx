import React, { useState } from "react";

export const Sender: React.FC = () => {
  const [senderId, setSenderId] = useState("");

  const handleSend = () => {
    console.log("Sending from:", senderId);
    // send logic here
  };

  const handleStartCall = () => {
    console.log("Starting call...");
    // start call logic here
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg border border-gray-200 space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2">
          Sender ID
        </label>
        <input
          type="text"
          value={senderId}
          onChange={(e) => setSenderId(e.target.value)}
          placeholder="Enter sender ID"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleSend}
          className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          Send
        </button>

        <button
          onClick={handleStartCall}
          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Start Call
        </button>
      </div>
    </div>
  );
};

