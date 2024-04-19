import React from "react";
import Logomark from "../assets/Logomark.png";
const Footer = () => {
  return (
    <>
      <div>
        <div className="flex flex-col  gap-3 w-full sm:flex-row sm:justify-between sm:px-20 mt-5 mb-5">
          <div>
            <img
              src={Logomark}
              alt="Logo not available"
              width={30}
              height={30}
              className="inline align-middle"
            />
            <span className="font-bold text-lg">Untitled UI</span>
          </div>
          <p className="text-[#475467] text-[16px] leading-[24px]">© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
