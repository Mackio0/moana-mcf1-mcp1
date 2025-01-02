
import React from "react";
import Marquee from "react-fast-marquee";
import PartnerLogo from "./PartnerLogo";

const LogoSlider = ({ images }) => {
  return (
    <Marquee gradient={true} speed={45} direction="right" className="flex gap-5 py-10 col-span-full  overflow-y-hidden" pauseOnHover={true} autoFill={true}>
      {images.map((image, index) => (
        <PartnerLogo key={index} image={image} />
      ))}
    </Marquee>
  );
};

export default LogoSlider;
