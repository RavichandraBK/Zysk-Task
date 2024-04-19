import React from "react";
import chatbox from "../assets/chatBox.png";
import deliver from "../assets/deliverans.png";
import teamreport from "../assets/teamreports.png";
import comd from "../assets/comdlogo.png";
import heartchat from "../assets/msgheart.png";
import connect from "../assets/connectcust.png";
import Sisphus from "./Sisphus";
import CuttingEdge from "./CuttingEdge";

const Features = () => {
  return (
    <>
      <div className="mt-10 pt-10">
        <div className="sm:flex sm:flex-col sm:items-center">
          <p className="text-[#6941C6] font-extrabold text-center text-[14px] sm:text-{16px] leading-[20px] sm:leading-[24px]">
            Features
          </p>
          <p className="text-center font-extrabold text-[30px] leading-[38px]">
            Analytics that feels like it’s from the future
          </p>
          <p className="text-center text-[#475467] text-[18px] leading-[28px] sm:w-3/6">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="mt-5 sm:flex sm:justify-around sm:flex-wrap sm:w-full">
          <div className="flex flex-col  items-center mt-10 sm:w-[400px]">
            <img src={chatbox} alt="" className="w-10" />
            <p className="text-center font-extrabold mt-5 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px]">
              Share team inboxes
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-4/6">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 sm:w-[400px]">
            <img src={deliver} alt="" className="w-10" />
            <p className="text-center font-extrabold mt-5 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px]">
              Deliver instant answers
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-4/6">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 sm:w-[400px]">
            <img src={teamreport} alt="" className="w-10" />
            <p className="text-center font-extrabold mt-5 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px]">
              Manage your team with reports
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-4/6">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 sm:w-[400px]">
            <img src={connect} alt="" className="w-10" />
            <p className="text-center font-extrabold mt-5 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px]">
              Connect with customers
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-4/6">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 sm:w-[400px]">
            <img src={comd} alt="" className="w-10" />
            <p className="text-center font-extrabold mt-5 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px]">
              Connect the tools you already use
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-4/6">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 sm:w-[400px]">
            <img src={heartchat} alt="" className="w-10" />
            <p className="text-center font-extrabold mt-5 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px]">
              Our people make the difference
            </p>
            <p className="text-[#475467] text-[16px] leading-[24px] text-center sm:w-4/6">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
        </div>
        <div className="">
          <Sisphus />
        </div>
        <div>
          <CuttingEdge />
        </div>
      </div>
    </>
  );
};

export default Features;
