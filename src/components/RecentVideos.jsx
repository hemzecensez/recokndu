const base = import.meta.env.BASE_URL;

const videos = [
  {
    title: "Yolculuk yeni başlıyor",
    meta: "Yeni video · 08:24",
    video: `${base}videos/selam.mp4`,
  },
  {
    title: "Sokaktan hikâyeler",
    meta: "Yeni video · 05:12",
    video: `${base}videos/sok.mp4`,
  },
  {
    title: "Sıradaki macera yakında",
    meta: "Çok yakında",
    image: `${base}images/sel.png`,
  },
];

const channelUrl = "https://www.youtube.com/@Recepkondu1";

export default function RecentVideos() {
  return (
    <section id="videos" className="bg-[#05070a] px-6 pb-24 text-white md:px-10 md:pb-32">
      <div className="mx-auto max-w-7xl border-t border-white/12 pt-20 md:pt-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[.3em] text-white/55">DAHA FAZLASI</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Son Videolar</h2>
          </div>
          <a
            className="w-fit text-sm font-semibold text-white/65 transition hover:text-white"
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
          >
            Tüm videoları gör ↗
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {videos.map((item) => (
            <a
              key={item.title}
              href={channelUrl}
              className="group block"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5">
                {item.video ? (
                  <video
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={item.video}
                  />
                ) : (
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={item.image}
                    alt="Yaklaşan videodan bir kare"
                    loading="lazy"
                  />
                )}
                <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white">
                  {item.meta}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-white/75">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
