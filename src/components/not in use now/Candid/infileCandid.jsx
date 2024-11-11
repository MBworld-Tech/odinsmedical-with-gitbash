import SectionHead from '../../components/SectionHead'
import {candid} from '../../data'
import Candid from '../../components/not in use now/Candid/Candid'
import Image from '../../images/nod7.jpg'

const infileCandid = () => {
  return (
    
    <section className="candida">
        <div className="container candidate__container">

            <div className="candidate__wrapper">
              <div>
                <SectionHead title="Our Process"/>
                <p>
                Our robust and efficient on-boarding process for new candidates enables us to rapidly deploy well-vetted and well-qualified staff to our customers.
                </p>
              </div>
                {
                    candid.map(({id, question, answer}) => {
                        return <Candid key={id} question={question} answer={answer}/>
                    })
                }
            </div>

            <div className="our__pr-image">
                <img src={Image} alt="Our Process"/>
            </div>

        </div>
     </section>
  )
}

export default infileCandid