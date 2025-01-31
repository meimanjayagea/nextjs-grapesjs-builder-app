'use client';
import { useState } from 'react';


type MessageDefault = {
  role: "developer" | 'assistant' | "user";
  content: string;
}

export default function ChatInterface() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<MessageDefault[]>([
    {
      role: 'assistant',
      content: "Hello, Silahkan tulis pesan anda disini!..."
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      setIsLoading(true);
      const newMessages : MessageDefault = { role: 'user', content: input };

      setMessages((preMessages)=>[...preMessages, newMessages]);
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: newMessages }),
        });

        const data = await response.json();
        setMessages((prevMessages) => [...prevMessages, data]);
        
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    setInput('');

  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4 h-96 overflow-y-auto border rounded-lg p-3">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-blue-600' : 'text-green-600'}`}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
