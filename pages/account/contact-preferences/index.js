import Button from "@/components/button/button";
import AccountPageLayout from "@/layout/account-pages";
import { EnvelopeIcon } from "@/public/assets/svgs";
import Image from "next/image";

const ContactPreferences = () => {
  return (
    <div className="w-full min-h-auto lg:min-h-[920px]  flex flex-col">
      {/* Header Section */}
      <div className="w-full px-6 pt-[44px] pb-[72.3px] mb-4 bg-white ">
        <Image src={EnvelopeIcon} alt="" width={44} height={44} />
        <h2 className="uppercase w-full pt-5 font-bold text-[1.5rem]">
          CONTACT PREFERENCES
        </h2>
        <p className="w-full pt-4">
          Feel free to edit any of your details below.
        </p>
      </div>

      {/* Main Section */}
      <section className="flex flex-col gap-3 w-full h-auto min-h-[931px] bg-white py-12 px-6">
        <h4 className="text-2xl text-black">General communications</h4>
        <p className="text-lg text-[#353535]">
          Get updates on products, offers and your membership benefits
        </p>
        <label
          htmlFor="checkbox"
          className="flex gap-3 pt-3 pb-10 cursor-pointer items-center text-lg text-[#000000]"
        >
          <input
            type="checkbox"
            className="form-checkbox outline-none cursor-pointer border border-black  text-black focus:ring-white"
            name="checkbox"
            id="checkbox"
          />
          Yes, send me emails.
        </label>
        <Button text="Save" variant="black" type="button" size="small" />
      </section>
    </div>
  );
};

ContactPreferences.getLayout = (Page) => (
  <AccountPageLayout>{Page}</AccountPageLayout>
);

export default ContactPreferences;
