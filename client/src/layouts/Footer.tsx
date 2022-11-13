import Email from "../components/inputs/Email";

const Footer = () => {
  return (
    <footer>
      <div className="z-50 hidden w-full px-8 md:px-24 lg:px-24 pt-8 pb-8 transition-all duration-300 ease-out sm:block">
        <div className="flex mx-auto items-center justify-between max-w-screen-xl">
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
              <div className="md:w-full lg:w-3/4">
                <Email />
              </div>
            </div>
            <div className="flex clear-left xl:w-3/5 place-content-between w-full">
              <div className="space-y-6 pr-8 lg:pr-16">
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
              <div className="space-y-6 pr-8 lg:pr-16">
                <h1 className="font-semibold text-2xl text-grey-500">Links</h1>
                <ul className="text-grey-300 font-medium text-base space-y-3">
                  <li>Career</li>
                  <li>Protocols</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Help Center</li>
                </ul>
              </div>
              <div className="space-y-6 pr-8 lg:pr-16">
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
          <div className="border-b"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
