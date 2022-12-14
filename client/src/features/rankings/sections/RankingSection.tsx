import useFetch from "@/hooks/useFetch";
import Button from "@/components/ui/buttons/Button";
import Card from "./Card";

interface rankingProps {
  title: string;
  author: string;
  volume: number;
  floor: number;
  verified: boolean;
}

const RankingSection = () => {
  // Initialize API link
  const api_URL =
    import.meta.env.NFTSEA_CLIENT_URL +
    ":" +
    import.meta.env.NFTSEA_SERVER_PORT +
    "/" +
    "rankings";

  // Initialize useFetch hook
  const { data } = useFetch(api_URL);

  return (
    <section>
      <div className="w-full px-4 sm:px-8 xl:px-24 md:mt-[104px] md:mb-[160px] sm:my-[128px] my-[64px]">
        <div className="flex flex-col md:flex-row mx-auto justify-between gap-12 relative bg-purple-100 rounded-3xl max-w-screen-xl md:px-12 md:py-0 sm:p-8 p-6">
          <div className="md:space-y-14 sm:space-y-12 space-y-8 flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
            <div className="w-full md:w-3/4 md:text-left text-center">
              <p className="font-medium text-purple-900 md:text-base text-xs pb-1.5">
                NFT Creators
              </p>
              <div className="space-y-6">
                <h3 className="text-grey-500 font-semibold md:text-[39px] text-[23px]">
                  Meet the World Top-Tier Creators
                </h3>
                <p className="text-grey-500 font-regular md:text-base text-xs leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra.
                </p>
              </div>
            </div>
            <Button title="View Rankings" href="/" />
          </div>
          <div className="flex justify-end w-full md:w-1/2">
            <div className="md:overflow-auto overflow-x-scroll h-auto md:scrollbarVertical sm:scrollbarHorizontalTabletWhite scrollbarHorizontalMobileWhite">
              <div className="flex md:flex-col flex-row md:space-y-12 md:space-x-0 sm:space-x-8 space-x-5 select-none md:h-[600px] h-fit pr-[20%] sm:pb-16 mt-12 pb-12">
                {data.map((ranking: rankingProps, index: number) => (
                  <Card
                    key={index}
                    title={ranking.title}
                    author={ranking.author}
                    volume={ranking.volume}
                    floor={ranking.floor}
                    verified={ranking.verified}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
