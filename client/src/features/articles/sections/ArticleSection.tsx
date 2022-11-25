import Card from "./Card";
import Info from "./Info";
import useFetch from "@/hooks/useFetch";

interface articleProps {
  title: string;
  date: string;
}

const ArticleSection = () => {
  // Initialize API link
  const api_URL =
    import.meta.env.NFTSEA_CLIENT_URL +
    ":" +
    import.meta.env.NFTSEA_SERVER_PORT +
    "/" +
    "articles";

  // Initialize useFetch hook
  const { data } = useFetch(api_URL);

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
            {data.map((article: articleProps, index: number) => (
              <Card key={index} title={article.title} date={article.date} />
            ))}
            <Info href="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
