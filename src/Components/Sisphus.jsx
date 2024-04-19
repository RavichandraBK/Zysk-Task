import React from "react";
import sisyphus from "../assets/sisyphusLogo.png";
import prdmanager from "../assets/prdmanager.png";
const Sisphus = () => {
  return (
    <>
      <div className=" h-[400px] w-full bg-[#F9FAFB] mt-20">
        <div className="flex items-center flex-col justify-around h-full">
          <div>
            <img src={sisyphus} alt="" />
          </div>
          <p className="text-[30px] sm:text-[48px] font-bold text-center leading-[38px] sm:leading-[60px] sm:w-5/6">
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </p>
          <img src={prdmanager} alt="" />
          <div>
            <p className="text-[18px] leading-[28px] font-extrabold text-center">
              Candice Wu
            </p>
            <p className="text-[#475467] text-center text-[16px] leading-[24px]">
              Product Manager, Sisyphus
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sisphus;
