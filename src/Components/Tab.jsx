import React from 'react'
import pctab from '../assets/pctablet.png'
import mobtab from '../assets/tabletPic.png'
import boltshift from '../assets/boltShift.png'
import lightbox from '../assets/lightBox.png';
import feather from '../assets/featherPic.png';
import spherul from '../assets/spherulePic.png'
import globalbank from '../assets/globalBank.png';
import nietsche from '../assets/nietzschePic.png';


const Tab = () => {
  return (
    <>
        <div>
            <div className='flex flex-col items-center '>
                
                <div className='border-2 border-[#E9D7FE] rounded-2xl flex bg-[#F9F5FF]  w-5/6 justify-around items-center h-8'>
                    <div className='border-2 border-[#E9D7FE] bg-white rounded-2xl w-24 flex items-center justify-center h-5 px-1'>
                        <p className='text-center text-[#6941C6] text-sm'>New feature</p>
                    </div>
                    <p className='text-center text-[#6941C6] text-sm'>Check out the team dashboard &#x2794;</p>
                </div>
                <p className='text-center text-4xl sm:text-6xl font-bold leading-[1.5] sm:leading-[2] mt-5'>Beautiful analytics to grow smarter</p>
                <p className='text-center text-[#475467] text-md w-11/12 sm:w-5/12 mt-3'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                <div className='flex  flex-col md:flex-row gap-4 md:justify-center mt-3 md:gap-5 w-5/6'>
                    <button className='text-center w-full  h-14 bg-[#7F56D9] sm:h-10 rounded-md text-white  border md:w-20  md:order-2'>Sign up</button>
                    <button className='text-center w-full h-14 border sm:w-20  sm:h-10 md:order-1'>Demo</button>
                </div>
            
            </div>
            <div className='flex justify-center mt-10'>
                <img src={pctab} alt="" className='hidden sm:block'/>
                <img src={mobtab} alt="" className='sm:hidden'/>
            </div>
            <div>
                <p className='text-[#475467] text-center mt-16'>Join 4,000+ companies already growing</p>
                <div className='flex flex-wrap justify-around sm:flex-nowrap w-full sm:mt-10 mt-5'>
                    <img src={boltshift} alt="" className='w-[150px] mt-5 sm:w-auto sm:mt-auto'/>
                    <img src={lightbox} alt="" className='w-[150px] mt-5 sm:w-auto sm:mt-auto'/>
                    <img src={feather} alt="" className='w-[150px] mt-5 sm:w-auto sm:mt-auto'/>
                    <img src={spherul} alt="" className='w-[150px] mt-5 sm:w-auto sm:mt-auto'/>
                    <img src={globalbank} alt="" className='w-[150px] mt-5 sm:w-auto sm:mt-auto'/>
                    <img src={nietsche} alt="" className='w-[150px] mt-5 sm:w-auto sm:mt-auto'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tab