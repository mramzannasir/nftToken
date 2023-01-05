import React from "react";

const Second = () => {
  return (
    <div>
      <main className="bg-img">
        {/*____________________Logos and backed by sections__________________________ */}
        <section className="">
          <h1 className="text-white text-center text-4xl font-medium ">
            Backed by
          </h1>
          <div className="flex flex-wrap px-4 items-center justify-center gap-4 md:gap-8 mt-4">
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
        </section>
        {/* Faq Sections */}
        <section className="mt-4 md:mt-8 lg:mt-9 2xl:mt-10">
          <h1 className="text-3xl font-medium text-center text-white">FAQs</h1>
        </section>
      </main>
    </div>
  );
};

export default Second;
