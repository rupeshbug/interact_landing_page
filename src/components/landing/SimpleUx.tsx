import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  PieChart,
  BarChart2,
  BookOpen,
  MousePointer,
  Zap,
  Medal,
} from "lucide-react";

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

const SimpleUx = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Effortless Management, Powerful Insights
        </h2>
        <p className="text-xl text-center mb-12">
          Our platform combines intuitive design with comprehensive analytics,
          making it easy to use and incredibly informative.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<MousePointer className="w-6 h-6 text-blue-500" />}
            title="Intuitive Interface"
            description="Navigate with ease through our user-friendly dashboard. Every feature is just a click away."
          />
          <FeatureCard
            icon={<LineChart className="w-6 h-6 text-green-500" />}
            title="Comprehensive Analytics"
            description="Gain deep insights into your business performance with our easy-to-understand visual reports."
          />
          <FeatureCard
            icon={<BookOpen className="w-6 h-6 text-purple-500" />}
            title="Learning Resources"
            description="Access a wealth of tutorials, guides, and best practices to maximize your platform usage."
          />
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Data at Your Fingertips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <PieChart className="w-8 h-8 text-blue-500" />
                <span>Customer Segmentation</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart2 className="w-8 h-8 text-green-500" />
                <span>Campaign Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <LineChart className="w-8 h-8 text-purple-500" />
                <span>Growth Trends</span>
              </div>
            </div>
            <p className="mb-4">
              Our platform provides clear, actionable insights that help you
              make informed decisions. From customer behavior to campaign
              effectiveness, all the data you need is presented in an
              easy-to-understand format.
            </p>
            <Button className="w-full">Explore Our Analytics Suite</Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span>Quick Start Guides</span>
              </h3>
              <p className="mb-4">
                Get up and running in no time with our step-by-step quick start
                guides. We'll walk you through setting up your first campaign,
                analyzing your results, and optimizing your strategy.
              </p>
              <Button variant="outline">View Quick Start Guides</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Medal className="w-6 h-6 text-orange-500" />
                <span>Expert Tips & Tricks</span>
              </h3>
              <p className="mb-4">
                Unlock the full potential of our platform with expert tips and
                tricks. Learn advanced techniques, discover hidden features, and
                stay updated with the latest best practices in digital
                marketing.
              </p>
              <Button variant="outline">Access Expert Content</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg mb-4">
            Experience the perfect balance of power and simplicity.
          </p>
          <Button size="lg" variant="default">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SimpleUx;
