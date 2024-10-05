// src/components/TextBubble.tsx

import React from "react";
import Message from "../interfaces/Message";

interface TextBubbleProps {
  message: Message;
}

const TextBubble: React.FC<TextBubbleProps> = ({ message }) => {
  return (
    <div
      className={`mb-2 flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`rounded-lg p-2 max-w-xs ${
          message.sender === "user"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default TextBubble;
