import React from "react";
import GradientText from "./GradientText";
import Image from "next/image";
import MoanaSailBoat from "@/app/gallery/components/MoanaSailBoat";

const HeroSection = ({ image, title }) => {
  return (
    <div className="relative">
      <Image src={image} alt={title} className="w-full h-full object-contain" />
      <div className="absolute inset-0 flex items-center justify-center">
        <GradientText className={"text-sm lg:text-5xl font-leckerli"}>
          {title}
        </GradientText>
      </div>
      <div className=" absolute z-20 w-full bottom-3 md:bottom-7 lg:bottom-[56px] transform translate-y-1/2">
        <MoanaSailBoat />
      </div>
    </div>
  );
};
export default HeroSection;
