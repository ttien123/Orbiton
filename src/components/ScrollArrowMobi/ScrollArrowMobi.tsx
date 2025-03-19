import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import ArrowDown from "@/assets/images/ArrowDown.png";
import ArrowUp from "@/assets/images/ArrowUp.png";

const sections = ["home", "about", "swap"];

const ScrollArrowMobi = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  const getCurrentSectionIndex = () => {
    const scrollY = window.scrollY;
    let currentIndex = -1; // Mặc định là -1 nếu không tìm thấy

    sections.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionBottom = bottom + window.scrollY;

        // Nếu scrollY nằm trong khoảng section này
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentIndex = index; // Lưu index của section
        }
      }
    });

    return currentIndex;
  };
  const handleScroll = () => {
    
    if (isAtBottom) {
      scroller.scrollTo("home", { smooth: true, duration: 800, spy: true });
    } else {
      const currentSectionIndex = getCurrentSectionIndex()
      console.log(currentSectionIndex);
      

      const nextSection = sections[currentSectionIndex + 1] || "swap";
      if (nextSection === "swap") {
        scroller.scrollTo(nextSection, {
          smooth: true,
          duration: 800,
          spy: true,
          offset: 150,
        });
      } else {
        scroller.scrollTo(nextSection, {
          smooth: true,
          duration: 800,
          spy: true,
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <button
        onClick={handleScroll}
        className="fixed bottom-[64px] z-50 left-1/2 transform -translate-x-1/2 text-primary-custom px-4 py-2"
      >
        {!isAtBottom ? (
          <span className="flex items-center justify-center flex-col gap-3">
            <img src={ArrowDown} alt="" />
            Scroll down
          </span>
        ) : (
          <span className="flex items-center justify-center flex-col gap-3">
            <img src={ArrowUp} alt="" />
            Scroll up
          </span>
        )}
      </button>
    </div>
  );
};

export default ScrollArrowMobi;
