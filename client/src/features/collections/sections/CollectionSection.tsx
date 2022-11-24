import Button from "@/components/ui/buttons/Button";
import PillButton from "@/components/ui/buttons/PillButton";
import Card from "./Card";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface Props {
  categories: Array<string>;
}

// TODO: Loop API for Card

const CollectionSection = ({ categories }: Props) => {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      axis: "x",
      align: "start",
      dragFree: true,
      loop: true,
      // active: false,
    },
    []
  );

  return (
    <div className="w-full px-4 sm:px-8 xl:px-24 overflow-x-hidden md:mt-[160px] md:mb-[104px] sm:my-[128px] my-[64px]">
      <div className="flex flex-col space-y-12 mx-auto justify-between max-w-screen-xl">
        <div className="flex items-center space-y-8 flex-col">
          <div className="justify-between w-full hidden md:block">
            <div className="flex w-full space-x-4 place-content-between">
              {categories.map((item, index) => (
                <PillButton title={item} key={index} />
              ))}
            </div>
          </div>
          <h4 className="font-semibold md:text-[31px] text-[23px] text-grey-500">
            Hot Collections 🔥
          </h4>
          <div className="block md:hidden mx-auto">
            <div ref={emblaRef} className=" w-full">
              <div className="flex space-x-4 overflow-hidden">
                {categories.map((item, index) => (
                  <PillButton title={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-5 sm:gap-4 gap-8">
          <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
          <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
          <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
          <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
          <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
          <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
          <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
          <Card title="Sun #1002" author="@tori28" volume="4.4" floor="0.4" />
        </div>
        <div className="mx-auto">
          <Button href="/" title="View More" />
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
