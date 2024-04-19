import React from "react";
import { FiMinusCircle } from "react-icons/fi";
import FaqItems from "./FaqItems";
import Card from "./Card";
const Faqs = () => {
  return (
    <>
      {" "}
      <div className="mt-10 pt-10">
        <p className="text-[30px] leading-[38px] text-center font-extrabold">
          Frequently asked questions
        </p>
        <p className="text-[#475467] text-center mt-5 text-[18px] leading-[28px] ">
          Everything you need to know about the product and billing.
        </p>

        <div className=" mt-5">
          <div className="flex justify-center">
            <div className="flex justify-around border-b  pt-5">
              <div>
                <p className="text-[18px] leading-[28px]  font-extrabold w-80  sm:w-[765px]">
                  Is there a free trial available?
                </p>
                <p className="text-[#475467] text-[16px] leading-[24px]  mt-5 w-80">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
              <div>
                <FiMinusCircle className="w-8 h-8 text-[#98A2B3]" />
              </div>
            </div>
          </div>
          <FaqItems content={"Can I change my plan later?"} />
          <FaqItems content={"What is your cancellation policy?"} />
          <FaqItems content={"Can other info be added to an invoice?"} />
          <FaqItems content={"How does billing work?"} />
          <FaqItems content={"How do I change my account email?"} />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Faqs;
