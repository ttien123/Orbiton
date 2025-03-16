import iphoneImg2 from "@/assets/images/iphoneImg2.png";

const SwapSection = () => {
  return (
    <div className="py-[55px] flex items-center justify-between">
      <div>
        <div>
          <button className="bg-bgSectionHeader text-[#FBFCF4] py-[17px] px-[24px] rounded-[10px] mb-6">
            Solution
          </button>
        </div>
        <div className="text-[70px] mb-4 text-primary-custom">Swap Flow</div>
        <div className="text-white">
          Trade Crypto with Confidence on Our Growing Platform
        </div>
      </div>
      <div>
        <img src={iphoneImg2} alt="Logo" />
      </div>
    </div>
  );
};

export default SwapSection;
