import CardArtcile from "./cardArtcile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export default function slider({ title, data }) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,

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
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: 45,
          className: "center",
          centerMode: true,
          pauseOnHover: true,
        },
      },
    ],
  };
  return (
    <div className="mt-10">
      <h3 className="pl-2 md:pl-10 text-lg mb-5">{title}</h3>
      <Slider {...settings} className="items-center justify-center flex gap-2">
        {data.map((item) => (
          <CardArtcile item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
