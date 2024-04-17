import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

const FaqItems = ({content}) => {
  return (
    <>
        <div className='mt-5'>
            <div className='flex justify-around w-full  pt-5'>
                <div>
                <p className='text-2xl text-center font-extrabold w-80'>{content}</p>
                <p className='text-[#475467] text-center mt-5'></p>
                </div>
                <div>
                <IoIosAddCircleOutline className='w-8 h-8'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default FaqItems