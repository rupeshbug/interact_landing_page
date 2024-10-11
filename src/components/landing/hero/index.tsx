import { Button } from "@/components/ui/button";
import FacebookIcon from "../../../../public/icons/facebook.png";
import WhatsAppIcon from "../../../../public/icons/whatsapp.png";
import InstagramIcon from "../../../../public/icons/instagram.png";

const HeroSection = () => {
  return (
    <div className="h-screen w-full bg-slate-950 bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="bg-gradient-to-r min-h-screen flex justify-center py-24 flex-col">
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
      <div className="absolute top-40 left-10 animate-float">
        <img src={FacebookIcon} alt="Facebook" className="h-16 w-16" />
      </div>
      <div className="absolute top-40 right-10 animate-float">
        <img src={WhatsAppIcon} alt="WhatsApp" className="h-16 w-16" />
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-float">
        <img src={InstagramIcon} alt="Instagram" className="h-16 w-16" />
      </div>
    </div>
  );
};

export default HeroSection;
