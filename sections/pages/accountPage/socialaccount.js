import Button from "@/components/button/button";
import { SocialImg, google, apple, facebook } from "@/public/assets/account";
import Image from "next/image";

const SocialAccount = () => {
  return (
    <div className="flex flex-col gap-8 w-full-h-auto">
      {/* Header */}
      <div className="w-full h-[200px] flex flex-col gap-3 px-6 pt-[44px] bg-white">
        <Image src={SocialImg} alt="" width={44} height={44} />
        <h2 className="uppercase w-full font-bold text-[1.5rem]">
          Social Accounts
        </h2>
        <p className="text-base ">
          You can use your social media accounts to log in.
        </p>
      </div>
      {/* End of Header */}

      {/* Main */}
      <main className="flex flex-col gap-4">
        {/* Google Section */}
        <section className={sectionStyles}>
          <div className={subSectionStyles}>
            <Image src={google} alt="" width={32} height={32.75} />
            <div className="flex flex-col gap-4">
              <h4 className={headerStyle}>Google</h4>
              <p className="text-[#4f4f4f] text-base leading-5 ">
                You are signed in with this account.
              </p>
            </div>
          </div>
          <Button
            text="Disconnect"
            variant="black"
            type="button"
            size="small"
            customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5"
            onClick={() => {}}
          />
        </section>

        {/* Apple Section */}
        <section className={sectionStyles}>
          <div className={subSectionStyles}>
            <Image src={apple} alt="" width={32} height={32.75} />
            <div className="flex flex-col gap-4">
              <h4 className={headerStyle}>Apple</h4>
              {/* <p className="text-[#4f4f4f] text-base leading-5 ">
                You are signed in with this account.
              </p> */}
            </div>
          </div>
          <Button
            text="Connect"
            variant="white"
            type="button"
            size="small"
            customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5"
            onClick={() => {}}
          />
        </section>

        {/* FaceBook Section */}
        <section className={sectionStyles}>
          <div className={subSectionStyles}>
            <Image src={facebook} alt="" width={32} height={32.75} />
            <div className="flex flex-col gap-4">
              <h4 className={headerStyle}>FaceBook</h4>
              {/* <p className="text-[#4f4f4f] text-base leading-5 ">
                You are signed in with this account.
              </p> */}
            </div>
          </div>
          <Button
            text="Connect"
            variant="white"
            type="button"
            size="small"
            customClassName="border border-[#AAAAAA] text-[#1a1a1a] text leading-5 px-5"
            onClick={() => {}}
          />
        </section>
      </main>
    </div>
  );
};

export default SocialAccount;

const sectionStyles =
  "flex flex-col md:flex-row justify-between items-center w-full p-12 bg-white";
const subSectionStyles = "flex flex-col md:flex-row gap-12 items-center";
const headerStyle = "text-black text-[18px] leading-6 font-medium";
