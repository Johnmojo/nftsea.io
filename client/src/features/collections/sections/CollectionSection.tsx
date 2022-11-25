import useEmblaCarousel from "embla-carousel-react";
import useFetch from "@/hooks/useFetch";
import Button from "@/components/ui/buttons/Button";
import PillButton from "@/components/ui/buttons/PillButton";
import Card from "./Card";

interface Props {
  categories: Array<string>;
}

interface collectionProps {
  title: string;
  author: string;
  volume: number;
  floor: number;
}

const CollectionSection = ({ categories }: Props) => {
  // Initialize API link
  const api_URL =
    import.meta.env.NFTSEA_APP_URL +
    ":" +
    import.meta.env.NFTSEA_SERVER_PORT +
    "/" +
    "collections";

  // Initialize useFetch hook
  const { data } = useFetch(api_URL);

  const [emblaRef] = useEmblaCarousel({
    axis: "x",
    align: "start",
    dragFree: true,
    loop: true,
  });

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
        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-5 sm:gap-4 gap-4">
          {data?.map((collection: collectionProps, index: number) => (
            <Card
              key={index}
              title={collection.title}
              author={collection.author}
              volume={collection.volume}
              floor={collection.floor}
            />
          ))}
        </div>
        <div className="mx-auto">
          <Button href="/" title="View More" />
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
