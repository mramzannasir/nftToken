import React, { useEffect } from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import { HiArrowSmRight } from "react-icons/hi";
import { SlEnvolope } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import BackedSlider from "./BackedSlider";
import Accordion from "./Accordion";

const Second = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <main className="bg-img pt-8 pb-8">
        {/*____________________Logos and backed by sections__________________________ */}
        <section className=" mt-6">
          <h1 className="text-white text-center text-4xl font-medium ">
            Backed by
          </h1>
          <div className="mt-4">
            <BackedSlider />
          </div>
        </section>
        {/* Faq Sections */}
        <section className="mt-14  2xl:mt-16">
          <h1
            data-aos="fade-up"
            className="text-3xl font-medium text-center text-white">
            FAQs
          </h1>
          {/* Accordion */}
          <div>
            <Accordion />
          </div>
          {/* Line */}
          <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
            <div className="h-[1px] w-full bg-white bg-opacity-20 my-4 md:my-8 lg:my-9 2xl:my-14"></div>
          </div>

          {/* Community Section */}
          <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem] mt-10 md:mt-12 flex flex-col md:flex-row items-center md:justify-between">
            <div>
              <div
                data-aos="zoom-in"
                className="bg-white bg-opacity-10 flex gap-2 items-center px-1 md:px-2 rounded-full py-1 md:w-[75%]">
                <div className="bg-[#F9623B] px-4 py-2 rounded-full text-white text-xs tracking-wide">
                  NEW
                </div>
                <div className="">
                  <p className="text-sm font-light text-white">
                    Be a part of our evergrowing Tribe{" "}
                  </p>
                </div>
              </div>
              <div data-aos="zoom-in" className="">
                <div>
                  <h1 className="text-xl font-extralight text-white md:text-4xl my-2">
                    Join Our{" "}
                    <span className="text-[#F9623B] font-bold">Founder</span>{" "}
                    <span className="font-bold">Community</span>
                  </h1>
                </div>
                <div>
                  <p className="text-sm font-normal text-white">
                    Not ready for our Token Management solutions and want to{" "}
                    <br />
                    connect with visionaries shaping the future of Web3?{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 md:mt-0">
              <button
                data-aos="fade-left"
                className="bg-[#282780] text-white text-sm font-normal flex items-center gap-1 px-8 md:px-10 2xl:px-16 py-1 md:py-2 rounded-[40px]">
                <h1>Get Access</h1>
                <HiArrowSmRight className="text-2xl" />
              </button>
            </div>
          </div>

          {/* Line */}
          <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
            <div className="h-[1px] w-full bg-white bg-opacity-20 my-20 md:my-24 lg:my-30 2xl:my-14"></div>
          </div>

          {/* Footer */}

          <footer className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
            <div className="flex w-full flex-col md:flex-row justify-between md:items-center">
              <div className="" data-aos="fade-left">
                <div>
                  <h1 className="text-4xl text-white font-medium">
                    Fuel for Thought
                  </h1>
                </div>
                <div className="md:mt-14">
                  <h1 className="text-4xl text-white font-medium">LOGO</h1>
                </div>
              </div>
              <div className="" data-aos="fade-right">
                <div>
                  <p className="text-white font-medium font-xl">
                    Want access to the latest news in Web3? <br /> Sign up for
                    our Newsletter here:
                  </p>
                </div>
                <div className="flex w-full justify-between items-center mt-4">
                  <div>
                    <div className="flex gap-2 items-center ">
                      <div className="text-xl text-white">
                        {" "}
                        <SlEnvolope />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="text-sm border-none outline-none text-white font-extralight bg-inherit"
                          placeholder=" Your email address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl text-white">
                    <HiArrowSmRight />
                  </div>
                </div>
                <div className="h-[1px] w-full bg-white mt-1"></div>

                <div className="mt-4 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-sm font-light text-white">Career</h1>
                    </div>
                    <div>
                      <div>
                        <h1 className="text-sm font-semibold">Stay in Touch</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h1 className="text-sm font-light text-white">Terms</h1>
                  </div>
                  <div className="flex gap-1">
                    <div>
                      <img src="/Images/twitter.png" alt="" className="h-6" />
                    </div>
                    <div>
                      <img src="/Images/linkedin.png" alt="" className="h-6" />
                    </div>
                    <div>
                      <img src="/Images/telegram.png" alt="" className="h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 md:mt-10">
              <h1 className="text-center text-white">
                ?? 2023 VTVL, Inc. All Rights Reserved.{" "}
              </h1>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Second;
