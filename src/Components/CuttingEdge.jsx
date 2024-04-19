import React from "react";
import mobile from "../assets/mobile.png";
import chatbox from "../assets/chatBox.png";
import deliver from "../assets/deliverans.png";
import teamreport from "../assets/teamreports.png";
import mobilewithtab from "../assets/mobwithtab.png";

const CuttingEdge = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-28">
        <div className="border rounded-2xl bg-[#F9F5FF] w-28">
          <p className="text-[#6941C6] text-center text-[14px] leading-[20px]">
            Features
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-[30px] sm:text-[36px] leading-[38px] sm:leading-[44px] font-extrabold mt-5">
            Cutting-edge features for advanced analytics
          </p>
          <p className="text-center text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] text-[#475467] mt-2 sm:w-4/6">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <img src={mobile} className="mt-8 h-96 w-96 sm:hidden" alt="" />
          <img
            src={mobilewithtab}
            className="mt-8  w-[1200px] hidden sm:block"
            alt=""
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="flex flex-col items-center mt-10">
            <img src={chatbox} alt="" className="w-10" />
            <p className="text-[18px] leading-[28px] text-center font-extrabold mt-5">
              Share team inboxes
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-3/6">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
            <p className="text-center text-[#6941C6] text-[16px] leading-[24px] mt-5">
              Learn more &#x2794;
            </p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={deliver} alt="" className="w-10" />
            <p className="text-[18px] leading-[28px] text-center font-extrabold mt-5">
              Deliver instant answers
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-3/6">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
            <p className="text-center text-[#6941C6] text-[16px] leading-[24px] mt-5">
              Learn more &#x2794;
            </p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={teamreport} alt="" className="w-10" />
            <p className="text-[18px] leading-[28px] text-center font-extrabold mt-5">
              Manage your team with reports
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-3/6">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
            <p className="text-center text-[#6941C6] text-[16px] leading-[24px] mt-5">
              Learn more &#x2794;
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CuttingEdge;
