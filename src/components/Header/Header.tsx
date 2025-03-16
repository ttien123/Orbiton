import IconLogo from "@/assets/images/logo.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const Header = () => {
  return (
    <header className="py-5 flex items-center justify-between containerCustom ">
      <div className="flex items-center justify-center gap-3">
        <div>
          <img src={IconLogo} alt="Logo" />
        </div>
      </div>
      <nav>
        <ul className="flex space-x-6 text-[12px] text-[#FBFCF4]">
          <li>Swap</li>
          <li>Advantages</li>
          <li>Solution</li>
        </ul>
      </nav>
      <div>
        <ButtonPrimary />
      </div>
    </header>
  );
};

export default Header;
