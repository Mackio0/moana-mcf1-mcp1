import Image from "next/image";
import React from "react";

const PartnerLogo = ({ partner }) => {
  return (
    <div
      className=" lg:h-[100px] h-12 sm:h-16 md:h-20 "
    >
      <Image
        className=" h-full  object-contain  "
        height="100"
        alt={partner.title}
        src={partner.src}
      />
    </div>
  );
};

export default PartnerLogo;
