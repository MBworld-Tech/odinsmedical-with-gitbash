import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.jpg'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'




const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <div className='dashbd'>
        <div className="container nav__container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
              <img src={Logo} alt="Nav Logo"/>
            </Link>
            <ul className= {`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}  onClick={() => setIsNavShowing (prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                   
                }
            </ul>
            <buton className="nav__toggle-btn" onClick={() => setIsNavShowing (prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <GoThreeBars/>
                }

            <div className="menu">
            <h4>Menu</h4>
            </div>

            </buton>
        </div>
    </div>
  )
}

export default Navbar