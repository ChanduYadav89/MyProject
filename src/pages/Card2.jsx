import { Link } from 'react-router-dom'
import './card.css'
const Card2 = ({ title, id, url }) => {
  return (
    <div className="col">
      <div className="card  ">
        <div className="box-container">
          <div className="box-item">
            <div className="flip-box">
              <div className="flip-box-front text-center"
                style={{ backgroundImage: `url(${url})` }}>
                <div className="inner color-white">
                  <h3 className="flip-box-header">{title}</h3>
                  <p>A short sentence describing this callout is.</p>
                </div>
              </div>
              <div className="flip-box-back text-center" style={{ backgroundImage: "url('../../public/assets/logo.jpeg')" }}>
                <div className="inner color-white">
                  <Link to={`/view/${id}`}>
                    <button className="flip-box-button">Details..</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card2
