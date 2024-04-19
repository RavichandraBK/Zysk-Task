import React from "react";
import people from "../assets/peopleGrp.png";

const Card = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="h-[300px] w-11/12 flex flex-col justify-around items-center rounded-2xl bg-[#F9FAFB]">
          <img src={people} alt="" />
          <p className="text-[20px] leading-[30px] font-extrabold">
            Still have questions?
          </p>
          <p className="text-[#475467] text-[16px] leading-[24px] text-left w-72">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="rounded-xl bg-[#7F56D9] text-center text-white w-48 h-16">
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
