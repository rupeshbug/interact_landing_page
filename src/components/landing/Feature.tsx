import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, FileText, BarChart, ShoppingCart } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
}) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>{description}</CardContent>
  </Card>
);

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Supercharge Your Business with AI Automation
        </h2>
        <p className="text-xl text-center mb-12">
          Harness the power of cutting-edge AI technology to automate
          interactions, create content, and grow your sales across all major
          social platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6 text-blue-500" />}
            title="AI-Powered Social Media Management"
            description="Our AI bots handle messages on Facebook, Instagram, WhatsApp, and TikTok, 
            managing customer queries from start to finish while you monitor in real-time."
          />
          <FeatureCard
            icon={<FileText className="w-6 h-6 text-green-500" />}
            title="Interactive Content Creation"
            description="Automatically generate engaging content and interactive forms tailored 
            to your audience, saving you time and boosting engagement."
          />
          <FeatureCard
            icon={<BarChart className="w-6 h-6 text-purple-500" />}
            title="Real-Time Monitoring and Analytics"
            description="Stay in control with comprehensive dashboards that provide visibility 
            into all automated interactions and campaign performance."
          />
          <FeatureCard
            icon={<ShoppingCart className="w-6 h-6 text-red-500" />}
            title="AI-Driven Sales Growth"
            description="Leverage AI to identify sales opportunities, personalize customer 
            experiences, and drive conversions across all your social media channels."
          />
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Supported Platforms</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="text-lg py-1 px-3">
              Facebook
            </Badge>
            <Badge variant="secondary" className="text-lg py-1 px-3">
              Instagram
            </Badge>
            <Badge variant="secondary" className="text-lg py-1 px-3">
              WhatsApp
            </Badge>
            <Badge variant="secondary" className="text-lg py-1 px-3">
              TikTok
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
