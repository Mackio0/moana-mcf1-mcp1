"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CharacterButton from "./CharacterButton";
import characterImage from "../../../assets/moana_character/character-bg.png";
import UnderWave from "../../../assets/moana_character/under-wave.png";
import Sun from "../../../assets/moana_character/sun.png";

export default function Characters({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  let currentData = data.characterData ;

  const { name, description , attributes, image } = currentData[currentSlide];

  const PrevCharacter = ( ) => {
    setCurrentSlide(
      (prev) => (prev - 1 + currentData.length) % currentData.length
    );
  };
  const NextCharacter = () => {
    setCurrentSlide((prev) => (prev + 1) % currentData.length);
  };
  console.log(image);
  console.log(characterImage);

  return (
    <main
      style={{
        backgroundImage: `url(${characterImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`  grid-cols-7 gap-8 grid h-[500px]  mb-[80px] px-20 py-5`}
    >
      <div className=" col-span-1"></div>
      <div className="col-span-2 relative flex justify-center items-center ">
        <Image
          src={image}
          alt="Moana Adventure Doll"
          width={100}
          height={400}
          className={`object-contain p-4  transform transition-all duration-700 ease-in-out  scale-110 
      }  ${name == "Maui" ? "w-3/4" : " w-1/2"}        ${
            name == "Pua" ? "w-3/4" : " w-1/2"
          }`}
        />
        <img
          src={UnderWave.src}
          alt="Moana Adventure Doll"
          className=" p-4 absolute w-1/2  top-[70%]"
        />

        <img
          src={Sun.src}
          alt="Moana Adventure Doll"
          className="p-4 absolute w-[80px] top-0 -left-[0%] transition-transform duration-500  ease-linear"
          style={{
            transform: `rotate(${currentSlide * 90}deg)`,
          }}
        />
        {/* <img

src={Sun.src}
alt="Moana Adventure Doll"


className=" p-4 absolute w-[80px]  top-0  -left-[0%] animation"

/> */}
        {/* <Image
                     
                      alt="Moana Adventure Doll"
                      fill
                      className="object-contain p-4"
                      priority
                    /> */}
      </div>

      <div
        className={`col-span-4 flex flex-col gap-4 mx-auto p-6 transform transition-all duration-700 ease-in-out  scale-110  space-y-6 `}
      >
        <div className="w-full">
          <h1 className="text-5xl font-bold text-sky-600 tracking-wide transform transition-all duration-700 ease-in-out">
            {name}
          </h1>

          <p className="text-gray-700 leading-relaxed transform transition-all duration-700 ease-in-out ">
            {description}
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            {attributes.map((attr, index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  {attr.label}
                </h2>
                <p className="text-gray-700">{attr.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-center items-center gap-4 mt-0">
          <CharacterButton
            process={PrevCharacter}
            children="Prev"
            iconLeft={<ArrowLeft className="ml-2 h-4 w-4" />}
          />
          <CharacterButton
            process={NextCharacter}
            children="Next"
            icon={<ArrowRight className="ml-2 h-4 w-4" />}
          />
        </div>
      </div>
    </main>
  );
}
