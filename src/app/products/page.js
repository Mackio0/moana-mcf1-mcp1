import Container from "../components/Container";
import GradientText from "../components/GradientText";

export default function Page() {
    return (
      <main>
        <Container>
          <GradientText className={"font-bold text-6xl font-subrayada"} heading={2}>
            Products
          </GradientText>
        </Container>
      </main>
    );
  }