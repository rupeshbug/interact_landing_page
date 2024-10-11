import {
  Bot,
  Mail,
  BarChart3,
  UsersRound,
  HandHeart,
  Goal,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="bg-slate-800 rounded-lg p-6 transition-all duration-300 hover:bg-slate-700 hover:shadow-lg">
    <Icon className="text-yellow-400 mb-4" size={50} />
    <h3 className="text-3xl font-semibold mb-4">{title}</h3>
    <p className="text-slate-300 text-lg 3xl:text-xl">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Social Media Automation",
      description:
        "Revolutionize your customer service with our cutting-edge AI agents. They seamlessly handle inquiries and sales across Facebook, Instagram, and WhatsApp, providing 24/7 support without compromising on quality. Our system ensures you maintain full visibility of all customer interactions, allowing you to step in when needed while automating routine tasks.",
    },
    {
      icon: Mail,
      title: "Personalized Email Campaigns",
      description:
        "Boost your marketing efforts with our advanced email campaign tools. Create and send tailored email templates for product sales, surveys, giveaways, and promotions. Our AI-driven system analyzes customer behavior to optimize send times and content, ensuring higher open rates and conversions. Engage your audience with personalized, timely, and relevant communications that drive results.",
    },
    {
      icon: BarChart3,
      title: "Customer Insights Dashboard",
      description:
        "Unlock the full potential of your customer data with our comprehensive insights dashboard. Gain a deeper understanding of each user through personalized analytics, tracking their journey from first contact to repeat purchases. Our AI-powered system identifies trends, predicts future behaviors, and provides actionable insights to help you make data-driven decisions that grow your business.",
    },
    {
      icon: UsersRound,
      title: "Smart Lead Capturing",
      description:
        "AI-powered forms and chatbots ensure every opportunity is captured by tracking customer interactions across all touchpoints, from your website to social media. These tools are designed to engage customers in real time, ensuring no lead slips through the cracks. By analyzing customer behavior and adapting dynamically, our AI ensures that interactions remain relevant and personalized at every stage, enhancing the chances of conversion. Whether responding to inquiries, guiding users through forms, or offering assistance, the system works seamlessly to maximize lead generation and deliver tailored experiences that drive engagement.",
    },
    {
      icon: Goal,
      title: "Engagement Automation",
      description:
        "Our engagement automation platform keeps customers actively connected with your brand through timely, personalized communications that anticipate their needs based on real-time data and behavioral insights. Regular check-ins ensure consistent interaction, while tailored offers provide relevant promotions that resonate with individual customer journeys, boosting engagement and conversion rates. Feedback loops capture customer insights at key moments, allowing continuous improvement in communications and personalized experiences. This automated process creates a seamless, ongoing relationship with customers, fostering loyalty, increasing satisfaction, and driving long-term business growth.",
    },
    {
      icon: HandHeart,
      title: "Personalized Lead Nurturing And Loyalty Programs",
      description:
        "Our loyalty programs are designed to create lifetime customers. Automate rewards based on customer activity, birthdays, anniversaries, and more. Reward programs are fully customizable and easy to manage, giving customers more reasons to return.Our loyalty programs are designed to create lifetime customers. Automate rewards based on customer activity, birthdays, anniversaries, and more. Reward programs are fully customizable and easy to manage, giving customers more reasons to return.",
    },
  ];

  return (
    <div className="bg-slate-950 text-white px-8 md:px-16 lg:px-24 py-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        Supercharge Your{" "}
        <span className="text-yellow-400">Online Business</span>
      </h2>
      <p className="text-xl md:text-3xl text-center mb-16 max-w-5xl mx-auto">
        Create your online store and seamlessly integrate with major social
        media platforms like Facebook, Instagram, and WhatsApp to never miss a
        potential customer.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
