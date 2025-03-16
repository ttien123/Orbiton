import { FC, PropsWithChildren } from "react";

const BoxContent: FC<
  PropsWithChildren & {
    extendClassName?: string;
  }
> = ({ children, extendClassName }) => {
  return (
    <div
      className={`py-10 px-8 border-borderBoxContent border rounded-[24px] text-center ${extendClassName}`}
    >
      {children}
    </div>
  );
};

export default BoxContent;
