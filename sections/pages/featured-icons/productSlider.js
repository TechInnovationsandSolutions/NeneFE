import ProductCard from "@/components/productCard/productCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlider() {
    const settings = {
        // dots: false,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        className: "center",
        // centerMode: true,
        infinite: true,
        autoplay: true,
        // speed: 6000,
        autoplaySpeed: 10000,
    
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
            },
          },
        ],
    };

    const products = [
        {
          name: "Zara Twist Cute Dress",
          price: "3,000",
          img: "/assets/images/shoesTabBg.png",
        },
        {
          name: "Zara Twist Cute Dress",
          price: "3,000",
          img: "/assets/images/dress2.webp",
        },
        {
          name: "Zara Twist Cute Dress",
          price: "3,000",
          img: "/assets/images/newsBgImg.png",
        },
        {
          name: "Zara Twist Cute Dress",
          price: "3,000",
          img: "/assets/images/dress4.webp",
        },
        {
          name: "Zara Twist Cute Dress",
          price: "3,000",
          img: "/assets/images/dress2.webp",
        },
        {
          name: "Zara Twist Cute Dress",
          price: "3,000",
          img: "/assets/images/dress4.webp",
        },
      ];

    return (  
        <div className='overflow-hidden'>
            <Slider {...settings} className='flex gap-5 my-5 -mx-2'>
            {products.map((product, index) => {
            return (
              <ProductCard
                img={product.img}
                name={product.name}
                price={product.price}
                key={index}
              />
            );
          })}
            </Slider>
        </div>
    );
}

export default ProductSlider;