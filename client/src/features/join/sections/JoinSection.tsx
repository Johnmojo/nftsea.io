import Button from "@/components/ui/buttons/Button";

const JoinSection = () => {
  return (
    <section>
      <div className="w-full px-4 sm:px-8 xl:px-24 py-12">
        <div className="flex flex-col mx-auto items-center justify-between max-w-screen-xl space-y-16">
          <div className="bg-purple-100 px-6 py-6 md:py-20 md:px-12 rounded-3xl space-y-6 md:space-y-8 flex items-center flex-col">
            <div className="flex items-center flex-col text-center space-y-4">
              <h4 className="text-grey-500 font-semibold text-[23px] md:text-[31px] flex items-center">
                Join Our Community
              </h4>
              <p className="text-grey-500 font-regular text-xs md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            <div className="">
              <Button title="Discord Link" href="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;