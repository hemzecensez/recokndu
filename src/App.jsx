import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import ChannelStory from "./components/ChannelStory";
import LatestVideo from "./components/LatestVideo";
import RecentVideos from "./components/RecentVideos";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SubscribeCta from "./components/SubscribeCta";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070A] text-white">

      <Background />

      <Navbar />

      <Hero />

      <ChannelStory />

      <LatestVideo />

      <RecentVideos />

      <Gallery />

      <SubscribeCta />

      <Footer />

    </div>
  );
}

export default App;
