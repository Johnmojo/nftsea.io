import Container from "../layouts/Container";
import Meta from "../layouts/Meta";
import { Community } from "@/features/join";
import { Carousel } from "@/features/articles";

const Home = () => {
  return (
    <>
      <Meta
        title="NFTSea - Home"
        description="NFTSea.io is a platform  where you can sell, buy or share digital art. On NFTSea you can find, collect and trade your digital artwork."
      />
      <Container>
        <Carousel />
        <Community />
      </Container>
    </>
  );
};

export default Home;
