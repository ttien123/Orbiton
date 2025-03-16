import textBtnHeader from "@/assets/images/textButtonheader.png";
import { FC, PropsWithChildren } from "react";

const ButtonPrimary: FC<
  PropsWithChildren & {
    extendClassName?: string;
  }
> = ({ children, extendClassName }) => {
  return (
    <button
      className={`flex w-[124px] h-[32px] items-center justify-center px-4 py-2 bg-bgButtonType rounded-lg ${extendClassName}`}
    >
      {!children ? <img src={textBtnHeader} alt="Logo" /> : children}
    </button>
  );
};
export default ButtonPrimary;
