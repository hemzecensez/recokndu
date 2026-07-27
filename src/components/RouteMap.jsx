import { useState } from "react";

const youtubeUrl = "https://youtu.be/KZo8z_qqdfs?si=HWTFlZGpjTfw9UuY";

const destinations = [
  { name: "Türkiye", flag: "🇹🇷", year: "2024", x: 57, y: 44, text: "Yolculuğun başladığı, her sokağında ayrı hikâye saklayan durak." },
  { name: "İtalya", flag: "🇮🇹", year: "2024", x: 51, y: 43, text: "Lezzet, tarih ve birbirinden güzel şehirlerle dolu bir rota." },
  { name: "İspanya", flag: "🇪🇸", year: "2024", x: 47, y: 47, text: "Renkli sokakların ve Akdeniz ruhunun peşinden gittik." },
  { name: "İzlanda", flag: "🇮🇸", year: "2025", x: 44, y: 25, text: "Kuzeyin sessizliği, volkanik manzaralar ve uzun yollar." },
  { name: "Japonya", flag: "🇯🇵", year: "2025", x: 82, y: 45, text: "Gelenek ile modern hayatın aynı karede buluştuğu durak." },
];

export default function RouteMap() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section className="bg-[#05070a] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl border-t border-white/12 pt-20 md:pt-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[.3em] text-white/55">ROTAMIZ</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Bir sonraki hikâye nerede?</h2>
          <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
            Parlayan noktaların üzerine gel; her biri yolculuktan küçük bir hikâye taşıyor.
          </p>
        </div>

        <div
          className="relative mt-12 h-[320px] overflow-hidden rounded-3xl border border-white/12 bg-[#030405] md:h-[500px]"
          onMouseLeave={() => setSelectedDestination(null)}
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 520" aria-hidden="true">
            <defs>
              <pattern id="map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M60 0H0V60" fill="none" stroke="rgba(255,255,255,.045)" strokeWidth="1" />
              </pattern>
              <filter id="soft-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            <rect width="1200" height="520" fill="url(#map-grid)" />
            <g fill="rgba(255,255,255,.09)" stroke="rgba(255,255,255,.12)" strokeWidth="1">
              <path d="M90 82c42-31 106-28 139 3l22 39-28 35-42 4-18 38-38 20-29-39-21-58z" />
              <path d="M270 238l49 11 31 50-19 54-11 74-36 28-34-54 7-64-22-49z" />
              <path d="M474 103l49-24 39 28-7 43-42 22-40-24z" />
              <path d="M513 195l60-12 50 48 10 77-39 79-52-22-24-65-37-48z" />
              <path d="M565 92l116-32 95 25 70 47 97 12 67 57-29 63-94 4-58-39-76 5-56-37-75 1-55-43z" />
              <path d="M840 333l66 15 39 48-29 41-77-16-34-46z" />
            </g>

            <polyline
              points="528,130 564,244 612,224 684,228 984,234"
              fill="none"
              stroke="rgba(255,255,255,.34)"
              strokeWidth="2"
              strokeDasharray="8 11"
            />
          </svg>

          {destinations.map((destination) => (
            <button
              key={destination.name}
              className="absolute z-10 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/10 text-base shadow-[0_0_22px_rgba(255,255,255,.7)] transition duration-200 hover:scale-125 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
              style={{ left: `${destination.x}%`, top: `${destination.y}%` }}
              type="button"
              aria-label={`${destination.name} hakkında bilgi göster`}
              onMouseEnter={() => setSelectedDestination(destination)}
              onFocus={() => setSelectedDestination(destination)}
              onClick={() => setSelectedDestination(destination)}
            >
              <span aria-hidden="true">{destination.flag}</span>
            </button>
          ))}

          {selectedDestination && (
            <div className="absolute bottom-4 left-4 z-20 max-w-xs rounded-2xl border border-white/20 bg-black/90 p-4 shadow-2xl backdrop-blur md:bottom-6 md:left-6">
              <p className="text-lg font-bold">{selectedDestination.flag} {selectedDestination.name}</p>
              <p className="mt-2 text-sm leading-6 text-white/70">{selectedDestination.text}</p>
              <a
                className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/85"
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
              >
                YouTube’da izle ↗
              </a>
            </div>
          )}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((destination) => (
            <button
              key={destination.name}
              className="rounded-2xl border border-white/10 bg-white/[.03] px-4 py-4 text-left transition hover:border-white/35 hover:bg-white/[.07]"
              type="button"
              onClick={() => setSelectedDestination(destination)}
            >
              <span className="text-2xl" aria-hidden="true">{destination.flag}</span>
              <p className="mt-3 font-semibold text-white">{destination.name}</p>
              <p className="mt-1 text-sm text-white/45">{destination.year}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
