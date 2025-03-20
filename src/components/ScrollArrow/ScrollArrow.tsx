import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import ArrowDown from "@/assets/images/ArrowDown.png";
import ArrowUp from "@/assets/images/ArrowUp.png";

const sections = ["home", "about", "swap"];

const ScrollArrow = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const handleScroll = () => {
    if (isScrolling) {
      return 
    }
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800);
    if (isAtBottom) {
      scroller.scrollTo("home", { smooth: true, duration: 800, spy: true });
    } else {
      const currentSectionIndex = sections.findIndex((id) => {
        const element = document.getElementById(id);
        if (element) {
          return element?.getBoundingClientRect()?.top >= 0;
        }
      });

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

    const handleScroll = (e) => {
      e.preventDefault();
      const currentScrollY =
        window.scrollY || document.documentElement.scrollTop;
      setPrevScrollY(currentScrollY);
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      setIsAtBottom(isBottom);
      if (isScrolling) return;
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 800);

      const index = getCurrentSectionIndex();
      console.log(currentScrollY);
      const screenHeight = window.innerHeight;

      if (currentScrollY >= prevScrollY) {
        console.log("down");

        const nextSection = sections[index + 1] || "swap";
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
      } else {

        const nextSection = sections[index] || "home";
        scroller.scrollTo(nextSection, {
          smooth: true,
          duration: 800,
          spy: true,
        });
      }
      const data = currentScrollY + screenHeight;
      if (currentScrollY !== 0) {
        setPrevScrollY(data);
      } else {
        setPrevScrollY(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling, prevScrollY]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) {
        event.preventDefault();
        return;
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrolling]);

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

export default ScrollArrow;
