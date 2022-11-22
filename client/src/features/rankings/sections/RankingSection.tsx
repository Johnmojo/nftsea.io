import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Button from "@/components/ui/buttons/Button";
import Card from "./Card";

// TODO: Loop the cards from API

// Init wheel gesture plugin
const wheelGestures = WheelGesturesPlugin({
  forceWheelAxis: "y",
});

const RankingSection = () => {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      axis: "y",
      align: "start",
      dragFree: true,
      // active: false,
    },
    [wheelGestures]
  );

  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 80);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (!embla) return;
    onScroll();
    embla.on("scroll", onScroll);
  }, [embla, onScroll]);

  return (
    <section>
      <div className="w-full px-4 sm:px-8 xl:px-24 py-12">
        <div className="flex mx-auto justify-between px-12 gap-x-[100px] relative bg-purple-100 rounded-3xl max-w-screen-xl space-y-16">
          <div className="space-y-14 flex flex-col justify-center w-1/2">
            <div className="w-3/4">
              <p className="font-medium text-purple-900 text-base">
                NFT Creators
              </p>
              <div className="space-y-6">
                <h3 className="text-grey-500 font-semibold text-[39px]">
                  Meet the World Top-Tier Creators
                </h3>
                <p className="text-grey-500 text-base font-regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra.
                </p>
              </div>
            </div>
            <Button title="View Rankings" href="/" />
          </div>
          <div className="w-1/2 flex">
            <div ref={emblaRef} className="overflow-y-hidden h-auto pt-12">
              <div className="space-y-12 select-none h-[600px]">
                <Card
                  title="HUGO x Imaginary Ones"
                  author="HUGOxImaginaryOnes"
                  volume="4.4"
                  floor="0.4"
                  verified={true}
                />
                <Card
                  title="Collection Name"
                  author="Creator Name"
                  volume="4.4"
                  floor="0.4"
                  verified={true}
                />
                <Card
                  title="Collection Name"
                  author="Creator Name"
                  volume="4.4"
                  floor="0.4"
                  verified={true}
                />
                <Card
                  title="Collection Name"
                  author="Creator Name"
                  volume="4.4"
                  floor="0.4"
                  verified={true}
                />
                <Card
                  title="Collection Name"
                  author="Creator Name"
                  volume="4.4"
                  floor="0.4"
                  verified={true}
                />
                <Card
                  title="Collection Name"
                  author="Creator Name"
                  volume="4.4"
                  floor="0.4"
                  verified={true}
                />
              </div>
            </div>
          </div>
          <div className="relative h-[700px] my-12 overflow-hidden mx-auto w-2 bg-white rounded-full">
            <div
              style={{ transform: `translateY(${scrollProgress + 20}%)` }}
              className="absolute bg-purple-500 h-full left-0 right-0 -top-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingSection;
