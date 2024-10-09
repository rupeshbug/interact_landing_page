import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  PieChart,
  BookOpen,
  MousePointer,
  Lightbulb,
  Activity,
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

const Simplicity = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Simplicity Meets Power: A Platform Anyone Can Master
        </h2>
        <p className="text-xl text-center mb-12">
          Our intuitive interface and comprehensive resources make it easy to
          harness the full power of AI-driven business automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<LayoutDashboard className="w-6 h-6 text-blue-500" />}
            title="Intuitive Dashboard"
            description="Navigate your business metrics and automation tasks with ease through our clean, user-friendly dashboard."
          />
          <FeatureCard
            icon={<MousePointer className="w-6 h-6 text-green-500" />}
            title="Drag-and-Drop Interface"
            description="Create complex automation workflows and email campaigns with simple drag-and-drop functionality - no coding required."
          />
          <FeatureCard
            icon={<PieChart className="w-6 h-6 text-purple-500" />}
            title="Visual Analytics"
            description="Understand your business performance at a glance with clear, actionable visual reports and real-time data."
          />
          <FeatureCard
            icon={<BookOpen className="w-6 h-6 text-yellow-500" />}
            title="Comprehensive Learning Center"
            description="Access a wealth of tutorials, guides, and best practices to make the most of every feature and strategy."
          />
          <FeatureCard
            icon={<Lightbulb className="w-6 h-6 text-red-500" />}
            title="AI-Powered Suggestions"
            description="Receive intelligent recommendations for optimizing your campaigns and automations based on your unique business data."
          />
          <FeatureCard
            icon={<Activity className="w-6 h-6 text-indigo-500" />}
            title="Real-Time Insights"
            description="Stay informed with instant notifications and live updates on your campaigns' performance and customer interactions."
          />
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Your Success, Our Priority
            </h3>
            <p className="mb-4">
              We believe that powerful tools should be accessible to everyone.
              That's why we've designed our platform to be:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Intuitive for beginners</li>
              <li>Powerful for experts</li>
              <li>Constantly evolving with your needs</li>
              <li>Responsive customer support</li>
            </ul>
            <Button className="w-full">Experience the Ease Yourself</Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-lg mb-4">
            Ready to simplify your business automation journey?
          </p>
          <Button size="lg" variant="default">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Simplicity;
