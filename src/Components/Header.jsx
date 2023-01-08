import React, { useState, useEffect } from "react";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <div>
      <nav
        className={`flex ${stickyClass} text-white header-bg md:px-10 lg:px-14 2xl:px-20 justify-between items-center px-1 py-2 md:py-3`}>
        <div className="flex gap-2 items-center">
          <div className="cursor-pointer">
            <img src="/Images/logo.png" alt="" className="h-8" />
          </div>
        </div>
        <div>
          <ul className="flex gap-2 md:gap-3 items-center">
            <li className="text-sm  cursor-pointer hover-underline-animation font-extralight md:text-base md:font-normal">
              How it Works
            </li>
            <li className="text-sm  cursor-pointer hover-underline-animation font-extralight md:text-base md:font-normal">
              Demo
            </li>
            <li className="text-sm  cursor-pointer hover-underline-animation font-extralight md:text-base md:font-normal">
              Community
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
