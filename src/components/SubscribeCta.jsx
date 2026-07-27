const channelUrl = "https://www.youtube.com/@Recepkondu1";

export default function SubscribeCta() {
  return (
    <section className="bg-[#05070a] px-6 pb-24 text-white md:px-10 md:pb-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[.09] via-white/[.035] to-transparent px-7 py-12 md:px-14 md:py-16">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute right-12 top-12 h-32 w-32 rounded-full border border-white/[.06]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <img className="h-11 w-11 rounded-xl bg-white/10 p-1.5" src="/images/moni.HEIC" alt="Kanal logosu" />
              <p className="text-xs font-semibold tracking-[.3em] text-white/55">YOLCULUĞA KATIL</p>
            </div>
            <h2 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">Yeni rotaları birlikte keşfedelim.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              Yeni videolar, manzaralar ve yoldan hikâyeler için kanala abone ol.
            </p>
          </div>

          <a
            className="inline-flex w-fit items-center justify-center rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-red-500"
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
          >
            YouTube’da abone ol ↗
          </a>
        </div>

        <div className="relative mt-12 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3">
          <Pillar number="01" title="Yeni videolar" />
          <Pillar number="02" title="Yoldan hikâyeler" />
          <Pillar number="03" title="Unutulmaz manzaralar" />
        </div>
      </div>
    </section>
  );
}

function Pillar({ number, title }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-black/20 px-5 py-4">
      <span className="text-xs font-bold text-white/30">{number}</span>
      <p className="text-sm font-medium text-white/75">{title}</p>
    </div>
  );
}
