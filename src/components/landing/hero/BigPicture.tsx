import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BigPicture = () => {
  const platforms = [
    {
      name: "Facebook",
      icon: "/icons/facebook.png",
      color: "text-blue-600",
      lineColor: "#1877F2",
    },
    {
      name: "Instagram",
      icon: "/icons/instagram.png",
      color: "text-pink-600",
      lineColor: "#E4405F",
    },
    {
      name: "WhatsApp",
      icon: "/icons/whatsapp.png",
      color: "text-green-600",
      lineColor: "#25D366",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 pb-20">
      <div className="relative w-full max-w-4xl">
        <div className="flex justify-between mb-20 ">
          {platforms.map((platform) => (
            <Card key={platform.name} className="w-1/4 z-10 ">
              <CardHeader className="flex flex-col items-center">
                <img width={"80%"} src={platform.icon} />
              </CardHeader>
            </Card>
          ))}
        </div>

        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 0 }}
        >
          <line
            x1="12.5%"
            y1="120"
            x2="50%"
            y2="40%"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
          <line
            x1="50%"
            y1="120"
            x2="50%"
            y2="40%"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
          <line
            x1="87.5%"
            y1="120"
            x2="50%"
            y2="40%"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
          <line
            x1="50%"
            y1="60%"
            x2="50%"
            y2="100%"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
        </svg>

        <div className="flex justify-center mb-20">
          <Card className="w-1/3 z-10">
            <CardHeader className="flex flex-col items-center">
              <CardTitle className="text-indigo-600 mb-2 text-2xl">
                AI Bots
              </CardTitle>
              <img width={"40%"} src={"/icons/ai.png"} />
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg">
                Powerful AI bots from handling queries on social media to taking
                orders.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card className="w-1/3 z-10">
            <CardHeader className="flex flex-col items-center">
              <CardTitle className="text-purple-600 mb-2 text-2xl">
                Your Online Store
              </CardTitle>
              <img width={"40%"} src={"/icons/ecommerce-website.png"} />
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg">
                Your Online Store, Leads, Customers all managed from intuitive
                dashboard
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BigPicture;
