import Image from "next/image";
import Button from "../button/button";
export default function Card({ item, index }) {
  return (
    <div className="slide overflow-hidden justify-center flex z-1  relative bg-gray-100 w-full font-sans">
      <Image
        src={item.img}
        alt={`Slide ${index}`}
        className="w-full h-[766px]  overflow-hidden"
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
    </div>
  );
}
