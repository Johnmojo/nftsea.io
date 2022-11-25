// Imported local images for the sake of example
import placeholder_main from "@/assets/images/placeholder_main.png";
import rankings_profile from "@/assets/images/rankings_profile.png";
import Badge from "@/components/ui/icons/Badge";
import Ethereum from "@/components/ui/icons/Ethereum";

interface Props {
  title: string;
  author: string;
  volume: number;
  floor: number;
  verified: boolean;
}

const Card = ({ title, author, volume, floor, verified }: Props) => {
  return (
    <div className="relative min-w-[90%] md:min-w-[30%] max-h-[500px] md:h-fit p-2 rounded-xl space-y-3 shadow-card bg-white">
      <div>
        <img
          src={placeholder_main}
          alt="Card"
          className="rounded-xl w-auto h-full max-h-[300px]"
        />
      </div>
      <div className="px-2 pb-3 space-y-2">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src={rankings_profile}
              alt="Card"
              className="rounded-xl w-auto h-full max-h-[50px]"
            />
          </div>
          <div>
            <div className="font-medium items-start text-grey-500 mb:text-base text-xs flex">
              {title}
              <span className="md:pl-2 pl-1">{verified && <Badge />}</span>
            </div>
            <div className="font-regular text-grey-300 md:text-[13px] text-[10px]">
              By {author}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex space-x-3 justify-between items-center">
            <div>
              <div className="text-grey-300 font-regular md:text-[10px] text-[8px]">
                Volume
              </div>
              <div className="text-grey-500 font-medium md:text-[13px] text-[10px]">
                {volume} ETH
              </div>
            </div>
            <div className="rounded-full w-[0.25px] h-4 bg-grey-100"></div>
            <div>
              <div className="text-grey-300 font-regular md:text-[10px] text-[8px]">
                Floor
              </div>
              <div className="text-grey-500 font-medium md:text-[13px] text-[10px]">
                {floor} ETH
              </div>
            </div>
          </div>
          <div>
            <Ethereum />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
