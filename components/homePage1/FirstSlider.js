import img1 from "../homePage1/assets/naeim-jafari-Z_nCYyud2yM-unsplash 1.png";
import img2 from "../homePage1/assets/robert-andall-h2dY1o-3rp0-unsplash 1.png";

import Image from "next/image";

import "swiper/css/autoplay";
import Button from "../button/Button";
import Carousel from "react-elastic-carousel";

const data = [
  {
    id: 1,
    name: "Zara Tops",
    img: img1,
  },
  {
    id: 2,
    name: "Tom Ford Gowns",
    img: img2,
  },
  {
    id: 1,
    name: "Zara Tops",
    img: img1,
  },
  {
    id: 2,
    name: "Tom Ford Gowns",
    img: img2,
  },
];

const FirstSlider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
  ];
  return (
    <div className="slider">
      <Carousel itemsToShow={2} breakPoints={breakPoints} enableAutoPlay={true}>
        {data.map((item, index) => (
          <div
            key={index}
            className="slide overflow-hidden justify-center flex  relative "
          >
            <Image src={item.img} alt={`Slide ${index}`} height={700} />
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
        ))}
      </Carousel>
    </div>
  );
};

export default FirstSlider;
