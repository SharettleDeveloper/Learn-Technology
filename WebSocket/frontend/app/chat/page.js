"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");
    socket.onopen = () => {
      console.log("WebSocket サーバーに接続しました");
    };
    socket.onmessage = async (event) => {
      let data;

      if (event.data instanceof Blob) {
        data = await event.data.text();
      } else {
        data = event.data;
      }
      setMessages((prev) => [...prev, data]);
    };
    setWs(socket);

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (ws && input.trim()) {
      ws.send(input);
      setInput("");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-xl mx-auto bg-white p-4 shadow rounded">
          <h1 className="text-2xl mb-4 text-black">WebSocket チャット</h1>
          <div className="border p-2 h-64 overflow-y-scroll mb-4 text-black">
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-2">
                {msg}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border flex-grow p-2 mr-2 text-black "
              placeholder="メッセージを入力"
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white p-2">
              送信
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
