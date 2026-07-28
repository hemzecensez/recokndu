const videos = [
  {
    title: "Short 1",
    subtitle: "Kısa yolculuk anı",
    meta: "YouTube Shorts",
    videoId: "imdmxom07gk",
  },
  {
    title: "Short 2",
    subtitle: "Manzara ve hissiyat",
    meta: "YouTube Shorts",
    videoId: "4twB_LQSBJc",
  },
  {
    title: "Short 3",
    subtitle: "Yolun ruhu",
    meta: "YouTube Shorts",
    videoId: "hCH49omUDvU",
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
            <div key={item.title} className="group">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/20">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${item.videoId}?rel=0&modestbranding=1&playsinline=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white">
                  {item.meta}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-white/75">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-white/60">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
