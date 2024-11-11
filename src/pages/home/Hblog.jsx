import React from 'react'
import Title from '../../components/common/title/Title'
import { blog } from '../../dummydata'

/*import '../../components/blog/blog.css'*/

const Hblog = () => {
  return (
    <>
        <section className="blog">
            <div className="container">
                <Title subtitle='our blog' title='recent from blog'/>
                <div className="grid2">
                {blog.slice(0, 3).map((val) => {
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
                </div>
            </div>
        </section>
    </>
  )
}

export default Hblog