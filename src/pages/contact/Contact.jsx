import Header from '../../components/Header'
import HeaderImage from '../../images/nod8.jpg'
import {FaWhatsapp} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

import './contact.css'




const Contact = () => {
    const map = ' https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146452.83705197487!2d-1.8216520685926283!3d55.00245771086616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d857e0c6f64cd%3A0xbe252b072a76191!2sNewcastle%20upon%20Tyne%2C%20UK!5e0!3m2!1sen!2sng!4v1688832163106!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade '
  return (
    <>
    <Header title="Get In Touch Today" image={HeaderImage}>
   </Header>

   <section className='contact padding'>
            <div className='container shadow flexSB'>
              <div className="left row">
                <iframe src={map}></iframe>
              </div>
              <div className="right row">
                <h2>We’d love to hear from you!</h2>
                <p>We are open 9am to 5pm Monday to Friday. Our telephone line is open 24/7 </p>

                <div className="items grid">
                  <div className="box">
                    <h4>ADDRESS: </h4>
                    <p>216 Wingrove Avenue Newcastle upon Tyne NE4 9AA </p>
                  </div>
                  <div className="box">
                    <h4>Email:</h4>
                    <p>Admin@odinsmedical.com </p>
                  </div>
                  <div className="box">
                    <h4>PHONE:</h4>
                    <p>07498275905 </p>
                  </div>
                </div>

                <form action="">
                  <div className="flexSB">
                    <input type="text" placeholder='name'/>
                    <input type="email" placeholder='Email'/>
                  </div>
                  <input type="email" placeholder='Subject'/>
                  <textarea cols="30" rows="10">
                    Create a message here....
                  </textarea>
                  <div className="fbutton">
                    <button className="btn lg">SEND MESSAGE</button>
                  </div>
                </form>

                <div className="footer__socials">
                <h3>Follow Us Here</h3>
                    <a href="https://wa.me/+447309024038" target='_blank' rel='noreferrer noopener'> <FaWhatsapp/> </a>
                    <a href="https://web.facebook.com/profile.php?id=100007948422343" target='_blank' rel='noreferrer noopener'> <FaFacebookF/> </a>
                    <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'> <AiOutlineTwitter/> </a>
                </div>
              </div>
            </div>

        </section>

    
    </>
  )
}

export default Contact