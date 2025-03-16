import Orbitontext from "@/assets/images/OrbitonHomeSection.png";
import IphoneImg from "@/assets/images/iphoneImg.png";

const HomeSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={Orbitontext} alt="Logo" />
        <div className="text-[45px] mt-10">
          <div className="text-primary-custom">Orbiton Swap - </div>
          <div className="text-primary-custom">Better, faster DeFi</div>
        </div>
      </div>
      <div>
        <img src={IphoneImg} alt="Logo" />
      </div>
    </div>
  );
};

export default HomeSection;
