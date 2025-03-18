import iphoneImg2 from "@/assets/images/iphoneImg2.png";
import IconNext from "@/assets/images/IconNext.png";
import IconPrev from "@/assets/images/IconPrev.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useRef, useState } from "react";

const SwapSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div id="swap" className="flex items-center justify-between gap-4 lg:gap-[75px] min-h-screen">
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
                <div>
                  <button className="bg-bgSectionHeader text-[#FBFCF4] py-[17px] px-[24px] rounded-[10px] mb-6">
                    Solution
                  </button>
                </div>
                <div className="text-[32px] lg:text-[70px] mb-4 text-primary-custom">
                  Swap Flow
                </div>
                <div className="text-white">
                  Trade Crypto with Confidence on Our Growing Platform
                </div>
                <div className="mt-10 lg:block hidden">
                  <ButtonPrimary extendClassName="py-5 px-[30px] w-auto" isLarge/>
                </div>
              </div>
              <div className="mt-[66px]">
                <img src={iphoneImg2} alt="Logo" className="mx-auto lg:mx-0"/>
              </div>
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
