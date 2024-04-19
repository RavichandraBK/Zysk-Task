import React from "react";

const Post = ({ img, proImg, blogName, title, description, name, date }) => {
  return (
    <>
      <div className="mt-8 flex flex-col">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p className="text-[#6941C6] text-[14px] leading-[20px] mt-5">
            {blogName}
          </p>
          <p className="text-[20px] leading-[24px] font-extrabold mt-2">
            {title} <span className="ml-16">&#x2197;</span>
          </p>
          <p className="text-[#475467] mt-5">{description}</p>
        </div>
        <div className="flex gap-3 w-full justify-start mt-5">
          <img src={proImg} alt="" />
          <div>
            <p className="text-[14px] leading-[20px] font-extrabold">{name} </p>
            <p className="text-[#475467] text-[14px] leading-[20px]">{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
