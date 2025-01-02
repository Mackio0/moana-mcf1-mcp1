import Image from "next/image";
import React from "react";

const PartnerLogo = ({ image }) => {
  return (
    <div className=" ml-5 h-[100px] ">
      <Image
        className=" h-full "
        height="100"
        alt={image.title}
        src={image.src}
      />
    </div>
  );
};

export default PartnerLogo;
