import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
const Home = () => {
  return (
    <div>
      <main>
        <section className="h-[60vh] md:h-[85vh] relative w-full">
          {/* Bg Image */}
          <div className="absolute top-0 left-0 h-full w-full banner">
            <img src="/Images/banner-final.png" alt="" />
          </div>
          <div className="absolute lg:hidden top-0 left-0 h-full w-full bg-[#0707073d]"></div>
          {/* Header */}
          <div className="absolute h-full w-full top-0 left-0">
            <div className="h-full w-full ">
              <div>
                <h1 className="text-center text-3xl md:text-5xl font-bold mt-2 md:mt-6 text-white">
                  Logo
                </h1>
              </div>
              <div className="flex flex-col mt-8 md:mt-28 md:ml-14 2xl:ml-[9rem] 2xl:mt-32 3xl:mt-48 ">
                <div>
                  <h1 className="text-4xl text-center md:text-left  font-semibold md:text-5xl 2xl:text-6xl 3xl:text-7xl md:font-bold text-white md:leading-[56px]">
                    No-code token <br /> management tools to
                  </h1>
                  <h1 className="md:text-5xl text-4xl text-center md:text-left 2xl:text-6xl 3xl:text-7xl mt-1 font-bold text-[#F9623B]">
                    Visualise
                  </h1>
                </div>
                <div>
                  <p className="text-sm font-light opacity-90 text-center md:text-left tracking-wider my-3 text-white">
                    Built to empower web3 founders and their communities
                  </p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-[#F9623B] text-white text-sm font-normal flex items-center gap-1 px-6 md:px-8 py-3 rounded-[50px]">
                    <h1>Get Access</h1>
                    <HiArrowSmRight className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
