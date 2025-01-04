import Image from "next/image";
import React from "react";
import {  mapCharacters } from "../../public/images/moana_about";

const JourneyMap = ({ className }) => {
  return (
    <div className={` ${className} relative  `}>
      <iframe className="h-full scale-125 " src="https://lottie.host/embed/417a6f83-9817-4f0f-806c-cd4c1a29c682/fiaEXxVwr9.lottie"></iframe>
      <Image
      className=" absolute h-full -left-28 top-0 scale-95"
        src={mapCharacters}
        width={429}
        height={665}
        alt="moana-journey-animation"
      />
    </div>
  );
};

export default JourneyMap;
