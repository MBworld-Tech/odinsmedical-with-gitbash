import Header from "../../components/Header"
import PreLoader from "../../components/PreLoader"
import HeaderImage from '../../images/About1.jpg'
import StoryImage from '../../images/About2.jpg'
import VisionImage from '../../images/AboutS.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <PreLoader />
    <Header title="ABOUT ODINS MEDICAL" image={HeaderImage}>
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>
        <div className="about__section-content">
          <h2>WHO WE ARE</h2>
          <p>
             Odins Medical is a fast-growing provider of temporary and permanent Nursing staff solution to both public and private healthcare organizations. Our esteemed team are made up of healthcare professionals that have firsthand experience of temporary and permanent Nursing placements across UK healthcare organizations. Hence, we take pride in delivering services which are tailored to candidate and client needs. 
          </p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__vsection-content">
          <h2>OUR MISSION & VISION </h2>
          <p>
            To significantly improve the well-being and outcome of healthcare service users by linking well-orientated and qualified professionals to suitable clients’ vacancies.  
          </p>
          <p>
            We believe the biggest challenge in temporary staffing placement is the ever-changing nature of the work environment. At Odins Medical, we bring unique approach to temporary staff placement process to significantly reduce this one-big challenge.  
          </p>
          <p>
             At Odins medical is where quality meets value. Striking the balance between quality of care and value for money is what many institutions/clients aim to achieve and maintain. We developed our processes and built our culture around these key themes, so with us by your side, be sure you are headed in the right direction
          </p>
        </div>
        <div className="about__vsection-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>
      </div>
    </section>
    </>
  )
}

export default About