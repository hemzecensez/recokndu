const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="bg-[#05070a] px-6 pb-8 text-white md:px-10">
      <div className="mx-auto max-w-7xl border-t border-white/12 py-12 md:flex md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <img className="h-9 w-9" src={`${base}images/moni.HEIC`} alt="Kanal logosu" />
            <p className="text-lg font-bold">Yolda Hikâyeler</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
            Yeni rotalar, gerçek hikâyeler ve unutulmaz manzaralar.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60 md:mt-0 md:justify-end">
          <a className="transition hover:text-white" href="#galeri">Galeri</a>
          <a className="transition hover:text-white" href="#videos">Videolar</a>
          <a
            className="transition hover:text-white"
            href="https://www.youtube.com/@Recepkondu1"
            target="_blank"
            rel="noreferrer"
          >
            YouTube ↗
          </a>
          <span className="cursor-not-allowed text-white/30" title="Instagram hesabı yakında eklenecek">Instagram · yakında</span>
          <span className="cursor-not-allowed text-white/30" title="TikTok hesabı yakında eklenecek">TikTok · yakında</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Yolda Hikâyeler. Tüm hakları saklıdır.</p>
        <p>İş birlikleri ve iletişim bilgileri yakında burada.</p>
      </div>
    </footer>
  );
}
