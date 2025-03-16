import textBtnHeader from "@/assets/images/textButtonheader.png";
import IconLogo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="py-5 flex items-center justify-between">
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
      <button className="flex w-[124px] h-[32px] items-center justify-center px-4 py-2 bg-bgButtonType rounded-lg">
        <img src={textBtnHeader} alt="Logo" />
      </button>
    </div>
  </header>
  )
}

export default Header
