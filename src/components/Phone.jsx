import { motion } from "framer-motion";
import {
  MapPin,
  Landmark,
  Bot,
  Utensils,
  Hotel,
  ChevronRight,
  Star
} from "lucide-react";

export default function Phone() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{
        rotateY: 10,
        rotateX: -5,
        scale: 1.03
      }}
      className="relative"
      style={{ perspective: 1000 }}
    >
      <div
        className="
        w-[340px]
        h-[690px]
        rounded-[48px]
        bg-neutral-900
        border
        border-white/10
        shadow-[0_0_80px_rgba(40,120,255,.18)]
        p-3"
      >
        {/* Dynamic Island */}

        <div className="flex justify-center">

          <div
            className="
            w-32
            h-8
            rounded-full
            bg-black
            mb-3"
          />

        </div>

        {/* Screen */}

        <div
          className="
          overflow-hidden
          rounded-[36px]
          h-full
          bg-gradient-to-b
          from-slate-900
          to-black"
        >
          {/* IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-60 object-cover"
          />

          {/* CONTENT */}

          <div className="p-5">

            <span className="text-sky-400 text-sm">
              Rome • Italy
            </span>

            <h2 className="text-3xl font-bold mt-2">

              Colosseum

            </h2>

            <div className="flex items-center gap-2 mt-2 text-yellow-400">

              <Star size={18} fill="currentColor" />

              4.9

            </div>

            <div className="grid grid-cols-2 gap-3 mt-7">

              <Card
                icon={<Landmark />}
                title="History"
              />

              <Card
                icon={<MapPin />}
                title="Nearby"
              />

              <Card
                icon={<Utensils />}
                title="Food"
              />

              <Card
                icon={<Hotel />}
                title="Hotels"
              />

              <Card
                icon={<Bot />}
                title="AI Guide"
              />

              <Card
                icon={<ChevronRight />}
                title="More"
              />

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

function Card({ icon, title }) {
  return (
    <div
      className="
      rounded-2xl
      bg-white/5
      border
      border-white/5
      p-4
      hover:bg-white/10
      duration-300
      cursor-pointer"
    >
      <div className="text-sky-400">

        {icon}

      </div>

      <p className="mt-3 text-sm">

        {title}

      </p>

    </div>
  );
}