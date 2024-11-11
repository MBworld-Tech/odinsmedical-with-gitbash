import {Link} from 'react-router-dom'
import './card.css'

const Cards = ({title, body}) => {
  return (
    <>
    <div className='card__container'>
      
      <div className="card__content">
          <div className="card__title">
              <h3>{title}</h3>
            </div>
            <div className="card__body">
              <p>{body}</p>
            </div>
      </div>

        <div className="bttn__card">
          <button>
          <Link to="/candidate" className='lnk'>More info </Link>
          </button>
        </div>
   </div>
   </>

  )

}

export default Cards