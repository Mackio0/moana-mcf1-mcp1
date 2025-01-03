
import Container from "@/components/Container";

import Characters from "./components/Characters";
import HeroSection from "./components/HeroSection";

import VoiceActor from "./components/VoiceActor";
import {  characterData } from "./data/characterData";
import { actors } from "./data/voiceActors";

export default function Page() {
  return <main>
       <HeroSection/>
        <Container className={` gap-[80px] flex-col flex justify-center items-center`}>
       
         
          <VoiceActor actors={actors} />
        
          <Characters data={{characterData}}/>
        </Container>
      </main>

}