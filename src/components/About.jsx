import {Link} from 'react-router-dom'
import Image from '../images/AboutH.jpg'

const About = () => {
  return ( 
    <section className='about__header'>
    <div className="container main__about-container">
        <div className="about__left-content">
            <h2>WHO WE ARE </h2>
            <p>
            <span className='TtT'>Odins Medical</span> is a fast-growing provider of temporary and permanent Nursing staff solution to both public and private healthcare organizations. Our esteemed team are made up of healthcare professionals that have firsthand experience of temporary and permanent Nursing placements across UK healthcare organizations. Hence, we take pride in delivering services which are tailored to candidate and client needs. 
            </p>
            <Link to="/About" className='btn lg'>More info </Link>
        </div>
    </div>

        <div className="main__about-image">
            <img src={Image} alt="Main About"/>
        </div>

   </section>
  )
}

export default About