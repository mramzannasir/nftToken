import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../assets/Data";

const SliderSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
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
        {Card.map((item, index) => (
          <>
            <div
              key={index}
              className="mt-4 md:mt-6 flex justify-center flex-col items-center">
              <div className="w-[300px] md:w-[50%] 2xl:w-[40%] 3xl:w-[40%] 4xl:w-[35%]">
                <div className="bg-white p-1 ssm:p-4 md:p-4 rounded-md">
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src="/Images/bio-mini.png"
                        alt=""
                        className="h-8 blur-[3px]"
                      />
                    </div>
                    <h1 className="text-2xl blur-[3px] font-semibold text-black">
                      Biconomy
                    </h1>
                  </div>
                  <div className="mt-2">
                    <p className="text-[#242932] font-medium text-xs tracking-wider ">
                      Contact Address
                    </p>
                  </div>
                  <div className="relative">
                    {" "}
                    <div className="tube-bg w-full rounded-md h-3"></div>
                    <div className="absolute -top-10 right-0 text-xs bg-[#B9D9FF] rounded-lg px-2 py-2">
                      <div>
                        {" "}
                        <p className="text-[#006299]">#2 Wallet address</p>
                      </div>
                      <div className="corner absolute -bottom-1 left-4"></div>
                    </div>
                  </div>
                  <div className="w-full h-[0.82px] my-5 bg-[#EAECF0]"></div>
                  <div>
                    <ul className="w-full flex justify-between items-center">
                      <li className="text-sm text-[#242932] font-medium">
                        Supply cap
                      </li>
                      <li className="text-sm text-[#242932] font-medium">
                        Initial Supply
                      </li>
                      <li className="text-sm text-[#242932] font-medium">
                        Maximum
                      </li>
                    </ul>
                    <ul className="w-full flex justify-between items-center mt-2">
                      <li className="text-sm text-[#242932] font-medium blur-[3px]">
                        Supply cap
                      </li>
                      <li className="text-sm text-[#242932] font-medium blur-[3px]">
                        Initial Supply
                      </li>
                      <li className="text-sm text-[#242932] font-medium blur-[3px]">
                        Maximum
                      </li>
                    </ul>
                  </div>
                  <div className="w-full h-[0.82px] my-5 bg-[#EAECF0]"></div>
                  <div className="w-full flex justify-between items-center">
                    <div className="relative">
                      <h1 className="text-[#667085] text-sm font-semibold blur-[2px]">
                        @ Return to details
                      </h1>
                      <div className="absolute -top-10 right-0 text-xs bg-[#FFF8B9] rounded-lg px-2 py-2">
                        <div>
                          {" "}
                          <p className="text-[#9F760C]">#2 Wallet address</p>
                        </div>
                        <div className="corner-1 absolute -top-1 right-4"></div>
                      </div>
                    </div>
                    <div>
                      <button className="outline-none border-none text-sm px-6 py-2 rounded-2xl text-white bg-[#1B369A]">
                        Create token
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-white p-1 ssm:p-4 md:p-4 rounded-md">
                  <div className="flex items-center gap-3">
                    <div>
                      <img
                        src="/Images/bio-mini.png"
                        alt=""
                        className="h-8 blur-[3px]"
                      />
                    </div>
                    <h1 className="text-2xl blur-[3px] font-semibold text-black">
                      Biconomy
                    </h1>
                  </div>
                  <div className="mt-2">
                    <p className="text-[#242932] font-medium text-xs tracking-wider ">
                      Contact Address
                    </p>
                  </div>
                  <div className="relative">
                    {" "}
                    <div className="tube-bg w-full rounded-md h-3"></div>
                    <div className="absolute -top-10 right-0 text-xs bg-[#B9D9FF] rounded-lg px-2 py-2">
                      <div>
                        {" "}
                        <p className="text-[#006299]">#2 Wallet address</p>
                      </div>
                      <div className="corner absolute -bottom-1 left-4"></div>
                    </div>
                  </div>
                  <div className="w-full h-[0.82px] my-5 bg-[#EAECF0]"></div>
                  <div>
                    <ul className="w-full flex justify-between items-center">
                      <li className="text-sm text-[#242932] font-medium">
                        Supply cap
                      </li>
                      <li className="text-sm text-[#242932] font-medium">
                        Initial Supply
                      </li>
                      <li className="text-sm text-[#242932] font-medium">
                        Maximum
                      </li>
                    </ul>
                    <ul className="w-full flex justify-between items-center mt-2">
                      <li className="text-sm text-[#242932] font-medium blur-[3px]">
                        Supply cap
                      </li>
                      <li className="text-sm text-[#242932] font-medium blur-[3px]">
                        Initial Supply
                      </li>
                      <li className="text-sm text-[#242932] font-medium blur-[3px]">
                        Maximum
                      </li>
                    </ul>
                  </div>
                  <div className="w-full h-[0.82px] my-5 bg-[#EAECF0]"></div>
                  <div className="w-full flex justify-between items-center">
                    <div className="relative">
                      <h1 className="text-[#667085] text-sm font-semibold blur-[2px]">
                        @ Return to details
                      </h1>
                      <div className="absolute -top-10 right-0 text-xs bg-[#FFF8B9] rounded-lg px-2 py-2">
                        <div>
                          {" "}
                          <p className="text-[#9F760C]">#2 Wallet address</p>
                        </div>
                        <div className="corner-1 absolute -top-1 right-4"></div>
                      </div>
                    </div>
                    <div>
                      <button className="outline-none border-none text-sm px-6 py-2 rounded-2xl text-white bg-[#1B369A]">
                        Create token
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </>
        ))}
      </Slider>
    </>
  );
};

export default SliderSlick;
