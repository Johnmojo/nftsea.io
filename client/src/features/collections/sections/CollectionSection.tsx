import Button from "@/components/ui/buttons/Button";
import PillButton from "@/components/ui/buttons/PillButton";
import Card from "./Card";

interface Props {
  categories: Array<string>;
}

// TODO: Loop API for Card

const CollectionSection = ({ categories }: Props) => {
  return (
    <div className="w-full px-4 sm:px-8 xl:px-24 py-12 overflow-x-hidden">
      <div className="flex flex-col space-y-12 mx-auto justify-between max-w-screen-xl">
        <div className="flex items-center flex-col space-y-8">
          <div className="flex justify-between w-full">
            {categories.map((item, index) => (
              <PillButton title={item} key={index} />
            ))}
          </div>
          <h4 className="font-semibold text-[31px] text-grey-500">
            Hot Collections 🔥
          </h4>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-5">
            <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
            <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
            <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
            <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
            <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
            <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
            <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
            <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
          </div>
        </div>
        <div className="mx-auto">
          <Button href="/" title="View More" />
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
