import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Backed } from "../assets/Data";

const BackedSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1900,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2200,
    dotsClass: "slick-dots ",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
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
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  return (
    <>
      <Slider {...settings}>
        {Backed.map((item, index) => (
          <div
            key={index}
            className="flex mt-4 flex-wrap px-4 items-center justify-center ">
            <div>
              <img
                src={item.image}
                alt="Image Not showing some thing went wrong"
                className="h-4 md:h-8 mx-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default BackedSlider;

{
  /*  <div className="flex flex-wrap px-4 items-center justify-center gap-4 md:gap-8 mt-4">
            <div>
              <img src="/Images/aava.png" alt="" className="h-4 md:h-6" />
            </div>
            <div>
              <img src="/Images/polygon.png" alt="" className="h-4 md:h-6" />
            </div>
            <div>
              <img
                src="/Images/Chainalysis.png"
                alt=""
                className="h-4 md:h-6"
              />
            </div>
            <div>
              <img src="/Images/enidc.png" alt="" className="h-4 md:h-6" />
            </div>
          </div>
          <div className="flex flex-wrap px-4 items-center justify-center gap-4 md:gap-8 mt-4">
            <div>
              <img src="/Images/Bio-ico.png" alt="" className="h-4 md:h-6" />
            </div>
            <div>
              <img src="/Images/palure.png" alt="" className="h-4 md:h-6" />
            </div>
            <div>
              <img src="/Images/bangoon.png" alt="" className="h-4 md:h-6" />
            </div>
            <div>
              <img src="/Images/spice.png" alt="" className="h-4 md:h-6" />
            </div>
          </div> */
}
