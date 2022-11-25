// Imported local images for the sake of example
import placeholder_collection from "@/assets/images/placeholder_collection.png";
import Ethereum from "@/components/ui/icons/Ethereum";

interface Props {
  title: string;
  author: string;
  volume: number;
  floor: number;
}

const Card = ({ title, author, volume, floor }: Props) => {
  return (
    <div className="relative p-2 rounded-xl space-y-3 shadow-card bg-white">
      <div>
        <img
          src={placeholder_collection}
          alt="Card"
          className="rounded-xl w-full h-auto"
        />
      </div>
      <div className="px-2 pb-3 space-y-2">
        <div>
          <div className="font-medium text-grey-500 mb:text-base text-xs">
            {title}
          </div>
          <div className="font-regular text-grey-300 md:text-[13px] text-[10px]">
            {author}
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
