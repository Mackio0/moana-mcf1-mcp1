import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import GradientText from "@/components/GradientText";
import FaqSection from "@/components/FaqSection";

export default function page() {
  const scenes = [
    {
      id: 1,
      title: "Maui's funny movement",
      image: "/assets/moana_home/best-scence.mp4",
      gridArea: "span 1 / span 3 / auto / auto",
    },
    {
      id: 2,
      title: "Dancing movement",
      image: "/assets/moana_home/best-scene-two.mp4",
      gridArea: "span 1 / span 3 / auto / auto",
    },
    {
      id: 3,
      title: "Benison from goddess",
      image: "/assets/moana_home/best-scene-three.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
    {
      id: 4,
      title: "Moana's cuteness movement",
      image: "/assets/moana_home/best-scene-four.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
    {
      id: 5,
      title: "Moana's funny movement",
      image: "/assets/moana_home/best-scene-five.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
  ];

  return (
    <main>
      <Container>
        <div className="">
          <div className=" px-10 py-10 relative">
            {/* Sun Icon */}
            <div className="absolute -top-4 left-10">
              <Image
                src={"/assets/moana_home/sun.png"}
                alt="Sun Icon"
                width={52}
                height={52}
              />
            </div>

            <div className="mt-10 md:mt-0">
              {/* Starfish */}
              <div className="absolute top-4 md:-top-4 left-80 ">
                <Image
                  src={"/assets/moana_home/starfish.png"}
                  alt="Starfish Icon"
                  width={54}
                  height={54}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start justify-around">
                {/* Movie Info */}
                <div className="">
                  <GradientText className="text-5xl font-bold text-sky-600 mb-6 font-subrayada">
                    MOANA
                  </GradientText>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <span className="font-semibold">Release Date:</span>{" "}
                      November 23, 2016 (USA)
                    </div>
                    <div>
                      <span className="font-semibold">Genre:</span>{" "}
                      Family/Adventure
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
                    width: "400px",
                    height: "400px",
                  }}
                  className="relative w-full aspect-square"
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
                  <div className="absolute right-20 bottom-20">
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

        <div>
          <div className="flex items-center  gap-3 mb-4">
            <GradientText className={"home-header"}>
              Best scences of Moana
            </GradientText>
            <Image
              src={"/assets/moana_home/kakamora.png"}
              alt="Kakamora"
              width={48}
              height={48}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {scenes.map((scene) => {
              return (
                <div
                  key={scene.id}
                  className="relative group"
                  style={{ gridArea: scene.gridArea }}
                >
                  <video
                    src={scene.image}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={scene.image}
                    title={scene.title}
                    style={{ objectFit: "cover" }}
                  ></video>

                  <div className=" text-center mt-1">
                    <p className="text-sm font-medium text-gray-700 italic">
                      {scene.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-10 flex items-center justify-between relative">
          <Image
            src={"/assets/moana_home/storyline.png"}
            alt="Storyline"
            height={400}
            width={400}
          />
          <div className="w-full md:w-1/2 relative space-y-4 z-40">
            <h1 className="text-2xl font-semibold font-leckerli">
              Brief of Moana Movie
            </h1>
            <p className="text-gray-600 leading-relaxed z-50 bg-transparent">
              Inspired by Polynesian mythology, Moana is depicted as the
              strong-willed daughter of a chief of a Polynesian village, who is
              chosen by the ocean itself to reunite a mystical relic with the
              goddess Te Fiti. Teaming up with the demigod Maui, Moana faces
              challenges to discover her true identity as a wayfinder, and saves
              her island from a spreading darkness. It's a tale of courage,
              self-discovery, and connection to heritage.
            </p>
            <Button filled>
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>

            {/* Decorative Wave */}
            <div className="absolute -right-20 top-10 w-72 h-72 -z-10">
              <Image
                src="/assets/moana_home/bg-wave.png"
                alt="Wave"
                width={400}
                height={400}
                className="object-contain overflow-hidden"
              />
            </div>
          </div>
          <div className="absolute -right-56 top-0 w-72 h-72 -z-10">
            <Image
              src="/assets/moana_home/Flower.png"
              alt="Flower"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </Container>

      {/* Trailer Section */}
      <div>
        <Container>
          <GradientText className="home-header">WATCH TRAILER</GradientText>
        </Container>
        <div className="relative w-full h-[540px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/assets/moana_home/movie-trailer-bg.png"
            alt="Trailer background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="object-cover  overflow-hidden"
          />

          {/* Content Overlay */}
          <div className="relative z-10 p-8">
            {/* Left Video */}
            <div className="absolute left-40 top-[360px] -translate-y-1/2 w-[360px]">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/assets/moana_home/trailer.png"
                  alt="Ocean scene"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-sky-500 translate-x-0.5"
                        viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Video */}
            <div className="absolute right-40 top-56 -translate-y-1/4 w-[400px]">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Boat scene"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* Info Card */}
            <div className="absolute right-[25%] top-8 bg-gradient-to-b from-[#E2D3C8] to-[#56B3C7] p-4 rounded-lg shadow-sm max-w-[340px]">
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
                <Image
                  src={"/assets/moana_home/pig.png"}
                  alt="Pig"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="my-10">
            <Container>
              <GradientText className={"home-header"}>
                Frequently Asked Questions
              </GradientText>
              <FaqSection />
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
}
