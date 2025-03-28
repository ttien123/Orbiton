import iphoneImg2 from "@/assets/images/iphoneImg2.png";
import IconNext from "@/assets/images/IconNext.png";
import IconPrev from "@/assets/images/IconPrev.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useRef, useState } from "react";
import { motion } from "motion/react";

const SwapSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div id="swap" className="panel h-screen flex items-center justify-between gap-4 lg:gap-[75px]">
      <div className="text-white flex-shrink-0 flex items-center justify-start">
        <button
          disabled={activeIndex === 0}
          onClick={() => swiperRef.current?.slidePrev()}
          className="swiper-button-prev text-white flex-shrink-0 flex items-center justify-end disabled:opacity-20"
        >
          <img src={IconPrev} alt="Prev" />
        </button>
      </div>
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={16}
        speed={800}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="MySwiper relative"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="lg:flex items-center justify-between lg:text-left text-center">
              <div>
                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.35,
                  }
                }}>
                  <button className="bg-bgSectionHeader text-[#FBFCF4] py-[17px] px-[24px] rounded-[10px] mb-6">
                    Solution
                  </button>
                </motion.div>
                <motion.div 
                initial={{ y: "80%", opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.35,
                    ease: "easeOut",
                    delay: 0.45,
                  }
                }} className="text-[32px] lg:text-[70px] mb-4 text-primary-custom">
                  Swap Flow
                </motion.div>
                <motion.div 
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.35,
                    ease: "easeOut",
                    delay: 0.85,
                  }
                }} className="text-white">
                  Trade Crypto with Confidence on Our Growing Platform
                </motion.div>
                <motion.div 
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.35,
                    ease: "easeOut",
                    delay: 1,
                  }
                }} className="mt-10 lg:block hidden">
                  <ButtonPrimary extendClassName="py-5 px-[30px] w-auto" isLarge/>
                </motion.div>
              </div>
              <motion.div  
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.8,
                }
              }} 
              className="mt-[66px]">
                <img src={iphoneImg2} alt="Logo" className="mx-auto lg:mx-0"/>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-white flex-shrink-0 flex items-center justify-start">
        <button
          disabled={activeIndex === Array.from({ length: 3 })?.length - 1}
          onClick={() => swiperRef.current?.slideNext()}
          className="text-white flex-shrink-0 flex items-center justify-end disabled:opacity-20"
        >
          <img src={IconNext} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default SwapSection;
