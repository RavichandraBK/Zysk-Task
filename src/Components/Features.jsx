import React from "react";
import chatbox from '../assets/chatBox.png';
import deliver from '../assets/deliverans.png';
import teamreport from '../assets/teamreports.png';
import comd from '../assets/comdlogo.png';
import heartchat from '../assets/msgheart.png';
import connect from '../assets/connectcust.png';
import Sisphus from "./Sisphus";
import CuttingEdge from "./CuttingEdge";



const Features = () => {
  return (
    <>
      <div className="mt-10 pt-10">
        <p className="text-[#6941C6] font-extrabold text-center">Features</p>
        <p className="text-center font-extrabold"></p>
        <p className="text-center text-[#475467]"></p>
        <div className="mt-5">
          <div className="flex flex-col items-center mt-10">
            <img src={chatbox} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Share team inboxes</p>
            <p className="text-[#475467] text-center">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={deliver} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Deliver instant answers</p>
            <p className="text-[#475467] text-center">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={teamreport} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Manage your team with reports</p>
            <p className="text-[#475467] text-center">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={connect} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Connect with customers</p>
            <p className="text-[#475467] text-center">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={comd} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Connect with customers</p>
            <p className="text-[#475467] text-center">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={heartchat} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Our people make the difference</p>
            <p className="text-[#475467] text-center">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
          </div>
          
        </div>
        <div className="">
            <Sisphus/>
        </div>
        <div>
            <CuttingEdge/>
        </div>
      </div>
    </>
  );
};

export default Features;
