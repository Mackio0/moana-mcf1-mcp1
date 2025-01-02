import React from "react";
import GradientText from "./GradientText";
import Image from "next/image";

const HeroSection = ({ image, title }) => {

  return (
    <div className="relative">
      <Image src={image} alt={title} />
      <div className="absolute inset-0 flex items-center justify-center">
        <GradientText className={"text-3xl font-leckerli"}>
          {title}
        </GradientText>
      </div>
    </div>
  );
};
export default HeroSection;
