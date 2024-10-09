import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Put your business on autopilot without compromising control and
          visibility
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Grow your online business with AI bot automation and interactive
          content generation. Only pay when you see the results.
        </p>
        <div className="space-x-4">
          <Button variant="secondary" size="lg">
            Get Started For Free
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
