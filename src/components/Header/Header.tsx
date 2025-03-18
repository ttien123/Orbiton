import IconLogo from "@/assets/images/logo.png";
import MenuIcon from "@/assets/images/MenuImage.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

import SideNav from "../SideNav/SideNav";
import SheetCustom from "../SheetCustom/SheetCustom";

const Header = () => {
  return (
    <header className="py-5 flex items-center justify-between containerCustom ">
      <div className="flex items-center justify-center gap-3">
        <div>
          <img src={IconLogo} alt="Logo" />
        </div>
      </div>
      <div className="lg:block hidden">
        <SideNav />
      </div>
      <div className="lg:block hidden">
        <ButtonPrimary />
      </div>
      <div className="lg:hidden block">
        <SheetCustom content={<SideNav />}>
          <img src={MenuIcon} alt="Menu" />
        </SheetCustom>
      </div>
    </header>
  );
};

export default Header;
