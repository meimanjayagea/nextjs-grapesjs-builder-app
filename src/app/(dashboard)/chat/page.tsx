import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newChats = [...chats, { role: "user", content: message }];
    setChats(newChats);
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post("/api/chat", { message });
      setChats([...newChats, { role: "assistant", content: response.data.reply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">ChatGPT Clone</h1>
        
        <div className="h-96 overflow-y-auto p-4 border border-gray-300 rounded-lg bg-gray-50">
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg my-2 ${chat.role === "user" ? "bg-blue-500 text-white text-right" : "bg-green-500 text-white text-left"}`}
            >
              <strong>{chat.role === "user" ? "You" : "Bot"}:</strong> {chat.content}
            </div>
          ))}
          {loading && <p className="text-gray-500 text-center">Bot is typing...</p>}
        </div>

        <div className="flex mt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ketik pesan..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
