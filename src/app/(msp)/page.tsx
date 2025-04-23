import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { SectionTitle } from "./components/SectionTitle";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Biofilm Vision Benefits"
        title="Revolutionizing Biofilm Analytics with AI"
      >
        Traditional Biofilm Analysis is slow, expensive, and uncertain. We use
        Machine-Learning, to bring usefull analytics faster than ever with
        greater certainity.
      </SectionTitle>
    </Container>
  );
}
