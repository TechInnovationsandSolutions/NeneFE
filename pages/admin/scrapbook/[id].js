import Image from "next/image";
import img1 from "../../public/assets/gallery/Rectangle 373.png";
import Button from "@/components/button/button";
const GalleryDetailItem = () => {
  return (
    <div className="px-[8%] py-5 ">
      <h1 className="text-center font-bold">Scrapbook</h1>

      <main>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 py-5 ">
          <Image
            src={img1}
            width={600}
            height={400}
            className=" md:w-1/2 "
            alt="prop1"
          />

          <div className="flex flex-col  justify-center gap-5 ">
            <span className="font-bold"> Clerk Exclusive Blouse</span>
            <span> Sep 3,2020</span>
            <Button text="View Brand/Collection" customClassName="h-fit">
              {" "}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryDetailItem;
