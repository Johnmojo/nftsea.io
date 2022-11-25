import placeholder_main from "@/assets/images/placeholder_main.png";

interface Props {
  title: string;
  date: string;
}

const Card = ({ title, date }: Props) => {
  return (
    <div className="relative min-w-[80%] md:min-w-[30%] p-2 rounded-xl space-y-3 shadow-card">
      <div>
        <img
          src={placeholder_main}
          alt="Card"
          className="rounded-xl h-auto w-full"
        />
      </div>
      <div className="px-2 pb-3 space-y-2">
        <h3 className="font-medium text-grey-500 md:text-base text-xs">
          {title}
        </h3>
        <p className="font-regular text-grey-300 md:text-[13px] text-[10px]">
          {date}
        </p>
      </div>
    </div>
  );
};

export default Card;
