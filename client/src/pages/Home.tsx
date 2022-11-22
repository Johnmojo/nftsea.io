import Container from "../layouts/Container";
import Meta from "../layouts/Meta";
import { PartnerSection } from "@/features/partners";
import { CollectionSection } from "@/features/collections";
import { RankingSection } from "@/features/rankings";
import { ArticleSection } from "@/features/articles";
import { JoinSection } from "@/features/join";

const Home = () => {
  // List collection's pill categories
  const collectionsArray: string[] = [
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
        <PartnerSection />
        <CollectionSection categories={collectionsArray} />
        <RankingSection />
        <ArticleSection />
        <JoinSection />
      </Container>
    </>
  );
};

export default Home;
