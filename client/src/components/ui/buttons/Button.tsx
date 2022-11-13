import { useState } from "react";

interface Props {
  title: string;
  href?: string;
}

const Button = ({ title, href }: Props) => {
  const [arrow, setArrow] = useState(false);

  return (
    <button className="flex w-full px-6 py-4 max-h-14 mx-auto justify-center text-base font-medium rounded-full bg-grey-900 text-white space-x-2">
      <div>{title}</div>
      {href && (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 17 17 7M7 7h10v10"
            />
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;
