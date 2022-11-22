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
    <div className="w-full px-4 sm:px-8 xl:px-24 py-12 overflow-x-hidden">
      <div className="flex flex-col space-y-12 mx-auto justify-between max-w-screen-xl">
        <div className="grid grid-cols-5 w-full">
          {partnersArray.map((item, index) => (
            <img src={item} alt="partners" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
