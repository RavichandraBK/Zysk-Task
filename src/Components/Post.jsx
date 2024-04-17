import React from 'react'

const Post = ({img,proImg,blogName,title,description, name,date}) => {
  return (
    <>
    <div className='mt-8 flex flex-col items-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p className='text-[#6941C6] mt-5'>{blogName}</p>
                <p className='text-xl font-extrabold mt-2'>{title} <span className='ml-20'>&#x2197;</span></p>
                <p className='text-[#475467] mt-5'>{description}</p>
            </div>
            <div className='flex gap-3 w-full justify-start mt-5'>
                <img src={proImg} alt="" />
                <div>
                    <p className='text-lg'>{name} </p>
                    <p className='text-[#475467]'>{date}</p>
                </div>
            </div>
        </div>
        </>
  )
}

export default Post