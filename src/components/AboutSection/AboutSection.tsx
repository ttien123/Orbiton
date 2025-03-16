import BoxContent from "../BoxContent/BoxContent";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <div className="pt-[70px] pb-[80px]">
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
        In code we trust
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
        <span className="bg-[#0098E9] px-2 rounded-[8px]">TON</span> is the gate to web3 future
        and <span className="bg-[#6F45E0] px-2 rounded-[8px]">Orbiton</span> is the key
      </motion.div>
      <motion.div className="grid grid-cols-3 gap-10">
        <BoxContent delayAnimation={0.25}>
          <div className="text-[18px] text-white">Hackathon Hacker League</div>
          <div className="text-[45px] text-primary-custom">About us</div>
          <div className="text-[18px] text-white">for DeDust Track</div>
        </BoxContent>
        <BoxContent delayAnimation={0.4}>
          <div className="text-[18px] text-white">Hackathon Hacker League</div>
          <div className="text-[45px] text-primary-custom">1st Prize</div>
          <div className="text-[18px] text-white">for DeFi Unicorn Track</div>
        </BoxContent>
        <BoxContent delayAnimation={0.55}>
          <div className="text-[45px] text-primary-custom">
            And more to come
          </div>
        </BoxContent>
      </motion.div>
    </div>
  );
};

export default AboutSection;
