import Email from "../components/inputs/Email";
import ArrowChevron from "../components/ui/icons/ArrowChevron";

const Footer = () => {
  return (
    <footer>
      <div className="z-50 hidden w-full px-8 xl:px-24 pt-8 transition-all duration-300 ease-out min-[442px]:block">
        <div className="flex flex-col mx-auto items-center justify-between max-w-screen-xl space-y-16">
          <div className="flex gap-16 flex-col xl:flex-row w-full">
            <div className="flex flex-col xl:w-2/5 space-y-9 w-full">
              <div className="space-y-3">
                <h1 className="font-semibold text-2xl text-grey-500">
                  Stay in the loop.
                </h1>
                <p className="font-regular text-base text-grey-500">
                  Subscribe to our news-letter stay in the loop with our newest
                  feature releases, NFT drops, and tips and tricks for
                  navigating NFTSea.
                </p>
              </div>
              <div className="w-full xl:w-3/4">
                <Email />
              </div>
            </div>
            <div className="flex xl:w-3/5 place-content-between w-full">
              <div className="space-y-6 md:pr-0 lg:pr-16">
                <h1 className="font-semibold text-2xl text-grey-500">
                  MarketPlace
                </h1>
                <ul className="text-grey-300 font-medium text-base space-y-3">
                  <li>Explore</li>
                  <li>Collectibles</li>
                  <li>Top NFTs</li>
                  <li>Ranking</li>
                  <li>Whitelists</li>
                  <li>Airdrops</li>
                </ul>
              </div>
              <div className="space-y-6 md:pr-0 lg:pr-16">
                <h1 className="font-semibold text-2xl text-grey-500">Links</h1>
                <ul className="text-grey-300 font-medium text-base space-y-3">
                  <li>Career</li>
                  <li>Protocols</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Help Center</li>
                </ul>
              </div>
              <div className="space-y-6 md:pr-0 lg:pr-16">
                <h1 className="font-semibold text-2xl text-grey-500">
                  Join Us
                </h1>
                <ul className="text-grey-300 font-medium text-base space-y-3">
                  <li>Discord</li>
                  <li>Twitter</li>
                  <li>Instagram Us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t w-full border-grey-100">
            <div className="flex lg:space-x-16 md:space-x-0 justify-between mx-auto lg:justify-center font-regular lg:text-[13px] text-[10px] text-grey-500 py-8">
              <div>@2022 NFTSea.io, inc</div>
              <div>Privacy Policy</div>
              <div>Terms of Services</div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-50 block w-full px-4 pt-8 transition-all duration-300 ease-out min-[442px]:hidden">
        <div className="flex flex-col mx-auto items-center justify-between max-w-screen-xl space-y-16">
          <div className="flex gap-16 flex-col xl:flex-row w-full">
            <div className="flex flex-col xl:w-2/5 space-y-9 w-full">
              <div className="space-y-3">
                <h1 className="font-semibold text-grey-500 md:text-2xl text-[19px]">
                  Stay in the loop.
                </h1>
                <p className="font-regular text-grey-500 md:text-base text-xs leading-relaxed">
                  Subscribe to our news-letter stay in the loop with our newest
                  feature releases, NFT drops, and tips and tricks for
                  navigating NFTSea.
                </p>
              </div>
              <div className="md:w-full lg:w-3/4">
                <Email />
              </div>
            </div>
            <div className="flex flex-col xl:w-3/5 place-content-between w-full space-y-8">
              <div className="flex items-center place-content-between md:pr-0 lg:pr-16">
                <h1 className="font-medium text-xs text-grey-500">
                  MarketPlace
                </h1>
                <div className="mt-auto">
                  <ArrowChevron />
                </div>
                <ul className="text-grey-300 font-medium md:text-base text-xs space-y-3 hidden">
                  <li>Explore</li>
                  <li>Collectibles</li>
                  <li>Top NFTs</li>
                  <li>Ranking</li>
                  <li>Whitelists</li>
                  <li>Airdrops</li>
                </ul>
              </div>
              <div className="flex items-center place-content-between md:pr-0 lg:pr-16">
                <h1 className="font-medium text-xs text-grey-500">Links</h1>
                <div className="mt-auto">
                  <ArrowChevron />
                </div>
                <ul className="text-grey-300 font-medium md:text-base text-xs space-y-3 hidden">
                  <li>Career</li>
                  <li>Protocols</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Help Center</li>
                </ul>
              </div>
              <div className="flex items-center place-content-between md:pr-0 lg:pr-16">
                <h1 className="font-medium text-xs text-grey-500">Join Us</h1>
                <div className="mt-auto">
                  <ArrowChevron />
                </div>
                <ul className="text-grey-300 font-medium md:text-base text-xs space-y-3 hidden">
                  <li>Discord</li>
                  <li>Twitter</li>
                  <li>Instagram Us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t w-full border-grey-100">
            <div className="flex lg:space-x-16 md:space-x-0 justify-between mx-auto lg:justify-center font-regular lg:text-[13px] text-[10px] text-grey-500 py-8">
              <div>@2022 NFTSea.io, inc</div>
              <div>Privacy Policy</div>
              <div>Terms of Services</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
