import React, { useState, useEffect, useRef } from "react";
import TextInput from "../components/TextInput";
import Message from "../interfaces/Message";
import TextBubble from "../components/TextBubble";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (message: string) => {
    // Add the user's message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: message },
    ]);

    // Simulate a bot response (optional)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", content: "I'm a bot response!" },
      ]);
    }, 1000);
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="flex flex-col">
      <div className="flex-grow overflow-auto p-4 bg-white">
        {messages.map((msg, index) => (
          <TextBubble key={index} message={msg}></TextBubble>
        ))}
      </div>
      <div className="sticky bottom-0">
        <TextInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default Home;
