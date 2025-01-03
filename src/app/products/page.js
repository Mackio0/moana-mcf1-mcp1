

import Container from "@/components/Container";
import AdventureToy from "./components/AdventureToy";
import CalenderSection from "./components/CalenderSection";
import HeroSection from "./components/HeroSection";
import PencilGame from "./components/PencilGame";
import SelfCare from "./components/SelfCare";
import WeeklyPlanner from "./components/WeeklyPlanner";
import slides from "./data/data";

export default function Page() {

  return <main>
    <HeroSection/>
    <Container className={`flex flex-col gap-[80px]`}>
    
    <AdventureToy slides={slides}/>
    <WeeklyPlanner/>
    <CalenderSection/>
    <PencilGame/>
    <SelfCare/>
    </Container>
  </main>
}