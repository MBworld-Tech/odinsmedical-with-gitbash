import {Link} from 'react-router-dom'
import Logo from '../images/logo.jpg'
import {FaWhatsapp} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <>

    <footer>
        <div className="container footer__container">

            <section>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="footer Logo" />
                </Link>
                <p>
                  The agency that takes pride in matching each vacant position with the best possible staff!  <span className='TtT'> #Matchingcare </span>
                </p>
                <div className="footer__socials">
                    <a href="https://wa.me/+447309024038" target='_blank' rel='noreferrer noopener'> <FaWhatsapp/> </a>
                    <a href="https://web.facebook.com/profile.php?id=100007948422343" target='_blank' rel='noreferrer noopener'> <FaFacebookF/> </a>
                    <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'> <AiOutlineTwitter/> </a>
                </div>
            </section>

            <section className='ulink'>
                <h4>Useful Links</h4>
                <Link to="/" className='lnk'>Home</Link>
                <Link to="/client" className='lnk'>Client</Link>
                <Link to="/Candidate" className='lnk'>Candidate</Link>
                <Link to="/blog" className='lnk'>Blog</Link>
                <Link to="/contact" className='lnk'>Contact</Link>
                <Link to="/reviews" className='lnk'>Terms & Condition</Link>
            </section>

        </div>
        <div className="footer__copyright">
            <small>2023 Odins Medical &copy; All Rights Reserved</small>
        </div>
    </footer>

    </>
  )
}

export default Footer