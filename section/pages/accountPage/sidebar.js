import Image from "next/image";
import ProfileImg from "../../../public/assets/account/profile_image.png";

const SideBar = () => {
  return (
    <div className="bg-lightPink h-screen flex flex-col">
      {/* Profile Image Section */}
      <div className="flex w-full h-[500px] bg-lightGray gap-4 items-center">
        <Image src={ProfileImg} alt="" width={100} height={100} />
        <div className="flex flex-col">
          <p>Hi,</p>
          <p>Chenemi Abraham</p>
        </div>
      </div>

      {/* Other Links */}
      <h2>Hello Side Bar</h2>
    </div>
  );
};

export default SideBar;
