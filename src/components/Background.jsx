import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      {/* Aurora */}

      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[-300px]
        left-[-200px]
        h-[700px]
        w-[700px]
        rounded-full
        bg-sky-500/25
        blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -30, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-250px]
        right-[-150px]
        h-[650px]
        w-[650px]
        rounded-full
        bg-blue-700/20
        blur-[160px]"
      />

    </>
  );
}