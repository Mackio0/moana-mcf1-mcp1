import React from "react";

import Image from "next/image";
import GradientText from "@/app/components/GradientText";

const HeroSection = ({ image, title }) => {
  return (
    <div className="relative ">
      <Image src={image}  alt={title} priority />
      <div className="absolute inset-0 flex items-center justify-center">
        <GradientText className={" text-3xl font-leckerli"}>
          {title}
        </GradientText>
      </div>
    </div>
  );
};
export default HeroSection;
