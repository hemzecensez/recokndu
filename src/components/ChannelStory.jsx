const base = import.meta.env.BASE_URL;

const countries = [
  { flag: "🇹🇷", name: "Türkiye" },
  { flag: "🇮🇹", name: "İtalya" },
  { flag: "🇯🇵", name: "Japonya" },
  { flag: "🇮🇸", name: "İzlanda" },
  { flag: "🇪🇸", name: "İspanya" },
];

const moments = [
  {
    src: `${base}images/cin.jpeg`,
    alt: "Dağ manzarası",
  },
  {
    src: `${base}images/dubai.jpeg`,
    alt: "Doğa içinde yol",
  },
  {
    src: `${base}images/tayland.jpeg`,
    alt: "Gün batımında dağlar",
  },
];

export default function ChannelStory() {
  return (
    <section id="about" className="bg-[#05070a] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[.3em] text-white/55">
            BİZİM HİKÂYEMİZ
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight md:text-6xl">
            Gittiğimiz yerleri, yaşadığımız anları paylaşıyoruz.
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/65 md:text-lg">
            Bu kanal; sokakların sesini, beklenmedik rotaları ve yolculukların ardındaki
            küçük hikâyeleri birlikte keşfetmek için var.
          </p>

          <div className="mt-10 border-t border-white/12 pt-7">
            <p className="text-xs font-semibold tracking-[.24em] text-white/45">
              ROTAMIZDAKİ ÜLKELER
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {countries.map((country) => (
                <span
                  key={country.name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/75"
                >
                  <span aria-hidden="true" className="text-lg leading-none">{country.flag}</span>
                  {country.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid h-[420px] grid-cols-2 grid-rows-2 gap-3 md:h-[520px]">
          <img
            className="row-span-2 h-full w-full rounded-3xl object-cover"
            src={moments[0].src}
            alt={moments[0].alt}
            loading="lazy"
          />
          <img
            className="h-full w-full rounded-3xl object-cover"
            src={moments[1].src}
            alt={moments[1].alt}
            loading="lazy"
          />
          <img
            className="h-full w-full rounded-3xl object-cover"
            src={moments[2].src}
            alt={moments[2].alt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}