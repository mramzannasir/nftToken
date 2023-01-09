import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Crew } from "../assets/Data";

const CrewSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2800,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dotsClass: "slick-dots ",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {Crew.map((item, index) => (
          <div key={index} className="mt-8">
            <div>
              <div className="flex flex-col ">
                <img
                  src={item.image}
                  alt="Image Not showing some thing went wrong"
                  className="mx-auto h-[5rem] md:h-auto"
                />
                <h1 className="text-center mt-1 text-sm md:text-base font-medium text-white">
                  {item.name}
                </h1>
                <p className="text-center font-xs font-extralight text-white opacity-50 -mt-2">
                  {item.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CrewSlick;
