import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <section className="py-12">
        <div className=" text-white flex flex-col gap-3 items-center justify-center  px-1 ssm:px-2">
          <div className="w-[100%] md:w-[90%] xl:w-[70%]">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <div className={`${open === 1 ? "" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  <h1 className="border-none text-sm text-left font-medium outline-none">
                    {" "}
                    What tokens do you currently support?
                  </h1>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm font-extralight opacity-80 mt-1 px-2">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
            <div className="h-[1px] w-full bg-white bg-opacity-40 my-2"></div>
          </div>
          <div className="w-[100%] md:w-[90%] xl:w-[70%]">
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <div className={`${open === 2 ? "" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  <h1 className="border-none text-sm text-left font-medium outline-none">
                    {" "}
                    Can I create smart contracts one go?
                  </h1>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm font-extralight opacity-80 mt-1 px-2">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
            <div className="h-[1px] w-full bg-white bg-opacity-40 my-2"></div>
          </div>
          <div className="w-[100%] md:w-[90%] xl:w-[70%]">
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <div className={`${open === 3 ? "" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  <h1 className="border-none text-sm text-left font-medium outline-none">
                    {" "}
                    Are token distributions fully automated or do I still have
                    to manually approve?
                  </h1>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm font-extralight opacity-80 mt-1 px-2">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
            <div className="h-[1px] w-full bg-white bg-opacity-40 my-2"></div>
          </div>
          <div className="w-[100%] md:w-[90%] xl:w-[70%]">
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <div className={`${open === 4 ? "" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  <h1 className="border-none text-sm text-left font-medium outline-none">
                    {" "}
                    Are token distributions fully automated or do I still have
                    to manually approve?
                  </h1>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm font-extralight opacity-80 mt-1 px-2">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
            <div className="h-[1px] w-full bg-white bg-opacity-40 my-2"></div>
          </div>
          <div className="w-[100%] md:w-[90%] xl:w-[70%]">
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <div className={`${open === 5 ? "" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                  <h1 className="border-none text-sm text-left font-medium outline-none">
                    {" "}
                    Has MUVL replaced 'thebacker' branding?
                  </h1>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm font-extralight opacity-80 mt-1 px-2">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
            <div className="h-[1px] w-full bg-white bg-opacity-40 my-2"></div>
          </div>
          <div className="w-[100%] md:w-[90%] xl:w-[70%]">
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
              <div className={`${open === 6 ? "" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                  <h1 className="border-none text-sm text-left font-medium outline-none">
                    {" "}
                    How much does MUVL cost to use?
                  </h1>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm font-extralight opacity-80 mt-1 px-2">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
            <div className="h-[1px] w-full bg-white bg-opacity-40 my-2"></div>
          </div>
          <div className="w-[100%] md:w-[90%] xl:w-[70%]">
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
              <div className={`${open === 7 ? "" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(7)}>
                  <h1 className="border-none text-sm text-left font-medium outline-none">
                    {" "}
                    Does MUVL take custody of the tokens?
                  </h1>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm font-extralight opacity-80 mt-1 px-2">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
            <div className="h-[1px] w-full bg-white bg-opacity-40 my-2"></div>
          </div>
          <div className="w-[100%] md:w-[90%] xl:w-[70%]">
            <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
              <div className={`${open === 8 ? "" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(8)}>
                  <h1 className="border-none text-sm text-left font-medium outline-none">
                    {" "}
                    Have you been audited?
                  </h1>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm font-extralight opacity-80 mt-1 px-2">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
            <div className="h-[1px] w-full bg-white bg-opacity-40 my-2"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
