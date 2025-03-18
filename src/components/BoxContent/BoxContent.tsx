import { FC, PropsWithChildren } from "react";
import { motion } from "motion/react";

const BoxContent: FC<
  PropsWithChildren & {
    extendClassName?: string;
    delayAnimation?: number;
  }
> = ({ children, extendClassName, delayAnimation = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        delay: delayAnimation,
      }}
      className={`bg-bgBorder rounded-[24px] overflow-hidden p-[1px] ${extendClassName}`}
    >
      <div
        className={`py-10 px-8 text-center rounded-[24px] bg-[#161027] min-h-full flex items-center flex-col justify-center`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default BoxContent;
