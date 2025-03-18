import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import ArrowDown from "@/assets/images/ArrowDown.png";
import ArrowUp from "@/assets/images/ArrowUp.png";
import { useMotionValueEvent, useScroll } from "motion/react";

const sections = ["home", "about", "swap"];

const ScrollArrow = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  // const [scrolling, setScrolling] = useState(false);


  const handleScroll = () => {
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
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      setIsAtBottom(isBottom);
    };

    // const handleWheelScroll = (event: WheelEvent) => {
    //   event.preventDefault();
    //   if (scrolling) return;
    //   setScrolling(true);

    //   setTimeout(() => setScrolling(false), 800);

    //   const currentSectionIndex = sections.findIndex((id) => {
    //     const element = document.getElementById(id);
    //     if (!element) {
    //       return false;
    //     }
    //     return element?.getBoundingClientRect()?.top >= 0;
    //   });
    //   if (event.deltaY == 0) return;
    //   if (event.deltaY > 0) {
    //     const nextSection = sections[currentSectionIndex + 1] || "swap";
    //     scroller.scrollTo(nextSection, { smooth: true, duration: 800 });
    //   } else {
    //     const prevSection = sections[currentSectionIndex - 1] || "home";
    //     scroller.scrollTo(prevSection, { smooth: true, duration: 800 });
    //   }
    // };
    // window.addEventListener("wheel", handleWheelScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      // window.removeEventListener("wheel", handleWheelScroll);
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

export default ScrollArrow;
