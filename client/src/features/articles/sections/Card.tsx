interface Props {
  title: string;
  date: string;
}

const Card = ({ title, date }: Props) => {
  return (
    <div className="relative min-w-[30%] p-2 rounded-xl space-y-3 shadow-card">
      <div>
        <img
          src="https://placekitten.com/g/750/400"
          alt="Card"
          className="rounded-xl"
        />
      </div>
      <div className="px-2 pb-3 space-y-2">
        <h3 className="font-medium text-grey-500 text-base">{title}</h3>
        <p className="font-regular text-grey-300 text-[13px]">{date}</p>
      </div>
    </div>
  );
};

export default Card;