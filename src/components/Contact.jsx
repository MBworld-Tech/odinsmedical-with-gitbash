import {Link} from 'react-router-dom'

const Contact = () => {
  return (
   <section className='cont__container'>

   <section className='cont__container'>
    <div className='cont'>
      <div className='container flexSB'>
        <div className='right row'>
        <div className='box last'>
            <h3>ODINS MEDICAL LTD </h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                <div className="addList">
                <p>216 Wingrove Avenue </p>
                <p>Newcastle upon Tyne </p>
                <p>NE4 9AA </p>
                </div>
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                07498275905 
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                Admin@odinsmedical.com 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </section>

   <div className="btn__card">
          <button>
          <Link to="/contact" className='lnk'>SPEAK WITH AN EXPERT</Link>
          </button>
    </div>

   </section>
  )
}

export default Contact