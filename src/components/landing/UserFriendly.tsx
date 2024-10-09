import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Lightbulb,
  MousePointer,
  LayoutDashboard,
} from "lucide-react";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3 mb-6">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const UserFriendlySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Effortless Control, Powerful Insights
        </h2>
        <p className="text-xl text-center mb-12">
          Our platform combines ease of use with comprehensive analytics,
          putting you in control while providing the insights you need to
          succeed.
        </p>

        <Tabs defaultValue="interface" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="interface">User-Friendly Interface</TabsTrigger>
            <TabsTrigger value="analytics">Comprehensive Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="interface">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FeatureItem
                      icon={
                        <LayoutDashboard className="w-5 h-5 text-blue-500" />
                      }
                      title="Intuitive Dashboard"
                      description="Access all your tools and data from a centralized, easy-to-navigate dashboard."
                    />
                    <FeatureItem
                      icon={<MousePointer className="w-5 h-5 text-green-500" />}
                      title="Drag-and-Drop Functionality"
                      description="Create campaigns and automations with simple drag-and-drop interfaces."
                    />
                  </div>
                  <div>
                    <FeatureItem
                      icon={<Lightbulb className="w-5 h-5 text-yellow-500" />}
                      title="AI-Powered Suggestions"
                      description="Receive intelligent recommendations to optimize your strategies."
                    />
                    <FeatureItem
                      icon={<Activity className="w-5 h-5 text-red-500" />}
                      title="Real-Time Updates"
                      description="Stay informed with live updates on your campaigns and customer interactions."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <FeatureItem
                      icon={<BarChart className="w-5 h-5 text-purple-500" />}
                      title="Performance Metrics"
                      description="Track key performance indicators across all your marketing efforts."
                    />
                    <FeatureItem
                      icon={<PieChart className="w-5 h-5 text-indigo-500" />}
                      title="Customer Segmentation"
                      description="Gain insights into your audience with detailed segmentation analysis."
                    />
                  </div>
                  <div>
                    <FeatureItem
                      icon={<LineChart className="w-5 h-5 text-teal-500" />}
                      title="Trend Analysis"
                      description="Identify patterns and trends to inform your marketing strategies."
                    />
                    <FeatureItem
                      icon={<Activity className="w-5 h-5 text-orange-500" />}
                      title="Conversion Tracking"
                      description="Monitor the entire customer journey from first touch to conversion."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Experience the Difference</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              Our platform is designed to make complex marketing tasks simple
              and intuitive. Whether you're a marketing novice or a seasoned
              pro, you'll find our tools easy to use and our insights invaluable
              for growing your business.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>No coding skills required</li>
              <li>Customizable templates for quick setup</li>
              <li>In-depth tutorials and responsive support</li>
              <li>Scalable solutions that grow with your business</li>
            </ul>
            <Button className="w-full">Start Your Free Trial</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UserFriendlySection;
