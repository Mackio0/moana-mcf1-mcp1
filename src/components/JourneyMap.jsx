import Image from "next/image";
import React from "react";
import { Journey } from "../../public/images/moana_about";

const JourneyMap = () => {
  return (
<Image src={Journey} alt="MoanaJourneyMap" width={596} height={752} className=" w-full h-auto" />
  );
};

export default JourneyMap;
