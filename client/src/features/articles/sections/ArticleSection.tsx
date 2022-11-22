import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./Card";
import Info from "./Info";

// TODO: Loop the cards from API

const ArticleSection = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

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
      <div className="w-full px-4 sm:px-8 xl:px-24 py-12 overflow-x-hidden">
        <div className="flex flex-col mx-auto justify-between max-w-screen-xl space-y-16">
          <div>
            <h4 className="text-grey-500 font-semibold text-[31px]">
              Articles
            </h4>
          </div>
          <div ref={emblaRef}>
            <div className="flex space-x-5">
              <Card
                title="HUGO x Imaginary Ones Collaboration is lunched. Get exclusive Collabs NFTs now!"
                date="November 7, 2022"
              />
              <Card
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                date="November 7, 2022"
              />
              <Card
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                date="November 7, 2022"
              />
              <Card title="A visit to vet 4" date="November 7, 2022" />
              <Card title="A visit to vet 5" date="November 7, 2022" />
              <Info href="/" />
            </div>
          </div>
          <div
            className={`relative max-w-[250px] overflow-hidden mx-auto h-2 bg-purple-100 rounded-full `}
          >
            <div
              style={{ transform: `translateX(${scrollProgress + 20}%)` }}
              className="absolute bg-purple-500 w-full top-0 bottom-0 -left-full"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
