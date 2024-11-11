import Header from "../../components/Header"
import HeaderImage from '../../images/candidh.jpg'
import VisionImage from '../../images/candidate.JPG'
import BenefitImage from '../../images/benefitCa.JPG'


import './candidate.css'

const Candidate = () => {
  return (
    <>
    <Header title="LOOKING FOR GREAT FLEXI OPPORTUNITY? " image={HeaderImage}>
    </Header>

    <section className="candidate__vision">
      <div className="container candidate__vision-container">
        <div className="candidate__section-content">
          <h2>Great flexi opportunities can give significant job satisfaction, rely on Odins Medical to make it Happen!</h2>
          <p>
             Odins Medical holds our candidate's experience of high esteem, hence we pride ourselves in delivering tailored services to our temporary staff. We have nationwide spread and extensive contracts with public and private healthcare institutions, so be rest assured we have abundant shifts that suit your work/career goals
          </p>

        </div>
        <div className="candidate__section-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>
      </div>
    </section>

    <section className="benefit__cvision">
      <div className="container benefit__cvision-container">
         <div className="benefit__csection-image">
          <img src={BenefitImage} alt="Our Vision" />
         </div>
         <div className="benefit__csection-content">
         <h2>Benefits of Joining us </h2>
         <nav className="benefits">
            <ul>
              <li> Very fast and easy registration process powered by our seamless method of operation and dedicated staff.</li>
              <li>We offer our candidates a very competitive pay rate in the market. We also offer very flexible payment including same day payment. </li>
              <li>Exceptional support system from our first-hand experienced team. We have been there, so trust us to tailor our assistance/support approach to the way it suits you as an individual.  </li>
              <li>We better prepare our candidates in this frequently changing temporary work environment. Hence, we provide you with essential heads-up information/kwon-how for every new facility, so you can get it right/easy first time and every time. </li>
              <li>Our system is seamless, feel at ease and in control while you can do/find most important stuff in one place ‘O-hub’ </li>
            </ul>
         </nav>

        </div>
      </div>
    </section>



    </>
  )
}

export default Candidate