import React from 'react'
import { blog } from '../../dummydata'

import './blog.css'

const BlogCard = () => {
  return (
    <>
        {blog.map((val) => {
            return (
                <div className="items shadow">
                    <div className="img">
                        <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                        <div className="admin flexSB">
                            <span>
                                <i className="fa fa-user"></i>
                                <label htmlFor="">{val.type}</label>
                            </span>
                            <span>
                                <i className="fa fa-calender-alt"></i>
                                <label htmlFor="">{val.date}</label>
                            </span>
                            <span>
                                <i className="fa fa-comments"></i>
                                <label htmlFor="">{val.com}</label>
                            </span>
                        </div>
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default BlogCard