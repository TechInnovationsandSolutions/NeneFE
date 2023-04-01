import { SwiperSlide } from "swiper/react";

import "swiper/css/autoplay";
import Image from "next/image";
import Button from "../button/button";
export default function Card({ item, index }) {
  return (
    <SwiperSlide
      key={index}
      className="slide overflow-hidden justify-center flex  relative bg-gray-100"
    >
      <Image
        src={item.img}
        alt={`Slide ${index}`}
        className="w-fit h-4/5 overflow-hidden"
      />

      <div className="absolute flex-col  top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
        <div className="mt-16 flex flex-col items-center justify-center gap-4 w-full">
          <p className="md:text-3xl font-bold text-white ">{item.name}</p>
          <Button
            text="Shop now"
            customClassName="rounded-md bg-white"
            variant=""
          />
        </div>
      </div>
    </SwiperSlide>
  );
}
