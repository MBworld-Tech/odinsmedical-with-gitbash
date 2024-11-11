import React, {useState, useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import About from '../../components/About'
import Contact from '../../components/Contact'
/*import TrustedBy from '../../components/TrustedBy'*/
/*import Hblog from './Hblog'*/
/*import Testimonials from '../../components/Testimonials'*/
/*import FAQs from '../../components/FAQs'*/


import './home.css'





const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 8000)
  }, [])


  return (
    <>
    <div className="loader">
      { loading ? ( <ClimbingBoxLoader color={"#ee2626"} loading={loading} size={30} aria-label="Loading Spinner" data-testid="loader" />
        ) : (
          <div>
          <MainHeader/>
          <Programs/>
          <About/>
          <Contact/>
          {/*<TrustedBy/>*/}
          {/*<Hblog/>*/}
          {/*<Testimonials/>*/}
          {/*<FAQs/>*/}
          </div>
        )
      }
    </div>
    </>

  )
}

export default Home