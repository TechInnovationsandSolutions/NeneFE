import Link from "next/link";
import HelpAccordion from "./helpaccordion";

const GiftHelp = () => {
  const helpDetails = [
    {
      title: "What is a gift card?",
      response:
        "A gift card is a card or token that can be exchanged for a specified cash value of goods or services from a particular business, given as a gift.",
      id: 1,
    },
    {
      title: "What is a gift voucher?",
      response:
        "A voucher is a a small printed piece of paper that entitles the holder to a discount, or that may be exchanged for goods or services.",
      id: 2,
    },
  ];
  return (
    <div className="flex w-full gap-6 flex-col bg-white px-10 py-[30px]">
      <h3 className="text-[18px] leading-6 font-bold">Need help?</h3>

      {helpDetails.map((helpItem) => {
        return <HelpAccordion key={helpItem.id} helpItem={helpItem} />;
      })}

      <Link href="/" className="underline pt-2">
        More info?
      </Link>
    </div>
  );
};

export default GiftHelp;
