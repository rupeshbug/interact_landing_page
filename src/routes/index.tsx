import Features from "@/components/landing/features";
import HeroSection from "@/components/landing/hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      {" "}
      <HeroSection />
      <Features />
    </div>
  ),
});
