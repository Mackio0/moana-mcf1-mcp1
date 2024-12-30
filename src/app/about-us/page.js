import Button from "../components/Button";
import Container from "../components/Container";
import GradientText from "../components/GradientText";

export default function Page() {
  return (
    <main>
      <Container>
        <div className="bg-neutral-200">
          <GradientText
            className={"font-bold text-6xl font-subrayada"}
            heading={1}
          >
            About us
          </GradientText>
        </div>
        <div className="bg-neutral-200">
          <GradientText
            className={"font-bold text-6xl font-subrayada"}
            heading={2}
            outline={true}
          >
            About us
          </GradientText>
        </div>

        <div className="bg-primary rounded-sm">
          <p className="font-leckerli">Hello</p>
        </div>

        <div className="mt-2 border border-red-500 flex items-center">
          <Button filled={true}>Click me</Button>
          <Button filled={false}>Click me</Button>
        </div>
        <h1 className="text-4xl font-bold text-transparent text-stroke-lg ">
          Home
        </h1>
        <h1 className="text-4xl font-bold text-transparent font-outline-2 ">
          Home
        </h1>
      </Container>
    </main>
  );
}
