import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
const GalleryItem = ({ img, selectClicked ,handleCheckBoxParent}) => {
  let imgRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [selectedView, setSelectedView] = useState(false);

  const router = useRouter();
  // ids for images that are resized in the gallery
  const tallImgResizeId = [1, 11];
  const wideImgResizeId = [8, 4];
  useEffect(() => {
    console.log(imgRef);
  }, [imgRef]);

  function handleMouseOver(id) {
    setHovered(true);
    setCurrentId(id);
  }
  function handleToCollectionPage() {
    router.push(`/scrapbook/${img.id}`);
  }
  function handleCheckBox(e, id) {
    handleCheckBoxParent(e,id)
  }
  return (
    <div
      className={`overflow-y-hidden ${
        tallImgResizeId.includes(img.id)
          ? "tall"
          : wideImgResizeId.includes(img.id)
          ? "wide"
          : ""
      }  relative`}
      onMouseOut={() => setHovered(false)}
      onMouseOver={() => handleMouseOver()}
    >
      {selectClicked ? (
        <input
          type="checkbox"
          className="absolute left-[30px] w-[25px] h-[25px] cursor-pointer top-[30px] z-[2] border-[3px]  border-solid border-white bg-transparent rounded-[100%] "
          onChange={(e) => handleCheckBox(e, img.id)}
        />
      ) : null}{" "}
      <Image
        ref={imgRef}
        className={`filter grayscale ${hovered ? "grayscale-0" : ""}`}
        src={img.src}
        width={600}
        height={400}
        alt="prop1"
      />
      <div
        onClick={handleToCollectionPage}
        class={` cursor-pointer bg-[#0000008c] p-2 flex flex-col gap-2 opacity-0 bottom-0 absolute w-full  ${
          hovered ? "animate-slide-up opacity-100 " : " "
        }   text-white`}
      >
        <div className="flex justify-between border-b pb-2 border-b-white ">
          <span>Nene</span>
          <span>Sep 3, 2020</span>
        </div>
        <span>Clerk Exclusive Blouse</span>
      </div>
    </div>
  );
};

export default GalleryItem;
