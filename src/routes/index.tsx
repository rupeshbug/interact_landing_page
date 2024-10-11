import ChatFeature from "@/components/chat/chat-feature";
import Features from "@/components/landing/features";
import HeroSection from "@/components/landing/hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="bg-slate-950 min-h-screen">
      <HeroSection />
      <Features />
      <ChatFeature />
    </div>
  ),
});
