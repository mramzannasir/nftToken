import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
const First = () => {
  return (
    <div>
      <main className="static">
        <section className="w-full first-bg pt-3 md:pt-8 pb-[10rem]">
          {/* <div className="absolute top-5 left-2 lg:-top-[16rem] lg:-left-[16rem]">
            <div className="h-[10rem] lg:h-[40rem] lg:w-[40rem] w-[10rem] rounded-full bg-[#122790] opacity-70  blur-[5rem]"></div>
          </div> */}
          {/* _____________________Design_______________________________________ */}
          <main className="">
            <div>
              <div>
                <h1 className="text-2xl font-semibold md:font-bold md:text-[45px] text-center text-white">
                  Supporting Projects On
                </h1>
              </div>
              <div className="flex flex-wrap px-4 items-center justify-center gap-4 md:gap-8 xl:gap-10 2xl:gap-14 mt-2 md:mt-7 2xl:mt-9">
                <div>
                  <img
                    src="/Images/ethereum.png"
                    alt=""
                    className="h-4 md:h-8"
                  />
                </div>
                <div>
                  <img
                    src="/Images/Binance.png"
                    alt=""
                    className="h-4 md:h-8"
                  />
                </div>
                <div>
                  <img
                    src="/Images/polygon.png"
                    alt=""
                    className="h-4 md:h-6"
                  />
                </div>
                <div>
                  <img src="/Images/crons.png" alt="" className="h-4 md:h-6" />
                </div>
                <div>
                  <img src="/Images/fontom.png" alt="" className="h-4 md:h-6" />
                </div>
              </div>
              {/* Line */}
              <div className="px-2 md:px-16 lg:px-28 xl:px-44 2xl:px-[18rem]">
                <div className="h-[1px] w-full bg-white bg-opacity-20 mt-4 md:mt-8 lg:mt-9 2xl:mt-14"></div>
              </div>

              {/*_--------------------------Work_sections---------------------------------------------------------------- */}
              <div className="mt-8 md:mt-16">
                <div>
                  <h1 className="text-2xl font-semibold md:font-bold md:text-[39px] text-center text-white">
                    How it Works
                  </h1>
                </div>
                <div>
                  <p className="text-sm md:text-lg text-center font-light tracking-wider text-white mt-2  md:mt-2">
                    100% <b>No Code,</b> ready in minutes
                  </p>
                </div>
                {/* Card */}
                <div className="mt-4 md:mt-6 flex justify-center flex-col items-center">
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
                              <p className="text-[#9F760C]">
                                #2 Wallet address
                              </p>
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
                  </div>
                </div>
                {/* Dots */}
                <div className="w-full flex justify-center items-center gap-2 md:gap-3 mt-6">
                  <div className="w-4 md:w-6 md:h-2 h-1 bg-[#f9623b] rounded-lg"></div>
                  <div className="w-1 h-1 md:w-2 md:h-2 bg-[#d9d9d9] rounded-lg"></div>
                  <div className="w-1 h-1 md:w-2 md:h-2 bg-[#d9d9d9] rounded-lg"></div>
                  <div className="w-1 h-1 md:w-2 md:h-2 bg-[#d9d9d9] rounded-lg"></div>
                </div>

                <div>
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

                <div>
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
                    <button className="bg-[#F9623B] text-white text-sm font-normal flex items-center gap-1 px-6 md:px-8 xl:px-9 4xl:px-10 py-2 rounded-[50px]">
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

                <div className="flex justify-center items-center flex-col">
                  <div>
                    <h1 className="text-2xl font-semibold md:font-bold md:text-[39px] text-center text-white">
                      Smart Contract Audited by
                    </h1>
                  </div>
                  <div className="">
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
                    <h1 className="text-2xl font-semibold md:font-bold md:text-[39px]  text-white">
                      Meet The Crew
                    </h1>
                  </div>

                  <div className="flex flex-wrap items-center justify-around md:justify-between  gap-3 mt-4 md:mt-6 xl:mt-8 ">
                    <div>
                      <img
                        src="/Images/Cricle.png"
                        alt=""
                        className="h-[5rem] xl:h-[8rem]"
                      />
                      <div className="mt-1 md:mt-2">
                        <h1 className="text-sm font-normal text-white text-center">
                          Jack Son
                        </h1>
                        <p className="text-sm font-extralight text-[#a5a5a5]">
                          Commander
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/Images/Cricle.png"
                        alt=""
                        className="h-[5rem] xl:h-[8rem]"
                      />
                      <div className="mt-1 md:mt-2">
                        <h1 className="text-sm font-normal text-white text-center">
                          William
                        </h1>
                        <p className="text-sm font-extralight text-center text-[#a5a5a5]">
                          Pilot
                        </p>
                      </div>
                    </div>

                    <div>
                      <img
                        src="/Images/Cricle.png"
                        alt=""
                        className="h-[5rem] xl:h-[8rem]"
                      />
                      <div className="mt-1 md:mt-2">
                        <h1 className="text-sm font-normal text-white text-center">
                          Mihail
                        </h1>
                        <p className="text-sm font-extralight text-[#a5a5a5]">
                          Commander
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/Images/Cricle.png"
                        alt=""
                        className="h-[5rem] xl:h-[8rem]"
                      />
                      <div className="mt-1 md:mt-2">
                        <h1 className="text-sm font-normal text-white text-center">
                          Rose
                        </h1>
                        <p className="text-sm text-center font-extralight text-[#a5a5a5]">
                          Pilot
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/Images/Cricle.png"
                        alt=""
                        className="h-[5rem] xl:h-[8rem]"
                      />
                      <div className="mt-1 md:mt-2">
                        <h1 className="text-sm font-normal text-white text-center">
                          Max
                        </h1>
                        <p className="text-sm font-extralight text-[#a5a5a5]">
                          Commander
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};

export default First;
