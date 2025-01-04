import React from "react";
import Image from "next/image";
import GradientText from "@/components/GradientText";
import Button from "@/components/Button";

const LandingSection = () => {
  return (
    <div className="">
      <div className="md:py-10 relative">
        {/* Sun Icon */}
        <div className="absolute hidden md:block -top-4 left-10">
          <Image
            src={"/assets/moana_home/sun.png"}
            alt="Sun Icon"
            width={52}
            height={52}
          />
        </div>

        <div className="">
          {/* Starfish */}
          <div className="absolute top-4 hidden md:block md:-top-4 left-80 ">
            <Image
              src={"/assets/moana_home/starfish.png"}
              alt="Starfish Icon"
              width={54}
              height={54}
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row items-start md:justify-between lg:justify-around">
            {/* Movie Info */}
            <div className="w-full lg:w-auto">
              <GradientText className="text-5xl font-bold text-sky-600 mb-6 font-subrayada">
                MOANA
              </GradientText>

              <div className="space-y-4 text-gray-700">
                <div>
                  <span className="font-semibold">Release Date:</span> November
                  23, 2016 (USA)
                </div>
                <div>
                  <span className="font-semibold">Genre:</span> Family/Adventure
                </div>
                <div>
                  <span className="font-semibold">Sequel:</span> Moana 2
                </div>
                <div>
                  <span className="font-semibold">Runtime:</span> 1h 47m
                </div>
                <div>
                  <span className="font-semibold">IMDb Rating:</span> 7.6/10
                </div>

                <div className="flex gap-3 mt-6">
                  <Button>← Back</Button>
                  <Button filled>Next →</Button>
                </div>
              </div>
            </div>

            {/* Character Image */}
            <div
              style={{
                backgroundImage: `url(${"/assets/moana_home/home-hero-bg.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                zIndex: -1,
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className=" w-full md:aspect-square aspect-auto h-[350px] lg:w-[400px] lg:h-[400px]"
            >
              <Image
                src={"/assets/moana_home/Maui.png"}
                alt="Maui Character"
                width={350}
                height={350}
                className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                priority
              />
            </div>

            {/* {shell} */}
            <div>
              <div className="absolute right-20 lg:bottom-20 md:-bottom-10">
                <Image
                  src={"/assets/moana_home/shell.png"}
                  alt="Shell Icon"
                  width={54}
                  height={54}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
