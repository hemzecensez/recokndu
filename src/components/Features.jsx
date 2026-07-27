import {
  Bot,
  Landmark,
  MapPinned,
  Hotel,
  Utensils,
  Camera,
} from "lucide-react";

const features = [
  {
    icon: <Bot size={34} />,
    title: "AI Guide",
    text: "Ask anything about the place you're visiting.",
  },
  {
    icon: <Landmark size={34} />,
    title: "History",
    text: "Learn detailed historical stories and events.",
  },
  {
    icon: <MapPinned size={34} />,
    title: "Nearby",
    text: "Discover attractions around your destination.",
  },
  {
    icon: <Utensils size={34} />,
    title: "Restaurants",
    text: "Find top-rated places to eat nearby.",
  },
  {
    icon: <Hotel size={34} />,
    title: "Hotels",
    text: "Compare hotels close to your location.",
  },
  {
    icon: <Camera size={34} />,
    title: "Hidden Gems",
    text: "Explore places most tourists never find.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32">

      <div className="text-center">

        <p className="text-sky-400 uppercase tracking-[6px]">
          FEATURES
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Everything You Need
        </h2>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto">
          Kondu combines AI, travel, history and discovery into one
          beautiful experience.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

        {features.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-sky-400/50 hover:-translate-y-2 transition duration-300"
          >

            <div className="text-sky-400 mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="text-white/60 mt-4 leading-7">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}