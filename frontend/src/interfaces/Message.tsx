interface Message {
  sender: "user" | "bot";
  content: string;
}

export default Message;
