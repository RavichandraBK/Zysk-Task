import React from "react";
import Post from "./Post";
import design from "../assets/designImg.png";
import prod from "../assets/productImg.png";
import softeng from "../assets/softEng.png";
import proPic from "../assets/proPic.png";
import proPic2 from "../assets/proPic2.png";
import proPic3 from "../assets/proPic3.png";

const BlogPosts = () => {
  const array = [
    {
      title: "Product",
      ex: [
        "Overview",
        "Features",
        "Solutions",
        "Tutorials",
        "Pricing",
        "Releases",
      ],
    },
    {
      title: "Company",
      ex: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
    },
    {
      title: "Resources",
      ex: [
        "Blog",
        "Newsletter",
        "Events",
        "Help center",
        "Tutorials",
        "Support",
      ],
    },
    {
      title: "Use cases",
      ex: [
        "Startups",
        "Enterprise",
        "Government",
        "SaaS centre",
        "Marketplaces",
        "Ecommerce",
      ],
    },
    {
      title: "Social",
      ex: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribble"],
    },
    {
      title: "Legal",
      ex: ["Terms", "Privacy", "Cookies", "Licences", "Settings", "Contact"],
    },
  ];
  return (
    <>
      <div className="flex flex-col sm:flex-row mt-10 pt-5">
        <div className="flex flex-col sm:flex-row justify-evenly items-center">
          <div className="px-5">
            <div className=" sm:flex sm:justify-evenly">
              <div className="w-11/12">
                <p className="text-[#6941C6] mt-5">Our blog</p>
                <p className="text-xl font-extrabold mt-2">
                  Lastest blog posts
                </p>
                <p className="text-[#475467] mt-5">
                  Tool and strategies modern teams need to help their companies
                  grow.
                </p>
              </div>
              <div className=" hidden sm:block sm:h-10 sm:w-40">
                <button className="w-10/12 h-12 text-center text-white  rounded-lg bg-[#6941C6] mt-12">
                  View all posts
                </button>
              </div>
            </div>
            <div className="sm:flex sm:justify-between sm:w-full">
              <Post
                img={design}
                proImg={proPic}
                blogName={"Design"}
                title={"UX review presentations"}
                description={
                  "How do you create compelling presentations that wow your colleagues and impress your managers?"
                }
                name={"Olivia Rhye"}
                date={"20 Jan 2024"}
              />
              <Post
                img={prod}
                proImg={proPic2}
                blogName={"Product"}
                title={"Migrating to Linear 101"}
                description={
                  "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
                }
                name={"Phoenix Baker"}
                date={"19 Jan 2024"}
              />
              <Post
                img={softeng}
                proImg={proPic3}
                blogName={"Software Engineering"}
                title={"Building your API stack"}
                description={
                  "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
                }
                name={"Lana Steiner"}
                date={"18 Jan 2024"}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:hidden">
          <button className="w-10/12 h-12 text-center text-white  rounded-lg bg-[#6941C6] mt-12">
            View all posts
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 h-full pb-8 items-center mt-10 bg-[#F9FAFB]">
        <p className="text-[30px] leading-[38px] font-extrabold mt-5">
          Start your free trial
        </p>
        <p className="text-[#475467] text-[18px] leading-[28px]  mt-5 text-center w-64">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col w-full mt-3 items-center gap-3 sm:flex sm:flex-row sm:w-fit sm:gap-2">
          <button className="rounded-lg text-center text-white bg-[#6941C6] w-5/6 sm:w-36 h-14 sm:order-2 font-bold">
            Get started
          </button>
          <button className="rounded-lg text-center w-5/6 sm:w-36 h-14 sm:order-1 border bg-white font-bold">
            Learn more
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap gap-16 px-10 pt-10 sm:w-full sm:flex sm:justify-around sm:flex-nowrap">
        {array.map((item, index) => (
          <div>
            <p className="text-[#667085] text-[14px] leading-[50px]">
              {item.title}
            </p>
            {item.ex.map((subItem, index) => (
              <p className="font-extrabold  text-[16px] leading-[44px]">
                {subItem}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPosts;
