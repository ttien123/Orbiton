import LightPlace from "@/assets/images/lightPlace.png";
import LightPlace2 from "./assets/images/lightPlace2.png";
import HomeSection from "./components/HomeSection/HomeSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SwapSection from "./components/SwapSection/SwapSection";
import Footer from "./components/Footer/Footer";
import ScrollArrow from "./components/ScrollArrow/ScrollArrow";
import ScrollArrowMobi from "./components/ScrollArrowMobi/ScrollArrowMobi";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <div>
      <div className="relative overflow-hidden bg-mainSection bg-cover bg-no-repeat bg-center">
        <main>
          <div
            id="home"
            className="panel bg-homeSection bg-cover bg-no-repeat bg-center h-screen"
          >
            <div className="relative z-50">
              <HomeSection />
            </div>
          </div>
          <div className="px-4">
            <div className="containerCustom relative z-50">
              <AboutSection />
              <SwapSection />
            </div>
          </div>
        </main>
        <div className="absolute left-[0] top-[180px] z-20">
          <img src={LightPlace} alt="Logo" />
        </div>
        <div className="absolute right-0 bottom-[100px] z-20">
          <img src={LightPlace2} alt="Logo" />
        </div>
        <div className="absolute inset-0 bg-layoutDot bg-cover bg-no-repeat bg-center z-20"></div>
      </div>
      <div className="lg:block hidden">
        {isDesktop && <ScrollArrow />}
      </div>
      <div className="lg:hidden block">
        <ScrollArrowMobi />
      </div>
      <Footer />
    </div>
  );
}

export default App;
