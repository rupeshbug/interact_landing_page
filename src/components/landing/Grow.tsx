import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, RepeatIcon, Sparkles, ArrowRight } from "lucide-react";

const FeatureCard = ({ icon, title, description }) => (
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

const Grow = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Maximize Lead Generation and Customer Retention
        </h2>
        <p className="text-xl text-center mb-12">
          Our app empowers your business to attract more leads and keep
          customers coming back, driving sustainable growth and success in the
          long-run.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Lead Generation</h3>
            <div className="space-y-6">
              <FeatureCard
                icon={<Target className="w-6 h-6 text-green-500" />}
                title="Smart Lead Capturing"
                description="AI-powered forms and chatbots capture leads across all your digital touchpoints, ensuring no opportunity is missed."
              />
              <FeatureCard
                icon={<Sparkles className="w-6 h-6 text-yellow-500" />}
                title="Personalized Lead Nurturing"
                description="Automated, personalized content delivery that guides leads through your sales funnel with precision and care."
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Customer Retention</h3>
            <div className="space-y-6">
              <FeatureCard
                icon={<RepeatIcon className="w-6 h-6 text-blue-500" />}
                title="Engagement Automation"
                description="Keep customers engaged with timely, relevant communications that anticipate their needs and preferences."
              />
              <FeatureCard
                icon={<Users className="w-6 h-6 text-purple-500" />}
                title="Loyalty Programs"
                description="Easily create and manage automated loyalty programs that reward customers and encourage repeat business."
              />
            </div>
          </div>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">
              The Power of Integration
            </h3>
            <p className="mb-4">
              Our app seamlessly integrates lead generation and customer
              retention strategies, creating a powerful ecosystem that nurtures
              relationships at every stage of the customer journey.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Unified customer data for personalized experiences</li>
              <li>Automated lead scoring and segmentation</li>
              <li>Intelligent cross-selling and upselling recommendations</li>
              <li>Predictive analytics for churn prevention</li>
            </ul>
            <Button className="w-full">
              Discover the Full Potential
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-lg mb-4">
            Ready to supercharge your lead generation and customer retention?
          </p>
          <Button size="lg" variant="default">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Grow;
