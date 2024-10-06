import React, {
  useState,
  KeyboardEvent,
  ChangeEvent,
  useRef,
  useEffect,
} from "react";
import { FiSend } from "react-icons/fi";

interface TextInputProps {
  onSend: (message: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        onSend(inputValue);
        setInputValue("");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      onSend(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex items-center p-1.5 m-4 ring-1 ring-gray-300 rounded-lg p-2  focus-within:ring-1 focus-within:ring-blue-500 ">
      <textarea
        ref={textareaRef}
        className="flex-grow  resize-none max-h-20 overflow-auto  outline-none"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        rows={1}
      ></textarea>
      <button
        className="ml-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg p-1.5 focus:outline-none disabled:bg-gray-400"
        onClick={handleSendClick}
        disabled={inputValue.trim() === ""}
        aria-label="Send message"
      >
        <FiSend size={20} />
      </button>
    </div>
  );
};

export default TextInput;
