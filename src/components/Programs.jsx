import Card from '../UI/Card'
import Cards from '../UI/Cards'
import Cimage from '../images/candidh.jpg'
import Climage from '../images/clienth.jpg'

const Programs = () => {

  return (
    <>

    <>

    <section className='section__wrapper'>

    <div className='programs'>
        <div className="programs__wrapper">
            <Card
            title='JOIN US '
            body= "Register with us now to benefit from our competitive pay rates, confidence-boosting training and support and seamless operations driven by tech."
            />
        </div>
    </div>

    <div className="img__wrapper">
      <img src={Cimage} alt="candidate bg" />
    </div>

    </section>

    </>

    <>
    <section className='section__vwrapper'>

    <div className='programs'>
        <div className="programs__vwrapper">
            <Cards
            title='Quality Staffing Solution Just a click away... '
            body=' Odins Medical don’t just provide your staffing solutions 247, we take pride in the level of quality care our candidate brings to your healthcare facility.'
            />
        </div>
    </div>

    <div className="img__vwrapper">
      <img src={Climage} alt="client bg" />
    </div>

    </section>

    </>

    </>
    
  )
}

export default Programs