import LightPlaceFooter from "@/assets/images/LightPlaceFooter.png";

const Footer = () => {
  return (
    <div className="bg-footer py-4 bg-cover bg-no-repeat bg-center relative">
      <div className="text-white text-center text-[14px]">2025 Orbiton</div>
      <div className="absolute top-0 right-0">
        <img src={LightPlaceFooter} alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;
