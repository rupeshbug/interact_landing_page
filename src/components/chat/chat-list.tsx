import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

type Platform = "facebook" | "instagram" | "whatsapp";

interface Message {
  id: string;
  userId: string;
  platform: Platform;
  content: string;
  timestamp: Date;
}

interface ChatListProps {
  messages?: Message[];
}

const sampleMessages: Message[] = [
  {
    id: "1",
    userId: "user123",
    platform: "facebook",
    content: "Hello from Facebook!",
    timestamp: new Date("2024-10-11T10:00:00"),
  },
  {
    id: "2",
    userId: "insta_user",
    platform: "instagram",
    content: "Check out my latest post!",
    timestamp: new Date("2024-10-11T10:05:00"),
  },
  {
    id: "3",
    userId: "+1234567890",
    platform: "whatsapp",
    content: "Are we still meeting today?",
    timestamp: new Date("2024-10-11T10:10:00"),
  },

  {
    id: "3",
    userId: "+1234567890",
    platform: "whatsapp",
    content: "Are we still meeting today?",
    timestamp: new Date("2024-10-11T10:10:00"),
  },
  {
    id: "3",
    userId: "+1234567890",
    platform: "whatsapp",
    content: "Are we still meeting today?",
    timestamp: new Date("2024-10-11T10:10:00"),
  },
  // Add more sample messages as needed
];

const PlatformIcon: React.FC<{ platform: Platform }> = ({ platform }) => {
  switch (platform) {
    case "facebook":
      return <Facebook className="w-4 h-4 text-blue-600" />;
    case "instagram":
      return <Instagram className="w-4 h-4 text-pink-600" />;
    case "whatsapp":
      return <MessageCircle className="w-4 h-4 text-green-600" />;
  }
};

const ChatList: React.FC<ChatListProps> = ({ messages = sampleMessages }) => {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-slate-800 text-white border-none">
      <CardHeader>
        <CardTitle className="text-xl">Recent Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="mb-4 p-3 bg-slate-950 text-white rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <PlatformIcon platform={message.platform} />
                  <span className="font-semibold">{message.userId}</span>
                </div>
                <span className="text-xs">
                  {message.timestamp.toLocaleString()}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ChatList;
