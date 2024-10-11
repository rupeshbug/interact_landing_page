import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";

const HeroSection = () => {
  return (
    <div className="h-screen w-full bg-slate-950 bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="bg-gradient-to-r min-h-screen flex justify-center py-24 flex-col">
        <div className="max-w-6xl mx-auto text-center px-4">
          <FlipWords
            className="text-2xl md:text-4xl lg:text-5xl 3xl:text-6xl mb-14 font-semibold text-primary"
            words={[
              "Never Miss A Potential Customer",
              "Create Lead Generation Funnels",
              "Everything Assisted By AI Bots",
            ]}
          />
          <h1 className="text-4xl md:text-6xl lg:text-6xl 3xl:text-7xl font-bold text-white">
            Put your business on autopilot without compromising control and
            visibility
          </h1>
          <p className="text-xl md:text-3xl  my-12 text-muted">
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
        <div className="flex justify-center mt-10">
          <div className=" animate-float">
            <img
              src={"icons/facebook.png"}
              alt="Facebook"
              className="h-32 cursor-pointer w-32"
            />
          </div>
          <div className=" animate-float">
            <img
              src={"icons/whatsapp.png"}
              alt="WhatsApp"
              className="h-32 cursor-pointer w-32"
            />
          </div>
          <div className="animate-float">
            <img
              src={"icons/instagram.png"}
              alt="Instagram"
              className="h-32 cursor-pointer w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
