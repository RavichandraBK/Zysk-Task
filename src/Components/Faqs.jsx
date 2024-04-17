import React from 'react'
import { FiMinusCircle } from "react-icons/fi";
import FaqItems from './FaqItems';
import Card from './Card';
const Faqs = () => {
  return (
    <>  
        <p className='text-4xl text-center font-extrabold'></p>
        <p className="text-[#475467] text-center mt-5"></p>
        <div className='divide-y'>
            <div className='flex justify-around w-full  pt-5'>
                <div >
                <p className='text-2xl text-center font-extrabold'>Is there a free trial available?</p>
                <p className='text-[#475467] text-left mt-5 px-5'>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                </div>
                <div>
                <FiMinusCircle className='w-8 h-8'/>
                </div>
            </div>
                <FaqItems content={'Can I change my plan later?'}/>
                <FaqItems content={'What is your cancellation policy?'}/>
                <FaqItems content={'Can other info be added to an invoice?'}/>
                <FaqItems content={'How does billing work?'}/>
                <FaqItems content={'How do I change my account email?'}/>
            <div>
                <Card/>
            </div>
        </div>
    </>
  )
}

export default Faqs