const videos = [
  {
    title: "Short 1",
    subtitle: "Kısa yolculuk anı",
    meta: "YouTube Shorts",
    href: "https://youtube.com/shorts/imdmxom07gk?si=LcBxFIlULOc1MT9j",
    thumbnail: "https://img.youtube.com/vi/imdmxom07gk/hqdefault.jpg",
  },
  {
    title: "Short 2",
    subtitle: "Manzara ve hissiyat",
    meta: "YouTube Shorts",
    href: "https://youtube.com/shorts/4twB_LQSBJc?si=QAhE8LSTVqV2K2av",
    thumbnail: "https://img.youtube.com/vi/4twB_LQSBJc/hqdefault.jpg",
  },
  {
    title: "Short 3",
    subtitle: "Yolun ruhu",
    meta: "YouTube Shorts",
    href: "https://youtube.com/shorts/hCH49omUDvU?si=C0YzrADwGeIxSt6F",
    thumbnail: "https://img.youtube.com/vi/hCH49omUDvU/hqdefault.jpg",
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
              href={item.href}
              className="group block"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/5">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white">
                  {item.meta}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-white/75">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-white/60">{item.subtitle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
