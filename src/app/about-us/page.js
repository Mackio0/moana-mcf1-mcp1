import HeroSection from "@/components/HeroSection";
import aboutHero from "../../../public/images/moana_about/hero.png"

import LogoSlider from "@/components/LogoSlider";
import { abc, character1, character2, character3, disney, espn, FX, Hulu, marvel, NG, quote, StarWars, } from "../../../public/images/moana_about";
import Container from "@/app/components/Container";
import GradientText from "../components/GradientText";
import Image from "next/image";


import JourneyMap from "@/components/JourneyMap";
import { Star } from "lucide-react";
import SliderComponent from "@/components/SliderComponent";



export default function AboutPage() {


  return (
    <>

      <main>
        <HeroSection image={aboutHero} title="About Us" />
        <Container className=" grid grid-cols-12 gap-x-5 gap-y-10 items-start">
          <LogoSlider images={[{
            title: "abc",
            src: abc
          },
          {
            title: "disney",
            src: disney
          },
          {
            title: "espn",
            src: espn
          },
          {
            title: "FX",
            src: FX
          }, {
            title: "Hulu",
            src: Hulu
          }, {
            title: "Marvel",
            src: marvel
          }, {
            title: "NG",
            src: NG
          }, {
            title: "StarWars",
            src: StarWars
          },


          ]} />

          <div className=" col-span-6    flex flex-col gap-5">
            <GradientText className=" text-3xl font-leckerli ">  Commercial success
            </GradientText>
            <div className="flex flex-col gap-3">
              <div className="space-y-2">
                <h1 className=" text-xl leading-6  font-medium  text-secondary-900">Worldwide box office </h1>
                <p className="font-base text-secondary-700"> Over $643 million, with $248 million from domestic (U.S.) markets and $395 million internationally.Ranked as one of Disney’s highest-grossing animated films of all time.</p>
              </div>
              <div className="space-y-2">
                <h1 className=" text-xl leading-6  font-medium  text-secondary-900">Streaming  popularity</h1>
                <p className=" text-base text-secondary-700"> One of Disney's most-watched films, accumulating over 1 billion hours of viewership from 2020 to 2023.Upon its release on Disney+, Moana quickly became one of the platform’s most-watched titles, attracting new audiences.</p>
              </div>
            </div>
          </div>
          <div className=" col-span-6  ">

            <Image
              src="/images/moana_about/achievement1.png"
              alt="Picture of the author"

              className="w-full"

              width={639}
              height={334} 
            />
          </div>
          <div className=" col-span-6  ">
            <Image className=" w-full object-cover rounded "
              layout="responsive"


              alt="Moana-movie-celebaration"
              width={639}
              height={336}
              src="/images/moana_about/achievement.png"
              priority={true} />

          </div>
          <div className=" col-span-6    flex flex-col gap-5">
            <GradientText className=" text-3xl font-leckerli ">  Awards And nomination
            </GradientText>
            <div className="flex flex-col gap-1">
              <div className="space-y-2">
                <h1 className=" text-xl leading-6  font-medium  text-secondary-900">Academy awards </h1>
                <div className="font-base text-secondary-700">
                  <p className="font-sans whitespace-normal ">
                    Nominated for Best Animated Feature.

                  </p>
                  <p>Nominated for Best Original Song ("How Far I'll Go").</p>
                </div>
              </div>
              <div className="space-y-2">
                <h1 className=" text-xl leading-6  font-medium  text-secondary-900">golden globes</h1>
                <div>       <p className=" text-base text-secondary-700"> Nominated for Best Motion Picture – Animated.
                </p>
                  <p className=" text-base text-secondary-700">
                    Nominated for Best Original Song ("How Far I'll Go")</p></div>
              </div>
              <div className="space-y-2">
                <h1 className=" text-xl leading-6  font-medium  text-secondary-900">Annie awards</h1>
                <p className=" text-base text-secondary-700"> Received multiple nominations, including Outstanding Achievement in Animation.
                </p>
              </div>

              <div className="space-y-2">
                <h1 className=" text-xl leading-6  font-medium  text-secondary-900">Critics choice movie awards</h1>
                <p className=" text-base text-secondary-700">Nominated for Best Animated Feature.
                </p>

              </div>
            </div>
          </div>
          <div className=" col-span-full">
            <GradientText className=" text-5xl font-subrayada  text-center" >
              Making of the Movie
            </GradientText>
          </div>
          <div className=" col-span-full ">
            <SliderComponent bottomControls={false}
              leftRightControls={true} >
              <div className=" p-1  w-[560px] h-[315px] ">
                <iframe
                  className=" w-full h-full"
                  src="https://www.youtube.com/embed/rB5MpMDMpas?si=g3Rj1o-xWULckHV2"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  frameBorder="1"
                  allowFullScreen
                ></iframe>
              </div>
              <div className=" p-1  w-[560px] h-[315px] ">
                <iframe
                  className=" w-full h-full"
                  src="https://www.youtube.com/embed/yh_Vc7-DQn4?si=BMkN9fVenLg6QbnL"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className=" p-1  w-[560px] h-[315px] ">
                <iframe
                  className=" w-full h-full"
                  src="https://www.youtube.com/embed/_oj9VuS-FLs?si=Og-4e5SsXGJS24IA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className=" p-1  w-[560px] h-[315px] ">
                <iframe
                  className=" w-full h-full"
                  src="https://www.youtube.com/embed/dOsxRax2HhI?si=MN8ezLG0LKdkO_xk"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

              <div className=" p-1  w-[560px] h-[315px] ">
                <iframe
                  className=" w-full h-full"
                  src="https://www.youtube.com/embed/iqEcsbm3SHQ?si=xPHdv6VADuF3ilWL"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </SliderComponent>
          </div>
          <div className=" col-span-6 flex justify-center p-5 items-center">
            <div className="relative w-[90%] h-auto  " >
              <JourneyMap />
              <div className="absolute top-20 left-20  boat">
                <Image alt=" boat " width="79" height="97" src="/images/animation/boat.png" />
              </div>
            </div>
          </div>
          <div className="col-span-6 space-y-5">
            <div className=" space-y-1">
              <GradientText className="font-subrayada text-2xl  " heading="2"  >
                Call to Adventure
              </GradientText>
              <p className=" text-base text-secondary-700">Learns she is chosen to restore Te Fiti’s heart and save her island.</p>
            </div>
            <div className=" space-y-1">
              <GradientText className="font-subrayada text-2xl  " heading="2"  >
                Departure
              </GradientText>
              <p className=" text-base text-secondary-700">Defies her father’s restrictions and sets sail beyond the reef.</p>
            </div>       <div className=" space-y-1">
              <GradientText className="font-subrayada text-2xl  " heading="2"  >
                Meeting Maui
              </GradientText>
              <p className=" text-base text-secondary-700">Convinces the demigod Maui to join her mission despite his initial reluctance..</p>
            </div>       <div className=" space-y-1">
              <GradientText className="font-subrayada text-2xl  " heading="2"  >
                Challenges:
              </GradientText>
              <p className=" text-base text-secondary-700">Faces battles with Kakamora pirates and retrieves Maui’s fishhook from Tamatoa.</p>
            </div>       <div className=" space-y-1">
              <GradientText className="font-subrayada text-2xl  " heading="2"  >
                Growth
              </GradientText>
              <p className=" text-base text-secondary-700">Learns wayfinding and discovers her inner strength.</p>
            </div>       <div className=" space-y-1">
              <GradientText className="font-subrayada text-2xl  " heading="2"  >
                Climactic Confrontation
              </GradientText>
              <p className=" text-base text-secondary-700">Realizes Te Kā is Te Fiti without her heart and restores it, healing the world.</p>
            </div>       <div className=" space-y-1">
              <GradientText className="font-subrayada text-2xl  " heading="2"  >
                Return Home:
              </GradientText>
              <p className=" text-base text-secondary-700">Inspires her people to embrace voyaging and becomes their leader.</p>
            </div>

          </div>

          <GradientText className=" col-span-full text-5xl font-subrayada" >
            Critics Review
          </GradientText>
          <div className=" col-span-full mt-24 grid grid-cols-12 gap-5">
            <SliderComponent bottomControls={true} leftRightControls={false} >
              <div className=" col-span-4 p-5 relative border border-gray-500 bg-[#f5f5f5] rounded flex flex-col gap-5">
                <div className=" w-full -mt-24 ">
                  <Image src={character1} alt="user1" className=" border-2 border-primary-700 rounded-full mx-auto" width={150} height={150} />
                </div>
                <div className=" mt-5 ">
                  <div className=" inline-block w-full">
                    <Image className=" mr-auto" src={quote} height={26} width={22} alt="quote" />
                  </div>
                  <div className="space-y-2">
                    <GradientText className=" text-center  font-leckerli " heading="3">
                      Victoria Luxford
                    </GradientText>
                    <p>
                      Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery.
                    </p>


                  </div>
                  <div className=" inline-block w-full ">
                    <Image className=" rotate-180 ml-auto" src={quote} height={26} width={22} alt="quote" />

                  </div>
                </div>


                <div className="flex justify-around py-5 ">
                  <p>May 4, 2023</p>

                  <div className=" flex gap-1">
                    <Star size={16} color="#FDA520" />
                    <span>4/5</span>
                  </div>
                </div>

              </div>
              <div className=" col-span-4 p-5 relative border border-gray-500 bg-[#f5f5f5] rounded flex flex-col gap-5">
                <div className=" w-full -mt-24 ">
                  <Image src={character2} alt="user2" className="border-2 border-primary-700 rounded-full mx-auto" width={150} height={150} />
                </div>
                <div className=" mt-5 ">
                  <div className=" inline-block w-full">
                    <Image className=" mr-auto" src={quote} height={26} width={22} alt="quote" />
                  </div>
                  <div className="space-y-2">
                    <GradientText className=" text-center  font-leckerli " heading="3">
                      Victoria Luxford
                    </GradientText>
                    <p>
                      Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery.
                    </p>


                  </div>
                  <div className=" inline-block w-full ">
                    <Image className=" rotate-180 ml-auto" src={quote} height={26} width={22} alt="quote" />

                  </div>
                </div>


                <div className="flex justify-around py-5 ">
                  <p>May 4, 2023</p>

                  <div className=" flex gap-1">
                    <Star size={16} color="#FDA520" />
                    <span>4/5</span>
                  </div>
                </div>

              </div>
              <div className=" col-span-4 p-5 relative border border-gray-500 bg-[#f5f5f5] rounded flex flex-col gap-5">
                <div className=" w-full -mt-24 ">
                  <Image src={character3} alt="user3" className=" border-2 border-primary-700 rounded-full mx-auto" width={150} height={150} />
                </div>
                <div className=" mt-5 ">
                  <div className=" inline-block w-full">
                    <Image className=" mr-auto" src={quote} height={26} width={22} alt="quote" />
                  </div>
                  <div className="space-y-2">
                    <GradientText className=" text-center  font-leckerli " heading="3">
                      Victoria Luxford
                    </GradientText>
                    <p>
                      Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery.
                    </p>


                  </div>
                  <div className=" inline-block w-full ">
                    <Image className=" rotate-180 ml-auto" src={quote} height={26} width={22} alt="quote" />

                  </div>
                </div>


                <div className="flex justify-around py-5 ">
                  <p>May 4, 2023</p>

                  <div className=" flex gap-1">
                    <Star size={16} color="#FDA520" />
                    <span>4/5</span>
                  </div>
                </div>

              </div>

            </SliderComponent>





          </div>

        </Container>


      </main >
    </>
  );
}
