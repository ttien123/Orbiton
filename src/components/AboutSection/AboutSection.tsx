import BoxContent from "../BoxContent/BoxContent";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="pt-[20px] lg:pt-[70px] pb-[80px] min-h-screen flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.25,
        }}
        className="bg-bgSectionHeader text-[#FBFCF4] max-w-[115px] py-[17px] p-[10px] mx-auto text-center rounded-[10px] mb-8"
      >
        About us
      </motion.div>
      <motion.div
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.15,
        }}
        className="text-[45px] text-center mb-4 text-primary-custom"
      >
        <span className="block lg:inline">In code</span> we trust
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.25,
        }}
        className="text-[18px] text-white text-center mb-[55px]"
      >
        <span className="bg-[#0098E9] px-2 rounded-[8px] inline-block lg:inline mb-2">TON</span> 
        <span className="block lg:inline pb-2 text-[16px] lg:text-[18px]">{" "}is the gate to web3 future and{" "}</span>
        <span className="bg-[#6F45E0] mb-2 px-2 rounded-[8px] inline-block lg:inline">Orbiton</span> 
        <span className="block lg:inline text-[16px] lg:text-[18px]">{" "}is the key</span>
      </motion.div>
      <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <BoxContent delayAnimation={0.25}>
          <div className="text-[16px] lg:text-[18px] text-white">Hackathon Hacker League</div>
          <div className="text-[32px] lg:text-[45px] text-primary-custom">3rd Prize</div>
          <div className="text-[16px] lg:text-[18px] text-white">for DeDust Track</div>
        </BoxContent>
        <BoxContent delayAnimation={0.4}>
          <div className="text-[16px] lg:text-[18px] text-white">Hackathon Hacker League</div>
          <div className="text-[32px] lg:text-[45px] text-primary-custom">1st Prize</div>
          <div className="text-[16px] lg:text-[18px] text-white">for DeFi Unicorn Track</div>
        </BoxContent>
        <BoxContent delayAnimation={0.55}>
          <div className="text-[45px] text-primary-custom my-auto">
            <span className="block lg:inline">And more</span> to come
          </div>
        </BoxContent>
      </motion.div>
    </div>
  );
};

export default AboutSection;
