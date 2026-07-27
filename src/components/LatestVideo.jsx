const videoId = "KZo8z_qqdfs";

export default function LatestVideo() {
  return (
    <section id="latest-video" className="bg-[#05070a] px-6 pb-24 text-white md:px-10 md:pb-32">
      <div className="mx-auto max-w-5xl border-t border-white/12 pt-20 md:pt-28">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[.3em] text-white/55">
              YOUTUBE’DA YENİ
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Yeni Videomuz</h2>
          </div>

          <a
            className="text-sm font-semibold text-white/70 transition hover:text-white"
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            YouTube’da aç ↗
          </a>
        </div>

        <div className="aspect-video overflow-hidden rounded-3xl border border-white/12 bg-black shadow-2xl shadow-black/35">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="Yeni YouTube videomuz"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
