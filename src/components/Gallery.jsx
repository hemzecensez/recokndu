const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
    alt: "Sisli dağ manzarası",
    location: "Dağların ardında",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85",
    alt: "Doğa içinde göl",
    location: "Sakin rotalar",
    className: "md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=85",
    alt: "Dağların üzerinde gün batımı",
    location: "Gün batımında",
    className: "md:col-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    alt: "Göl kenarında dağ manzarası",
    location: "Keşfedilmeyi bekleyen",
    className: "md:col-span-2",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeri" className="bg-[#05070a] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl border-t border-white/12 pt-20 md:pt-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[.3em] text-white/55">YOLCULUKTAN KARELER</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Büyüleyici manzaraları görmek ister misiniz?
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-white/60">
            Her yolculuğun hafızada kalan küçük bir manzarası var. İşte o anlardan bazıları.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {galleryItems.map((item) => (
            <button
              key={item.src}
              className={`group relative overflow-hidden rounded-3xl text-left ${item.className}`}
              type="button"
              aria-label={`${item.location}: çok yakında`}
              aria-pressed={selectedImage === item.src}
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-14 text-sm font-medium text-white/90">
                {item.location}
              </span>
              {selectedImage === item.src && (
                <span className="absolute inset-0 grid place-items-center bg-black/55 text-center text-lg font-bold text-white backdrop-blur-sm">
                  Çok yakında
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
