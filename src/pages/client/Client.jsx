import Header from "../../components/Header"
import HeaderImage from '../../images/clienth.jpg'
import VisionImage from '../../images/clientP.JPG'
import BenefitImage from '../../images/benefit.JPG'

import './client.css'



const Client = () => {
  return (
    <>
    <Header title="IN NEED OF STAFF SOLUTIONS?" image={HeaderImage}>
    </Header>

    <section className="client__vision">
      <div className="container client__vision-container">
        <div className="client__section-content">
        <h2>Quality Staffing Solution Just a click away</h2>
          <p>
            Odins Medical don’t just provide your staffing solutions 24/7, we take pride in the level of quality care our candidate brings to your healthcare facility. We work very closely with our client's facility to understand their unique staffing need and expectation to consistently supply well orientated quality staff, who are very professional and confident to deliver best practice care at the first time and always.
          </p>
          <p>
          Our team is made up of healthcare professionals who have had years of first-hand experience in temporary and permanent staffing solutions in private and public healthcare in the UK. Be rest assured that our services are tailor-made, so trust us to provide you with painstakingly selected best quality staff tailored to the need of your facility.  
          </p>

        </div>
        <div className="client__section-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>
      </div>
    </section>

    <section className="benefit__vision">
      <div className="container benefit__vision-container">
         <div className="benefit__section-image">
          <img src={BenefitImage} alt="Our Vision" />
         </div>
         <div className="benefit__section-content">
         <h2>Benefits of Contracting Us</h2>
         <nav className="benefits">
            <ul>
              <li>We don’t just link you to high quality staff, we bridge the gap between permanent and temporary staff ‘orientation’ through our unique deployment approach. </li>
              <li>Our rates are significantly cost-effective and very competitive in the market.</li>
              <li>Our system is seamless and efficient; hence you can put your request, track and manage it via our O-Hub.</li>
            </ul>
         </nav>

        </div>
      </div>
    </section>

    </>
  )
}

export default Client