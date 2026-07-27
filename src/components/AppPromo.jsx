import { CalendarDays, ChevronRight, Map, MapPin, Route, Sparkles } from "lucide-react";

const benefits = [
  { icon: <Route size={20} />, title: "Akıllı rota", text: "Gününü tek ekranda planla." },
  { icon: <Map size={20} />, title: "Yakınını keşfet", text: "Gittiğin yerde iyi noktaları bul." },
  { icon: <Sparkles size={20} />, title: "AI rehber", text: "Yolculuk boyunca yanında olsun." },
];

export default function AppPromo() {
  return (
    <section id="uygulama" className="overflow-hidden bg-[#05070a] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 rounded-[2rem] border border-white/12 bg-white/[.035] px-7 py-12 md:px-16 md:py-16 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="text-xs font-semibold tracking-[.3em] text-sky-300/80">TRAVEL PLAN UYGULAMASI</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Yola çıkmadan önce her şeyi planla.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
            Konaklamadan rotaya, görülmesi gereken yerlerden gün içi planına kadar seyahatini tek uygulamada düzenle.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sky-300">{benefit.icon}</div>
                <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/50">{benefit.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/85"
              href="#"
            >
              Uygulamayı Keşfet
            </a>
            <span className="text-sm text-white/45">Yakında App Store ve Google Play’de</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <AppPreview />
        </div>
      </div>
    </section>
  );
}

function AppPreview() {
  return (
    <div className="w-[290px] rounded-[38px] border-[7px] border-[#161a20] bg-[#0b0f14] p-2 shadow-2xl shadow-black/45">
      <div className="mx-auto mb-2 h-5 w-24 rounded-full bg-black" />

      <div className="overflow-hidden rounded-[27px] bg-[#101820]">
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-800 p-5">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border-[18px] border-white/20" />
          <p className="relative text-xs font-semibold tracking-[.18em] text-white/75">TRAVEL PLAN</p>
          <h3 className="relative mt-6 text-3xl font-bold">Tokyo</h3>
          <p className="relative mt-1 text-sm text-white/80">12 — 18 Eylül</p>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/45">BUGÜNÜN PLANI</p>
              <p className="mt-1 font-semibold">3 durak kaldı</p>
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-sky-300 text-slate-950">
              <Route size={18} />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <PlanItem icon={<MapPin size={16} />} time="10:30" title="Senso-ji Tapınağı" />
            <PlanItem icon={<CalendarDays size={16} />} time="13:00" title="Shibuya’da öğle yemeği" />
            <PlanItem icon={<Sparkles size={16} />} time="18:30" title="AI ile akşam rotası" />
          </div>

          <button className="mt-4 flex w-full items-center justify-between rounded-xl bg-white/8 px-3 py-3 text-left text-sm font-semibold" type="button">
            Planı görüntüle
            <ChevronRight size={17} className="text-white/55" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PlanItem({ icon, time, title }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/[.045] px-3 py-2.5">
      <div className="text-sky-300">{icon}</div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium">{title}</p>
      </div>
      <span className="text-[11px] text-white/45">{time}</span>
    </div>
  );
}
