import Button from "@/components/ui/buttons/Button";
import ArrowHero from "@/components/ui/icons/ArrowHero";
import ModelView from "./ModelView";

const HeroSection = () => {
  return (
    <div className="w-full px-4 sm:px-8 xl:px-24 md:mt-[48px] md:mb-[90px] sm:mt-[72px] sm:mb-[64px] mt-[72px] mb-[32px]">
      <div className="flex flex-col space-y-12 mx-auto justify-between max-w-screen-xl">
        <div className="flex rounded-3xl bg-purple-100 md:px-[105px] md:py-[80px] sm:p-[64px] p-6 flex-col md:flex-row gap-x-8 items-center">
          <div className="space-y-8 lg:w-2/5 w-full text-center lg:text-left flex flex-col md:items-start items-center">
            <div>
              <span className="text-purple-900 font-medium text-base">
                1,000,000+ NFTs
              </span>
              <div className="text-grey-500 relative space-y-6">
                <h1 className="font-semibold xl:text-[61px] lg:text-[49px] text-[29px]">
                  Decentralized Marketplace for Digital Artwork
                </h1>
                <p className="font-regular text-base">
                  NFTSea.io is a platform where you can sell, buy or share
                  digital art. On NFTSea you can find, collect and trade your
                  digital artwork.
                </p>
                <div className="hidden md:block z-50 absolute top-[60%] -right-[10%]">
                  <ArrowHero />
                </div>
              </div>
            </div>
            <Button title="Explore Now" href="/" />
          </div>
          <div className="w-full md:w-1/3 lg:w-3/5 h-[500px]">
            <ModelView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
