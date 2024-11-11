import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import './candidate.css'

const Candid = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <section className="candid" onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4 className="candid__body">{question}</h4>
            <button className="candid__icon">
                {
                    isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                }
            </button>
        </div>
        {isAnswerShowing && <p> {answer} </p> }
    </section>
  )
}

export default Candid