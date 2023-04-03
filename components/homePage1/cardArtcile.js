"use client";
import Image from "next/image";
import lik from "../../public/assets/svgs/like.svg";
import { useState } from "react";

export default function CardArtcile({ item }) {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div className="slide justify-center relative md:w-72 w-full p-5 md:p-8 overflow-hidden">
      <div className="relative">
        <Image src={item.img} alt="Slide" className="w-full" />
        <div
          onClick={handleLike}
          className="absolute right-5 bottom-8 w-8 flex items-center justify-center bg-white h-8 rounded-full cursor-pointer"
        >
          <Image src={lik} width={20} alt="like btn" height={18.48} />
        </div>
      </div>
      <div>
        <div className="flex justify-between font-bold mt-3 text-lg">
          <p className="text-md">{item.name}</p>
          <p className="text-md">{item.price}</p>
        </div>
        <p className="text-gray-500">{item.model}</p>
      </div>
    </div>
  );
}
