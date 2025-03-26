import {  useRef, useState } from "react";
import ArrowDown from "@/assets/images/ArrowDown.png";
import ArrowUp from "@/assets/images/ArrowUp.png";

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
gsap.registerPlugin(useGSAP,ScrollTrigger, ScrollToPlugin);

const ScrollArrow = () => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null)

  const { contextSafe } = useGSAP(
    () => {
      const sections = gsap.utils.toArray(".panel");
      let isScrolling = false; 
      let indexSection = 0; 
      function goToSection(i:number) {
        if (isScrolling) return; 
        isScrolling = true;
        indexSection = i
        gsap.to(window, {
          scrollTo: { y: i * innerHeight, autoKill: false, },
          duration: 0.85,
          onComplete: () => {
            isScrolling = false;
            if (i === sections.length - 1) {
              setIsAtBottom(true)
            }else{
              setIsAtBottom(false)
            }
          }
        });
      }
      sections.forEach((eachPanel, i) => {
        ScrollTrigger.create({
          trigger: eachPanel as any,
          onEnter: () => {
            if (!isScrolling) goToSection(i)
          }
        });
      
        ScrollTrigger.create({
          trigger: eachPanel as any,
          start: "bottom bottom",
          onEnterBack: () => {
            if (!isScrolling) goToSection(i)
          },
          end: () => "+=" + document.body.offsetHeight
        });
      });

      const scrollToNext = contextSafe(() => {
        if (isScrolling) {
          return
        }
        isScrolling = true
        
        if (indexSection < sections.length - 1) {
          gsap.to(window, {
            scrollTo: { y : sections[indexSection + 1] as any, autoKill: false },
            duration: 0.85,
            ease: "power3.inOut",
            onComplete: () => {
              isScrolling= false
              if (indexSection === sections.length - 1) {
                setIsAtBottom(true)
              }else{
                setIsAtBottom(false)
              }
            }
          });
          indexSection += 1
          
        }else {
          gsap.to(window, {
            scrollTo: { y : sections[0] as any, autoKill: false },
            duration: 0.85,
            ease: "power3.inOut",
            onComplete: () => {
              isScrolling= false
              setIsAtBottom(false)
            }
          });
          indexSection = 0
        }
      }
      );
      btnRef.current?.addEventListener('click', scrollToNext);

    return () => {
        btnRef.current?.removeEventListener('click', scrollToNext);
    };

      });

      

  return (
    <div>
      <button
        ref={btnRef}
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
