import Badge from "@/components/ui/icons/Badge";
import Ethereum from "@/components/ui/icons/Ethereum";

interface Props {
  title: string;
  author: string;
  volume: string;
  floor: string;
  verified: boolean;
}

const Card = ({ title, author, volume, floor, verified }: Props) => {
  return (
    <div className="relative min-w-[30%] min-h-[60%] p-2 rounded-xl space-y-3 shadow-card bg-white">
      <div>
        <img
          src="https://placekitten.com/g/750/400"
          alt="Card"
          className="rounded-xl"
        />
      </div>
      <div className="px-2 pb-3 space-y-2">
        <div className="flex gap-4 items-center">
          <div>
            <img
              src="https://placekitten.com/g/56/56"
              alt="Card"
              className="rounded-xl"
            />
          </div>
          <div>
            <div className="font-medium text-grey-500 text-base flex items-center">
              {title}
              <span className="pl-2">
                <Badge />
              </span>
            </div>
            <div className="font-regular text-grey-300 text-[13px]">
              By {author}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex space-x-3 justify-between items-center">
            <div>
              <div className="text-grey-300 text-base font-regular text-[10px]">
                Volume
              </div>
              <div className="text-grey-500 text-base font-medium text-[13px]">
                {volume} ETH
              </div>
            </div>
            <div className="rounded-full w-[0.25px] h-4 bg-grey-100"></div>
            <div>
              <div className="text-grey-300 text-base font-regular text-[10px]">
                Floor
              </div>
              <div className="text-grey-500 text-base font-medium text-[13px]">
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
