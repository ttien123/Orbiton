import BoxContent from "../BoxContent/BoxContent";

const AboutSection = () => {
  return (
    <div className="pt-[70px] pb-[80px]">
      <div className="bg-bgSectionHeader text-[#FBFCF4] max-w-[450px] mx-auto py-[17px] px-[34px] rounded-[10px] mb-8">
        {"Stories about us -> way come to TON"}
      </div>
      <div className="text-[45px] text-center mb-4 text-primary-custom">
        About us
      </div>
      <div className="text-[18px] text-white text-center mb-[55px]">
        <span className="!text-[#0088FF]">TON</span> is the gate to web3 future
        and Orbiton is the key
      </div>
      <div className="grid grid-cols-3 gap-10">
        <BoxContent extendClassName="col-span-1">
          <div className="text-[18px] text-white">Hackathon Hacker League</div>
          <div className="text-[45px] text-primary-custom">About us</div>
          <div className="text-[18px] text-white">for DeDust Track</div>
        </BoxContent>
        <BoxContent extendClassName="col-span-1">
          <div className="text-[18px] text-white">Hackathon Hacker League</div>
          <div className="text-[45px] text-primary-custom">1st Prize</div>
          <div className="text-[18px] text-white">for DeFi Unicorn Track</div>
        </BoxContent>
        <BoxContent extendClassName="col-span-1">
          <div className="text-[45px] text-primary-custom">
            And more to come
          </div>
        </BoxContent>
      </div>
    </div>
  );
};

export default AboutSection;
