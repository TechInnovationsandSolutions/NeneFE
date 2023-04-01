import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import img1 from "../homePage1/assets/naeim-jafari-Z_nCYyud2yM-unsplash 1.png";
import img2 from "../homePage1/assets/robert-andall-h2dY1o-3rp0-unsplash 1.png";

import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/autoplay";

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

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
        modules={[Navigation, Pagination, A11y, Autoplay]}
        allowSlideNext
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide h-full">
              <Image
                src={item.img}
                alt={`Slide ${index}`}
                className="h-full w-full"
              />
              <div className="caption">
                <p>{item.name}</p>
                <button>Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
