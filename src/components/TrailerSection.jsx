import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import GradientText from "@/components/GradientText";

const TrailerSection = () => {
  return (
    <div className={""}>
      <Container>
        <GradientText className="home-header mb-6">WATCH TRAILER</GradientText>
      </Container>
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/assets/moana_home/movie-trailer-bg.png"
          alt="Trailer background"
          width={1980}
          height={1080}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover md:object-contain hidden md:block"
          priority
        />

        {/* Content Overlay */}
        <div className="md:absolute static inset-0 p-4 sm:p-6 md:p-8 flex flex-col">
          {/* Mobile Layout */}
          <div className="flex flex-col space-y-4 md:hidden ">
            {/* Info Card */}
            <div className="w-full bg-gradient-to-b from-[#E2D3C8] to-[#56B3C7] p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 font-leckerli">
                    Trailer Concept
                  </h3>
                  <p className="text-sm text-gray-600 leading-5">
                    Moana journeys with Maui to restore Te Fiti's heart and save
                    her island
                  </p>
                </div>
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src="/assets/moana_home/pig.png"
                    alt="Pig"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Left Video */}
            <div className="w-full">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LKFuXETZUsI?si=JLZ3JJTkelc9Sp7l"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            {/* Right Video */}
            <div className="w-full">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/assets/moana_home/boat.png"
                  alt="Boat scene"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block md:h-[400px]">
            {/* Left Video */}
            <div className="absolute left-8 lg:left-40 top-[70%] -translate-y-1/2 w-[280px] lg:w-[360px]">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden object-cover">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LKFuXETZUsI?si=JLZ3JJTkelc9Sp7l"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            {/* Right Video */}
            <div className="absolute right-8 lg:right-40 top-[40%] w-[300px] lg:w-[400px]">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/hDZ7y8RP5HE?si=1ZDAjX-ItClEYxEJ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            {/* Info Card */}
            <div className="absolute md:right-40 lg:right-80 md:-top-4 lg:top-8 w-[280px] lg:w-[340px] bg-gradient-to-b from-[#E2D3C8] to-[#56B3C7] p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1 font-leckerli">
                    Trailer Concept
                  </h3>
                  <p className="text-sm text-gray-600 leading-7">
                    Moana journeys with Maui to restore Te Fiti's heart and save
                    her island
                  </p>
                </div>
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image
                    src="/assets/moana_home/pig.png"
                    alt="Pig"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrailerSection;
