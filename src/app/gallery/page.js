import Container from "../components/Container";
import bgGallery from "../../assets/moana_gallery/gallery-hero.png";
import HeroSection from "../components/HeroSection";
import GalleryMovieScence from "../components/GalleryMovieScence";
import GalleryOST from "../components/GalleryOST";
import GalleryFanArt from "../components/GalleryFanArt";

export default function Page() {
  return (
    <main>
      <HeroSection image={bgGallery} title={"Gallery"} />
      <Container>
        <GalleryMovieScence />
        <GalleryOST />
        {/* <GalleryFanArt /> */}
      </Container>
    </main>
  );
}
