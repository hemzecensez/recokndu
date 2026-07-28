import "./Navbar.css";

const base = import.meta.env.BASE_URL;

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <a className="navbar-logo" href="#hero" aria-label="Ana sayfa">
          <img src={`${base}images/moni.jpg`} alt="" />
        </a>

        <nav className="navbar-links" aria-label="Ana menü">
          <a href="#hero">Ana Sayfa</a>
          <a href="#about">Hikâyemiz</a>
          <a href="#videos">Videolar</a>
          <a href="#galeri">Galeri</a>
        </nav>

        <a
          className="navbar-video"
          href="https://www.youtube.com/@Recepkondu1"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube kanalını aç"
        >
          <video autoPlay muted loop playsInline src={`${base}videos/selam.mp4`} />
        </a>
      </div>
    </header>
  );
}
