import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroVideoSrc = `${import.meta.env.BASE_URL}videos/selam.mp4`;

const slides = [
  {
    eyebrow: "YENİ VİDEOLAR",
    title: "Hikâyelerin peşine düş.",
    description: "Kanalda yeni videolar, kısa hikâyeler ve keşfedilecek anlar seni bekliyor.",
    cta: "Videoyu İzle",
  },
  {
    eyebrow: "KANALI KEŞFET",
    title: "Her karede yeni bir dünya.",
    description: "Sokaktan ekrana uzanan içeriklerle yolculuğa eşlik et.",
    cta: "Keşfet",
  },
  {
    eyebrow: "ÖNE ÇIKANLAR",
    title: "İzle, keşfet, ilham al.",
    description: "Yeni bölümler ve sevdiğin içerikler için kanala göz at.",
    cta: "Kanala Git",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-8 pt-20">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="max-w-xl"
        >
          <p className="text-sm font-semibold tracking-[.28em] text-white/75">
            {slide.eyebrow}
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight text-white md:text-7xl">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/80 md:text-lg">
            {slide.description}
          </p>

          <a
            className="mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/85"
            href="#latest-video"
          >
            {slide.cta}
          </a>
        </motion.div>

        <div className="mt-12 flex gap-2" aria-label="Video seçimi">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              className={`h-1.5 rounded-full transition-all ${
                index === activeSlide ? "w-9 bg-white" : "w-3 bg-white/45 hover:bg-white/75"
              }`}
              type="button"
              aria-label={`${index + 1}. videoyu göster`}
              aria-current={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
