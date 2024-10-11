import ChatList from "./chat-list";

const ChatFeature = () => {
  return (
    <div className="bg-dot-white/[0.2] py-20 text-white px-4 sm:px-6 lg:px-8">
      <div className="w-full px-2 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-10">
          <div className="w-full lg:max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-8 leading-tight">
              Monitor AI And User Engagement Realtime
            </h2>
            <ul className="space-y-6">
              {[
                "You can turn on auto reply mood, autogeneration mood, or auto reply after certain time strategy for ai bots",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque expedita enim! Voluptatibus maiores magni illo velit eius optio praesentium.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque expedita enim! Voluptatibus maiores magni illo velit eius optio praesentium.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <div className="flex items-start">
                    <span className=" bg-primary text-slate-950 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-slate-200">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <ChatList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFeature;
