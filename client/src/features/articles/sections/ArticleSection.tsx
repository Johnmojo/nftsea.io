import Card from "./Card";
import Info from "./Info";

// TODO: Loop the cards from API

const ArticleSection = () => {
  return (
    <section>
      <div className="w-full px-4 sm:px-8 xl:px-24 mt-[160px] mb-8">
        <div className="flex flex-col mx-auto justify-between max-w-screen-xl space-y-8">
          <h4 className="text-grey-500 font-semibold text-[31px]">Articles</h4>
        </div>
      </div>
      <div className="w-full px-4 sm:px-8 xl:px-24 mb-[160px] overflow-x-scroll scrollbarHorizontal">
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
