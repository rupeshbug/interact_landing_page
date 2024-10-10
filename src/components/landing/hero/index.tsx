import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
  return (
    <div className="h-screen w-full bg-slate-950  bg-dot-white/[0.2]  relative flex items-center justify-center">
      <div className="bg-gradient-to-r  min-h-screen flex justify-center py-24 flex-col">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FlipWords
            className="text-2xl md:text-4xl lg:text-5xl mb-14 font-semibold text-primary"
            words={[
              "Never Miss A Potential Customer",
              "Create Lead Generation Funnels",
              "Everything Assisted By AI Bots",
            ]}
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Put your business on autopilot without compromising control and
            visibility
          </h1>
          <p className="text-xl md:text-2xl  my-12 text-muted">
            Grow your online business with AI bot automation and interactive
            content generation. Only pay when you see the results.
          </p>
          <div className="space-x-4">
            <Button variant="default" size="lg">
              Get Started For Free
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
