interface Props {
  title: string;
  href?: string /* If there are a link, show arrow */;
}

const Button = ({ title, href }: Props) => {
  return (
    <button className="flex items-center w-full group hover:bg-purple-500 bg-grey-900 px-6 py-2 md:py-4 max-h-14 mx-auto justify-center rounded-full space-x-2">
      <div className="font-medium text-xs md:text-base text-white group-hover:text-grey-900">
        {title}
      </div>
      {href && (
        <div className="scale-75 md:scale-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 17 17 7M7 7h10v10"
              className="fill-none group-hover:stroke-grey-900"
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;
