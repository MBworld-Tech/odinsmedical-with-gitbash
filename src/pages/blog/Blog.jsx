import React from 'react'
import Header from "../../components/Header"
import BlogCard from './BlogCard'
import HeaderImage from '../../images/blogH.JPG'


import './blog.css'

const Blog = () => {
  return (
    <>
    <Header title="WHAT’S TRENDING..., NEWS, UPDATES, JOBS!" image={HeaderImage}>
    </Header>

       <section className="blog padding">
        <div className="container grid2">
        <BlogCard/>
        </div>
       </section>
    </>
  )
}

export default Blog