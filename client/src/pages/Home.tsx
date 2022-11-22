import Container from "../layouts/Container";
import Meta from "../layouts/Meta";
import { CollectionSection } from "@/features/collections";
import { RankingSection } from "@/features/rankings";
import { ArticleSection } from "@/features/articles";
import { JoinSection } from "@/features/join";

const Home = () => {
  // List collection's pill categories
  const collectionArray: string[] = [
    "Artwork",
    "Abstract",
    "Photography",
    "Sport",
    "Music",
    "Trading Card",
    "Anime",
    "Example",
    "More",
  ];

  return (
    <>
      <Meta
        title="NFTSea - Home"
        description="NFTSea.io is a platform  where you can sell, buy or share digital art. On NFTSea you can find, collect and trade your digital artwork."
      />
      <Container>
        <CollectionSection categories={collectionArray} />
        <RankingSection />
        <ArticleSection />
        <JoinSection />
      </Container>
    </>
  );
};

export default Home;
