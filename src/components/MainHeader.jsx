import {Link} from 'react-router-dom'
//import VideoBg from '../../public/videos/videoBg.mp4'//

const MainHeader = () => {
  return (
   <header className='main__header'>
    <div className="container main__header-container">

    <div className="myVideo">
        <video src="/assets/odinsmedicalm.mp4" autoPlay muted loop />
    </div>

      <div className="content">
        <h1>ODINS MEDICAL</h1>
        <span>
          Linking Quality To Opportunity
        </span>
        <Link to="/clDashboard" className='btn lg'>Join Us</Link>
      </div>
    </div>
   </header>
  )
}

export default MainHeader