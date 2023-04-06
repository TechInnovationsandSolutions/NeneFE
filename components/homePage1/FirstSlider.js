import img1 from "../../public/assets/homePage1/naeim-jafari-Z_nCYyud2yM-unsplash 1.png";
import img2 from "../../public/assets/homePage1/robert-andall-h2dY1o-3rp0-unsplash 1.png";

import Image from "next/image";

import Button from "../button/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

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
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 7000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: 45,
          className: "center",
          centerMode: true,
          pauseOnHover: true,
          vertical: true,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {data.map((item, index) => (
          <Card index={index} item={item} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default FirstSlider;
