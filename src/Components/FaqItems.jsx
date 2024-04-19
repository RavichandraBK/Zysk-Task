import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const FaqItems = ({ content }) => {
  return (
    <>
      <div className="mt-5">
        <div className="w-full flex justify-center">
          <div className="flex justify-around border-b pt-5">
            <div>
              <p className="text-[18px] leading-[28px] font-extrabold w-80 sm:w-[765px]">
                {content}
              </p>
              <p className="text-[#475467]  text-[16px] leading-[24px] mt-5"></p>
            </div>
            <div>
              <IoIosAddCircleOutline className="w-8 h-8 text-[#98A2B3]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqItems;
