import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroVideoId = "KZo8z_qqdfs";
const heroVideoSrc = `https://www.youtube-nocookie.com/embed/${heroVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideoId}&rel=0&modestbranding=1&playsinline=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd1080`;

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
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_32%),radial-gradient(circle_at_85%_18%,_rgba(255,255,255,0.08),_transparent_30%),linear-gradient(110deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.9)_38%,_rgba(0,0,0,0.28)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(0,0,0,0.55)_70%,rgba(0,0,0,0.85))]" />
        <div className="absolute right-8 top-24 hidden h-40 w-40 rounded-full bg-white/10 blur-3xl md:block" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
        <iframe
          className="pointer-events-none absolute inset-0 h-[150%] w-[150%] min-h-full min-w-full -translate-x-[12.5%] -translate-y-[12.5%] scale-[1.15] border-0"
          src={heroVideoSrc}
          title="Hero arka plan videosu"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          tabIndex={-1}
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-8 py-24 sm:py-28 lg:px-12">
        <motion.div
          key={slide.title}
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur-md">
            <span className="mr-2 h-2 w-2 rounded-full bg-red-500" />
            {slide.eyebrow}
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)] md:text-7xl lg:text-[5rem]">
            {slide.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/80 md:text-lg">
            {slide.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              href="#latest-video"
            >
              {slide.cta}
            </a>
            <a
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition duration-300 hover:bg-white/20"
              href="#recent-videos"
            >
              Shorts&apos;ları Gör
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex gap-2" aria-label="Video seçimi">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              className={`h-1.5 rounded-full transition-all ${
                index === activeSlide ? "w-10 bg-white shadow-[0_0_18px_rgba(255,255,255,0.45)]" : "w-3 bg-white/45 hover:bg-white/75"
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
