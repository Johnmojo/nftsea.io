import partner_1 from "@/assets/images/partner_1.png";
import partner_2 from "@/assets/images/partner_2.png";
import partner_3 from "@/assets/images/partner_3.png";
import partner_4 from "@/assets/images/partner_4.png";
import partner_5 from "@/assets/images/partner_5.png";

const partnersArray: string[] = [
  partner_1,
  partner_2,
  partner_3,
  partner_4,
  partner_5,
];

const PartnerSection = () => {
  return (
    <div className="w-full px-4 sm:px-8 xl:px-24 md:mt-[90px] md:mb-[160px] sm:mt-[64px] sm:mb-[128px] mt-[32px] mb-[64px]">
      <div className="flex flex-col space-y-12 mx-auto justify-between max-w-screen-xl">
        <div className="flex flex-wrap items-center justify-center">
          {partnersArray.map((item, index) => (
            <div
              key={index}
              className="flex-grow-0 flex-shrink-0 p-2 basis-[calc(33.33%_-_8px)] sm:basis-[calc(20%)]"
            >
              <img src={item} alt="partners" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
