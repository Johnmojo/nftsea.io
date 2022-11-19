import ArrowLink from "@/components/ui/icons/ArrowLink";
import { Link } from "react-router-dom";

interface Props {
  href: string;
}

const Info = ({ href }: Props) => {
  return (
    <div className="flex item-center justify-center relative min-w-[30%] p-2 rounded-xl">
      <Link to={href} className="flex item-center justify-center my-auto">
        <div className="flex flex-col items-center justify-center group space-y-3">
          <div className="rounded-full bg-grey-900 group-hover:bg-purple-500 w-14 h-14 flex items-center justify-center">
            <ArrowLink customClass="group-hover:stroke-grey-900" />
          </div>
          <h3 className="font-medium text-grey-500 text-base">
            See all articles
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default Info;
