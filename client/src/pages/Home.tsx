import Container from "../layouts/Container";
import Meta from "../layouts/Meta";
import { Card } from "@/features/join";

const Home = () => {
  return (
    <>
      <Meta
        title="NFTSea - Home"
        description="NFTSea.io is a platform  where you can sell, buy or share digital art. On NFTSea you can find, collect and trade your digital artwork."
      />
      <Container>
        <Card />
      </Container>
    </>
  );
};

export default Home;
