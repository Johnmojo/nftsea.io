import Card from "./Card";
import Info from "./Info";

// TODO: Loop the cards from API

const ArticleSection = () => {
  return (
    <section>
      <div className="w-full px-4 sm:px-8 xl:px-24 py-8 md:mt-[160px] sm:mt-[128px] mt-[64px]">
        <div className="flex flex-col mx-auto justify-between max-w-screen-xl space-y-8">
          <h4 className="text-grey-500 font-semibold md:text-[31px] text-[23px]">
            Articles
          </h4>
        </div>
      </div>
      <div className="w-full px-4 sm:px-8 xl:px-24 md:mb-[160px] sm:mb-[128px] mb-[64px] overflow-x-scroll scrollbarHorizontalMobile sm:scrollbarHorizontalTablet md:scrollbarHorizontalLaptop xl:scrollbarHorizontal">
        <div className="flex flex-col mx-auto justify-between max-w-screen-xl space-y-8">
          <div className="flex space-x-5 pb-12">
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
      </div>
    </section>
  );
};

export default ArticleSection;
