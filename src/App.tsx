import LightPlace from "@/assets/images/lightPlace.png";
import LightPlace2 from "@/assets/images/lightPlace2.png";
import Header from "./components/Header/Header";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SwapSection from "./components/SwapSection/SwapSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="min-h-screen bg-main bg-cover bg-no-repeat bg-center relative overflow-hidden">
        <main>
          <div className="relative z-10 containerCustom">
            <Header />
            <div>
              <HomeSection />
              <AboutSection />
              <SwapSection />
            </div>
          </div>
        </main>
        <div className="absolute left-[0] top-[180px]">
          <img src={LightPlace} alt="Logo" />
        </div>
        <div className="absolute right-5 bottom-[100px]">
          <img src={LightPlace2} alt="Logo" />
        </div>
        <div className="absolute inset-0 bg-layoutDot bg-cover bg-no-repeat bg-center"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
