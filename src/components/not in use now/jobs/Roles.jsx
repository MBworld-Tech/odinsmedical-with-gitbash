import Header from "../../Header"
import HeaderImage from '../../../images/nod6.jpg'

import {FaPoundSign} from 'react-icons/fa'
import {FaClock} from 'react-icons/fa'
import {FaBriefcase} from 'react-icons/fa'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'

import JobImage1 from '../../../images/icon-1.png'
import JobImage2 from '../../../images/icon-2.png'
import JobImage3 from '../../../images/icon-3.jpg'

import './roles.css'

const Roles = () => {
  return (
    <>

    <Header title="All Roles" image={HeaderImage}>
     Join us and you’ll support some of the leading providers in the sector.
    </Header>

        <section className="jobs__container">

        <div className="jobs__wrapper">


        <div className="box__container">

        <div className="box">
          <div className="company">
            <img src={JobImage1} alt="" />
            <div>
              <h3>IT infosys co.</h3>
              <p>2 days ago</p>
            </div>
          </div>
            <h3 className="job__title">Registered Nurse</h3>
            <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
            <div className="tags">
              <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
              <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>part-time</i></p>
              <p><i className="fas fa-clock"><FaClock/> <span></span>day shift</i></p>
                <div className="flex__btn">
                  <a href="view__job.html" className="bttn">view details</a>
                  <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
                </div>
            </div>
            </div>

        </div>


        <div className="box__container">

        <div className="box">
        <div className="company">
          <img src={JobImage2} alt="" />
          <div>
            <h3>hk medicals</h3>
            <p>2 days ago</p>
          </div>
        </div>
          <h3 className="job__title">healthcare assistant</h3>
          <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
          <div className="tags">
            <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
            <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>temporay</i></p>
            <p><i className="fas fa-clock"><FaClock/> <span></span>night shift</i></p>
              <div className="flex__btn">
                <a href="view__job.html" className="bttn">view details</a>
                <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
              </div>
          </div>
          </div>

        </div>

        <div className="box__container">

        <div className="box">
        <div className="company">
          <img src={JobImage3} alt="" />
          <div>
            <h3>IT infosys co.</h3>
            <p>2 days ago</p>
          </div>
        </div>
          <h3 className="job__title">Registered Nurse</h3>
          <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
          <div className="tags">
            <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
            <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>part-time</i></p>
            <p><i className="fas fa-clock"><FaClock/> <span></span>fixed shift</i></p>
              <div className="flex__btn">
                <a href="view__job.html" className="bttn">view details</a>
                <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
              </div>
          </div>
          </div>

        </div>

        <div className="box__container">

        <div className="box">     
        <div className="company">
          <img src={JobImage1} alt="" />
          <div>
            <h3>IT infosys co.</h3>
            <p>2 days ago</p>
          </div>
        </div>
          <h3 className="job__title">Registered Nurse</h3>
          <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
          <div className="tags">
            <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
            <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>part-time</i></p>
            <p><i className="fas fa-clock"><FaClock/> <span></span>day shift</i></p>
              <div className="flex__btn">
                <a href="view__job.html" className="bttn">view details</a>
                <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
              </div>
          </div>
          </div>

        </div>

        <div className="box__container">

        <div className="box">
        <div className="company">
        <img src={JobImage2} alt="" />
        <div>
          <h3>hk medicals</h3>
          <p>2 days ago</p>
        </div>
        </div>
        <h3 className="job__title">healthcare assistant</h3>
        <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
        <div className="tags">
          <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
          <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>temporay</i></p>
          <p><i className="fas fa-clock"><FaClock/> <span></span>night shift</i></p>
            <div className="flex__btn">
              <a href="view__job.html" className="bttn">view details</a>
              <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
            </div>
        </div>
        </div>

        </div>

        <div className="box__container">

        <div className="box">
        <div className="company">
        <img src={JobImage3} alt="" />
        <div>
          <h3>IT infosys co.</h3>
          <p>2 days ago</p>
        </div>
        </div>
        <h3 className="job__title">Registered Nurse</h3>
        <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
        <div className="tags">
          <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
          <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>part-time</i></p>
          <p><i className="fas fa-clock"><FaClock/> <span></span>fixed shift</i></p>
            <div className="flex__btn">
              <a href="view__job.html" className="bttn">view details</a>
              <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
            </div>
        </div>
        </div>

        </div>

        
        <div className="box__container">

        <div className="box">
          <div className="company">
            <img src={JobImage1} alt="" />
            <div>
              <h3>IT infosys co.</h3>
              <p>2 days ago</p>
            </div>
          </div>
            <h3 className="job__title">Registered Nurse</h3>
            <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
            <div className="tags">
              <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
              <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>part-time</i></p>
              <p><i className="fas fa-clock"><FaClock/> <span></span>day shift</i></p>
                <div className="flex__btn">
                  <a href="view__job.html" className="bttn">view details</a>
                  <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
                </div>
            </div>
            </div>

        </div>


        <div className="box__container">

        <div className="box">
        <div className="company">
          <img src={JobImage2} alt="" />
          <div>
            <h3>hk medicals</h3>
            <p>2 days ago</p>
          </div>
        </div>
          <h3 className="job__title">healthcare assistant</h3>
          <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
          <div className="tags">
            <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
            <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>temporay</i></p>
            <p><i className="fas fa-clock"><FaClock/> <span></span>night shift</i></p>
              <div className="flex__btn">
                <a href="view__job.html" className="bttn">view details</a>
                <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
              </div>
          </div>
          </div>

        </div>

        <div className="box__container">

        <div className="box">
        <div className="company">
          <img src={JobImage3} alt="" />
          <div>
            <h3>IT infosys co.</h3>
            <p>2 days ago</p>
          </div>
        </div>
          <h3 className="job__title">Registered Nurse</h3>
          <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
          <div className="tags">
            <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
            <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>part-time</i></p>
            <p><i className="fas fa-clock"><FaClock/> <span></span>fixed shift</i></p>
              <div className="flex__btn">
                <a href="view__job.html" className="bttn">view details</a>
                <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
              </div>
          </div>
          </div>

        </div>

        <div className="box__container">

        <div className="box">     
        <div className="company">
          <img src={JobImage1} alt="" />
          <div>
            <h3>IT infosys co.</h3>
            <p>2 days ago</p>
          </div>
        </div>
          <h3 className="job__title">Registered Nurse</h3>
          <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
          <div className="tags">
            <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
            <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>part-time</i></p>
            <p><i className="fas fa-clock"><FaClock/> <span></span>day shift</i></p>
              <div className="flex__btn">
                <a href="view__job.html" className="bttn">view details</a>
                <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
              </div>
          </div>
          </div>

        </div>

        <div className="box__container">

        <div className="box">
        <div className="company">
        <img src={JobImage2} alt="" />
        <div>
          <h3>hk medicals</h3>
          <p>2 days ago</p>
        </div>
        </div>
        <h3 className="job__title">healthcare assistant</h3>
        <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
        <div className="tags">
          <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
          <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>temporay</i></p>
          <p><i className="fas fa-clock"><FaClock/> <span></span>night shift</i></p>
            <div className="flex__btn">
              <a href="view__job.html" className="bttn">view details</a>
              <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
            </div>
        </div>
        </div>

        </div>

        <div className="box__container">

        <div className="box">
        <div className="company">
        <img src={JobImage3} alt="" />
        <div>
          <h3>IT infosys co.</h3>
          <p>2 days ago</p>
        </div>
        </div>
        <h3 className="job__title">Registered Nurse</h3>
        <p className="location"><i className="fas fas__map-marker-alt"><FaMapMarkerAlt/></i><span>Newcastle, UK</span></p>
        <div className="tags">
          <p><i class="fas fa-pound-sign"><FaPoundSign/></i> <span>10k - 25k</span></p>
          <p><i className="fas fa-briefcase"><FaBriefcase/> <span></span>part-time</i></p>
          <p><i className="fas fa-clock"><FaClock/> <span></span>fixed shift</i></p>
            <div className="flex__btn">
              <a href="view__job.html" className="bttn">view details</a>
              <button type="submit" className="far fa-heart" name="save"><FaHeart/></button>
            </div>
        </div>
        </div>

        </div>



        </div>


        </section>


    </>
  )
}

export default Roles