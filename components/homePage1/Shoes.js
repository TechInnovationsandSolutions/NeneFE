import img1 from "../homePage1/assets/sho.png";
import img2 from "../homePage1/assets/sho2.png";
import img3 from "../homePage1/assets/sho3.png";
import img4 from "../homePage1/assets/sho4.png";
import Image from "next/image";

import Button from "../button/button";
import Carousel from "react-elastic-carousel";

import like from "../../public/assets/svgs/like.svg";
const data = [
  {
    id: 1,
    name: "Zara Tops",
    price: 3000,
    img: img1,
    model: "Zara",
  },
  {
    id: 2,
    name: "Tom Ford Gowns",
    img: img2,
    price: 3000,
    model: "Ray-Ban",
  },
  {
    id: 1,
    name: "Zara Tops",
    img: img3,
    price: 3000,
    model: "Zara",
  },
  {
    id: 2,
    name: "Tom Ford Gowns",
    img: img4,
    price: 3000,
    model: "Ray-Ban",
  },
  {
    id: 3,
    name: "Tom Ford Gowns",
    img: img2,
    price: 3000,
    model: "Ray-Ban",
  },
  {
    id: 4,
    name: "Tom Ford Gowns",
    img: img2,
    price: 3000,
    model: "Ray-Ban",
  },
  {
    id: 5,
    name: "Tom Ford Gowns",
    img: img2,
    price: 3000,
    model: "Ray-Ban",
  },
  {
    id: 6,
    name: "Tom Ford Gowns",
    img: img2,
    price: 3000,
    model: "Ray-Ban",
  },
  {
    id: 7,
    name: "Tom Ford Gowns",
    img: img2,
    price: 3000,
    model: "Ray-Ban",
  },
  {
    id: 8,
    name: "Tom Ford Gowns",
    img: img2,
    price: 3000,
    model: "Ray-Ban",
  },
  {
    id: 9,
    name: "Tom Ford Gowns",
    img: img2,
    price: 3000,
    model: "Ray-Ban",
  },
];

const Shoes = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className="slider mt-10">
      <h3 className="pl-20 text-lg">Shoes</h3>
      <Carousel
        itemsToShow={4}
        breakPoints={breakPoints}
        className="mt-3"
        enableAutoPlay
        autoPlaySpeed={3000}
      >
        {data.map((item, index) => (
          <div key={index} className="slide justify-center   relative  ml-4">
            <div className="relative">
              <Image src={item.img} alt={`Slide ${index}`} className="w-full" />
              <div className="absolute right-5 bottom-8 w-8 flex items-center justify-center bg-white h-8 rounded-full cursor-pointer">
                <Image src={like} width={20} alt="like btn" height={18.48} />
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
        ))}
      </Carousel>
    </div>
  );
};

export default Shoes;
