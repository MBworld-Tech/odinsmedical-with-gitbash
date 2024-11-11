import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import './faqs.css'


const FAQ = ({question, answer}) => {
     const [isAnswerShowing, setIsAnswerShowing] = useState(false);


  return (
    <section className="faqs" onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4 className="faqs__body">{question}</h4>
            <button className="faq__icon">
                {
                    isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
        </div>
        {isAnswerShowing && <p> {answer} </p> }
    </section>
  )
}

export default FAQ