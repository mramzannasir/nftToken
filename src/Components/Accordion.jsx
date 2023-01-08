import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <section className="mt-6">
        <div className=" text-white">
          <div>
            <Accordion open={open === 1}>
              <div className="w-full">
                <AccordionHeader
                  className=" pl-2"
                  onClick={() => handleOpen(1)}>
                  <div>
                    <h1 className="text-sm md:text-lg font-medium text-left outline-none">
                      {" "}
                      Who is responsible for developing HPX?
                    </h1>
                  </div>
                  <div
                    className={`flex ${
                      open === 1
                        ? "bg-[#F9623B] text-white"
                        : "bg-white text-black"
                    } justify-center items-center h-4 w-4 md:h-6 md:w-6 bg-white rounded `}>
                    <ion-icon
                      name={`${
                        open === 1 ? "remove" : "add-outline"
                      }`}></ion-icon>
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-sm px-2 opacity-50">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
