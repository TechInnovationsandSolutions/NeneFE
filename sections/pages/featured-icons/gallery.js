import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const GalleryItem = ({ img }) => {
  let imgRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const router = useRouter();
  const imgResizeId = [1, 4, 8, 11];
  useEffect(() => {
    console.log(imgRef);
  }, [imgRef]);

  function handleMouseOver(id) {
    setHovered(true);
    setCurrentId(id);
  }
  function handleToCollectionPage() {
    router.push(`/gallery/${img.id}`);
  }

  return (
    <Link
        href={`/featured-icons/${img.id}`}
      className={`overflow-y-hidden max-md:mb-5 ${
        imgResizeId.includes(img.id) ? "lg:col-span-2 lg:row-span-2 " : "h-full"
      }  w-fit h-fit relative group`}
      onMouseOut={() => setHovered(false)}
      onMouseOver={() => handleMouseOver()}
    >
      <Image
        ref={imgRef}
        className={`${!hovered ? 'grayscale' : ''}`}
        src={img.src}
        width={600}
        height={400}
        alt="prop1"
      />

      <div
        onClick={handleToCollectionPage}
        class={` cursor-pointer bg-[#0000008c] p-2 flex flex-col gap-2 absolute w-full bg-opacity-0 opacity-0 -translate-y-full ${
          hovered ? "animate-slide-up opacity-100 " : " "
        }   text-white`}
      >
        <div className="flex justify-between border-b pb-2 border-b-white ">
          <span>Nene</span>
          <span>Sep 3, 2020</span>
        </div>
        <span>Interview with  Deola Sagoe on Nigeria’s fashion industry and what should be excpected in the coming years</span>
      </div>
    </Link>
  );
};

export default GalleryItem;