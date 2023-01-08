import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "../assets/Data";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1800,
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
        {Images.map((item, index) => (
          <div
            key={index}
            className="flex mt-8 flex-wrap px-4 items-center justify-center ">
            <div>
              <img
                src={item.images}
                alt="Image Not showing some thing went wrong"
                className="h-4 md:h-8 mx-auto"
              />
              <h1>{item.number}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default LogoSlider;
