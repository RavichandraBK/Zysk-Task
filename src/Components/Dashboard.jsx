import React from "react";
import Navbar from "./Navbar";
import Tab from "./Tab";
import Features from "./Features";
import Faqs from "./Faqs";
import BlogPosts from "./BlogPosts";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="divide-y px-3 sm:px-0">
          <Tab />
          <Features />
          <Faqs />
          <BlogPosts />
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
