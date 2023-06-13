import CardArtcile from "./cardArtcile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export default function MobileCaroussel({ title, data }) {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "center",
    centerMode: true,
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
        breakpoint: 831,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="mb-5 font-sans md:hidden">
      <Slider {...settings} className="items-center justify-center flex gap-2 mx-[-10px]">
        {data.map((item) => (
          <CardArtcile item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
