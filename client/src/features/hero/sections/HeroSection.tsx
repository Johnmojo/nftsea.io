import Button from "@/components/ui/buttons/Button";
import ArrowHero from "@/components/ui/icons/ArrowHero";

const HeroSection = () => {
  return (
    <div className="w-full px-4 sm:px-8 xl:px-24 mt-12 mb-[90px] overflow-x-hidden">
      <div className="flex flex-col space-y-12 mx-auto justify-between max-w-screen-xl">
        <div className="flex rounded-3xl bg-purple-100 px-[105px] py-[80px]">
          <div className="space-y-8 w-2/5">
            <div>
              <span className="text-purple-900 font-medium text-base">
                1,000,000+ NFTs
              </span>
              <div className="text-grey-500 relative space-y-6">
                <h1 className="font-semibold text-[61px]">
                  Decentralized Marketplace for Digital Artwork
                </h1>
                <p className="font-regular text-base">
                  NFTSea.io is a platform where you can sell, buy or share
                  digital art. On NFTSea you can find, collect and trade your
                  digital artwork.
                </p>
                <div className="absolute top-[60%] -right-[10%]">
                  <ArrowHero />
                </div>
              </div>
            </div>
            <Button title="Explore Now" href="/" />
          </div>
          <div className="w-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
