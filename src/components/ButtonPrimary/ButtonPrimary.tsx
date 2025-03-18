import textBtnHeader from "@/assets/images/textButtonheader.png";
import textBtnHeader2 from "@/assets/images/textButtonHeaderSize2.png";
import { FC, PropsWithChildren } from "react";

const ButtonPrimary: FC<
  PropsWithChildren & {
    extendClassName?: string;
    isLarge?: boolean;
  }
> = ({ children, extendClassName, isLarge }) => {
  return (
    <button
      className={`flex w-[124px] h-[32px] items-center justify-center px-4 py-2 bg-bgButtonType rounded-lg ${extendClassName}`}
    >
      {!children ? (
        <img src={isLarge ? textBtnHeader2 : textBtnHeader} alt="Logo" />
      ) : (
        children
      )}
    </button>
  );
};
export default ButtonPrimary;
