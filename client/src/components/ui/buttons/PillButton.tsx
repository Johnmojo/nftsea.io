interface Props {
  title: string;
  href?: string /* If there are a link, show arrow */;
  active?: boolean;
}

const PillButton = ({ title, active }: Props) => {
  return (
    <button
      className={`flex items-center whitespace-nowrap max-w-full w-fit group hover:bg-purple-200 bg-purple-100 px-6 py-[10px] justify-center rounded-full space-x-2 ${
        active && "border-purple-700 border-2"
      }`}
    >
      <div className="font-medium text-xs md:text-base text-purple-700 group-hover:text-purple-800">
        {title}
      </div>
    </button>
  );
};

export default PillButton;
