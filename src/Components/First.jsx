import React, { useEffect } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import SliderSlick from "./SliderSlick";
import LogoSlider from "./LogoSlider";
import CrewSlick from "./CrewSlick";
const First = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <main className="static">
        <section className="w-full first-bg pt-3 md:pt-8 pb-[5rem] md:pb-[10rem]">
          {/* _____________________Design_______________________________________ */}
          <main className="">
            <div className="pt-10 ">
              <div data-aos="fade-up">
                <h1 className="text-2xl font-semibold md:font-bold md:text-[45px] text-center text-white">
                  Supporting Projects On
                </h1>
              </div>
              {/* Logo Slider */}
              <LogoSlider />
              {/* Line */}
              <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
                <div className="h-[1px] w-full bg-white bg-opacity-20 mt-4 md:mt-8 lg:mt-9 2xl:mt-14"></div>
              </div>

              {/*_--------------------------Work_sections---------------------------------------------------------------- */}
              <div className="mt-8 md:mt-16">
                <div data-aos="fade-up">
                  <h1 className="text-2xl font-semibold md:font-bold md:text-[39px] text-center text-white">
                    How it Works
                  </h1>
                </div>
                <div>
                  <p
                    data-aos="zoom-out"
                    className="text-sm md:text-lg text-center font-light tracking-wider text-white mt-2  md:mt-2">
                    100% <b>No Code,</b> ready in minutes
                  </p>
                </div>
                {/* Card */}
                <SliderSlick />
                {/* Dots */}

                <div data-aos="zoom-out" className="mt-5 md:mt-2 ">
                  <h1 className="text-base font-medium text-white text-center md:mt-2">
                    Mint or Bring Your Own Token
                  </h1>
                  <div className="px-2">
                    <p className="text-xs font-extralight text-white leading text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In porttitor suscipit sagittis.
                    </p>
                  </div>
                </div>

                {/* Line */}
                <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
                  <div className="h-[1px] w-full bg-white bg-opacity-20 mt-4 md:mt-8 lg:mt-9 2xl:mt-14"></div>
                </div>

                {/* Token div sols */}

                <div data-aos="fade-up" className="py-8">
                  <div className="mt-5 2xl:mt-7 4xl:mt-9">
                    <h1 className="text-2xl font-semibold md:font-bold md:text-[39px] text-center text-white">
                      Preview Our Token Management Solution
                    </h1>
                  </div>
                  <div>
                    <p className="text-xs font-light md:text-sm md:font-normal mt-2 text-center text-white">
                      Take a test flight to preview our token vesting solution
                    </p>
                  </div>
                  <div className="flex w-full justify-center items-center mt-2 ">
                    <button
                      data-aos="zoom-in"
                      className="bg-[#F9623B] text-white text-sm font-normal flex items-center gap-1 px-6 md:px-8 xl:px-9 4xl:px-10 py-2 rounded-[50px]">
                      <h1>Get Access</h1>
                      <HiArrowSmRight className="text-2xl" />
                    </button>
                  </div>
                </div>

                {/* Line */}
                <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
                  <div className="h-[1px] w-full bg-white bg-opacity-20 my-4 md:my-8 lg:my-9 2xl:my-14"></div>
                </div>

                {/*_______________________________________Smart____________________________________*/}

                <div className="flex justify-center items-center flex-col py-8">
                  <div>
                    <h1
                      data-aos="zoom-in"
                      className="text-2xl font-semibold md:font-bold md:text-[39px] text-center text-white">
                      Smart Contract Audited by
                    </h1>
                  </div>
                  <div data-aos="fade-down" className="">
                    <img
                      src="/Images/smart.png"
                      alt=""
                      className="h-10 md:h-auto"
                    />
                  </div>
                </div>
                {/* Line */}
                <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
                  <div className="h-[1px] w-full bg-white bg-opacity-20 my-4 md:my-8 lg:my-9 2xl:my-14"></div>
                </div>

                {/* Crew section_____________________________________________ */}
                <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
                  <div>
                    <h1
                      data-aos="fade-right"
                      className="text-2xl font-semibold md:font-bold md:text-[39px]  text-white">
                      Meet The Crew
                    </h1>
                  </div>

                  {/* Slider */}
                </div>
                <CrewSlick />
              </div>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};
export default First;
