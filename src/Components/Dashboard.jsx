import React from 'react'
import Navbar from './Navbar'
import Tab from './Tab'
import Features from './Features'
import Faqs from './Faqs'
import BlogPosts from './BlogPosts'

const Dashboard = () => {
  return (
    <>
    <div className='divide-y'>

        <Navbar/>
        <Tab/>
        <Features/>
        <Faqs/>
        <BlogPosts/>
    </div>
    </>
  )
}

export default Dashboard