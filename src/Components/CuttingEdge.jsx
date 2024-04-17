import React from 'react'
import mobile from '../assets/mobile.png'
import chatbox from '../assets/chatBox.png';
import deliver from '../assets/deliverans.png';
import teamreport from '../assets/teamreports.png';

const CuttingEdge = () => {
  return (
    <>
        <div className='flex flex-col items-center'>
            <div className='border rounded-2xl bg-[#F9F5FF] w-28'>
                <p className='text-[#6941C6] text-center'>Features</p>
            </div>
            <p className='text-center text-4xl font-extrabold mt-5'>Cutting-edge features for advanced analytics</p>
            <p className='text-center text-lg text-[#475467] mt-2'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            <img src={mobile} className="mt-8" alt="" />
            <div>
            <div className="flex flex-col items-center mt-10">
            <img src={chatbox} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Share team inboxes</p>
            <p className="text-[#475467] text-center">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <p className='text-center text-[#6941C6] mt-5'>Learn more &#x2794;</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={deliver} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Deliver instant answers</p>
            <p className="text-[#475467] text-center">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <p className='text-center text-[#6941C6] mt-5'>Learn more &#x2794;</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src={teamreport} alt="" className="w-10"/>
            <p className="text-lg text-center font-extrabold mt-5">Manage your team with reports</p>
            <p className="text-[#475467] text-center">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            <p className='text-center text-[#6941C6] mt-5'>Learn more &#x2794;</p>
          </div>
            </div>
        </div>
    </>
  )
}

export default CuttingEdge