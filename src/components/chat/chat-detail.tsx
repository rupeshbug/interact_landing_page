import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  sender: "user" | "ava";
  content: string;
  timestamp: Date;
}

interface ChatDetailBoxProps {
  messages: Message[];
  userName: string;
}

const ChatDetailBox: React.FC<ChatDetailBoxProps> = ({
  messages,
  userName,
}) => {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden w-full h-[550px] max-w-2xl">
      <div className="bg-slate-800 p-4 border-b border-slate-700">
        <h2 className="text-xl font-semibold text-white">
          Chat with {userName}
        </h2>
      </div>
      <ScrollArea className="h-[500px] p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[70%] ${
                message.sender === "user"
                  ? "flex-row-reverse space-x-reverse"
                  : ""
              }`}
            >
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={
                    message.sender === "ava"
                      ? "/ava-avatar.png"
                      : "/user-avatar.png"
                  }
                />
                <AvatarFallback>
                  {message.sender === "ava" ? "A" : "U"}
                </AvatarFallback>
              </Avatar>
              <div
                className={`rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700 text-slate-200"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-75 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default ChatDetailBox;
