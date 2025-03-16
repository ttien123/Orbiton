import Orbitontext from "@/assets/images/OrbitonHomeSection.png";
import IphoneImg from "@/assets/images/iphoneImg.png";
import Header from "../Header/Header";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { motion } from "motion/react";
const HomeSection = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-between containerCustom">
        <div>
          <motion.img
            initial={{ y: "-250%", opacity: 0 }}
            whileInView={{
              y: [0, 50, 5, 0],
              opacity: [0, 0.5, 0.75, 1],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              times: [0, 0.5, 0.75, 1],
              ease: "easeOut",
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
            src={Orbitontext}
            alt="Logo"
          />
          <div className="text-[45px] mt-10">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.8,
              }}
              className="text-primary-custom"
            >
              Orbiton Swap -{" "}
            </motion.div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 1.15,
              }}
              className="text-primary-custom"
            >
              Better, faster DeFi
            </motion.div>
          </div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 0.85,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: 1.3,
            }}
            className="mt-10"
          >
            <ButtonPrimary extendClassName="py-5 px-[30px] w-auto" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.25
          }}
        >
          <img src={IphoneImg} alt="Logo" />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
