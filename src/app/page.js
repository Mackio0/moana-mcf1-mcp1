"use client"
import SimpleSlider from "@/components/SliderComponent";
import Container from "./components/Container";
// import video from ""

export default function page() {
const videos = [
  {
    url : "/images/moana_about/best.mp4"
  }
]
  return (
    <div>
      <Container>
        <h1>Home</h1>
        <video src={videos[0].url} muted  autoPlay={true} ></video>


      </Container>
    </div>
  );
}
